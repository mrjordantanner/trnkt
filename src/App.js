import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import About from './components/About';
// import Card from './components/Card';
import Details from './components/Details';


function App() {

  const [data, setData] = useState(null);
	// const [asset, setAsset] = useState(null);

  const urlBase = 'https://api.opensea.io/api/v1';
  const route = '/assets';   // or bundles
  let direction = 'desc'
  let offset = 0;
  let limit = 50;
  // orderBy = 

  const url = `${urlBase}${route}?order_direction=${direction}&offset=${offset}&limit=${limit}`

    useEffect(() => {
      getData();
    }, []);

    function getData() {

      fetch(`https://api.opensea.io/api/v1/assets?order_direction=${direction}&offset=${offset}&limit=${limit}`)
        .then((res) => res.json())
        .then((res) => {
          const tempData = res.assets;
          setData(tempData);
        })
        .catch(console.error);
    }

    if (!data) {
      return(
        // TODO: Add CSS animation / spinner
        <h2>WAIT</h2>
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
                <Route exact path='/about' component={About} />
                <Route path='/assets/:id' component={(routerProps) => <Details data={data} match={routerProps.match} />} />   
        </Switch>
			</main>

		</>
	);
}

export default App;
//#endregion