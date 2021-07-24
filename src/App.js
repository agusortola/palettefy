import DetailedPalette from './DetailedPalette';
import Modal from './Modal';
import { useState } from 'react';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [color, setColor] = useState('')

  return (
    <>
      {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} color={color} /> : 
      <DetailedPalette color={color} setColor={setColor} setShowModal={setShowModal} />}
    </>
    
  );
}

export default App;
