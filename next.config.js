/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // You must set this to true for S3 static hosting.
    // It automatically allows all domains (like unsplash), so you don't need the 'domains' array anymore.
    unoptimized: true, 
  },
  // Keep your experimental setting as it helps with performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
