import { Box, CssBaseline, Typography } from "@mui/material"

function Copyright() {
	return (
		<Typography variant="body2" align="center" sx={{ color: "#ffffff" }}>
			{"Copyright ©"}
			<span color="inherit"> Crimson Invoice Plus</span>{" "}
			{new Date().getFullYear()} {"."}
		</Typography>
	)
}
const Footer = () => {
	return (
		<Box
			sx={{
				bgcolor: "#000000",
				marginTop: "auto",
			}}
			className="footer">
			<CssBaseline />

			<Box
				component="footer"
				sx={{
					py: 1,
					px: 1,
					mt: "auto",
					bgColor: "#000000",
				}}>
				<Typography
					variant="subtitle1"
					align="center"
					component="p"
					sx={{ color: "#0ccbba" }}>
					<span>All Rights Reserved</span>
				</Typography>
				<Copyright />
			</Box>
		</Box>
	)
}

export default Footer
