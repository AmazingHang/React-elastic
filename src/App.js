import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.route";
import DetailsPage from "./routes/details/details.route";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path=":details" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
};
export default App;
