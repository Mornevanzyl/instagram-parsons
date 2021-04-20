import React, { useState } from 'react'
import ImageGrid from './ImageGrid'
import Modal from './Modal'
import Navbar from './Navbar'
import UploadForm from './UploadForm'

export default function Dashboard() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="container">
      <div className="photo-container">
        <Navbar />
        <UploadForm />
        <ImageGrid setSelectedImage={setSelectedImage} />
        { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
      </div>
    </div>
  )
}
