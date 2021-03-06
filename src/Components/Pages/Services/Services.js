import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import SingleServices from "../Home/SingleServices";


const Services = () => {
	return (
		<div>
			<Container>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{Array.from(Array(6)).map((_, index) => (
						<Grid item xs={2} sm={4} md={4} key={index}>
							<SingleServices></SingleServices>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Services;
