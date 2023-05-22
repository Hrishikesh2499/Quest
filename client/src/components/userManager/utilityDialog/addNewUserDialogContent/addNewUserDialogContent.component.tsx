import { Autocomplete, Grid, TextField } from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IAddUserManagerProp } from "../../../../rtk/features/userManagerSlice";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import { LABELS, OPTIONS, SIZE } from "./addNewUserDialogContent.constant";
import classes from "./addNewUserDialogContent.styles";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

interface IProps {
  onChange: (propKey: string, propValue: IPropValue) => void;
  addNewUserProp: IAddUserManagerProp;
}
export type IPropValue = string | boolean | Date;

const AddNewUserDialogContent = (props: IProps) => {
  const expires = props.addNewUserProp.expires

  return (
    <ErrorBoundary>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="email"
            type="email"
            value={props.addNewUserProp.email}
            onChange={(e) => {
              props.onChange(e.target.name, e.target.value);
            }}
            fullWidth
            label={LABELS.email}
            size={SIZE}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            size={SIZE}
            onChange={(event, value) => {
              const propValue = value === "Yes" ? true : false;
              props.onChange("beta", propValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label={LABELS.beta} />
            )}
            options={OPTIONS}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
              onChange={(value: Date | null) => {
                if (value) {
                  props.onChange("expires", value);
                }
              }}
              value={expires}
              label={LABELS.expiresOn}
              sx={classes.datePicker}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default AddNewUserDialogContent;
