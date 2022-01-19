import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import AllContents from "./pages/AllContentsPage";
import DailyContent from "./pages/DailyContentPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogInPage} />
        <Route exact path="/AllContent" component={AllContents} />
        <Route exact path="/DailyContent" component={DailyContent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
