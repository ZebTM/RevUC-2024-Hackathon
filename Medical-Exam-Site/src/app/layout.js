// import Navbar from '../comps/navbar'
import './globals.css'
import Link from 'next/link'
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-slate-700 text-white">
          <main>
            <nav>
              <ul className="flex space-x-4 justify-center bg-slate-800 p-2"> 
                <Link href="/"><li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline"> Home </li></Link> 
                <Link href="/login"><li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline"> Login </li></Link> 
                <Link href="/medical_form"><li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline"> Medical Form </li></Link> 
                <Link href="/form_results"><li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline"> Form Results </li></Link>   
              </ul>
            </nav>
            <div>
              {children}
            </div>
          </main>
        </body>
      </html>
    )
  }