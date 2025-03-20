export interface ContactState {
  open: boolean;
  isSuccess: boolean;
  toggle: () => void;
  setIsSuccess: (isSuccess: boolean) => void;
}
