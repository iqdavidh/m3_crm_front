import { toast } from 'react-toastify';

const LibToast = {
  success(msg) {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT
    });
  },

  alert(msg, titulo = 'Error') {
    toast.error('Error ' + msg, {
      position: toast.POSITION.TOP_RIGHT
    });
  },
  info(msg) {
    toast.info(msg, {
      position: toast.POSITION.TOP_RIGHT
    });
  }
};

export default LibToast;
