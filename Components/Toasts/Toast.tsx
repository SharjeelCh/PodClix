import {toast} from '@backpackapp-io/react-native-toast';
import React from 'react';
import {width} from '../Dimensions';

export const ShowErrorToast = (text1: string) => {
  toast.error(`Error: ${text1}`, {
    duration: 2000,
    styles: {
      text: {
        color: 'red',
      },
      view: {
        backgroundColor: 'white',
        borderRadius: width * 0.05,
      },
    },
  });
};

export const ShowSuccessToast = (text1: string) => {
  toast.success(`Success: ${text1}`, {
    duration: 2000,
    styles: {
      text: {
        color: 'green',
      },
      view: {
        backgroundColor: 'white',
        borderRadius: width * 0.05,
      },
    },
  });
};
