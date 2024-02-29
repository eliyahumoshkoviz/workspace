import React from 'react'

function ButttonPlus({ openModal }) {
  return (
    <button onClick={openModal}
      className="focus:border-cyan-400 h-full p-2  w-10 rounded-xl border bg-gray-100"
    >
      <svg className="h-6 w-6" stroke="currentColor">
        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
  )
}

export default ButttonPlus
