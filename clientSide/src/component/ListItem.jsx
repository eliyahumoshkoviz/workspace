import React, { useState } from "react";



export default function ListItem({ title, count, items, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-sky-600 to-cyan-400 rounded-md p-4 shadow-md w-full lg:w-[calc(33.333% - 12px)]">
      <button onClick={toggleList} className="text-left w-full focus:outline-none">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{icon}{title}:</h2>
        <p className="text-xl font-bold">{count}</p>

      </button>
      {isOpen && (
        <ul className="mt-4">
          {items.map((item, index) => (
            <li key={index} className="text-base mb-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
