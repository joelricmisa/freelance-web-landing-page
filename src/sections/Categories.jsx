import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
	return (
		<Container component="section">
			<Typography
				fontWeight={500}
				fontSize={50}
				textAlign="center">
				Choose Different
				<Typography
					fontWeight={500}
					fontSize={50}
					color="primary"
					sx={{ display: "inline-block", ml: 2 }}>
					Category
				</Typography>
			</Typography>

			<Grid
				container
				spacing={5}
				py={10}>
				{categoriesData.map((category, index) => (
					<CategoryCard
						{...category}
						key={index}
					/>
				))}
			</Grid>

			<Button
				variant="contained"
				color="primary"
				sx={{ textTransform: "capitalize", py: 1, margin: "0 auto", display: "block" }}>
				More Categories
			</Button>
		</Container>
	);
};

const categoriesData = [
	{
		categoryTitle: "Graphic & Design",
		categoryImg: "src/assets/category1.png",
	},
	{
		categoryTitle: "Cartoon Animation",
		categoryImg: "src/assets/category2.png",
	},
	{
		categoryTitle: "Illustration",
		categoryImg: "src/assets/category3.png",
	},
	{
		categoryTitle: "Flyers & Vouchers",
		categoryImg: "src/assets/category4.png",
	},
	{
		categoryTitle: "Logo Design",
		categoryImg: "src/assets/category5.png",
	},
	{
		categoryTitle: "Social Graphics",
		categoryImg: "src/assets/category6.png",
	},
	{
		categoryTitle: "Article Writing",
		categoryImg: "src/assets/category7.png",
	},
	{
		categoryTitle: "Video Editing",
		categoryImg: "src/assets/category8.png",
	},
];

export default Categories;
