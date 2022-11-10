/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';

const PasswordInput = ({
  label, authFailed, authFailedError, name,
}) => {
  const [field, meta] = useField({ name });

  return (
    <Form.Group className="mb-3">
      <Form.Control
        id={name}
        name={name}
        type="password"
        placeholder={label}
        {...field}
        isInvalid={
          (meta.touched && meta.error) || authFailed
        }
      />
      <Form.Control.Feedback type="invalid">
        {meta.error}
      </Form.Control.Feedback>
      {authFailedError && authFailed && (
        <Form.Control.Feedback type="invalid">
          {authFailedError}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default PasswordInput;
