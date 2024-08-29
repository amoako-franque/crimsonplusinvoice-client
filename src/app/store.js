import { configureStore } from "@reduxjs/toolkit"
import { baseApiSlice } from "../features/api/baseApiSlice"
import authReducer from "../features/auth/authSlice"

// set devtools to false in production
export const store = configureStore({
	reducer: {
		[baseApiSlice.reducerPath]: baseApiSlice.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApiSlice.middleware),

	devTools: true,
})
