import { getMonthName } from "../../helpers/helpers";
import styles from "./DayCard.module.scss";

interface DayCardProps {
  dateFormatted: string;
  date: number;
  month: number;
  index: number;
  isToday: boolean;
  isThisMonth: boolean;
  fn: (arg: boolean) => void;
  setDayId: (id: string) => void;
}

const DayCard = ({
  dateFormatted,
  date,
  month,
  index,
  isToday,
  isThisMonth,
  setDayId,
  fn,
}: DayCardProps) => {
  const thisMonth = !isThisMonth ? styles.notThisMonth : "";
  const today = isToday ? styles.today : "";

  return (
    <article
      className={`${styles.card} ${thisMonth}`}
      onClick={() => {
        fn(true);
        setDayId(dateFormatted);
      }}
    >
      <span className={today}>{`${date} `}</span>
      {index == 0 ? getMonthName(month).slice(0, 3) : ""}
    </article>
  );
};

export default DayCard;
