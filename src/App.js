import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";


const Shop = () => {
  return <div>I'm shopping</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home></Home>} />
        <Route path="shop" element={<Shop></Shop>} />
        <Route path="sign-in" element={<SignIn></SignIn>} />
      </Route>
    </Routes>
  );
};

export default App;
