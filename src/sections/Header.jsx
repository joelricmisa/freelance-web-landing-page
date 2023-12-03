import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Hero from "./Hero";
const Header = () => {
	return (
		<>
			<Box
				component="header"
				sx={{ backgroundColor: "secondary.main", height: 800, p: 5 }}>
				<Navbar />

				<Hero />
			</Box>
		</>
	);
};

export default Header;
