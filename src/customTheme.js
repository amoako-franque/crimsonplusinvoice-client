import { createTheme } from "@mui/material"

export const customTheme = createTheme({
	palette: {
		background: {
			default: "#f8f9fa",
		},
		indigo: {
			main: "#6610f2",
		},
		orange: {
			main: "#f4511e",
		},
		green: {
			main: "#07f011",
		},
		blue: {
			main: "#34aadc",
		},

		yellow: {
			main: "#f57c00",
		},
		darkRed: {
			main: "#7f0000",
		},
	},
	components: {
		MuiDrawer: {
			styleOverrides: {
				paper: {
					backgroundColor: "#123",
					color: "#fff",
					boxShadow: "10px 10px 10px black",
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#123",
					color: "#888",
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontSize: "1.3rem",
				},
			},
		},
	},
})
