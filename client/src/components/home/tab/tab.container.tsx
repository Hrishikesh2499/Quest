import { setTabTypeAction } from "../../../rtk/features/homeSlice";
import { useAppDispatch, useAppSelector } from "../../../rtk/hooks/hooks";
import HomeTab from "./tab.component";

const TabContainer = () => {
  const { tabType } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();
  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    dispatch(setTabTypeAction(value));
  };
  return <HomeTab tabType={tabType} onChange={onChange} />;
};

export default TabContainer;
