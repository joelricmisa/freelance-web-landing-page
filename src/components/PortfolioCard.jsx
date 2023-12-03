import { Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
const PortfolioCard = ({ portfolioImg, portfolioTitle, portfolioSubtitle }) => {
	return (
		<Grid
			item
			xs={4}>
			<Paper
				elevation={3}
				sx={{ borderRadius: 5, overflow: "hidden" }}>
				<Stack>
					<img
						src={portfolioImg}
						alt=""
					/>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						p={2}>
						<Box>
							<Typography
								fontWeight={500}
								fontSize={20}>
								{portfolioTitle}
							</Typography>
							<Typography color="grey">{portfolioSubtitle}</Typography>
						</Box>
						<IconButton>
							<EastIcon color="primary" />
						</IconButton>
					</Stack>
				</Stack>
			</Paper>
		</Grid>
	);
};

export default PortfolioCard;
