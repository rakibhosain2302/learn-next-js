import React from 'react'
import styles from "../../page.module.css"

const page = () => {
  return (
    <div className={styles["page-container"]}>
      <main>
        <h1>Contact</h1>
        <p className={styles.content}>This is the contact page.</p>
      </main>
    </div>
  )
}

export default page
