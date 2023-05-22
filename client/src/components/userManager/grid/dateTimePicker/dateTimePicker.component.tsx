import { ICellEditorParams } from "@ag-grid-community/all-modules";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import dayjs from "dayjs";
import { useAppDispatch } from "../../../../rtk/hooks/hooks";
import { updateUserAsync } from "../../../../rtk/thunks/userManager.thunks";
import { Box } from "@mui/material";
const DateTimePicker = (props: ICellEditorParams) => {
  const { value, data } = props;
  const date = dayjs(value) as unknown as Date;
  const dispatch = useAppDispatch();
  return (
    <ErrorBoundary>
      <Box display="flex" alignItems="center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            onAccept={(value: Date | null) => {
              if (value) {
                dispatch(updateUserAsync({ ...data, expires: value }));
              }
            }}
            value={date}
            //   label={LABELS.expiresOn}
            sx={{
              width: "100%",
              ".css-1lkr5rz-MuiInputBase-input-MuiOutlinedInput-input": {
                height: "42px",
                p:0,
              },
            }}
          />
        </LocalizationProvider>
      </Box>
    </ErrorBoundary>
  );
};

export default DateTimePicker;
