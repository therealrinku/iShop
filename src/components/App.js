import { BrowserRouter, Route } from "react-router-dom";
import ExplorePage from "../pages/ExplorePage";
import Homepage from "../pages/Homepage";
import ItemDetailsPage from "../pages/ItemDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/explore" exact component={ExplorePage} />
      <Route path="/product/:productId" exact component={ItemDetailsPage} />
    </BrowserRouter>
  );
};

export default App;
