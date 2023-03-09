import './globals.css'
import NavBar from "@/app/components/NavBar";

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                {/* NAVBAR */}
                <NavBar/>
                {children}
            </main>
        </main>
        </body>
        </html>
    )
}
