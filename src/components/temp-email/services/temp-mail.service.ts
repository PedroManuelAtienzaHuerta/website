import axios from 'axios';
import { MessageObjProps } from '../types/types';

export const EMAIL_STORAGE_KEY = 'temp-mail-user-data';
export const SETUP_TIME_STORAGE_KEY = 'setupTime';
export const INBOX_STORAGE_KEY = 'inbox';
export const MESSAGES_INFO = 'info-of-messages';
export const SELECTED_MESSAGE = 'selectedMessage';

export const TIME_NOW = new Date().getTime();
export const MAX_HOURS_BEFORE_EXPIRE_EMAIL = 5 * 60 * 60 * 1000;

const fetchNewEmail = async () => {
  const email = await axios.get(`${window.origin}/api/temp-mail/create-email`);

  const { data: userInfo } = email;

  return userInfo;
};

const fetchInbox = async (email: string, token: string) => {
  const inbox = await axios.get(`${window.origin}/api/temp-mail/get-inbox?email=${email}&token=${token}`);

  const { data } = inbox;

  return data;
};

const getMessageData = async (email: string, token: string, messageId: string): Promise<MessageObjProps> => {
  const messageData = await axios.get(
    `${window.origin}/api/temp-mail/get-message?email=${email}&token=${token}&messageId=${messageId}`,
  );

  return messageData.data;
};

const fetchAndFormatInbox = async (email: string, userToken: string): Promise<MessageObjProps[] | undefined> => {
  try {
    const inbox = await fetchInbox(email, userToken);

    if (inbox == null) return;

    if (inbox === 'Email has expired') {
      throw new Error('Auto fetching email');
    }

    return inbox;
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};

function saveInfoOfMessageSelectedInLocalStorage(parsedInfoInSessionStorage, messageInfo) {
  const infoOfMessagesObj = JSON.stringify([...parsedInfoInSessionStorage, messageInfo]);
  localStorage.setItem(MESSAGES_INFO, infoOfMessagesObj);
}

function saveInboxInLocalStorage(inboxInLocalStorage, messageInfoId: string) {
  const messageInLocalStorageInbox = inboxInLocalStorage.find((message) => message.id === messageInfoId);
  messageInLocalStorageInbox.seen = true;
  localStorage.setItem(INBOX_STORAGE_KEY, JSON.stringify(inboxInLocalStorage));
}

function removeLocalStorage() {
  localStorage.removeItem(EMAIL_STORAGE_KEY);
  localStorage.removeItem(SETUP_TIME_STORAGE_KEY);
  localStorage.removeItem(INBOX_STORAGE_KEY);
  localStorage.removeItem(MESSAGES_INFO);
  localStorage.removeItem(SELECTED_MESSAGE);
}

export {
  fetchNewEmail,
  fetchInbox,
  getMessageData,
  fetchAndFormatInbox,
  saveInfoOfMessageSelectedInLocalStorage,
  saveInboxInLocalStorage,
  removeLocalStorage,
};
