import { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./Dialog.css";

function Dialog(props) {
  const {
    header,
    modal = false,
    extendedDismiss = true,
    confirmLabel = "ok",
    onAction = () => {},
    hasCancel = true,
  } = props;
  return (
    <div className={modal ? "Dialog DialogModal" : "Dialog"}>
      <div className={modal ? "DialogModalWrap" : null}>
        <div className="DialogHeader">{header}</div>
        <div className="DialogBody">{props.children}</div>
        <div className="DialogFooter">
          {hasCancel ? (
            <Button
              className="DialogDismiss"
              onClick={() => onAction("dismiss")}
            >
              Cancel
            </Button>
          ) : null}
          <Button onClick={() => onAction(hasCancel ? "confirm" : "dismiss")}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
Dialog.propTypes = {
  header: PropTypes.string.isRequired,
  modal: PropTypes.bool,
  extendedDismiss: PropTypes.bool,
  confirmLabel: PropTypes.string,
  onAction: PropTypes.func,
  hasCancel: PropTypes.bool,
};

export default Dialog;
