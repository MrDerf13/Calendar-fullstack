import styles from "./EventForm.module.scss";
import { timeValuePairs } from "../../helpers/helpers";
import Select from "react-select";
import MiniCalendar from "../MiniCalendar/MiniCalendar";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { addEvent } from "../../data/data";

interface EventFormProps {
  clickedDate: string;
}

const EventForm = ({ clickedDate }: EventFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    addEvent(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wholeForm}>
      <input
        className={`${styles.textInput} ${styles.title}`}
        type="text"
        id="eventName"
        placeholder="Add a title"
        {...register("eventName", { required: true })}
      />

      {errors.eventName && <span>This field is required</span>}
      <div className={styles.inputWrapper}>
        <img src="src\assets\clock.png" alt="time" />
        <input
          type="text"
          id="startDate"
          defaultValue={clickedDate}
          className={styles.dateInput}
          {...register("startDate", { required: true })}
        />
        <img
          src="src\assets\calendar.png"
          alt="calendar"
          className={styles.calendarImg}
        />
        <Controller
          name="startTime"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={timeValuePairs}
              className={styles.timeSelect}
              filterOption={null}
              defaultInputValue={timeValuePairs[17].label}
            />
          )}
        />
      </div>
      {errors.startTime && <span>This field is required</span>}
      <div className={styles.inputWrapper}>
        <img src="src\assets\clock.png" alt="time" />
        <input
          type="text"
          id="endDate"
          defaultValue={clickedDate}
          {...register("endDate", { required: true })}
          className={styles.dateInput}
        />
        <img
          src="src\assets\calendar.png"
          alt="calendar"
          className={styles.calendarImg}
        />
        <Controller
          name="endTime"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={timeValuePairs}
              className={styles.timeSelect}
              filterOption={null}
              defaultInputValue={timeValuePairs[19].label}
            />
          )}
        />
      </div>
      {errors.endTime && <span>This field is required</span>}
      <div className={styles.inputWrapper}>
        <label htmlFor="location">
          <img src="src\assets\location.png" alt="location" />
        </label>
        <input
          type="text"
          id="location"
          placeholder="Location"
          className={styles.textInput}
          {...register("location")}
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
          {...register("eventLabel")}
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
