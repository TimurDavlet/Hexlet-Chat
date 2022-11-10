/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';

const ModalInput = React.forwardRef(({
  status, name,
}, ref) => {
  const [field, meta] = useField({ name });

  return (
    <Form.Group className="mb-3">
      <Form.Control
        id={name}
        type="text"
        ref={ref}
        {...field}
        disabled={status === 'pending'}
        autoComplete="off"
      />
      <Form.Control.Feedback type="invalid">
        {meta.error}
      </Form.Control.Feedback>
    </Form.Group>
  );
});

export default ModalInput;
