import { getMonthName } from "../../helpers/helpers";
import styles from "./DayCard.module.scss";

interface DayCardProps {
  date: number;
  month: number;
  index: number;
  isToday: boolean;
  isThisMonth: boolean;
  fn: (arg: boolean) => void;
}

const DayCard = ({
  date,
  month,
  index,
  isToday,
  isThisMonth,
  fn,
}: DayCardProps) => {
  const thisMonth = !isThisMonth ? styles.notThisMonth : "";
  const today = isToday ? styles.today : "";

  return (
    <article className={`${styles.card} ${thisMonth}`} onClick={() => fn(true)}>
      <span className={today}>{`${date} `}</span>
      {index == 0 ? getMonthName(month).slice(0, 3) : ""}
    </article>
  );
};

export default DayCard;
