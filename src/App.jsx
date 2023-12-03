import Header from "./sections/Header";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
	palette: {
		primary: {
			main: "#1E88E5",
		},
		secondary: {
			main: "#F2FAFA",
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />
			</ThemeProvider>
		</>
	);
}

export default App;
