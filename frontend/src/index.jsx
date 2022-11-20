import React from 'react';
import ReactDOM from 'react-dom/client';
import InitialState from './init';
// eslint-disable-next-line import/no-relative-packages
import { io } from '../node_modules/socket.io/client-dist/socket.io';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = async () => {
  const socket = io();
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const startApp = await InitialState(socket);
  root.render(<React.StrictMode>{startApp}</React.StrictMode>);
};

app();
