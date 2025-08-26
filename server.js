const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Database = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database
const db = new Database();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Registration endpoint
app.post('/api/register', (req, res) => {
    const { name, gender, email, country } = req.body;

    // Basic validation
    if (!name || !gender || !email || !country) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Please enter a valid email address'
        });
    }

    // Check if email already exists
    db.getUserByEmail(email, (err, existingUser) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Database error'
            });
        }

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered'
            });
        }

        // Register new user
        db.registerUser({ name, gender, email, country }, (err, user) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Failed to register user'
                });
            }

            res.status(201).json({
                success: true,
                message: 'User registered successfully',
                user: user
            });
        });
    });
});

// Get all users endpoint
app.get('/api/users', (req, res) => {
    db.getAllUsers((err, users) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Failed to fetch users'
            });
        }

        res.json({
            success: true,
            users: users
        });
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    db.close();
    process.exit(0);
});