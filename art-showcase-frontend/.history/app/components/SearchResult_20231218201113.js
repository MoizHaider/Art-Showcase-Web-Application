import React from 'react'

export default function SearchResult() {
  return (
<div className="mb-4">
  <div className="mb-2">
    {/* Image area */}
    <Image src="your_image_url" alt="Image" width={100} height={100} />
  </div>
  <div className="font-bold">User Name</div>
</div>
  )
}
