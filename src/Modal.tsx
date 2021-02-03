import React from 'react';
import BaseModal from '@material-ui/core/Modal';
import '@cayenne-ui/css/dist/css/cayenne.css';
import './Modal.less';

const Modal: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="btn btn-secondary" type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <BaseModal
        open={open}
        className="modal"
        style={{ display: 'block' }}
        onClose={handleClose}
        aria-labelledby="cayenne-modal-title"
        aria-describedby="cayenne-modal-description"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Woohoo, youre reading this text in a modal!</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </BaseModal>
    </div>
  );
};

export default Modal;
