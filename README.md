# VRA Land Frontend

This is the frontend application for VRA Land, built with Next.js, React, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp env.local.example .env.local
```

3. Update the environment variables in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the application for production:

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── developments/      # Developments page
│   ├── virtual-tour/      # Virtual tour page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── buttons/           # Button components
│   ├── forms/             # Form components
│   └── layout/            # Layout components
├── public/                # Static assets
└── styles/                # Global styles
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Beautiful animations with Framer Motion
- **Form Handling**: Contact forms with validation using React Hook Form and Zod
- **SEO Optimized**: Built-in Next.js SEO features
- **Performance**: Optimized with Next.js Turbopack

## API Integration

The frontend communicates with the backend API running on port 3001. Make sure the backend server is running before using contact forms or other API-dependent features.

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **TypeScript** - Type safety
