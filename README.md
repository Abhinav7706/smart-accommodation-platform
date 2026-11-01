# Wanderlust - Smart Accommodation Platform 🏡✈️

A full-stack web application designed for discovering, listing, and booking unique accommodations worldwide. Built using the MVC (Model-View-Controller) architecture with **Node.js**, **Express.js**, **MongoDB**, and **EJS**.

---

## 🌟 Key Features

- **🏠 Explore & Search Stays**: Browse listings across various travel categories (Trending, Rooms, Mountains, Castles, etc.) with real-time location and country search.
- **✨ Full Listing Management (CRUD)**: Authenticated users can list their homes, update property details, or remove their listings.
- **📸 Cloud Image Storage**: Seamless image upload handling powered by **Multer** and **Cloudinary**.
- **🗺️ Interactive Geocoding & Maps**: Pinpoints accommodation locations with interactive map previews powered by the **MapTiler SDK**.
- **⭐ Review & Rating System**: Guests can leave reviews and 1–5 star ratings using an interactive animated star rating component.
- **🔒 Authentication & Authorization**: Secure signup, login, session persistence via **Passport.js**, and strict owner-only access controls for listings and reviews.
- **💬 Flash Alerts**: Instant feedback alerts for successful actions and error handling.
- **📱 Responsive UI**: Clean, mobile-friendly interface styled with **Bootstrap 5** and custom CSS.

---

## 🛠️ Tech Stack

### Backend
- **Node.js** & **Express.js**: Core server framework & RESTful routing
- **MongoDB** & **Mongoose**: NoSQL database & object data modeling
- **Passport.js**: Authentication middleware with `passport-local` & `passport-local-mongoose`
- **Joi**: Server-side schema validation for listings and reviews
- **connect-mongo**: Session storage backed by MongoDB

### Frontend
- **EJS (Embedded JavaScript)** & **ejs-mate**: Templating engine & reusable layout boilerplate
- **Bootstrap 5**: Responsive layout & components
- **FontAwesome**: Modern iconography
- **MapTiler SDK**: Interactive vector maps & location markers
- **Starability**: Accessible CSS star ratings

### Cloud & Third-Party APIs
- **Cloudinary**: Cloud image hosting & optimization
- **MapTiler Geocoding API**: Automatic forward geocoding (coordinates from address)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended; v22 compatible)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas account)

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abhinav7706/smart-accommodation-platform.git
   cd smart-accommodation-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the following keys:
   ```env
   # Cloudinary Credentials
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret

   # MapTiler API Key
   MAP_TOKEN=your_maptiler_api_key

   # Database Connection String
   ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/wanderlust?retryWrites=true&w=majority

   # Session Secret Key
   SECRET=your_super_secret_session_key
   ```

4. **(Optional) Seed Sample Listings:**
   To populate the database with initial sample stays:
   ```bash
   node init/index.js
   ```

5. **Start the Application:**
   ```bash
   npm start
   ```
   Open your browser and navigate to **`http://localhost:8080`**.

---

## 📂 Project Structure

```text
├── controllers/       # Controller logic (listings, reviews, users)
├── models/            # Mongoose schemas (listing, review, user)
├── routes/            # Express route definitions (listings, reviews, users)
├── views/             # EJS templates (listings, users, partials, layouts)
│   ├── includes/      # Navbar, footer, flash partials
│   ├── layouts/       # Boilerplate base template
│   └── listings/      # Index, show, new, edit views
├── public/            # Static assets (custom CSS, JS, map integrations)
├── utils/             # Error handling utilities (ExpressError, wrapAsync)
├── init/              # Database initialization and sample dataset
├── cloudConfig.js     # Cloudinary and Multer storage configuration
├── middleware.js      # Custom authentication & validation middlewares
├── schema.js          # Joi schema definitions
├── app.js             # Express server entry point
└── package.json       # Dependencies and scripts
```

---

## 🌐 Deployment

This application is ready to deploy on **Render**, **Railway**, or **Heroku**:
1. Connect your GitHub repository to the hosting platform.
2. Set the build command to `npm install`.
3. Set the start command to `node app.js`.
4. Add all environment variables from `.env` into your host's environment settings.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
