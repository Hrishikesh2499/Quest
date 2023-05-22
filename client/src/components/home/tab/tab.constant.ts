import DatePickerComponent from "../../common/datePicker/datePicker.component";
import UserManager from "../../userManager";

export const HOME_TAB = {
  userManager: {
    label: "User Manager",
    component: UserManager,
  },
  dataManager: {
    label: "Data Manager",
    component: DatePickerComponent,
  },
};
