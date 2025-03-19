export interface ContactState {
  open: boolean;
  isSuccess: boolean;
  toggle: () => void;
  onSuccess: () => void;
}
