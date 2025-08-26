# MyBasicWebQoder - User Registration Form

A beautiful and functional user registration form web application with SQLite database integration, featuring minimalist design and responsive layout.

## 🌟 Features

### 📝 Registration Form
- **Name Field** - Full name validation with character restrictions
- **Gender Selection** - Radio buttons (Male, Female, Other) with minimalist icons
- **Email Validation** - Email format validation with duplicate prevention
- **Country Selection** - Dropdown with 25+ countries including flag emojis

### 🗄️ Database Integration
- **SQLite Database** - Lightweight, file-based database storage
- **User Management** - Create, store, and retrieve user data
- **Data Validation** - Server-side validation and duplicate email checking
- **Automatic Setup** - Database and tables created automatically on startup

### 🎨 Beautiful Design
- **Minimalist UI** - Clean, modern interface with glassmorphism effects
- **Font Awesome Icons** - Professional icons throughout the interface
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Hover effects, loading states, and transitions
- **Professional Typography** - Inter font family for optimal readability

### ✅ Advanced Features
- **Real-time Validation** - Form validation as you type
- **Loading States** - Visual feedback during form submission
- **Success Messages** - Beautiful confirmation modals
- **User List View** - Modal to display all registered users
- **User Counter** - Shows total number of registered users
- **Keyboard Shortcuts** - ESC to close modals, Enter navigation
- **Error Handling** - User-friendly error messages

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **SQLite3** - Lightweight SQL database
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing middleware

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with animations
- **JavaScript ES6+** - Client-side functionality
- **Font Awesome 6** - Icon library
- **Google Fonts (Inter)** - Typography

### Development Tools
- **npm** - Package management
- **Nodemon** - Development server with auto-restart

## 📁 Project Structure

```
MyBasicWebQoder/
├── package.json              # Project dependencies and scripts
├── server.js                 # Express server with API endpoints
├── database.js               # SQLite database configuration
├── database.sqlite           # SQLite database file (auto-created)
├── README.md                 # Project documentation
└── public/
    ├── index.html            # Registration form HTML
    ├── styles.css            # Beautiful CSS styling
    └── script.js             # Form validation & interaction
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YanakornS/MybasicWebQoder.git
   cd MybasicWebQoder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📊 API Endpoints

### POST /api/register
Register a new user
```json
{
  "name": "John Doe",
  "gender": "male",
  "email": "john@example.com",
  "country": "Thailand"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "gender": "male",
    "email": "john@example.com",
    "country": "Thailand"
  }
}
```

### GET /api/users
Get all registered users
```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "gender": "male",
      "email": "john@example.com",
      "country": "Thailand",
      "created_at": "2025-08-26 02:47:39"
    }
  ]
}
```

## 🎯 Form Validation

### Client-Side Validation
- **Name**: Minimum 2 characters, letters and spaces only
- **Email**: Valid email format with regex validation
- **Gender**: Required selection from radio options
- **Country**: Required selection from dropdown

### Server-Side Validation
- **Duplicate Email**: Prevents registration with existing email
- **Required Fields**: All fields must be provided
- **Data Sanitization**: Input validation and escaping

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** - Full-featured experience with hover effects
- **Tablet** - Adapted layout with touch-friendly interactions
- **Mobile** - Optimized for small screens with stacked layout

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to blue (`#667eea` to `#764ba2`)
- **Success Color**: Green (`#48bb78`)
- **Error Color**: Red (`#e53e3e`)
- **Text Colors**: Dark gray with proper contrast ratios

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600
- **Responsive Sizing**: Scales appropriately on all devices

### Animations
- **Hover Effects**: Subtle lift and color transitions
- **Loading States**: Spinning icons and opacity changes
- **Form Focus**: Border color and shadow effects
- **Modal Transitions**: Smooth fade-in/fade-out

## 🔧 Development

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Database Schema
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    gender TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    country TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ using Qoder IDE

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

**Enjoy building with MyBasicWebQoder! 🚀**