import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Col, Spinner } from 'react-bootstrap';
import { getDataChat } from '../../slices/channels-slice';
import Messages from './Messages/Messages';
import Channels from './Channels/Channels';
import Modal from './Channels/Modals/Modal';

const DesktopChat = ({ isMobilePage }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);
  const [, setIsChannelPage] = useState(true);

  useEffect(() => {
    const firstLoad = async () => {
      try {
        await dispatch(getDataChat()).unwrap();
        setFetching(false);
      } catch (error) {
        if (error === 401) {
          toast.error(t('error.authorisation'));
        } else {
          toast.error(t('error.network'));
        }
      }
    };
    firstLoad();
  }, [dispatch, t]);

  const openMessagePage = () => setIsChannelPage(false);

  const openChannelPage = () => {
    setIsChannelPage(true);
  };

  const layout = (
    <>
      <Col
        xs={5}
        sm={5}
        md={4}
        lg={3}
        xl={3}
        xxl={2}
        className="h-100 overflow-auto py-4 px-3 border bg-light shadow"
      >
        <Channels isMobilePage={isMobilePage} openMessagePage={openMessagePage} />
      </Col>
      <Col className="h-100 d-flex flex-column bg-light shadow">
        <Messages isMobilePage={isMobilePage} openChannelPage={openChannelPage} />
      </Col>
    </>
  );

  return (
    fetching ? <Spinner className="align-self-center" animation="border" variant="primary" />
      : (
        <>
          <Modal />
          {layout}
        </>
      )
  );
};

export default DesktopChat;
