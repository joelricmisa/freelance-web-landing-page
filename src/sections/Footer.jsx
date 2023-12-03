import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
const Footer = () => {
	return (
		<Container
			component="footer"
			sx={{ pt: 10 }}>
			<Grid
				container
				columns={4}
				spacing={5}>
				<Grid
					item
					xs>
					<Stack spacing={2}>
						<Link href="#">
							<img
								src="/src/assets/logo.png"
								alt="logo"
							/>
						</Link>
						<Typography>Powerful Freelance Marketplace System with ability to change the Users (Freelancers & Clients)</Typography>
						<Stack
							component="ul"
							direction="row"
							spacing={1}>
							<Link href="#">
								<InstagramIcon color="black" />
							</Link>
							<Link href="#">
								<TwitterIcon />
							</Link>
							<Link href="#">
								<FacebookIcon />
							</Link>
						</Stack>
					</Stack>
				</Grid>

				<Grid
					item
					xs>
					<Typography sx={{ fontWeight: 500, fontSize: 24, mb: 3.5, mt: 1 }}>For Clients</Typography>
					<Stack spacing={2}>
						<Typography>Find Freelancers</Typography>
						<Typography>Post Project</Typography>
						<Typography>Refund Policy</Typography>
						<Typography>Privacy Policy</Typography>
					</Stack>
				</Grid>
				<Grid
					item
					xs>
					<Typography sx={{ fontWeight: 500, fontSize: 24, mb: 3.5, mt: 1 }}>For Freelancers</Typography>
					<Stack spacing={2}>
						<Typography>Find Work</Typography>
						<Typography>Create Account</Typography>
					</Stack>
				</Grid>
				<Grid
					item
					xs>
					<Typography
						sx={{ fontWeight: 500, fontSize: 24, mb: 3.5, mt: 1 }}
						display="flex"
						gap={1}>
						Call Us
					</Typography>
					<Stack spacing={2}>
						<Typography
							display="flex"
							gap={1}>
							<LocationOnIcon /> Philippines
						</Typography>
						<Typography
							display="flex"
							gap={1}>
							<PhoneIcon />
							+63-9765715533
						</Typography>
						<Typography
							display="flex"
							gap={1}>
							<MailIcon /> spacelance@gmail.com
						</Typography>
					</Stack>
				</Grid>
			</Grid>

			<Typography
				textAlign="center"
				color="grey"
				mt={10}
				mb={2}
				fontSize={18}
				component="p">
				2023 Spacelance. All right reserved
			</Typography>
		</Container>
	);
};

export default Footer;
