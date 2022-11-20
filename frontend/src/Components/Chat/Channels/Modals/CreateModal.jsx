import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  CloseButton, Button, Modal, Form,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { createChannelRequest } from '../../../../slices/channels-slice';
import { getModalValidationSchema, getChannelsNames } from '../../../../utils/utils';
import ModalInput from './ModalInput';

const CreateChannelModal = ({ closeModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { status, entities } = useSelector((state) => state.channels);
  const ref = useRef(null);
  const channelsNames = getChannelsNames(entities);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleSubmitForm = async ({ channelName }) => {
    try {
      const dataFromLocalStorage = localStorage.getItem('userId');
      const { username } = JSON.parse(dataFromLocalStorage);
      await dispatch(createChannelRequest({ name: channelName.trim(), author: username })).unwrap();
      toast.success(t('notify.createChannel'));
      closeModal();
    } catch {
      toast.error(t('error.createChannel'));
    }
  };

  return (
    <Modal show onHide={() => status === 'pending' || closeModal()}>
      <Modal.Header>
        <Modal.Title>{t('modal.createChannel')}</Modal.Title>
        <CloseButton
          onClick={closeModal}
          disabled={status === 'pending'}
        />
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            channelName: '',
          }}
          validationSchema={getModalValidationSchema(channelsNames, t('modal.requiredField'), t('modal.channelExist'))}
          onSubmit={handleSubmitForm}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <ModalInput
                label={t('modal.nameChannel')}
                name="channelName"
                ref={ref}
                status={status}
              />
              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={closeModal}
                  className="me-2"
                  disabled={status === 'pending'}
                >
                  {t('modal.close')}
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'pending'}
                >
                  {t('modal.create')}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default CreateChannelModal;
