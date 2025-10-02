import LoaderLogo from "./loader.svg"
import styles from "./Loader.module.css"

export const Loader = () => (
  <div className={styles.loaderContainer}>
    <img src={LoaderLogo} alt="pokemon loader" className={styles.loader} />
  </div>
)
