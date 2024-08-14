import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";


const Shop = () => {
  return <div>I'm shopping</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home></Home>} />
        <Route path="shop" element={<Shop></Shop>} />
        <Route path="auth" element={<Authentication></Authentication>} />
      </Route>
    </Routes>
  );
};

export default App;
