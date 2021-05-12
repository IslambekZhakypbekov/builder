import "./App.css";


import Layout from "./components/Layout/Layout";
import PieBuilder from "./components/PieBuilder/PieBuilder";
import Checkout from "./components/Checkout/Checkout";

import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={PieBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
