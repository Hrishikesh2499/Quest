import { useCallback } from "react";
import {
  clearAddNewUserPropAction,
  setOpenUtilityDialogAction,
} from "../../../rtk/features/userManagerSlice";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";
import { addUserAsync } from "../../../rtk/thunks/userManager.thunks";
import AddNewUserDialogContent from "./addNewUserDialogContent";
import UtilityDialog from "./utilityDialog.component";

const UtilityDialogContainer = () => {
  const { openUtilityDialog, utilityDialog, addNewUserProp } = useAppSelector(
    (state) => state.userManager
  );
  const dispatch = useAppDispatch();
  const getTitle = useCallback(() => {
    if (openUtilityDialog) return utilityDialog[openUtilityDialog].title;
    return "";
  }, [openUtilityDialog, utilityDialog]);

  const open = openUtilityDialog ? true : false;
  const save = () => {
    dispatch(addUserAsync(addNewUserProp));
    close();
  };
  const close = () => {
    dispatch(setOpenUtilityDialogAction(undefined));
    dispatch(clearAddNewUserPropAction());
  };
  const getDialogContent = useCallback(() => {
    switch (openUtilityDialog) {
      case "userManager":
        return <AddNewUserDialogContent />;

      default:
        return <></>;
    }
  }, [openUtilityDialog]);

  return (
    <UtilityDialog
      getDialogContent={getDialogContent}
      close={close}
      open={open ? true : false}
      save={save}
      title={getTitle()}
    />
  );
};

export default UtilityDialogContainer;
