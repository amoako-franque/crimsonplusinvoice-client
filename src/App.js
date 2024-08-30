import { useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { Navigate, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import Footer from "./components/Footer"
import Layout from "./components/Layout"
import NotFound from "./components/NotFound"
import { customTheme } from "./customTheme"
import useTitle from "./hooks/useTitle"
import HomePage from "./pages/HomePage"
import RegisterPage from "./features/auth/pages/RegisterPage"
import VerifiedPage from "./features/auth/pages/VerifiedPage"
import LoginPage from "./features/auth/pages/LoginPage"
import ResendVerificationTokenPage from "./features/auth/pages/ResendEmailTokenPage"
import PasswordResetRequestPage from "./features/auth/pages/PasswordResetRequestPage"
import PasswordResetPage from "./features/auth/pages/PasswordResetPage"
import { ROLES } from "./config/roles"
import AuthRequired from "./components/AuthRequired"
import UsersList from "./features/users/pages/UserListPage"
import ProfilePage from "./features/users/pages/ProfilePage"
import EditProfileForm from "./features/users/pages/EditProfileForm"
import CustomersPage from "./features/customers/pages/CustomersPage"
import CustomerPage from "./features/customers/pages/CustomerPage"
import EditCustomerForm from "./features/customers/pages/EditCustomerForm"
import AddCustomerForm from "./features/customers/pages/AddCustomerForm"
import DocumentsPage from "./features/documents/pages/DocumentsPage"
import DocCreateEditForm from "./features/documents/pages/DocCreateEditForm"
import ViewDocumentPage from "./features/documents/pages/ViewDocumentPage"
import DashboardPage from "./features/dashboard/pages/DashboardPage"

const App = () => {
	useTitle("Crimson Invoice Plus App - Home")
	const { user } = useSelector((state) => state.auth)

	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			{user && <Navbar />}
			<Routes>
				<Route path="/" element={<Layout />}>
					{user ? (
						<Route index element={<Navigate to="/dashboard" replace />} />
					) : (
						<Route index element={<HomePage />} />
					)}
					{user ? (
						<Route
							path="register"
							element={<Navigate to="/dashboard" replace />}
						/>
					) : (
						<Route path="register" element={<RegisterPage />} />
					)}
					{user ? (
						<Route
							path="auth/verify"
							element={<Navigate to="/dashboard" replace />}
						/>
					) : (
						<Route path="auth/verify" element={<VerifiedPage />} />
					)}
					{user ? (
						<Route
							path="login"
							element={<Navigate to="/dashboard" replace />}
						/>
					) : (
						<Route path="login" element={<LoginPage />} />
					)}
					{user ? (
						<Route
							path="resend"
							element={<Navigate to="/dashboard" replace />}
						/>
					) : (
						<Route path="resend" element={<ResendVerificationTokenPage />} />
					)}
					{user ? (
						<Route
							path="auth/forgot-password"
							element={<Navigate to="/dashboard" replace />}
						/>
					) : (
						<Route
							path="auth/forgot-password"
							element={<PasswordResetRequestPage />}
						/>
					)}
					{user ? (
						<Route
							path="auth/reset-password"
							element={<Navigate to="/dashboard" replace />}
						/>
					) : (
						<Route path="auth/reset-password" element={<PasswordResetPage />} />
					)}
					{/* <Route index element={<HomePage />} /> */}
					{/* <Route path="register" element={<RegisterPage />} />
					<Route path="auth/verify" element={<VerifiedPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="resend" element={<ResendVerificationTokenPage />} />
					<Route
						path="auth/forgot-password"
						element={<PasswordResetRequestPage />}
					/>
					<Route path="auth/reset-password" element={<PasswordResetPage />} /> */}

					{/* ************************************** Private routes ************* */}
					{/* private routes for logged in users */}
					<Route
						element={<AuthRequired allowedRoles={[ROLES.Admin, ROLES.User]} />}>
						<Route path="profile" element={<ProfilePage />} />
						<Route path="edit-profile" element={<EditProfileForm />} />
						<Route path="customers" element={<CustomersPage />} />
						<Route path="add-customer" element={<AddCustomerForm />} />
						<Route path="customers/:customerId" element={<CustomerPage />} />
						<Route
							path="customers/edit/:customerId"
							element={<EditCustomerForm />}
						/>
						<Route path="documents" element={<DocumentsPage />} />
						<Route path="create-doc" element={<DocCreateEditForm />} />
						<Route path="edit-doc/:id" element={<DocCreateEditForm />} />
						<Route path="document/:id" element={<ViewDocumentPage />} />
						<Route path="dashboard" element={<DashboardPage />} />
					</Route>

					{/* Private Routes - Admin Users only */}
					<Route element={<AuthRequired allowedRoles={[ROLES.Admin]} />}>
						<Route path="users" element={<UsersList />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			<Footer />
			<ToastContainer theme="dark" />
		</ThemeProvider>
	)
}

export default App
