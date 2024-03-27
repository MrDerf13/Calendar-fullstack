import styles from "./EventForm.module.scss";
import { timeValuePairs } from "../../helpers/helpers";
import Select from "react-select";
import MiniCalendar from "../MiniCalendar/MiniCalendar";

const EventForm = () => {
  return (
    <form action="" className={styles.wholeForm}>
      <label htmlFor="eventName"></label>
      <input
        className={`${styles.textInput} ${styles.title}`}
        type="text"
        id="eventName"
        name="eventName"
        placeholder="Add a title"
      />
      <div className={styles.inputWrapper}>
        <img src="src\assets\clock.png" alt="time" />
        <Select />
        <Select
          options={timeValuePairs}
          className={styles.timeSelect}
          defaultInputValue={timeValuePairs[17].label}
          filterOption={null}
        />
      </div>

      <div className={styles.inputWrapper}>
        <img src="src\assets\clock.png" alt="time" />
        <input type="text" className={styles.dateInput} />
        <img
          src="src\assets\calendar.png"
          alt="calendar"
          className={styles.calendarImg}
        />
        <MiniCalendar />
        <Select
          options={timeValuePairs}
          defaultInputValue={timeValuePairs[19].label}
          className={styles.timeSelect}
          filterOption={null}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="location">
          <img src="src\assets\location.png" alt="location" />
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          className={styles.textInput}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="eventLabel">
          <img src="src\assets\tag.png" alt="label" />
        </label>
        <input
          type="text"
          id="eventLabel"
          placeholder="Label/ Tag"
          className={styles.textInput}
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        <img src="src\assets\save.png" alt="save" />
        Save
      </button>
    </form>
  );
};

export default EventForm;
