import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./sections/Header";
import Features from "./sections/Features";
import About from "./sections/About";
import Works from "./sections/Works";
import Categories from "./sections/Categories";
import Portfolio from "./sections/Portfolio";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

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
				<Works />
				<Categories />
				<Portfolio />
				<CTA />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
