import styles from "./Core.module.scss"
export function Part4(){

    return <form className="p-10 rounded-lg
    border border-solid border-white/5 bg-my-bg
     shadow-lg">
        <h1 className="text-6xl font-bold mb-5">Login</h1>
        <input type="text" className={styles.field} placeholder="Enter email:"/>
        <input type="password" className={styles.field} placeholder="Enter password:"/>
        <button className="dark:bg-white inline-block">Submit</button>
    </form>
}