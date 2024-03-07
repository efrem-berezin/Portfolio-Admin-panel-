import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import New from "./pages/new/New"
import Single from "./pages/single/Single"



import { productInputs, userInputs } from "./formSource";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/dark.scss"

function App() {


  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
            <Route index element={<Home setDark={setDark} />} />
            <Route path="login" element={<Login setDark={setDark} />} />
            <Route path="users">
              <Route index element={<List setDark={setDark}/>} />
              <Route path=":userId" element={<Single setDark={setDark}/>} />
              <Route path="new" element={<New inputs = {userInputs} title="Add new User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>} />
            </Route>                
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
