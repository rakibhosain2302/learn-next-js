import React from 'react'
import styles from '../../page.module.css'

const page = () => {
  return (
    <div className={styles["page-container"]}>
      <main>
        <h1>About</h1>
        <p className={styles.content}>This is the about page.</p>
      </main>
    </div>
  )
}

export default page
