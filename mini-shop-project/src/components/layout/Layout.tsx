import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Layout.css"
import { ThemeContext } from "../../context/ThemeContext";
import { useState } from "react";










export default function Layout() {

    const [theme, setTheme] = useState("light")
    const themeToogle = () => setTheme(t => t === "ligth" ? "dark" : "ligth")

    return (
        <div className="layoutClass">
            <ThemeContext value={{ theme, themeToogle }}>
                <Header />
                <main className={`layoutMain ${theme}`}>
                    <Outlet />
                </main>
                <Footer />
            </ThemeContext>
        </div>
    )
}
