import { ToastAndroid } from 'react-native';

export const showNoInternetToast = () => {
  ToastAndroid.showWithGravityAndOffset(
    'Unable to connect, Please check your Internet connection',
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
};
