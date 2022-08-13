import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 
 const Basic = () => (
   <div className="h-100 d-flex flex-column">
     <nav className="border navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Hexlet Chat</a>
      </div>
     </nav>
     <div className="h-100 m-3 overflow-hidden align-self-center container">
     <div className="row justify-content-center align-content-center h-100">
       <div className="card col-10 col-md-7 col-lg-6 col-xxl-5">
        <h2 className="text-center p-4">Авторизация</h2>
        <div className="card-body mb-4 row justify-content-center">
        <Formik
          initialValues={{userName: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.userName) {
              errors.userName = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.userName = 'Invalid userName address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-75">
              <div className="mb-3">
                <label className="form-label" for="userName">Ваш ник</label>
                <Field className="form-control" type="userName" name="userName" />
                <ErrorMessage className="invalid-feedback" name="userName" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label" for="password">Пароль</label>
                <Field className="form-control" type="password" name="password" />
                <ErrorMessage className="invalid-feedback" name="password" component="div" />
              </div>
              <button className="ms-auto btn btn-info" type="submit" disabled={isSubmitting}>
                Войти
              </button>
            </Form>
          )}
        </Formik>
        </div>
        <div className="card-footer row">
          <p className="text-center">
            <span>Нет аккаунта? </span>
            <a href="/">Регистрация</a>
          </p>
        </div>
       </div>
     </div>
   </div>
   </div>
 );
 
 export default Basic;