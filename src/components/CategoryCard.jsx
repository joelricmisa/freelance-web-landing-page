import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const CategoryCard = ({ categoryTitle, categoryImg }) => {
	return (
		<Grid
			item
			xs={3}>
			<Card
				sx={{
					backgroundImage: `url('${categoryImg}')`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					height: 250,
					borderRadius: 5,
				}}>
				<Typography
					sx={{
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(0,0,0,0.5)",
						display: "grid",
						placeItems: "center",
						color: "white",
						fontSize: 20,
						fontWeight: 500,
					}}>
					{categoryTitle}
				</Typography>
			</Card>
		</Grid>
	);
};

export default CategoryCard;
