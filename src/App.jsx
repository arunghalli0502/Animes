// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components.jsx/Home';
import Navbar from './Components.jsx/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Addanime from './Components.jsx/Addanime';
import Animesdetails from './Components.jsx/Animesdetails';
import Searchanime from './Searchanime';
// import {Card} from 'react-bootstrap/Card';
import {Button, Card} from 'react-bootstrap';
function App() {

 
 <BrowserRouter>
     <div className="App">
       <Navbar></Navbar>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
       <Route path="/addanimes">
           <Addanime></Addanime>
         </Route>
       <Route path="/animesdetails:id">
           <Animesdetails></Animesdetails>
         </Route>
       <Route path="/search:searchKey">
                   <Searchanime></Searchanime>
             </Route>
      
       </Switch>   
        
     </div>
    </BrowserRouter>
 
}

export default App;






 