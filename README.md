# Aadhara

Aadhara is a full-stack application that extracts structured details from Aadhaar card images using OCR and AI-based text processing. It enables users to upload front and back images of their Aadhaar card and returns key-value data like Name, Date of Birth, Gender, Aadhaar Number, and Address.

---

## 🚀 Features

- Upload Aadhaar front and back images
- Pre-process images using Sharp and OpenCV
- Extract raw text using Tesseract.js (OCR)
- Use AI to convert raw text to structured key-value data
- Deletes temporary image files after processing
- User-friendly frontend built with React + Vite

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- TypeScript
- Tailwind CSS
- Vite

**Backend**
- Node.js
- Express
- Tesseract.js
- Sharp
- OpenCV
- fs-extra

**Other Tools**
- Git & GitHub
- Postman (for API testing)

---

## 📁 Project Structure

```plaintext
aadhaara/
├── .env                           # Environment variables (for API keys, etc.)
├── .gitignore                     # Git ignore file
├── eslint.config.js                # ESLint configuration
├── index.html                      # Main HTML file for the frontend
├── package-lock.json               # Locks versions of dependencies
├── package.json                    # Project dependencies and scripts
├── postcss.config.js               # PostCSS configuration for Tailwind CSS
├── public/                         # Public assets and files
│   └── vite.svg                    # Vite logo
├── README.md                       # Project documentation
├── src/                            # Frontend source code
│   ├── api/                        # API-related code
│   │   └── upload/                 # Upload API services and types
│   │       ├── upload.api.ts       # API logic for uploading images
│   │       └── upload.types.ts     # Type definitions for upload
│   ├── App.tsx                     # Main App component
│   ├── assets/                     # Static assets (images, etc.)
│   │   ├── adhar-demo-avathar.jpg  # Aadhaar demo avatar image
│   │   └── react.svg               # React logo
│   ├── components/                 # Reusable components
│   │   ├── animatedAadharCard/     # Animated Aadhaar card components
│   │   │   ├── AadhaarBackCard.tsx # Aadhaar back card component
│   │   │   └── AadhaarFrontCard.tsx # Aadhaar front card component
│   │   ├── demoCard/               # Demo Aadhaar card component
│   │   │   └── DemoAdhar.tsx       # Demo card for showing Aadhaar
│   │   ├── ImageUploader/          # Image uploader component
│   │   │   └── ImageUploader.tsx   # Upload image functionality
│   │   ├── navbar/                 # Navbar component
│   │   │   └── Navbar.tsx          # Navbar component
│   │   └── ui/                     # UI elements like buttons and cards
│   │       ├── buttons/            # Button components
│   │       │   └── PrimaryButton.tsx # Primary button component
│   │       └── cards/              # Card components
│   │           └── FeatureCard.tsx  # Feature card component
│   ├── index.css                   # Global styles
│   ├── main.tsx                    # Entry point for React app
│   ├── pages/                      # Page components
│   │   └── HomeScreen.tsx          # Home screen component
│   ├── utils/                      # Utility functions
│   │   └── downloadCardAsImage.ts  # Function to download the card as an image
│   └── vite-env.d.ts               # TypeScript types for Vite
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.app.json              # TypeScript configuration for the app
├── tsconfig.json                  # Global TypeScript configuration
├── tsconfig.node.json             # TypeScript configuration for Node.js
└── vite.config.ts                 # Vite configuration for bundling


🧪 Getting Started
1. Clone the repository

git clone https://github.com/aswanthchandran0/aadhara-frontend.git
cd aadhara
npm install
npm run dev