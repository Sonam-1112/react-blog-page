import './App.css';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Post from './containers/Post/Post';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Hero/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/post/:postId" component={Post}/>
          <Route></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
