/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Clocking } from '../models/Clocking';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClockingService {
    /**
     * Retrieves the collection of Clocking resources.
     * Retrieves the collection of Clocking resources.
     * @param page The collection page number
     * @returns Clocking Clocking collection
     * @throws ApiError
     */
    public static apiClockingsGetCollection(
        page: number = 1,
    ): CancelablePromise<Array<Clocking>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/clockings',
            query: {
                'page': page,
            },
        });
    }
    /**
     * Creates a Clocking resource.
     * Creates a Clocking resource.
     * @param requestBody The new Clocking resource
     * @returns Clocking Clocking resource created
     * @throws ApiError
     */
    public static apiClockingsPost(
        requestBody: Clocking,
    ): CancelablePromise<Clocking> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/clockings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a Clocking resource.
     * Retrieves a Clocking resource.
     * @param id Clocking identifier
     * @returns Clocking Clocking resource
     * @throws ApiError
     */
    public static apiClockingsIdGet(
        id: string,
    ): CancelablePromise<Clocking> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/clockings/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the Clocking resource.
     * Replaces the Clocking resource.
     * @param id Clocking identifier
     * @param requestBody The updated Clocking resource
     * @returns Clocking Clocking resource updated
     * @throws ApiError
     */
    public static apiClockingsIdPut(
        id: string,
        requestBody: Clocking,
    ): CancelablePromise<Clocking> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/clockings/{id}',
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
     * Removes the Clocking resource.
     * Removes the Clocking resource.
     * @param id Clocking identifier
     * @returns void
     * @throws ApiError
     */
    public static apiClockingsIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/clockings/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Updates the Clocking resource.
     * Updates the Clocking resource.
     * @param id Clocking identifier
     * @param requestBody The updated Clocking resource
     * @returns Clocking Clocking resource updated
     * @throws ApiError
     */
    public static apiClockingsIdPatch(
        id: string,
        requestBody: Clocking,
    ): CancelablePromise<Clocking> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/clockings/{id}',
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
    /**
     * Retrieves the collection of Clocking resources.
     * Retrieves the collection of Clocking resources.
     * @param id Project identifier
     * @param page The collection page number
     * @returns Clocking Clocking collection
     * @throws ApiError
     */
    public static apiProjectsIdclockingsFormatGetCollection(
        id: string,
        page: number = 1,
    ): CancelablePromise<Array<Clocking>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{id}/clockings',
            path: {
                'id': id,
            },
            query: {
                'page': page,
            },
        });
    }
    /**
     * Creates a Clocking resource.
     * Creates a Clocking resource.
     * @param id Project identifier
     * @param requestBody The new Clocking resource
     * @returns Clocking Clocking resource created
     * @throws ApiError
     */
    public static apiProjectsIdclockingsFormatPost(
        id: string,
        requestBody: Clocking,
    ): CancelablePromise<Clocking> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects/{id}/clockings',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves the collection of Clocking resources.
     * Retrieves the collection of Clocking resources.
     * @param id User identifier
     * @param page The collection page number
     * @returns Clocking Clocking collection
     * @throws ApiError
     */
    public static apiUsersIdclockingsFormatGetCollection(
        id: string,
        page: number = 1,
    ): CancelablePromise<Array<Clocking>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/clockings',
            path: {
                'id': id,
            },
            query: {
                'page': page,
            },
        });
    }
    /**
     * Creates a Clocking resource.
     * Creates a Clocking resource.
     * @param id User identifier
     * @param requestBody The new Clocking resource
     * @returns Clocking Clocking resource created
     * @throws ApiError
     */
    public static apiUsersIdclockingsFormatPost(
        id: string,
        requestBody: Clocking,
    ): CancelablePromise<Clocking> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{id}/clockings',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
}
