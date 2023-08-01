
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
      <Navbar styles="light"/>
      <News page={5} country="in" category="science"/>
    </>
  );
}

export default App;
