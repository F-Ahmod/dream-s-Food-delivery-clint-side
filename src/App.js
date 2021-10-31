
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login.js/Login';
import Header from './pages/Home/Header/Header';
import Banner from './pages/Home/Banner/Banner';
import Foods from './pages/Foods/Foods';
import FeedBack from './pages/FeedBack/FeedBack';
import HeplMore from './pages/HeplMore/HeplMore';
import Cards from './pages/Cards/Cards';
import Food, { FoodContext } from './pages/Food/Food';
import { useState } from 'react';
import AddCard from './pages/AddCard/AddCard';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import Service from './pages/Service/Service';
import AuthProvider from './Hooks/AuthProvaider';
import Res from './pages/Res/Res';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Privacy from './pages/Privacy/Privacy';
import MyOrder from './pages/MyOrder/MyOrder';


function App() {
  const [item, setItem] = useState();
  return (
    <div className="App">
      <AuthProvider>
      <FoodContext.Provider value={[item, setItem]}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Banner></Banner>
              <Foods></Foods>
              <Service></Service>
              <Res></Res>
              <FeedBack></FeedBack>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Banner></Banner>
              <Foods></Foods>
              <Res></Res>
              <FeedBack></FeedBack>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/helpMore">
              <HeplMore></HeplMore>
            </Route>
            <PrivateRoute path="/cards/:id">
              <Cards></Cards>
            </PrivateRoute>
            <Route path="/addCard">
              <AddCard></AddCard>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <Route path="/myOrder/:email">
              <MyOrder></MyOrder>
            </Route>


            
            <Route path="/privacy">
              <Privacy></Privacy>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </FoodContext.Provider>

      </AuthProvider>
      

    </div>
  );
}

export default App;
