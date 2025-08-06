# Social Media App

A modern, responsive social media application built with React, Tailwind CSS, and React Router.

## Features

### 🔐 Authentication
- **Login Page**: Clean, modern login form with email/password authentication
- **Signup Page**: Registration form with form validation and password confirmation
- **Social Login**: Google and Facebook login buttons (UI only)

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices with responsive breakpoints
- **Modern UI**: Clean, modern interface with Tailwind CSS
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions

### 🏠 Main Feed
- **Post Creation**: Create new posts with text and media upload buttons
- **Posts Feed**: Display dummy posts with user avatars, content, and images
- **Post Interactions**: Like, comment, and share functionality
- **Infinite Scroll**: Load more posts button for pagination

### 👤 User Profile
- **Profile Header**: Cover image, avatar, bio, and user stats
- **Tabbed Content**: Posts, Media, and Likes tabs
- **Profile Stats**: Following, followers, and posts count
- **Editable Profile**: Edit profile and cover image buttons

### 🧭 Navigation
- **Sticky Header**: Fixed navigation bar with search and user actions
- **Active States**: Visual indicators for current page
- **Search Bar**: Global search functionality (desktop)
- **Mobile Navigation**: Optimized navigation for mobile devices

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing and navigation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, customizable icons
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd social-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   └── Post.jsx        # Individual post component
├── pages/              # Page components
│   ├── Login.jsx       # Login page
│   ├── Signup.jsx      # Registration page
│   ├── Feed.jsx        # Main feed page
│   └── Profile.jsx     # User profile page
├── data/               # Static data and mock data
│   └── posts.js        # Dummy posts data
├── hooks/              # Custom React hooks (future use)
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Features in Detail

### Authentication Flow
- Login with email/password validation
- Registration with form validation and password confirmation
- Redirect to feed after successful authentication
- Logout functionality from header

### Responsive Breakpoints
- **Mobile**: < 640px - Stack elements, hide search bar, show mobile menu
- **Tablet**: 640px - 1024px - Adjust layout spacing and component sizes
- **Desktop**: > 1024px - Full layout with sidebar space and larger components

### Dummy Data
The app includes realistic dummy data for posts with:
- User profiles with avatars from Unsplash
- Varied content types (text, images, mixed)
- Realistic engagement metrics (likes, comments, shares)
- Different post timestamps

## Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue color scheme for buttons and accents
- Neutral: Gray scale for text and backgrounds

### Typography
- Font: Inter (Google Fonts)
- Responsive text sizing
- Consistent font weights and line heights

## Future Enhancements

- [ ] Real authentication with JWT tokens
- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Image upload functionality
- [ ] Direct messaging
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) features
- [ ] Advanced search and filtering
- [ ] User mentions and hashtags
- [ ] Post reactions beyond likes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for learning or as a starting point for your own social media application.
