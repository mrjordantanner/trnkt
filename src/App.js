import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import About from './components/About';
import AssetView from './components/AssetView';
import Api, { DIRECTION } from './utils/api';

function App() {

  const [data, setData] = useState(null);
  const [offset, setOffset] = useState(8050);
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

  return (
    //#region [Violet]
		<>
			<header>
				<Navbar className='navbar' />
			</header>

			<main>
        <Switch>
                <Route exact path='/' component={() => <Gallery data={data} />} />
                <Route exact path='/gallery' component={() => <Gallery data={data} />} />      
                <Route exact path='/about' component={About} />
                <Route path='/assets/:id' component={(routerProps) => <AssetView data={data} match={routerProps.match} />} />   
        </Switch>
			</main>

		</>
	);
}

export default App;
//#endregion
