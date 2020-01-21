import React from "react";
import { Link } from "react-router-dom";

const BeerItem = ({img, name, tag, contributed, key, id}) => {
	return (
		<div className="BeerItem card">
			<img src={img} alt="..."></img>
			<Link to={`/list/${id}`}><p>{name}</p></Link>
			<p>{tag}</p>
			<p>Created by:{contributed}</p>
		</div>
	);
};

export default BeerItem;
