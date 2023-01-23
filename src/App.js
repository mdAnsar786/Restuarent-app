import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteDish from './Component/FavoriteDish/FavoriteDish';
import Recommended from './Component/Recommended/Recommended';
import Menu from './Component/Menu/Menu';


function App() {
  return (
    <div className="App">
<Header/>
<FavoriteDish/>
<Recommended/>
<Menu/>
<Footer/>

    </div>
  );
}

export default App;
