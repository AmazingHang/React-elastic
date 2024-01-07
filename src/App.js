import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
export default App;
