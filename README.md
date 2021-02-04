# Cayenne UI Modal

Modal component for Cayenne UI in Bootstrap style.

## Installation

```bash
$ npm i @cayenne-ui/modal -S
$ npm i @cayenne-ui/css -S
```

## Demo

```bash
$ npm run demo
```

Then checkout the demos at `http://localhost:8080`

## Usage

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '@cayenne-ui/modal';
import '@cayenne-ui/css/dist/css/cayenne.css';
import '@cayenne-ui/modal/lib/Modal.css';

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Toggle Modal</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        Modal Content Here
      </Modal>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
```

## License

[MIT](https://github.com/lenconda/cayenne-ui-modal/blob/master/LICENSE) &copy; Lenconda
