import styles from "./Header.module.scss";
import { daysOfWeek } from "../../helpers/helpers";
import useWindowDimensions from "../../helpers/useDimensions";

const Header = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className={styles.daysContainer}>
      {width > 768
        ? daysOfWeek.map((day) => (
            <span key={day} className={styles.days}>
              {day}
            </span>
          ))
        : daysOfWeek.map((day) => (
            <span key={day} className={styles.days}>
              {day.slice(0, 3)}
            </span>
          ))}
    </div>
  );
};

export default Header;
