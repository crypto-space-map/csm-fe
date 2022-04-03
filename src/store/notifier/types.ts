import { OptionsObject, SnackbarKey } from 'notistack';

export interface EnrichedNotificationProps {
  key: SnackbarKey;
  message: string;
  options: OptionsObject;
  dismissed?: boolean;
}

export interface NotifierTypesState {
  notifications: EnrichedNotificationProps[];
}

export type ContainerState = NotifierTypesState;
