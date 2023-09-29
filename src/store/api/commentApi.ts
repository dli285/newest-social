import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

interface AddCommentPayload {
    user_id: number,
    post_id: string,
    text: string
}

interface AddCommentResponse {
    status: number,
    comment_id: number
}

export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
    endpoints: builder => ({
        getCommentList: builder.query({
            query: () => '/comment'
        }),
        getPostComment: builder.query({
            query: (CommentId: number) => `/comment/${CommentId}`
        }),
        addNewComment: builder.mutation<AddCommentResponse, AddCommentPayload>({
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
    useLazyGetCommentListQuery,
    useGetPostCommentQuery,
    useAddNewCommentMutation
} = commentApi