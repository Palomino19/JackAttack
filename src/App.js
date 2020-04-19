import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Button from "./components/Button";
import Board from "./components/Board";
import styles from "./app.module.css";

function App() {
  return (
    <Provider store={store}>
      {/* <Button /> */}
      <Board className={styles.boardContainer}></Board>
    </Provider>
  );
}

export default App;
