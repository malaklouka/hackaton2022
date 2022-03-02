import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Equipe from './components/equipe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section><Equipe></Equipe> </section>
      <br/>
      <div className='cont'>   <section> <Contact></Contact>  </section>  </div>
  <section><Footer></Footer></section>
    </div>
  );
}

export default App;
