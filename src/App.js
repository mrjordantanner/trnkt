import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import About from './components/About';
import AssetView from './components/AssetView';
import Home from './components/Home';
import Api, { DIRECTION } from './utils/api';


function App() {

  const [data, setData] = useState(null);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    const api = new Api();
    api.getAssets(DIRECTION.desc, offset, limit)
    .then(setData)
    .catch(console.error)
  }, [offset, limit])

    if (!data) {
      return(
        // TODO: Add CSS animation / spinner
        <h2>LOADING ASSETS</h2>
      )
    }

    function randomizeOffset() {
      const rndOffset = Math.floor(Math.random() * 10000);
      setOffset(rndOffset);
      console.log(`Offset: ${offset}`);
    }

    function incrementOffset() {
      const tempOffset = offset + 50;
      setOffset(tempOffset);
    }

    function decrementOffset() {
      const tempOffset = offset - 50;
      setOffset(tempOffset);
    }

  return (
    //#region [Blue]
		<>
			<header>
				<Navbar className='navbar' incrementOffset={incrementOffset} decrementOffset={decrementOffset} randomizeOffset={randomizeOffset}/>
			</header>

			<main>
        <Switch>
                <Route exact path='/' component={() => <Home />} />
                <Route exact path='/browse' component={() => <Gallery data={data} />} />      
                {/* <Route exact path='/about' component={About} /> */}
                <Route path='/assets/:id' component={(routerProps) => <AssetView data={data} match={routerProps.match} />} />   
        </Switch>
			</main>

			<footer>
				{/* <Navbar incrementOffset={incrementOffset} decrementOffset={decrementOffset} /> */}
          
			</footer>

		</>
	);
}

export default App;
//#endregion
