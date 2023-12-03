import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import styled from "@emotion/styled";
import WorkCard from "../components/WorkCard";
const Works = () => {
	const StyledIconBtn = styled(IconButton)(({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		borderRadius: "100%",
		color: "white",
		margin: 10,
		boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"&:hover": { color: "black", backgroundColor: "lightgrey" },
	}));

	return (
		<Container
			component="section"
			sx={{ my: 20 }}>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between">
				<Box>
					<Typography
						variant="overline"
						component="h2"
						fontSize={20}
						color="grey">
						The latest freelance work!
					</Typography>
					<Typography
						variant="h2"
						component="h1"
						fontWeight={500}>
						Recently Posted Works
					</Typography>
				</Box>
				<Box>
					<StyledIconBtn>
						<WestIcon />
					</StyledIconBtn>
					<StyledIconBtn>
						<EastIcon />
					</StyledIconBtn>
				</Box>
			</Stack>

			<Grid
				container
				spacing={5}
				columns={3}
				my={4}
				direction="row">
				{worksData.map((work, index) => (
					<WorkCard
						{...work}
						key={index}
					/>
				))}
			</Grid>
		</Container>
	);
};

const worksData = [
	{
		workImg: "/src/assets/materialUi.png",
		workTitle: "Logo Design",
		workContent: "Need a professional logo with writing underneath for our jewellery company",
		workBid: "$500",
	},
	{
		workImg: "/src/assets/canvaApp.png",
		workTitle: "Graphic Design",
		workContent: "We need a graphic designer with UI/UX skills for our Furniture company",
		workBid: "$500",
	},
	{
		workImg: "/src/assets/account.png",
		workTitle: "Need a SEO",
		workContent: "Need a SEO for our company who will let our company to a higher level",
		workBid: "$300",
	},
];

export default Works;
