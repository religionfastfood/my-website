import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js';
import View from './components/View.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <View></View>
      <About></About>
    </div>
  );
}

export default App;
