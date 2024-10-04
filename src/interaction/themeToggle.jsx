import { useState, useEffect } from "react";
import { ToggleBtn } from "../interface/buttons";
import { bifrostToggle } from "../interface/buttons";


function ThemeToggle() {
  // Initialize the state with a fallback to 'light' or based on localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme; // If theme is saved, use it
    }

    // If no saved theme, check system preference
    const systemPrefDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return systemPrefDark ? "dark" : "light"; // Use system preference if no saved theme
  });

  // Sync the DOM with the current theme when the component mounts
  useEffect(() => {
    // Apply the theme to the document based on the state
    if (theme === "dark") {
      document.documentElement.setAttribute("dark", "");
      document.documentElement.removeAttribute("light");
    } else {
      document.documentElement.setAttribute("light", "");
      document.documentElement.removeAttribute("dark");
    }

    // Save the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // This runs whenever the theme changes

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <bifrostToggle
      click={toggleTheme}
      text={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    />
  );
}

export default ThemeToggle;

// const modeToggle = document.getElementById('mode-toggle');

// modeToggle.addEventListener('click', () => {
//     const root = document.documentElement;
//     if (root.hasAttribute('dark')) {
//         root.removeAttribute('dark');
//         root.setAttribute('light', '');
//     } else {
//         root.removeAttribute('light');
//         root.setAttribute('dark', '');
//     }
// });
