import { setAddNewUserProp } from "../../../../rtk/features/userManagerSlice";
import { useAppDispatch, useAppSelector } from "../../../../rtk/hooks/hooks";
import AddNewUserDialogContent, {
  IPropValue,
} from "./addNewUserDialogContent.component";

const AddNewUserDialogContentContainer = () => {
  const dispatch = useAppDispatch();
  const { addNewUserProp } = useAppSelector((state) => state.userManager);
  console.log(addNewUserProp);
  const onChange = (propKey: string, propValue: IPropValue) => {
    dispatch(setAddNewUserProp({ propKey, propValue }));
  };
  return (
    <AddNewUserDialogContent
      onChange={onChange}
      addNewUserProp={addNewUserProp}
    />
  );
};

export default AddNewUserDialogContentContainer;
