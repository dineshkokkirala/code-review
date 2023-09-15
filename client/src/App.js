import Header from "./Components/Header";
import Home  from "./Components/Home";
import {BrowserRouter as Router, Route,Routes as Switch} from "react-router-dom";
import AllReviews from "./Components/AllReviews";
import PendingReviews from "./Components/PendingReviews";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route exact path="/completed" Component={AllReviews} />
        <Route exact path="/pending" Component={PendingReviews} />
      </Switch>
    </Router>
  );
}

export default App;
