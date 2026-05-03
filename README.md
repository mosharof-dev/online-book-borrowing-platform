# 📚 BookBorrowing - Modern Online Book Borrowing Platform

[![Live Demo](https://img.shields.io/badge/demo-live-orange.svg?style=for-the-badge)](https://online-book-borrowing-ten.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Auth-Better--Auth-blue?style=for-the-badge)](https://www.better-auth.com/)

**BookBorrowing** is a premium, high-performance digital library platform built with the latest **Next.js 15 (App Router)**. It offers a seamless experience for readers to explore, search, and manage their digital book collection with a stunning glassmorphic UI.

---

## 🚀 Live Links

- **Live Deployment:** [online-book-borrowing-ten.vercel.app](https://online-book-borrowing-ten.vercel.app/)
- **GitHub Repository:** [github.com/mosharof-dev/online-book-borrowing](https://github.com/mosharof-dev/online-book-borrowing)

---

## ✨ Key Features

- **💎 Premium Design:** Stunning dark-themed UI with glassmorphism, smooth animations, and a modern color palette.
- **🔐 Robust Authentication:** Secure login and registration powered by **Better Auth**, supporting both **Google OAuth** and traditional Email/Password.
- **📱 Fully Responsive:** Optimized for all devices—from large desktop monitors to compact mobile screens.
- **🔍 Advanced Search & Filter:** Instantly find books by title or author, and filter by categories like Tech, Science, and Story.
- **⚡ Server-Side Power:** Leverages Next.js **Server Components** for ultra-fast initial page loads and superior SEO.
- **👤 User Profile Management:** Dedicated profile dashboard to update personal information and manage borrowed books.
- **📑 Dynamic Book Details:** SEO-friendly detail pages for every book with dynamic metadata and real-time availability status.
- **📦 Optimized Data Loading:** Local JSON-based data source for high reliability and zero-latency deployment.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (Vanilla CSS)
- **UI Library:** HeroUI v3 (Headless UI)
- **Authentication:** Better Auth
- **Database:** MongoDB (Session Management)
- **Icons:** React Icons / Lucide
- **Notifications:** Sonner (Toast notifications)
- **Animations:** Framer Motion / CSS Keyframes

---

## 📥 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/mosharof-dev/online-book-borrowing.git
cd online-book-borrowing
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following:

```env
# Authentication
BETTER_AUTH_SECRET=your_secret_key_here
BETTER_AUTH_URL=http://localhost:3000

# Database
MONGODB_URL=your_mongodb_connection_string

# Social Auth (Google)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Structure

```text
src/
├── app/               # Next.js App Router (Pages & API)
├── Components/        # Reusable UI Components
│   ├── home/          # Landing page sections
│   ├── books/         # Book listing & details components
│   ├── profile/       # User dashboard components
│   └── shared/        # NavBar, Footer, etc.
├── data/              # Local book data (db.json)
├── lib/               # Shared utilities & Auth configuration
└── assets/            # Static images and illustrations
```

---

## 📸 Screen Previews

- **Home Page:** Hero section with featured picks and trending slider.
- **All Books:** Dynamic grid with real-time filtering and search.
- **Profile:** Personal dashboard with update capabilities.
- **404 Page:** Custom-designed "Not Found" experience.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

**Developed with ❤️ by [Mosharof Dev](https://github.com/mosharof-dev)**
