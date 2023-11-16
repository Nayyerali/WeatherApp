import NyrToast from '../components/toasts/NyrToast';

const AppToasts = {
  showInfo: (title = '', desc = '') => {
    NyrToast({type: 'info', title: title, description: desc});
  },
  showError: (title = '', desc = '') => {
    NyrToast({type: 'error', title: title, description: desc});
  },
  showSuccess: (title = '', desc = '') => {
    NyrToast({type: 'success', title: title, description: desc});
  },
};

export default AppToasts;
