import React from "react"

function FooterPage() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
            <p className="text-sm">{new Date().getFullYear()} - © All Rights Reserved</p>
        </div>
    </footer>
  )
}
export default FooterPage