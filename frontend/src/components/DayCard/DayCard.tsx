import { getMonthName } from "../../helpers/helpers";
import styles from "./DayCard.module.scss";

interface DayCardProps {
  date: number;
  month: number;
  index: number;
  fn: () => void;
}

const DayCard = ({ date, month, index, fn }: DayCardProps) => {
  return (
    <article className={styles.card} onClick={fn}>
      {`${date} `}
      {index == 0 ? getMonthName(month).slice(0, 3) : ""}
    </article>
  );
};

export default DayCard;
