import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Salary Transparency Enforcer — Verify Job Post Compliance',
  description: 'Scan job postings to check salary range compliance with local laws. Flag violations and track compliance rates by company.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="71115140-b955-465f-a382-b8898cdd7afc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
