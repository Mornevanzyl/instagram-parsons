import React from 'react'
import ImageGrid from './ImageGrid'
import Navbar from './Navbar'
import UploadForm from './UploadForm'

export default function Dashboard() {
  return (
    <div className="container">
      <div className="photo-container">
        <Navbar />
        <UploadForm />
        <ImageGrid />
      </div>
    </div>
  )
}
