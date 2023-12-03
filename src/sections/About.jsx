import styled from "@emotion/styled";
import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

const About = () => {
	const StyledPaper = styled(Paper)(({ topval, rightval }) => ({
		position: "absolute",
		top: topval,
		right: rightval,
		padding: 10,
		borderRadius: 10,
	}));

	const NumberLabel = styled(Typography)(({ theme }) => ({
		color: theme.palette.primary.main,
		textAlign: "center",
		fontSize: 20,
		fontWeight: 600,
	}));

	const GreyText = styled(Typography)(() => ({
		color: "grey",
	}));

	const TitleText = styled(Typography)(() => ({
		textAlign: "right",
		fontSize: 40,
		fontWeight: 500,
	}));

	return (
		<Container
			component="section"
			sx={{ my: 10 }}>
			<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<Box position="relative">
					<img
						src="/src/assets/aboutImg.png"
						alt="about image"
					/>
					<StyledPaper
						elevation={3}
						topval="20%"
						rightval="30%">
						<NumberLabel>500+</NumberLabel>
						<GreyText>freelancers</GreyText>
					</StyledPaper>

					<StyledPaper
						elevation={3}
						topval="45%"
						rightval="0">
						<NumberLabel>300+</NumberLabel>
						<GreyText>freelancer work Posted</GreyText>
					</StyledPaper>
				</Box>
				<Box width={400}>
					<TitleText>
						Find The Best <TitleText color="primary">Freelancers Here</TitleText>
					</TitleText>

					<GreyText
						mt={2}
						textAlign="right"
						lineHeight={2}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat bibendum ornare urna, cursus eget convallis. Feugiat
						imperdiet posuere justo, ultrices interdum sed orci nunc, mattis. Ipsum viverra viverra neque adipiscing arcu, quam
						dictum. Dui mi viverra dui, sit accumsan, tincidunt massa. Dui cras magnis.
					</GreyText>
				</Box>
			</Box>
		</Container>
	);
};

export default About;
