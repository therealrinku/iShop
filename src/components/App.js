import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Homepage";
import "../css/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
    </BrowserRouter>
  );
};

export default App;
