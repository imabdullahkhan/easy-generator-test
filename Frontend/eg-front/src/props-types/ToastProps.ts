export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export interface ToastProps {
  message: string;
  type: ToastType;
  closeToast: (e: React.MouseEvent<HTMLButtonElement>) => void
}
