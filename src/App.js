import DetailedPalette from './DetailedPalette';
import Modal from './Modal';
import { useState } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';    
import Palette from './Palette';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [color, setColor] = useState('')
  const [selected, setSelected] = useState('')

  console.log('selected', selected)

  return (
    <Router>
      <Switch>
        <Route exact path="/" component = { Home } >
        </Route>
        <Route exact path="/palette/:paletteName" component = { DetailedPalette } />
      </Switch>
    </Router>
    // <>
    //   {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} color={color} /> : 
    //   <DetailedPalette color={color} setColor={setColor} setShowModal={setShowModal} />}
    // </>
    
  );
}

export default App;
