export default function Modal({ selectedImage, setSelectedImage }) {

  function handleClick(e) {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null);
    };
  }

  return (
    <div className="backdrop" onClick={handleClick} >
      <img src={selectedImage} alt="enlarged pic" />
    </div>
  )
}
