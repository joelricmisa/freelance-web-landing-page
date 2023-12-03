import React from "react";

import { Button, styled, Link, Stack, Container, Box } from "@mui/material";
const Navbar = () => {
	const StyledLink = styled(Link)(({ theme }) => ({
		textDecoration: "none",
		color: theme.palette.grey[700],
		fontSize: 20,
		"&:hover": { textDecoration: "underline" },
	}));

	return (
		<Container
			component="nav"
			sx={{ borderRadius: 100, backgroundColor: "white", p: 1 }}>
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<Link href="#">
					<img
						src="/src/assets/logo.png"
						alt="logo"
					/>
				</Link>
				<Stack
					direction="row"
					spacing={4}>
					<StyledLink href="#">Home</StyledLink>
					<StyledLink href="#">Find Work</StyledLink>
					<StyledLink href="#">Find Freelancers</StyledLink>
					<StyledLink href="#">Log In</StyledLink>
					<StyledLink href="#">Sign Up</StyledLink>
				</Stack>
				<Button
					sx={{ borderRadius: 100, bgcolor: "primary.main" }}
					variant="contained">
					Post a project
				</Button>
			</Box>
		</Container>
	);
};

export default Navbar;
