/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Project } from '../models/Project';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectService {
    /**
     * Retrieves the collection of Project resources.
     * Retrieves the collection of Project resources.
     * @param page The collection page number
     * @returns Project Project collection
     * @throws ApiError
     */
    public static apiProjectsGetCollection(
        page: number = 1,
    ): CancelablePromise<Array<Project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects',
            query: {
                'page': page,
            },
        });
    }
    /**
     * Creates a Project resource.
     * Creates a Project resource.
     * @param requestBody The new Project resource
     * @returns Project Project resource created
     * @throws ApiError
     */
    public static apiProjectsPost(
        requestBody: Project,
    ): CancelablePromise<Project> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a Project resource.
     * Retrieves a Project resource.
     * @param id Project identifier
     * @returns Project Project resource
     * @throws ApiError
     */
    public static apiProjectsIdGet(
        id: string,
    ): CancelablePromise<Project> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the Project resource.
     * Replaces the Project resource.
     * @param id Project identifier
     * @param requestBody The updated Project resource
     * @returns Project Project resource updated
     * @throws ApiError
     */
    public static apiProjectsIdPut(
        id: string,
        requestBody: Project,
    ): CancelablePromise<Project> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/projects/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                404: `Resource not found`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Removes the Project resource.
     * Removes the Project resource.
     * @param id Project identifier
     * @returns void
     * @throws ApiError
     */
    public static apiProjectsIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/projects/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Updates the Project resource.
     * Updates the Project resource.
     * @param id Project identifier
     * @param requestBody The updated Project resource
     * @returns Project Project resource updated
     * @throws ApiError
     */
    public static apiProjectsIdPatch(
        id: string,
        requestBody: Project,
    ): CancelablePromise<Project> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/projects/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/merge-patch+json',
            errors: {
                400: `Invalid input`,
                404: `Resource not found`,
                422: `Unprocessable entity`,
            },
        });
    }
}
