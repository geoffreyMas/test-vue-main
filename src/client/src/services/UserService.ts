/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Retrieves the collection of User resources.
     * Retrieves the collection of User resources.
     * @param page The collection page number
     * @returns User User collection
     * @throws ApiError
     */
    public static apiUsersGetCollection(
        page: number = 1,
    ): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'page': page,
            },
        });
    }
    /**
     * Creates a User resource.
     * Creates a User resource.
     * @param requestBody The new User resource
     * @returns User User resource created
     * @throws ApiError
     */
    public static apiUsersPost(
        requestBody: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a User resource.
     * Retrieves a User resource.
     * @param id User identifier
     * @returns User User resource
     * @throws ApiError
     */
    public static apiUsersIdGet(
        id: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the User resource.
     * Replaces the User resource.
     * @param id User identifier
     * @param requestBody The updated User resource
     * @returns User User resource updated
     * @throws ApiError
     */
    public static apiUsersIdPut(
        id: string,
        requestBody: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
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
     * Removes the User resource.
     * Removes the User resource.
     * @param id User identifier
     * @returns void
     * @throws ApiError
     */
    public static apiUsersIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Updates the User resource.
     * Updates the User resource.
     * @param id User identifier
     * @param requestBody The updated User resource
     * @returns User User resource updated
     * @throws ApiError
     */
    public static apiUsersIdPatch(
        id: string,
        requestBody: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}',
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
