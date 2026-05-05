import Navbar from '../components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Calli',
  description: 'Organize seus treinos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
