import React from 'react'
import Image from 'next/image'

function Loading() {
  return (
    <div className="text-red-500">
      <Image className="w-full h-screen" height={100} width={100} src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*i1yv42RrOYhvw7U2MM4qCg.gif"/>
    </div>
  )
}

export default Loading