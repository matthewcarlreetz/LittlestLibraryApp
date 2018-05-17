export enum UIState {
  NONE,
  LOADING,
  SHOW_FAIL,
  SHOW_SUCCESS,
}

export interface UI {
  uiState: UIState;
  message: string;
}
