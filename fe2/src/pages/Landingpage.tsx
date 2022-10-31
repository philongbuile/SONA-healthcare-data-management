import styles from '../assets/css/Landingpage.module.css';
import Pill from '../components/Pill';


const Landingpage = () => {
    return (
        <div className={styles.Landingpage}>
            <Pill/>
            <h3>Your health is your privacy</h3>
            <button className={styles.start_button} onClick={() => {console.log("clicked")}}>Get Started</button>
        </div>
    )
}

export default Landingpage;