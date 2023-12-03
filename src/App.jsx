import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./sections/Header";
import Features from "./sections/Features";
import About from "./sections/About";

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
				<Features />
				<About />
			</ThemeProvider>
		</>
	);
}

export default App;
