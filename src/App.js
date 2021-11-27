import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Dashboard from "./Page/Dashboard/Dashboard";
import Home from "./Page/Home/Home/Home";
import LogIn from "./Page/LogIn/LogIn";
import Register from "./Page/Register/Register";
import LuxuryWatches from "./Page/LuxuryWatches/LuxuryWatches";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./Page/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/luxuryWatches">
              <LuxuryWatches />
            </Route>

            <PrivateRoute path="/luxuryWatches/:watchId">
              <PlaceOrder />
            </PrivateRoute>

            <Route path="/ourStory"></Route>
            <Route path="/contactUs"></Route>
            <Route path="/logIn">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/*"></Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
