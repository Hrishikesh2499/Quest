import ErrorBoundary from "../../common/error-boundary/errorBoundary";
import Modal from "../../common/modal";

interface IProps {
  title: string;
  save: () => void;
  close: () => void;
  open: boolean;
  getDialogContent: () => JSX.Element;
}
const UtilityDialog = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Modal
        title={props.title}
        save={props.save}
        handleClose={props.close}
        open={props.open}
      >
        {props.getDialogContent()}
      </Modal>
    </ErrorBoundary>
  );
};

export default UtilityDialog;
