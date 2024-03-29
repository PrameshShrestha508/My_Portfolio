import Navbar from "./Component/Navbar/Navbar";

import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";
import Router from "./routes/Router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          {Router.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
