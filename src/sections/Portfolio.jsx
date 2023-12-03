import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
	return (
		<Container
			component="section"
			sx={{ my: 15 }}>
			<Box sx={{ display: "grid", placeItems: "center" }}>
				<Typography
					variant="overline"
					component="h2"
					fontSize={20}
					color="grey"
					textTransform="capitalize">
					Logos, websites, book covers & more!
				</Typography>
				<Typography
					variant="h3"
					component="h1"
					fontWeight={500}>
					Checkout The Best
					<Typography
						variant="h3"
						component="h1"
						fontWeight={500}
						color="primary"
						display="inline-block"
						mx={2}>
						Portfolios
					</Typography>
					Here
				</Typography>
			</Box>
			<Grid
				container
				spacing={5}
				my={5}>
				{portfolioData.map((portfolio, index) => (
					<PortfolioCard
						{...portfolio}
						key={index}
					/>
				))}
			</Grid>
		</Container>
	);
};

const portfolioData = [
	{
		portfolioImg: "src/assets/portfolio1.png",
		portfolioTitle: "Rex Design",
		portfolioSubtitle: "UI/UX Designer",
	},
	{
		portfolioImg: "src/assets/portfolio2.png",
		portfolioTitle: "John Doe",
		portfolioSubtitle: "Graphic Designer",
	},
	{
		portfolioImg: "src/assets/portfolio3.png",
		portfolioTitle: "Marie Lee",
		portfolioSubtitle: "Graphic Designer",
	},
];

export default Portfolio;
