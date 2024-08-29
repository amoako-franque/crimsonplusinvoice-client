import { baseApiSlice } from "../api/baseApiSlice"

export const customersApiSlice = baseApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllUserCustomers: builder.query({
			query: (page = 1) => `/customers?page=${page}`,
			providesTags: ["Customer"],
		}),
		createCustomer: builder.mutation({
			query: (customerInfo) => ({
				url: "/customers/create",
				method: "POST",
				body: customerInfo,
			}),
			invalidatesTags: ["Customer"],
		}),
		getSingleCustomer: builder.query({
			query: (customerId) => `/customers/${customerId}`,
			providesTags: ["Customer"],
		}),
		updateCustomerInfo: builder.mutation({
			query: ({ id, ...otherFields }) => ({
				url: `/customerS/${id}`,
				method: "PUT",
				body: otherFields,
			}),
			invalidatesTags: ["Customer"],
		}),
		deleteCustomer: builder.mutation({
			query: (customerId) => ({
				url: `/customerS/${customerId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Customer"],
		}),
	}),
})

export const {
	useGetAllUserCustomersQuery,
	useGetSingleCustomerQuery,
	useCreateCustomerMutation,
	useUpdateCustomerInfoMutation,
	useDeleteCustomerMutation,
} = customersApiSlice
