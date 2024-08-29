import { Box, Button, Grid, Link, styled, Typography } from "@mui/material"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import "../styles/homepage.css"

const StyledTypography = styled(Typography)(({ theme }) => ({
	fontSize: "12rem",
	[theme.breakpoints.down("sm")]: {
		fontSize: "9rem",
	},
}))

const CreateAccountButton = styled(Button)({
	borderColor: "#000000",
	borderRadius: "25px",
	border: "3px solid",
	"&:hover": {
		borderColor: "#acdfab",
		boxShadow: "none",
		border: "2px solid",
	},
})

const AccessAccountButton = styled(Button)({
	borderColor: "#000000",
	borderRadius: "25px",
	border: "3px solid",
	"&:hover": {
		borderColor: "#acdfab",
		boxShadow: "none",
		border: "2px solid",
	},
})

const HomePage = () => {
	const navigate = useNavigate()
	return (
		<>
			<header className="masthead main-bg-image">
				<Grid>
					<Grid item md={12} lg={12} sm={6}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<StyledTypography
								variant="h1"
								align="center"
								sx={{ textTransform: "uppercase", mt: "13rem" }}
								className="homepage-header">
								Local Store Invoice
							</StyledTypography>
							<Typography
								align="center"
								variant="h4"
								component="div"
								gutterBottom
								sx={{ color: "rgba(255,255,255,0.6)" }}>
								Whatever <span className="business">business</span> you run,
								Creating
								<span className="businessI"> Invoices,Receipts</span> and{" "}
								<span className="businessQ"> Quotations</span> is made easy with
								our app.
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								mt: 5,
							}}>
							<CreateAccountButton
								variant="contained"
								size="large"
								color="background"
								sx={{
									fontSize: "1.5em",
									borderRadius: "15px",
									"&:hover": { color: "darkgray" },
								}}
								onClick={() => navigate("/register")}>
								<Link
									component={RouterLink}
									to="/register"
									sx={{
										textDecoration: "none",
										color: "bisque",
										fontSize: "2rem",
										cursor: "pointer",
										"&:hover": {
											color: "indianred",
										},
									}}>
									Create Account
								</Link>
							</CreateAccountButton>
							<AccessAccountButton
								variant="contained"
								color="background"
								size="large"
								sx={{
									fontSize: "1.5em",

									ml: 10,
									"&:hover": {
										color: "#07f011",
										borderRadius: "15px",
										borderColor: " #a12bc1",
									},
								}}
								onClick={() => navigate("/login")}>
								<Link
									component={RouterLink}
									to="/login"
									sx={{
										textDecoration: "none",
										color: "#07f011",
										fontSize: "2rem",
										"&:hover": {
											color: "darkolivegreen",
											borderRadius: "15px",
											borderColor: " #a12bc1",
										},
									}}>
									Access Account
								</Link>
							</AccessAccountButton>
						</Box>
					</Grid>
				</Grid>
			</header>
		</>
	)
}

export default HomePage
