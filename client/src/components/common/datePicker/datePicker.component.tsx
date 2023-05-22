import { Box, InputBase } from "@mui/material";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import ErrorBoundary from "../error-boundary/errorBoundary";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// Two Lib needs to be installed
// npm install dayjs, npm i @mui/x-date-pickers
const DatePickerComponent = () => {
  const [value, setValue] = useState<string>();
  const [startDate, setStartDate] = useState(new Date());
  const classes = { width: 300 };
  return (
    <ErrorBoundary>
      <Box display="flex" sx={{ gap: "18px" }} alignItems="center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Basic date picker" />
        </LocalizationProvider>
        <InputBase
          value={value || ""}
          // onChange={(e) => props.onChange(e.target.value)}
          // onBlur={inputBlurred}
          // sx={getInputStyle()}
          endAdornment={
            <input
              style={classes}
              type="date"
              onChange={(e) => console.log(e.target.value)}
            />
          }
        />
        <ReactDatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
      </Box>
    </ErrorBoundary>
  );
};

export default DatePickerComponent;
