# AI PAY-LINK™

Smart Payment Links Powered by AI

## Features

- **Landing Page**: Clean, premium design with centered headline and call-to-action buttons
- **Dashboard**: Comprehensive overview with earnings, payments, and transaction history
- **Dark Mode First**: Beautiful dark theme optimized for modern interfaces
- **Responsive Design**: Works seamlessly across all device sizes
- **shadcn/ui Components**: Professional, accessible UI components

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-paylink
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-paylink/
├── app/
│   ├── dashboard/
│   │   └── page.tsx      # Dashboard page
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   ├── nav.tsx           # Navigation component
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── table.tsx
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Pages

### Landing Page (`/`)
- Centered headline: "AI PAY-LINK™ — Smart Payment Links Powered by AI"
- Subtitle describing the service
- Two buttons: "Create Payment Link" and "View Dashboard"

### Dashboard Page (`/dashboard`)
- Three metric cards:
  - Total Earnings
  - Total Payments
  - Pending
- Transaction table with Title, Amount, and Status columns
- Mock data for demonstration

## Navigation

Top navigation bar includes:
- **AI PAY-LINK™** (logo text) - links to home
- **Dashboard** - links to dashboard
- **Create** - placeholder link

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## License

ISC
