import { AppState } from 'store/types'

export const getIsOpen = (state: AppState) =>
  state.application.ui.browserPushPermissionConfirmation.isOpen
