import styles from "../../../page.module.css";

export default async function Page({ params }) {
    const { userid } = await params;

    return (
        <div className={styles["page-container"]}>
            <main>
                <h1>User Detail</h1>
                <p className={styles.content}>
                    This is the user detail page for user: {userid}
                </p>
            </main>
        </div>
    );
}