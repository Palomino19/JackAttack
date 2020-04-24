import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import DealButton from "./components/Button";
import Board from "./components/Board";
import styles from "./app.module.css";
import PlayerHand from "./components/PlayerHand";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.appWrapper}>
        <div className={styles.leftPanel}>
          <DealButton />
        </div>
        <Board className={styles.boardContainer}></Board>
        <PlayerHand className={styles.rightPanel}></PlayerHand>
      </div>
    </Provider>
  );
}

export default App;
