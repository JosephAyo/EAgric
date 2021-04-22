import {getUser} from './user';

const parseMessage = async (text) => {
  try {
    const user = await getUser();
    const {_id, username} = user;
    const message = {
      user_id: _id,
      text,
      username,
      time_sent: new Date().getTime(),
    };
    return message;
  } catch (error) {
    return null;
  }
};

export {parseMessage};
