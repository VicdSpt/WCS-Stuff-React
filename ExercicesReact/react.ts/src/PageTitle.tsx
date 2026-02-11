import React, { useState } from 'react'
import { useEffect } from 'react'

function PageTitle() {
    const [title, setTitle] = useState("My App")

    const handleTitle =(e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    // this will change the title of the browser tab name
    useEffect(() => {
        document.title = title
    }, [title])

  return (
    <div>
      <input type="text" value={title} onChange={handleTitle} />
      <p>{title}</p>
    </div>
  )
}

export default PageTitle
