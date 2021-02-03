import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

const Demo1: React.FC = () => {
  return (
    <>
      <Modal />
    </>
  );
};

ReactDOM.render(<Demo1 />, document.getElementById('demo1'));
