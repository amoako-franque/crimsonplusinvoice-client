import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	Link,
	Typography,
} from "@mui/material"
import { RiLoginCircleFill } from "react-icons/ri"
import { Link as RouterLink } from "react-router-dom"
import GoogleLogin from "../../../components/GoogleLogin"
import StyledDivider from "../../../components/StyledDivider"
import AuthWrapper from "../forms/AuthWrapper"
import LoginForm from "../forms/LoginForm"

const LoginPage = () => {
	return (
		<AuthWrapper>
			<Container
				component="main"
				maxWidth="sm"
				sx={{
					border: "2px solid #e4e5e7",
					borderRadius: "25px",
					py: 2,
				}}>
				<Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<RiLoginCircleFill className="auth-svg" />
							<Typography color="secondary" variant="h4">
								Access Account
							</Typography>
						</Box>
						<StyledDivider />
					</Grid>
					{/* login form */}
					<LoginForm />
					{/* or sign in with Google */}
					<Grid item xs={12}>
						<Box
							sx={{
								alignItems: "center",
								display: "flex",
								mt: 2,
							}}>
							<Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
							<Button
								variant="outlined"
								sx={{
									cursor: "unset",
									m: 1,
									py: 0.5,
									px: 7,
									borderColor: "grey !important",
									color: "grey !important",
									fontWeight: 500,
									borderRadius: "25px",
								}}
								disableRipple
								disabled>
								OR
							</Button>
							<Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							{/* <GoogleLogin /> */}
						</Box>
					</Grid>
					<Divider
						sx={{ flexGrow: 1, mb: 1, mt: 1 }}
						orientation="horizontal"
					/>
					{/* forgot password */}
					<Grid item xs={12}>
						<Box
							sx={{
								justifyContent: "center",
								display: "flex",
								alignItems: "center",
							}}>
							<Typography variant="h6">
								Don't have an account?
								<Link
									variant="h6"
									component={RouterLink}
									to="/register"
									color="primary"
									sx={{
										textDecoration: "none",
										borderRadius: "5px",
										"&:hover": {
											bgcolor: "#aaEBEB",
										},
										mt: 2,
										mb: 2,
										pl: 2,
										pr: 2,
										pt: 1,
										pb: 1,
									}}>
									Create Account Here
								</Link>
							</Typography>
						</Box>
					</Grid>
					<Divider
						sx={{ flexGrow: 1, mb: 1, mt: 1 }}
						orientation="horizontal"
					/>
					{/* resend email verification button */}
					<Grid item xs={12}>
						<Box
							sx={{
								justifyContent: "center",
								display: "flex",
								alignItems: "center",
							}}>
							<Typography variant="h6">
								Didn't get the verification email?
								<Link
									variant="h6"
									component={RouterLink}
									to="/resend"
									sx={{
										textDecoration: "none",
										borderRadius: "5px",
										"&:hover": {
											bgcolor: "#aaEBEB",
										},
										mt: 2,
										mb: 2,
										pl: 2,
										pr: 2,
										pt: 1,
										pb: 1,
									}}>
									Resend Email
								</Link>
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</AuthWrapper>
	)
}

export default LoginPage
