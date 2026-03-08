# ☁️ Cloud Resume Challenge

A full-stack, serverless personal portfolio built and hosted entirely on AWS — showcasing cloud infrastructure, automation, and systems engineering skills.

🔗 **Live Site:** [abijitharun.dev](https://abijitharun.dev)

---

## Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│   Browser   │────▶│  CloudFront   │────▶│   S3 Bucket     │
│  (Visitor)  │     │  (CDN/HTTPS)  │     │  (Static Site)  │
└─────────────┘     └──────────────┘     └─────────────────┘
       │
       │  API Call (visitor counter)
       ▼
┌──────────────┐     ┌─────────────┐     ┌─────────────────┐
│ API Gateway  │────▶│   Lambda     │────▶│   DynamoDB      │
│  (REST API)  │     │  (Python)    │     │  (Counter DB)   │
└──────────────┘     └─────────────┘     └─────────────────┘
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion |
| Hosting | AWS S3 (static), CloudFront (CDN + HTTPS) |
| Backend | AWS Lambda (Python), API Gateway, DynamoDB |
| CI/CD | GitHub Actions |
| Icons | Lucide React |

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Run Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
# Generate static export
npm run build
```
The `out/` directory contains the static files ready for S3 upload.

## Project Structure

```
├── app/               # Next.js app router (pages, layout)
├── components/
│   ├── sections/      # Page sections (Hero, About, Skills, Projects, etc.)
│   ├── ui/            # Reusable UI components (Button, Navbar, Footer)
│   └── animations/    # Animation wrappers (FadeIn)
├── lib/               # Data and utilities (data.ts, utils.ts)
├── public/            # Static assets (images, resume PDF)
├── types/             # TypeScript interfaces
├── next.config.js     # Next.js config (static export)
└── tailwind.config.ts # Tailwind theme configuration
```

## Key Features

- ⚡ **Static Export** — Fully static HTML/CSS/JS, no server required
- 🔒 **CloudFront CDN** — HTTPS + global edge caching
- 📊 **Visitor Counter** — Serverless backend (Lambda + DynamoDB)
- 🎨 **Dark Mode** — System-aware theme switching
- 📱 **Responsive** — Mobile-first Tailwind CSS layout
- 🏅 **Certifications** — Linked to Credly/Coursera verification URLs

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
