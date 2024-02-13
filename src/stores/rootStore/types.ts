// RootState

export interface RootState {
  modalComponent: IModal;
}

// Modal

export interface IModal {
  showModal: boolean;
  id?: string;
  data?: any;
}

// Project

export interface IProject {
  address?: string;
  clockings?: Array<string>;
  dateEnd?: string | null;
  dateStart?: string;
  readonly id?: number;
  name?: string;
};

// User

export interface IUser {
  readonly id?: number;
  firstName?: string;
  lastName?: string;
  matricule?: string;
  clockings?: Array<string>;
};

