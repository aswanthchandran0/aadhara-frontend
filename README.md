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
aadhaara/
├── .env # Environment variables
├── .gitignore # Git ignore file
├── eslint.config.js # ESLint configuration
├── index.html # Main HTML file
├── package-lock.json # Lock file
├── package.json # Project dependencies
├── postcss.config.js # PostCSS configuration
├── public/ # Public assets
│ └── vite.svg # Vite logo
├── README.md # Project documentation
├── src/ # Frontend source
│ ├── api/ # API-related code
│ │ └── upload/ # Upload API
│ │ ├── upload.api.ts # API logic
│ │ └── upload.types.ts # Type definitions
│ ├── App.tsx # Main App component
│ ├── assets/ # Static assets
│ │ ├── adhar-demo-avathar.jpg # Demo image
│ │ └── react.svg # React logo
│ ├── components/ # Reusable components
│ │ ├── animatedAadharCard/ # Aadhaar card components
│ │ │ ├── AadhaarBackCard.tsx
│ │ │ └── AadhaarFrontCard.tsx
│ │ ├── demoCard/ # Demo card
│ │ │ └── DemoAdhar.tsx
│ │ ├── ImageUploader/ # Image uploader
│ │ │ └── ImageUploader.tsx
│ │ ├── navbar/ # Navbar
│ │ │ └── Navbar.tsx
│ │ └── ui/ # UI elements
│ │ ├── buttons/ # Buttons
│ │ │ └── PrimaryButton.tsx
│ │ └── cards/ # Cards
│ │ └── FeatureCard.tsx
│ ├── index.css # Global styles
│ ├── main.tsx # React entry point
│ ├── pages/ # Pages
│ │ └── HomeScreen.tsx # Home screen
│ ├── utils/ # Utilities
│ │ └── downloadCardAsImage.ts # Download function
│ └── vite-env.d.ts # Vite types
├── tailwind.config.js # Tailwind config
├── tsconfig.app.json # TS app config
├── tsconfig.json # Global TS config
├── tsconfig.node.json # TS Node config
└── vite.config.ts # Vite config



## 🧪 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aswanthchandran0/aadhara-frontend.git
   cd aadhara-frontend
   npm install
   npm run dev