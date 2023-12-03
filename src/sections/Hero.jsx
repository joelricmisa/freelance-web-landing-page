import React from "react";
import { Box, Button, Container, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
	return (
		<Container component="section">
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box width={630}>
					<Typography
						fontWeight={700}
						fontSize={65}>
						Are you looking for Freelancers?
					</Typography>
					<Typography
						mt={3}
						color="grey"
						fontSize={24}>
						Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice
					</Typography>
					<Box sx={{ display: "flex", gap: 2, mt: 10 }}>
						<Button
							variant="contained"
							sx={{ textTransform: "capitalize" }}>
							Hire a freelancer
						</Button>

						<Paper>
							<InputBase
								sx={{ ml: 1 }}
								placeholder="Search Freelance Work"
								inputProps={{ "aria-label": "search freelance work" }}
							/>
							<IconButton
								type="button"
								sx={{ p: "10px" }}
								aria-label="search">
								<SearchIcon />
							</IconButton>
						</Paper>
					</Box>
				</Box>
				<img
					src="/src/assets/heroImg.png"
					alt="hero image"
				/>
			</Box>
		</Container>
	);
};

export default Hero;
