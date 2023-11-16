import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Detailspage from "./pages/Detailspage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout childComp={<Homepage />} />} />
          <Route
            path="/details-page/:productName"
            element={<Layout childComp={<Detailspage />} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
