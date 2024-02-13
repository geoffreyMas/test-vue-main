import { ClockingService, UserService, ProjectService } from '../../client';
import { IPointings } from './pointings.type';
import { IUser, IProject } from '../../stores/rootStore/types';
import { rootStore } from "../../main";

const pointingsService = {
  // get pointings collections
  getPointings(page: number): Promise<IPointings[]> {
    return new Promise((resolve, reject) => {
      ClockingService
        .apiClockingsGetCollection(page)
        .then((response): void => {
          resolve(response);
        });
    })
  },
  //get user Collection
  getUserInfos(): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
      UserService
      .apiUsersGetCollection()
      .then((response): void => {
        rootStore.userCollection = response;
        resolve(response);
      });
    })
  },
  //get user Collection
  getProjectInfos(): Promise<IProject[]> {
    return new Promise((resolve, reject) => {
      ProjectService
      .apiProjectsGetCollection()
      .then((response): void => {
        rootStore.projectCollection = response;
        resolve(response);
      });
    })
  },
  // Add a pointing for a user
  addPointing(pointing: IPointings): Promise<IPointings> {
    return new Promise((resolve, reject) => {
      ClockingService.apiClockingsPost(pointing)
      .then((response): void => {
        resolve(response);
      });
    });
  },
};

export default pointingsService;