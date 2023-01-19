import { AuthProvider } from "./context/AuthContext" 
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./routes/Login"
import Register from "./routes/Register"
import Home from "./routes/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
