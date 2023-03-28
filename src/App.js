import './styles/App.css';
import image from './assets/home.png'
import { ContactCapture } from './components/ContactCapture';
import {  NavBar } from './components/NavBAr';


function App() {
  return (
    <div className="App">
      <div className='Heather'>
        <NavBar/>
      </div>
      <div className='content-page'>
        <div className='product-content'>
          <img src={image} alt="product" className='product'/>
        </div> 
        <div className='contact-content'>
          <ContactCapture/>
        </div>

      </div>
    </div>
  );
}

export default App;
