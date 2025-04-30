// app/layout.js
import './globals.css'
import Navbar from '../components/Navbar'
import SkayAssistant from '../components/SkayAssistant'

export const metadata = {
  title: 'Xel-Edu',
  description: 'Futuristic educational platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <SkayAssistant />
      </body>
    </html>
  )
}
