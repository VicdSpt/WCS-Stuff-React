import React from 'react'

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-4">
        <div className='container mx-auto text-center'>
            <p className='text-base font-bold'>{new Date().getFullYear()} - © All Rights Reserved - Victor dS</p>
        </div>
    </footer>
  )
}

export default Footer
