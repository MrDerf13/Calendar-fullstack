import { useState } from "react";
import { getMonthYear, getMonthName } from "./helpers/helpers";
import Month from "./containers/Month/Month";
import styles from "./App.module.scss";

import Header from "./components/Header/Header";

function App() {
  const [currMonth, setCurrMonth] = useState(getMonthYear().month);
  const [currYear, setCurrYear] = useState(getMonthYear().year);
  const monthName = getMonthName(currMonth);

  const incrementMonth = () => {
    setCurrMonth(() => {
      if (currMonth === 12) {
        setCurrYear(currYear + 1);
        return 1;
      } else {
        return currMonth + 1;
      }
    });
  };

  const decrementMonth = () => {
    setCurrMonth(() => {
      if (currMonth === 1) {
        setCurrYear(currYear - 1);
        return 12;
      } else {
        return currMonth - 1;
      }
    });
  };

  return (
    <div className={styles.global}>
      <h3 className={styles.chip}>
        <button className={styles.buttonHome} onClick={decrementMonth}>
          {"<"}
        </button>
        {` ${monthName} ${currYear} `}
        <button className={styles.buttonHome} onClick={incrementMonth}>
          {">"}
        </button>
      </h3>
      <Header />
      <Month year={currYear} month={currMonth} />
    </div>
  );
}

export default App;
