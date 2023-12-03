import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const FeatureCard = ({ featureIcon, featureTitle, featureContent }) => {
	return (
		<Grid
			item
			xs>
			<Card elevation={0}>
				<Avatar sx={{ bgcolor: "secondary.main", mx: "auto", p: 5 }}>{featureIcon}</Avatar>
				<CardContent sx={{ textAlign: "center" }}>
					<Typography
						fontWeight={500}
						fontSize={24}>
						{featureTitle}
					</Typography>
					<Typography
						color="grey"
						mt={1}>
						{featureContent}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default FeatureCard;
