import React, { useContext, useState } from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { logOut, loggedIn } = useContext(AuthContext);
  const currentLanguage = localStorage.getItem('language') === 'En' ? 'Ru' : 'En';
  const [language, setLanguage] = useState(currentLanguage);

  const handleChangeLanguage = () => {
    const nextLanguage = language === 'En' ? 'Ru' : 'En';
    localStorage.setItem('language', language);
    i18n.changeLanguage(language.toLowerCase());
    setLanguage(nextLanguage);
  };

  return (
    <Navbar bg="light" expand="lg" className="border shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {t('titlePage')}
        </Navbar.Brand>
        <div>
          <Button variant="primary" className="me-4" onClick={handleChangeLanguage}>{language}</Button>
          {loggedIn && (
            <Button as={Link} to="/" variant="primary" onClick={logOut}>
              {t('button.logOut')}
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
