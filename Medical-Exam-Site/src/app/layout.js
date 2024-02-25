// import Navbar from '../comps/navbar'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import './globals.css'
import Link from 'next/link'
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <UserProvider>
        <body className="bg-slate-700 min-h-screen text-white">
          <main>
            <div className="flex p-2 w-full items-center bg-slate-800 justify-center">
              <nav>
                <ul className="flex space-x-4 h-8"> 
                  <Link href="/"><li className="mb-4 hover:underline underline-offset-4 text-left inline pr-6"> Home </li></Link> 
                  <Link href="/medical_form"><li className="mb-4 hover:underline underline-offset-4 text-left inline pl-6 pr-6"> Medical Form </li></Link> 
                  <Link href="/form_results"><li className="mb-4 hover:underline underline-offset-4 text-left inline pl-6 pr-6"> Form Results </li></Link>
                  <Link href="/profile_client"><li className="mb-4 hover:underline underline-offset-4 text-left inline pl-6 pr-6"> Login Info </li></Link>
                  <a href="/api/auth/login" className="mb-4 hover:underline underline-offset-4 text-left inline pl-6">Login</a>   
                </ul>
              </nav>
            </div>
            <div>
              {children}
            </div>
          </main>
        </body>
        </UserProvider>
      </html>
    )
  }