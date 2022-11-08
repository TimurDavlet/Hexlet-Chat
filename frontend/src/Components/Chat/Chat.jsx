import React, { useEffect, useState } from 'react';
import DesktopChat from './DesktopChat';
import MobileChat from './MobileChat';

const Chat = () => {
  const [isMobilePage, setIsMobilePage] = useState(false);

  useEffect(() => {
    const watchWidthChange = () => {
      const widthClient = document.documentElement.clientWidth;
      if (widthClient < 575) {
        setIsMobilePage(true);
      } else {
        setIsMobilePage(false);
      }
    };
    watchWidthChange();
    window.addEventListener('resize', watchWidthChange);
    return () => {
      window.removeEventListener('resize', watchWidthChange);
    };
  }, []);

  return (
    isMobilePage ? <MobileChat /> : <DesktopChat />
  );
};

export default Chat;
