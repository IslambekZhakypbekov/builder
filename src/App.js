import "./App.css";


import Layout from "./components/Layout/Layout";
import PieBuilder from "./components/PieBuilder/PieBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout";

// import background from "./images/background.jpg"



import { Redirect, Route, Switch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react"
import { restore } from "./store/actions/auth";
const App = () => {
  const disptach = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => {
    disptach(restore());
  }, [disptach]);
  let output = (
    <Switch>
      <Route path="/" component={PieBuilder} exact />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />
    </Switch>
  )
  if (isAuthenticated) {
    output = (
      <Switch>
        <Route path="/" component={PieBuilder} exact />
        <Route path="/orders" component={Orders} />
        <Route path="/chekout" component={Checkout} />

        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    )

  }


  return (
    <div className="App">
      <div className="background" ></div>
      <Layout>
        {output}
      </Layout>
    </div>
  );
}

export default App;
