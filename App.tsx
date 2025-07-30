import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Links from './components/Links';
import AnimatedButton from './components/AnimatedButton';
import ColorPicker from './components/ColorPicker';

function App() {
  const [gradientColors, setGradientColors] = useState(() => {
    const savedColor1 = localStorage.getItem('customGradientColor1');
    const savedColor2 = localStorage.getItem('customGradientColor2');
    if (savedColor1 && savedColor2) {
      return { color1: savedColor1, color2: savedColor2 };
    } else {
      // Default to the first color pair if nothing is saved
      return { color1: '#f8fafc', color2: '#ffffff' };
    }
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--gradient-color-1', gradientColors.color1);
    document.documentElement.style.setProperty('--gradient-color-2', gradientColors.color2);
  }, [gradientColors]);

  useEffect(() => { // ADDED: Dark mode effect
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleColorChange = (color1, color2) => {
    setGradientColors({ color1, color2 });
  };

  const toggleDarkMode = () => { // ADDED: Toggle dark mode function
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="min-h-screen text-slate-800 dark:text-slate-200 font-sans leading-relaxed selection:bg-sky-300/20"
      style={{ background: `linear-gradient(to bottom right, var(--gradient-color-1), var(--gradient-color-2))` }}
    >
      <button
        onClick={() => setShowColorPicker(!showColorPicker)}
        className="absolute top-4 right-4 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 z-50"
      >
        {showColorPicker ? 'Hide Color Picker' : 'Show Color Picker'}
      </button>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-[10rem] px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 z-50"
      >
        Toggle Dark Mode
      </button>
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <Hero />
            </div>
            <Links />
          </header>

          <main id="content" className="pt-24 lg:w-7/12 lg:py-24">
            <div className="flex flex-col gap-16 md:gap-24">
              <Experience />
              <Projects />
              <Articles />
            </div>
            {showColorPicker && (
              <div className="absolute top-4 right-4 z-40">
                <ColorPicker
                  color1={gradientColors.color1}
                  color2={gradientColors.color2}
                  onColor1Change={(color) => setGradientColors(prevColors => ({ ...prevColors, color1: color }))}
                  onColor2Change={(color) => setGradientColors(prevColors => ({ ...prevColors, color2: color }))}
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
