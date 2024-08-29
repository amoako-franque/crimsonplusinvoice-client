import { baseApiSlice } from "../api/baseApiSlice"

export const usersApiSlice = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => ({
				url: "/user-accounts",
				validateStatus: (response, result) => {
					return response.status === 200 && !result.isError
				},
			}),
			providesTags: (result) =>
				result
					? [
							...result.users.map(({ id }) => ({
								type: "User",
								id,
							})),
							{ type: "User", id: "LIST" },
					  ]
					: [{ type: "User", id: "LIST" }],
		}),
		getUserProfile: builder.query({
			query: () => "/account-profile",
			providesTags: [{ type: "User", id: "SINGLE_USER" }],
		}),
		updateUserProfile: builder.mutation({
			query: (profileData) => ({
				url: "/account-profile",
				method: "PUT",
				body: profileData,
			}),
			invalidatesTags: [{ type: "User", id: "SINGLE_USER" }],
		}),
		deleteMyAccount: builder.mutation({
			query: (id) => ({
				url: `/user-account/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: [{ type: "User", id: "LIST" }],
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `/admin/users/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: [{ type: "User", id: "LIST" }],
		}),
		deactivateUser: builder.mutation({
			query: (id) => ({
				url: `/admin/users/${id}/deactivate`,
				method: "PATCH",
			}),
			invalidatesTags: [{ type: "User", id: "LIST" }],
		}),
	}),
})

export const {
	useGetAllUsersQuery,
	useUpdateUserProfileMutation,
	useGetUserProfileQuery,
	useDeleteMyAccountMutation,
	useDeleteUserMutation,
	useDeactivateUserMutation,
} = usersApiSlice
