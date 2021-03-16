import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarAsset from './components/NavbarAsset';
import NavbarGallery from './components/NavbarGallery';
import NavbarCollection from './components/NavbarCollection';
import Gallery from './components/Gallery';
import Collection from './components/Collection';
// import About from './components/About';
import AssetView from './components/AssetView';
import Home from './components/Home';
import Api, { DIRECTION } from './utils/api';
import Loading from './components/Loading';

let localCollection = [];

function App() {

  const [data, setData] = useState(null);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(50);

  // localCollection is where the collection is stored 'for local use' 
  // the array is modified, collection set to the array contents, and rendered out in the Collection component
  
  // const localCollection = [];
  const [collection, setCollection] = useState([localCollection]);

  useEffect(() => {
    const api = new Api();
    setData(null);
    api.getAssets(DIRECTION.desc, offset, limit)
    .then(setData)
    .then(loadCollectionData())
    .catch(console.error)
  }, [offset, limit])

    if (!data) {
      return <Loading />
    }

    function randomizeOffset() {
      const rndOffset = Math.floor(Math.random() * 10000);
      setOffset(rndOffset);
    }

    function incrementOffset() {
      const tempOffset = offset + 50;
      setOffset(tempOffset);
    }

    function decrementOffset() {
      const tempOffset = offset - 50;
      setOffset(tempOffset);
    }

  // Collection / i.e. Favorites

    function addToCollection(asset) {
      console.log(localCollection.length);
      if (!localCollection.includes(asset)) {
          asset.inCollection = true;
          localCollection.push(asset);
          console.log(`LocalCollection: ${localCollection}`)
          setCollection(localCollection);
          writeCollectionData();
      }
      else {
        console.log('Collection already includes this asset');
      }

    }

    function clearCollection() {
      localCollection.forEach((asset) => asset.inCollection = false);
      localCollection = [];
      localCollection.length = 0;
      localStorage.clear();
      setCollection(localCollection);
    }

    function writeCollectionData() {
      // localStorage.setItem('collection', JSON.stringify({collection: {}}));
      localStorage.setItem('collection', JSON.stringify({collection: {collection}}));
    }

  function loadCollectionData() {
    // console.log('loaded')
      // clearCollection();
      const collectionString = localStorage.getItem('collection');
      if (!collectionString) {
          return null;
      }
        const collectionObj = JSON.parse(collectionString);
        if (!collectionObj) {
          return null;
      }
        collectionObj.collection.collection.forEach((asset) => {
        if (!localCollection.includes(asset))
        localCollection.push(asset);
        setCollection(localCollection);
      })
      
  }
    
  function removeFromCollection(asset) {
    if (localCollection.includes(asset)) {
      const index = localCollection.indexOf(asset);
      localCollection.splice(index, 1);
      asset.inCollection = false;
      setCollection(localCollection);
    }
  }
 

  return (
    //#region [Blue]
		<>
			<main>
        <Router>

          <Switch>
            <Route exact path='/' component={() => <Home randomizeOffset={randomizeOffset} setData={setData}/> } />
            <Route exact path='/browse' component={() => <NavbarGallery className='navbar' incrementOffset={incrementOffset} decrementOffset={decrementOffset} randomizeOffset={randomizeOffset}/> } />
          </Switch> 

          <Switch>
            <Route exact path='/browse' component={() => <Gallery data={data} /> } />
          </Switch>

          <Switch>
            <Route path='/assets/:id' component={() => <NavbarAsset className='navbar' incrementOffset={incrementOffset} decrementOffset={decrementOffset} randomizeOffset={randomizeOffset}/> } />      
          </Switch>

          <Switch>
            <Route path='/assets/:id' component={(routerProps) => <AssetView data={data} match={routerProps.match} addToCollection={addToCollection} removeFromCollection={removeFromCollection}/> } /> 
          </Switch>

          <Switch>
            <Route exact path='/collection' component={() => <NavbarCollection className='navbar' clearCollection={clearCollection}/> } />      
          </Switch>

          <Switch>
            <Route exact path='/collection' component={() => <Collection collection={localCollection} localCollection={localCollection} addToCollection={addToCollection} removeFromCollection={removeFromCollection}/> } /> 
          </Switch>

        </Router>
			</main>

		</>
	);
}

export default App;
//#endregion
