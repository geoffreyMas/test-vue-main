export interface IProject {
  address?: string;
  clockings?: Array<string>;
  dateEnd?: string | null;
  dateStart?: string;
  readonly id?: number;
  name?: string;
};