import React from "react";

const BeerItemExtra = ({first_brewed, attenuation_level, description}) => {
	return (
		<div className="BeerItem card">
			<p>{first_brewed}</p>
            <p>{attenuation_level}</p>
            <p>{description}</p>            
		</div>
	);
};

export default BeerItemExtra;