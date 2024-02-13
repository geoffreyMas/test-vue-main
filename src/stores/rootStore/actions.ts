import { rootStore } from '../../main';


export const actions = {
  displayPasswordModal: (): void => {
    rootStore.showModalAddPointing = true;
  },
  hidePasswordModal(): void {
    rootStore.showModalAddPointing = false;
  },
};
