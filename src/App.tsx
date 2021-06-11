import React from "react";
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Navbar/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/Navbar/SideBar";
import SideMenuContext from "./SideMenuContext";



function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {



  return (
    <Router>
      <div className="main-container">
        <SideMenuContext>
          <Header />
          <SideBar />
        </SideMenuContext>
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mens">
              <Mens />
            </Route>
            <Route path="/womens">
              <Womens />
            </Route>
            <Route path="/accessories">
              <Accessories />
            </Route>
            <Route path="/search" component={Search}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// TODO: Remove when pages are implemented

const Mens = () => {
  return <h1>Mens</h1>;
};

const Womens = () => {
  return <h1>Womens</h1>;
};

const Accessories = () => {
  return <section>Accessories</section>;
};

type TParams = { id: string };

const Search = (text: TParams) => {
  let query = useQuery();
  let x = query.get("word");
  return (
    <div>
      <h2>Here now</h2>
      <h1>Serach word: {x}</h1>
    </div>
  );
};

export default App;
