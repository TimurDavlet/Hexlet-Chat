import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-relative-packages
import { io } from '../node_modules/socket.io/client-dist/socket.io';
import InitialState from './init';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = async () => {
  const socket = io();
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const startApp = await InitialState(socket);
  root.render(<React.StrictMode>{startApp}</React.StrictMode>);
};

app();
