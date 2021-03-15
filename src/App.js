import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarAsset from './components/NavbarAsset';
import NavbarGallery from './components/NavbarGallery';
import Gallery from './components/Gallery';
// import About from './components/About';
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
      // console.log(`Offset: ${offset}`);
    }

    function incrementOffset() {
      const tempOffset = offset + 50;
      setOffset(tempOffset);
    }

    function decrementOffset() {
      const tempOffset = offset - 50;
      setOffset(tempOffset);
    }

    const routes = [
      {
        path: "/",
        exact: true,
        main: () => <Home />
      },
      {
        path: "/browse",
        exact: true,
        navbar: () => <NavbarGallery className='navbar' incrementOffset={incrementOffset} decrementOffset={decrementOffset} randomizeOffset={randomizeOffset}/>,
        main: () => <Gallery data={data} />
      },
      {
        path: "/assets/:id",
        exact: false,
        navbar: () => <NavbarAsset className='navbar' incrementOffset={incrementOffset} decrementOffset={decrementOffset} randomizeOffset={randomizeOffset}/>,
        main: (routerProps) => <AssetView data={data} match={routerProps.match} />
      }
    ];

  return (
    //#region [Blue]
		<>
			{/* <header>
				<Navbar className='navbar' incrementOffset={incrementOffset} decrementOffset={decrementOffset} randomizeOffset={randomizeOffset}/>
			</header> */}

			<main>
        <Router>
          <Switch>
            <Route exact path='/' component={() => <Home /> } />
            
          
          <Route exact path='/browse' component={() => <NavbarGallery className='navbar' incrementOffset={incrementOffset} decrementOffset={decrementOffset} randomizeOffset={randomizeOffset}/> } />
          </Switch> 

            <Switch>
              <Route exact path='/browse' component={() => <Gallery data={data} /> } />
           </Switch>

           <Switch>
              <Route path='/assets/:id' component={() => <NavbarAsset className='navbar' incrementOffset={incrementOffset} decrementOffset={decrementOffset} randomizeOffset={randomizeOffset}/> } />      </Switch>
              <Switch>
              <Route path='/assets/:id' component={(routerProps) => <AssetView data={data} match={routerProps.match} /> } /> </Switch>

                    {/* <Route exact path='/' component={() => <Home />} />
                    <Route exact path='/browse' component={() => <Gallery data={data} />} />      
                    <Route path='/assets/:id' component={(routerProps) => <AssetView data={data} match={routerProps.match} />} />    */}

          </Router>

			</main>

		</>
	);
}

export default App;
//#endregion


{/* <>
<header>
  <Navbar className='navbar' incrementOffset={incrementOffset} decrementOffset={decrementOffset} randomizeOffset={randomizeOffset}/>
</header>

<main>
  <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route exact path='/browse' component={() => <Gallery data={data} />} />      
          <Route path='/assets/:id' component={(routerProps) => <AssetView data={data} match={routerProps.match} />} />   
  </Switch>
</main>
</> */}