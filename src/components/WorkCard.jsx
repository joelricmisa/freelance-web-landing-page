import { Avatar, Grid, Paper, Stack, Typography, Link } from "@mui/material";
import React from "react";

const WorkCard = ({ workImg, workTitle, workContent, workBid }) => {
	return (
		<Grid
			item
			xs>
			<Paper sx={{ display: "grid", placeItems: "center", p: 5, gap: 2, borderRadius: 10 }}>
				<Avatar
					src={workImg}
					sx={{ height: 50, width: 50 }}
				/>
				<Typography
					variant="h5"
					component="h2"
					fontWeight={500}>
					{workTitle}
				</Typography>
				<Typography color="grey">{workContent}</Typography>
				<Stack
					mt={2}
					direction="row"
					alignItems="center"
					spacing={5}>
					<Typography
						fontSize={18}
						fontWeight={500}
						color="grey"
						textAlign="center">
						Highest bid <br /> {workBid}
					</Typography>
					<Link
						fontSize={18}
						fontWeight={500}>
						Apply Now
					</Link>
				</Stack>
			</Paper>
		</Grid>
	);
};

export default WorkCard;
