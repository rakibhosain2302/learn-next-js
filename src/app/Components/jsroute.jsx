import React from 'react'
import styles from '../page.module.css'

const jsroute = () => {
  return (
    <div className={styles["page-container"]}>

      <main>
        <h1>JS Route</h1>
        <p className={styles.content}>This is the JS route page.</p>
        <p className={styles.content}>Route parameters: Type In url:/route/about or contact</p>
        <p className={styles.content}>This is a Nested route example.</p>
        <p className={styles.content}>Route parameters: Type In url:/route/about/service</p>
      </main>
    </div>
  )
}

export default jsroute
