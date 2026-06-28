import React from 'react'
import styles from '../..//page.module.css'

const page = () => {
  return (
    <div className={styles["page-container"]}>
      <main>
        <h1>User List</h1>
        <p className={styles.content}>This is the userlist page.</p>
        <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
        </ul>
      </main>
    </div>
  )
}

export default page
