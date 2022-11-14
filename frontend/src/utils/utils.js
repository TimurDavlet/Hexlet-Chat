import * as yup from 'yup';

export const VALUE_FOR_SCROLL_TO_BOTTOM = 1e9;

export const getModalValidationSchema = (channels, required, channelExist) => yup.object().shape({
  channelName: yup
    .string()
    .trim()
    .required(required)
    .notOneOf(channels, channelExist),
});

export const getChannelsNames = (channels) => Object.values(channels).map(({ name }) => name);

export const getCurrentChannelName = (channels, idChannel) => (
  Object
    .values(channels)
    .find(({ id }) => id === idChannel)
    .name
);

export const getCountMessages = (channels, idsChannels, currentChannelId) => (
  idsChannels.reduce((acc, id) => (
    channels[id].channelId === currentChannelId ? acc + 1 : acc
  ), 0)
);

export const promisifySocket = (socketFunc) => (...args) => new Promise((resolve, reject) => {
  socketFunc(...args, (responce) => {
    if (responce.status === 'ok') {
      resolve(responce);
    }
    reject();
  });
});
