import React from 'react'
import styles from "../../page.module.css";

export default async function Page({ params }) {
    const { routesegment } = await params;

    return (
        <div className={styles["page-container"]}>
            <main>
                <h1>Class Route Segment</h1>
                <p className={styles.content}>
                    This is the class route segment page for: {routesegment}
                </p>
            </main>
        </div>
    );
}