import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
// import About from './components/About';

function App() {

	// const [cards, setCards] = useState([]);
  // const [stock, setStock] = useState(null);

//   stock's last sale price and whatver other details
//   const urlBase = 'https://cloud.iexapis.com/';
//   const version = 'stable/';
//   const endpointPath1 = 'stock/';
//   const endpointPath2 = '/financials';
//   const queryStringParameters = 'token='
//   const apiKey = 'pk_e38fb94536f34aa784984e2536414148';
//   const filters = '&period={}'

  // useEffect(() => {
  //   const symbol = match.params.symbol;
  //       getData(symbol);
  // }, []);

//   function getData(symb) {
//   // fetch(`${urlBase}${version}${endpointPath1}${endpointPath2}${queryStringParameters}${apiKey}`)
//       fetch(`https://cloud.iexapis.com/stable/stock/${symb}/quote?token=${apiKey}`)
//     .then((res) => res.json())
//     .then((res) => {
//       setStock(res);
//     })
//     .catch(console.error);
//   }










  return (
        <>
        <header>
            <Navbar className='navbar' />
        </header>

        <main>
            <Switch>
                <Route exact path='/' component={Gallery} />
                {/* <Route exact path='/about' component={} /> */}
                <Route exact path='/assets' ><Redirect to="/" /></Route> 
                <Route path='/assets/:id' component={(routerProps) => <Gallery data={data} match={routerProps.match} />} />   
            </Switch>
        </main>
      </>
  );
}

export default App;
