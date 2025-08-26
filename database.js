const sqlite3 = require('sqlite3').verbose();
const path = require('path');

class Database {
    constructor() {
        this.db = null;
        this.init();
    }

    init() {
        const dbPath = path.join(__dirname, 'database.sqlite');
        this.db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error opening database:', err.message);
            } else {
                console.log('Connected to SQLite database');
                this.createTables();
            }
        });
    }

    createTables() {
        const createUsersTable = `
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                gender TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                country TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `;

        this.db.run(createUsersTable, (err) => {
            if (err) {
                console.error('Error creating users table:', err.message);
            } else {
                console.log('Users table created successfully');
            }
        });
    }

    registerUser(userData, callback) {
        const { name, gender, email, country } = userData;
        const query = `INSERT INTO users (name, gender, email, country) VALUES (?, ?, ?, ?)`;
        
        this.db.run(query, [name, gender, email, country], function(err) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, { id: this.lastID, ...userData });
            }
        });
    }

    getAllUsers(callback) {
        const query = `SELECT * FROM users ORDER BY created_at DESC`;
        
        this.db.all(query, [], (err, rows) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, rows);
            }
        });
    }

    getUserByEmail(email, callback) {
        const query = `SELECT * FROM users WHERE email = ?`;
        
        this.db.get(query, [email], (err, row) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, row);
            }
        });
    }

    close() {
        if (this.db) {
            this.db.close((err) => {
                if (err) {
                    console.error('Error closing database:', err.message);
                } else {
                    console.log('Database connection closed');
                }
            });
        }
    }
}

module.exports = Database;