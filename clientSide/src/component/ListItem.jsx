import React, { useState } from "react";

export default function ListItem({ title, count, items, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-sky-600 to-cyan-400 rounded-md p-4 shadow-md w-full lg:w-[calc(33.333% - 12px)]">
      <button onClick={toggleList} className="w-full text-left focus:outline-none">
        <h2 className="pb-2 mb-4 text-2xl font-semibold border-b">{icon}{title}:</h2>
        <p className="text-xl font-bold">{count}</p>

      </button>
      {isOpen && (
        <div>
          {Array.isArray(items) ? (
            <ul className="mt-4">
              {items.map((item, index) => (
                <li key={index} className="mb-2 text-base">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="w-full p-4 items-center bg-white border rounded-lg shadow-md" >
              {items}
            </div>
          )}
        </div>
      )}


    </div>
  );
}
