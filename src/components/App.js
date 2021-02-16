import { BrowserRouter, Route } from "react-router-dom";
import BagPage from "../pages/BagPage";
import ExplorePage from "../pages/ExplorePage";
import Homepage from "../pages/Homepage";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import LoginPage from "../pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/explore" exact component={ExplorePage} />
      <Route path="/product/:productId" exact component={ItemDetailsPage} />
      <Route path="/bag" exact component={BagPage} />
      <Route path="/login" exact component={LoginPage} />
    </BrowserRouter>
  );
};

export default App;
