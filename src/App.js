import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from './components/mainslider';
import Slide from './components/slide.jsx';
import Morereason from './components/morereason';
import Dealsnoon from './components/dealsonmoon';
import DealMW from './components/dealsformenwomen';
import Accessories from './components/accessories';
import Footer from './components/footer';

const App = () =>{
  return(
    <div>
      <Header />
      <UncontrolledExample/>
      <Slide/>
      <Morereason/>
      <Dealsnoon/>
      <DealMW/>
      <Accessories/>
      <Footer/>
    </div>
  )
}
export default App;
