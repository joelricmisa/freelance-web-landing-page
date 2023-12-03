import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import FeatureCard from "../components/FeatureCard";
import PersonIcon from "@mui/icons-material/Person";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import SaveIcon from "@mui/icons-material/Save";
const Features = () => {
	return (
		<Container component="section">
			<Paper>
				<Grid
					container
					columns="3"
					spacing={5}
					p={5}>
					{featuresData.map((feature, index) => (
						<FeatureCard
							key={index}
							{...feature}
						/>
					))}
				</Grid>
			</Paper>
		</Container>
	);
};

const featuresData = [
	{
		featureIcon: (
			<PersonIcon
				color="primary"
				fontSize="large"
			/>
		),
		featureTitle: "Create Account",
		featureContent: "First you have to create a account  here",
	},
	{
		featureIcon: (
			<FindInPageIcon
				color="primary"
				fontSize="large"
			/>
		),
		featureTitle: "Search Work",
		featureContent: "Search the best freelance work here",
	},
	{
		featureIcon: (
			<SaveIcon
				color="primary"
				fontSize="large"
			/>
		),
		featureTitle: "Save and apply",
		featureContent: "Apply or save and start your work",
	},
];

export default Features;
