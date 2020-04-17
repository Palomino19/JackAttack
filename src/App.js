import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Button from "./components/Button";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      {/* <Button /> */}
      <Board></Board>
    </Provider>
  );
}

export default App;
