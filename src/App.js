
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
      <Navbar styles="light"/>
      <News page="5" />
    </>
  );
}

export default App;
