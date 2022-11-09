import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import ImageItem from './components/ImageItem';
import PopUpImg from './components/PopUpImg';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="App-grid">
        <ImageItem title="2" imgUrl="2.jpg" />
        <ImageItem title="3" imgUrl="3.jpg" />
        <ImageItem title="4" imgUrl="4.jpg" />
        <ImageItem title="5" imgUrl="5.jpg" />

      </div>
      {/* <PopUpImg/> */}
    </div>
  );
}

export default App;
