import Box from "@mui/material/Box"
import { FcGoogle } from "react-icons/fc"

const baseUrl = "http://localhost:8900/api/v1/"
const GoogleLogin = () => {
	const google = () => {
		// TODO: change this in production
		window.open(`${baseUrl}auth/google`, "_self")
	}
	return (
		<Box sx={{ cursor: "pointer" }} onClick={google}>
			<span className="google-span">
				<FcGoogle className="google-icon" />
				SIGN UP WITH GOOGLE
			</span>
		</Box>
	)
}

export default GoogleLogin
