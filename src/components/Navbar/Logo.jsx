import { FaFileInvoiceDollar } from "react-icons/fa"
import { Link, Stack, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const Logo = () => {
	return (
		<Stack direction="row" spacing={1} alignItems="center">
			<Link component={RouterLink} to="/" sx={{ textDecoration: "none" }}>
				<FaFileInvoiceDollar
					sx={{
						display: { xs: "none", md: "flex" },
						mr: 1,
						fontSize: 50,
						color: "#07f011",
						cursor: "pointer",
					}}
				/>
			</Link>
			<Typography
				variant="h5"
				component="div"
				sx={{
					flexGrow: 1,
					cursor: "pointer",
					display: { xs: "none", md: "flex" },
				}}>
				<Link
					component={RouterLink}
					to="/"
					sx={{ textDecoration: "none", color: "white" }}>
					Crimson Invoice Plus
				</Link>
			</Typography>
		</Stack>
	)
}

export default Logo
