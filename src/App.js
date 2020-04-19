import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Button from "./components/Button";
import Board from "./components/Board";
import styles from "./app.module.css";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.appWrapper}>
        <div className={styles.leftPanel}></div>
        <Board className={styles.boardContainer}></Board>
        <div className={styles.rightPanel}></div>
      </div>
    </Provider>
  );
}

export default App;
