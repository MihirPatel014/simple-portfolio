import React, { useState, useEffect } from 'react';

const defaultColorPairs = [
  { name: 'Subtle Grey', colors: ['#f8fafc', '#ffffff'] },
  { name: 'Ocean Blue', colors: ['#a7c7e7', '#e0ffff'] },
  { name: 'Forest Green', colors: ['#d4edda', '#f0fff0'] },
  { name: 'Sunset Orange', colors: ['#ffe0b2', '#ffcc80'] },
];

const ColorPicker = ({ color1, color2, onColor1Change, onColor2Change }) => {
  const [customColor1, setCustomColor1] = useState(color1);
  const [customColor2, setCustomColor2] = useState(color2);

  useEffect(() => {
    const savedColor1 = localStorage.getItem('customGradientColor1');
    const savedColor2 = localStorage.getItem('customGradientColor2');
    if (savedColor1 && savedColor2) {
      onColor1Change(savedColor1);
      onColor2Change(savedColor2);
      setCustomColor1(savedColor1);
      setCustomColor2(savedColor2);
    } else {
      // Set initial colors if no saved colors are found
      onColor1Change(defaultColorPairs[0].colors[0]);
      onColor2Change(defaultColorPairs[0].colors[1]);
      setCustomColor1(defaultColorPairs[0].colors[0]);
      setCustomColor2(defaultColorPairs[0].colors[1]);
    }
  }, []); // Run only once on mount

  useEffect(() => {
    setCustomColor1(color1);
    setCustomColor2(color2);
  }, [color1, color2]);

  const handleCustomColor1Change = (e) => {
    const newColor = e.target.value;
    setCustomColor1(newColor);
    onColor1Change(newColor);
    localStorage.setItem('customGradientColor1', newColor);
  };

  const handleCustomColor2Change = (e) => {
    const newColor = e.target.value;
    setCustomColor2(newColor);
    onColor2Change(newColor);
    localStorage.setItem('customGradientColor2', newColor);
  };

  const handleDefaultColorSelect = (colors) => {
    onColor1Change(colors[0]);
    onColor2Change(colors[1]);
    localStorage.removeItem('customGradientColor1');
    localStorage.removeItem('customGradientColor2');
  };

  return (
    <div className="fixed top-4 right-4 p-4 bg-white rounded-lg shadow-lg z-50 flex flex-col space-y-2 mt-12">
      <h3 className="text-lg font-semibold text-gray-800">Default Gradients</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {defaultColorPairs.map((pair) => (
          <button
            key={pair.name}
            onClick={() => handleDefaultColorSelect(pair.colors)}
            className="px-3 py-1 rounded-md text-sm font-medium border border-gray-300 hover:border-blue-500"
            style={{
              background: `linear-gradient(to right, ${pair.colors[0]}, ${pair.colors[1]})`,
              color: '#fff',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            {pair.name}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-gray-800">Custom Colors</h3>
      <label className="text-sm font-medium text-gray-700">Color 1:</label>
      <input
        type="color"
        value={customColor1}
        onChange={handleCustomColor1Change}
        className="w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <label className="text-sm font-medium text-gray-700">Color 2:</label>
      <input
        type="color"
        value={customColor2}
        onChange={handleCustomColor2Change}
        className="w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </div>
  );
};

export default ColorPicker;