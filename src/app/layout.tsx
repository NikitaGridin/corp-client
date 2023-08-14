import styles from "@/app/globals.module.css"
import Header from "@/components/elements/header/header"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/lib/AntdRegistry"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body className={styles.body}>
                <Header />
                <main className={styles.wrapper}>
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </main>
            </body>
        </html>
    )
}
