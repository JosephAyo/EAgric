import {getUser} from './user';

const parseMessage = async (text) => {
  try {
    const user = await getUser();
    const {_id} = user;
    const message = {
      user_id: _id,
      text,
      time_sent: new Date().getTime(),
    };
    return message;
  } catch (error) {
    return null;
  }
};

export {parseMessage};
