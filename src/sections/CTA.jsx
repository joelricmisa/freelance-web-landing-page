import { Box, Button, Container, FormControl, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const CTA = () => {
	return (
		<Box
			component="section"
			sx={{ backgroundColor: "secondary.main", py: 10 }}>
			<Container>
				<Stack alignItems="center">
					<Typography
						fontWeight={500}
						variant="h3"
						component="h1">
						Newsletter Subscription
					</Typography>
					<Typography
						variant="subtitle1"
						fontSize={20}
						component="h2"
						color="grey">
						Subscribe to our newsletter to get new freelance work and projects
					</Typography>
					<FormControl sx={{ width: "50%" }}>
						<TextField
							sx={{ my: 5, bgcolor: "white" }}
							fullWidth
							label="Enter your email address"
							variant="outlined"
						/>
						<Button
							type="submit"
							variant="contained"
							sx={{ display: "block", width: "50%", mx: "auto", textTransform: "capitalize", py: 1, fontSize: 18 }}>
							Subscribe
						</Button>
					</FormControl>
				</Stack>
			</Container>
		</Box>
	);
};

export default CTA;
