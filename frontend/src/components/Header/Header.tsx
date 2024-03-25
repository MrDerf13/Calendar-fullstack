import styles from "./Header.module.scss";
import { daysOfWeek } from "../../helpers/helpers";

const Header = () => {
  return (
    <div className={styles.daysContainer}>
      {daysOfWeek.map((day) => (
        <span className={styles.days}>{day}</span>
      ))}
    </div>
  );
};

export default Header;
