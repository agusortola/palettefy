import DetailedPalette from './DetailedPalette';
import Modal from './Modal';
import { useState } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [color, setColor] = useState('')
  const [selected, setSelected] = useState()


  return (
    <Router>
      <Switch>
        <Route exact path="/" component = { Home } setSelected={setSelected}/>
        {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} color={color} /> :
        <Route exact path="/palette/:paletteName" 
          component = {()=> <DetailedPalette color={color} 
                              setColor={setColor} 
                              setShowModal={setShowModal}
                            />
                      } 
        />
        }
      </Switch>
    </Router>
  );
}

export default App;
