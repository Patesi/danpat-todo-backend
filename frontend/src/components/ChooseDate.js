import React from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import fi from "date-fns/locale/fi";
import "react-datepicker/dist/react-datepicker.css";

setDefaultLocale("fi", fi);
registerLocale("fi", fi);
const ChooseDate = ({ dueDate, setDueDate }) => {
  return (
    <DatePicker
      locale="fi"
      dateFormat="dd/MM/yyyy"
      selected={dueDate}
      minDate={new Date()}
      isClearable
      onChange={(date) => {
        setDueDate(date);
      }}
    />
  );
};

export default ChooseDate;
