import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

interface AddCommentPayload {
    "user_id": number,
    "main_text": string
}

interface AddCommentResponse {
    status: number,
    post_id: number
}

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
    endpoints: builder => ({
        getPostList: builder.query({
            query: () => '/comment'
        }),
        getPostItem: builder.query({
            query: (CommentId: number) => `/comment/${CommentId}`
        }),
        addNewPost: builder.mutation<AddCommentResponse, AddCommentPayload>({
            query: (payload) => {
                return {
                    url: '/comment',
                    method: 'POST',
                    body: payload
                }
            }
        }),
    })
})

export const {
    useLazyGetPostListQuery,
    useGetPostItemQuery,
    useAddNewPostMutation
} = postApi