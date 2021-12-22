import { isEmpty } from 'lodash';

export const getError = (error: any): any => {
  if (isEmpty(error)) {
    return {
      status: 400,
      message: '',
    };
  }

  return error.response.json().then((obj: any) => obj?.message);
};
