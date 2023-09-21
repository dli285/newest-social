import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

interface UploaadFilePayload {
    post_id: number
    photo_file: string
}

interface UploaadFileResponse {
    status: number
    file_id: number
}

export const fileApi = createApi({
    reducerPath: 'fileApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseQuery, jsonContentType: 'multipart/form-data' }),
    endpoints: builder => ({
        uploadFile: builder.mutation<UploaadFileResponse, any>({
            query: (payload) => {
                return {
                    url: '/add-photo',
                    method: 'POST',
                    body: payload,
                }
            }
        })
    })
})

export const { useUploadFileMutation } = fileApi