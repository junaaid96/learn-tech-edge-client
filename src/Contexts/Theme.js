import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const ThemeContext = createContext();

const Theme = ({ children }) => {
    const [theme, setTheme] = useState("text-dark bg-light");

    const toggleTheme = () => {
        if (theme === "text-dark bg-light") {
            setTheme("text-light bg-dark");
            localStorage.removeItem("theme");
            localStorage.setItem("theme", "text-light bg-dark");
        } else {
            setTheme("text-dark bg-light");
            localStorage.removeItem("theme");
            localStorage.setItem("theme", "text-dark bg-light");
        }
        console.log(theme);
    };
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default Theme;
