import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarAsset from './components/NavbarAsset';
import NavbarGallery from './components/NavbarGallery';
import NavbarCollection from './components/NavbarCollection';
import Gallery from './components/Gallery';
import Collection from './components/Collection';
import AssetView from './components/AssetView';
import Home from './components/Home';
import Api, { DIRECTION } from './utils/api';
import Loading from './components/Loading';

let localCollection = [];
export const api = new Api();

function App() {

  const [data, setData] = useState(null);
  const [offset, setOffset] = useState(0);
  const [collection, setCollection] = useState([localCollection]);

  useEffect(() => {
    setData(null);
    api.getAssets(DIRECTION.desc, offset, 50)
    .then(setData)
    .then(loadCollectionData())
    .catch((error) => {
      return <p>{`Error: ${error}`}</p>;
  });
  }, [offset])

  if (!data) {
    return <Loading />
  }

  function randomizeOffset() {
    const rndOffset = Math.floor(Math.random() * 10000);
    setOffset(rndOffset);
  }

// Collection 
  function addToCollection(asset) {
      localCollection.push(asset);
      setCollection(localCollection);
      writeCollectionData();
      console.log(`added: ${asset.id}`)
  }

  function clearCollection() {
      const confirmation = window.confirm('Really delete your entire Collection?'); 
      if (confirmation) {
        clearLocalCollection();
        localStorage.clear();
      }
    }
    
  function clearLocalCollection() {
    localCollection = [];
    localCollection.length = 0;
    setCollection(localCollection);
  }

  function writeCollectionData() {
    localStorage.setItem('collection', JSON.stringify({collection: {collection}}));
  }

  function loadCollectionData() {
    clearLocalCollection();

      const collectionString = localStorage.getItem('collection');
      if (!collectionString) {
          return null;
      }
        const collectionObj = JSON.parse(collectionString);
				if (!collectionObj) {
					return null;
				}
        collectionObj.collection.collection.forEach((asset) => {
        if (!localCollection.includes(asset)) {
          localCollection.push(asset);
        }
        setCollection(localCollection);
      })
  }
    
  function removeFromCollection(asset) {
    const index = localCollection.indexOf(asset);
    localCollection.splice(index, 1);
    setCollection(localCollection);
    writeCollectionData();
    console.log(`removed: ${asset.id}`)
  }

  return (
    //#region [Blue]

      <>
			<main>
        <Router>

          <Switch>
            <Route exact path='/' component={() => <Home randomizeOffset={randomizeOffset} setData={setData}/> } />
            <Route path='/explore' component={() => <NavbarGallery className='navbar' randomizeOffset={randomizeOffset}/> } />
            <Route path='/asset' component={() => <NavbarAsset className='navbar' randomizeOffset={randomizeOffset}/> } />   
            <Route exact path='/collection' component={() => <NavbarCollection className='navbar' clearCollection={clearCollection}/> } />  
          </Switch> 

          <Switch>
            <Route path='/explore' component={() => <Gallery data={data} /> } />
          </Switch>

          <Switch>
            <Route path='/asset/:contract/:token' component={(routerProps) => 
            <AssetView data={data} match={routerProps.match} addToCollection={addToCollection} removeFromCollection={removeFromCollection} localCollection={localCollection} /> } /> 
           </Switch>

           <Switch>
             <Route exact path='/collection' component={() => 
             <Collection collection={localCollection} addToCollection={addToCollection} removeFromCollection={removeFromCollection} loadCollectionData={loadCollectionData} /> } /> 
          </Switch>

        </Router>
			</main>

		</>

	);
}

export default App;
//#endregion
