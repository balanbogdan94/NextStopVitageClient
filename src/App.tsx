import React from "react";
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Authorization from "./pages/authorization/Authorization";
import { MainLayout } from "./layouts/MainLayout";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>

        <Route path="/mens">
          <MainLayout>
            <Mens />
          </MainLayout>
        </Route>

        <Route path="/womens">
          <Womens />
        </Route>

        <Route path="/accessories">
          <MainLayout>
            <Accessories />
          </MainLayout>
        </Route>

        <Route path="/search" component={Search}></Route>
        <Route path="/admin/login" component={Authorization} />
        <Route path="*"><div>Not found</div></Route>
      </Switch>
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
