"use client";
import StateComponent from "./Components/state";
import JsRoute from "./Components/jsroute";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleNavigation = () => {
    router.push("/class");
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

        <button onClick={handleNavigation}>Go to Class</button>
      </main>
    </div>
  );
}
