import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin/>}></Route>

        <Route path="/main" element={<Main/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
