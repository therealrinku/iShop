import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Homepage} />
    </BrowserRouter>
  );
};

export default App;
