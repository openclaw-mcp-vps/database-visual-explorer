import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Database Visual Explorer — AI-Powered Schema Insights',
  description: 'Interactive visual maps of database schemas with AI-powered insights about relationships, performance bottlenecks, and optimization suggestions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d97e0a58-df0a-4087-a8ef-96302e78533a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
