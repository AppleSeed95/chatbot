import './css/style.css'


import { UIProvider } from "../components/utils/providers";

export const metadata = {
  title: 'simple-chatgpt',
  description: 'simple-chatgpt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-inter antialiased bg-white text-gray-200 tracking-tight'>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <UIProvider>
            {children}
          </UIProvider>
        </div>
      </body>
    </html>
  )
}
