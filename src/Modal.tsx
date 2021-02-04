import React, { useRef } from 'react';
import BaseModal from '@material-ui/core/Modal';
import Draggable from 'react-draggable';
import './Modal.less';

export interface ModalProps extends
  React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  draggable?: boolean;
  closeOnBackdropClick?: boolean;
  footer?: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onClose: () => void;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open = false,
  draggable = false,
  closeOnBackdropClick = true,
  children,
  footer,
  confirmButtonText = 'OK',
  cancelButtonText = 'Cancel',
  onClose,
  onConfirm,
}) => {
  const draggableElement = useRef(null);

  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm();
    }
  };

  const renderModalBody = () => {
    return (
      <div className="modal-dialog cayenne-dialog" tabIndex={-1}>
        <div className="modal-content">
          <div className={`modal-header${draggable ? ' cayenne-draggable-modal' : ''}`} ref={draggableElement}>
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          {
            footer
              ? <div className="modal-footer">{footer}</div>
              : <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleClose}
                >{cancelButtonText}</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirm}
                >{confirmButtonText}</button>
              </div>
          }
        </div>
      </div>
    );
  };

  return (
    <div>
      <BaseModal
        open={open}
        className="modal"
        style={{ display: 'block' }}
        onClose={handleClose}
        disableEnforceFocus={true}
        disableBackdropClick={!closeOnBackdropClick}
      >
        {
          draggable
            ? <Draggable
                handle=".cayenne-draggable-modal"
                onDrag={(event) => {
                  if (
                    draggableElement &&
                    draggableElement.current && event.target === document.documentElement
                  ) {
                    return false;
                  }
                }}
              >{renderModalBody()}</Draggable>
            : <>{renderModalBody()}</>
        }
      </BaseModal>
    </div>
  );
};

export default Modal;
