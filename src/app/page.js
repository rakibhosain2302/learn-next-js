"use client";
import StateComponent from "./Components/state";
import JsRoute from "./Components/jsroute";

import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className={styles["page-container"]}>
      <main>
        <h1>Welcome</h1>
        <p className={styles.content}>Your journey begins here.</p>

        {/* Function and Event Handling */}
         <p className={styles["sub-title"]}>Function and Event Handling</p>
        <button onClick={handleClick}>Click me</button>

        {/* Components and State Handling */}
        <p className={styles["sub-title"]}>Stateful components manage dynamic data.</p>
        <StateComponent/>

        {/* Component Routing */}
        <p className={styles["sub-title"]}>Component-based routing for navigation.</p>
        <JsRoute/>
      </main>
    </div>
  );
}
