import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>     
    </div>
    </Provider>
  );
}

export default App;
