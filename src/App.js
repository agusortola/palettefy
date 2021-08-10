import DetailedPalette from './DetailedPalette';
import Modal from './Modal';
import { useState } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PaleteProvider } from './PaletteContext';

function App() {

  

  const [showModal, setShowModal] = useState(false)
  const [color, setColor] = useState('')
  const [selected, setSelected] = useState()



  return (
    <PaleteProvider>
      <Router>
        <Switch>
          <Route exact path="/" component = { Home } />
          {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} color={color} /> :
          <Route exact path="/palette/:paletteName" 
            component = {()=> <DetailedPalette color={color} 
                                setColor={setColor} 
                                setShowModal={setShowModal}
                                palette={selected}
                              />
                        } 
          />
          }
        </Switch>
      </Router>
    </PaleteProvider>
  );
}

export default App;
