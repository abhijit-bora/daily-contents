import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
