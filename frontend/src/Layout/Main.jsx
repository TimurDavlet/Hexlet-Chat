import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Authorization from '../Components/Chat/Authorization';
import NotFoundPage from '../Components/Chat/NotFoundPage';
import AuthRequire from '../hoc/AuthRequire';
import Chat from '../Components/Chat/Chat';
import RegistrationForm from '../Components/Chat/Registration';
import AuthRegistration from '../hoc/AuthRegistration';
import routes from '../routes';

const Main = () => (
  <Container className="h-100 overflow-hidden d-flex justify-content-center py-4">
    <Routes>
      <Route
        path={routes.chat()}
        element={(
          <AuthRequire>
            <Chat />
          </AuthRequire>
        )}
      />
      <Route path={routes.login()} element={<Authorization />} />
      <Route
        path={routes.signup()}
        element={(
          <AuthRegistration>
            <RegistrationForm />
          </AuthRegistration>
        )}
      />
      <Route path={routes.notFound()} element={<NotFoundPage />} />
    </Routes>
  </Container>
);

export default Main;
