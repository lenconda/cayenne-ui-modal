import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import '@cayenne-ui/css/dist/css/cayenne.css';

const Demo1: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button className="btn btn-secondary" type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h1>Basic</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa consequatur possimus? Aliquid error recusandae tempore impedit in amet minima natus vel aspernatur ad ipsum consequuntur totam, perferendis ipsam nemo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis debitis libero soluta veniam, velit, quidem quisquam eveniet ex adipisci, accusamus ipsam voluptas nulla reprehenderit atque reiciendis qui iusto illo?</p>
      </Modal>
    </>
  );
};

ReactDOM.render(<Demo1 />, document.getElementById('demo1'));
