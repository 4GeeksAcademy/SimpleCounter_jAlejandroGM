import React, { useState, useEffect } from "react";

//create your first component
const Counter = () => {

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(time => time + 1)
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const one = counter - Math.floor(counter / 10) * 10;;
	const two = Math.floor(counter / 10);
	const three = Math.floor(counter / 100);
	const four = Math.floor(counter / 1000);
	const five = Math.floor(counter / 10000);
	const six = Math.floor(counter / 100000);

	return (
		<div className="counter">
			<div className="icon">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="six">{six}</div>
			<div className="five">{five}</div>
			<div className="four">{four}</div>
			<div className="three">{three}</div>
			<div className="two">{two}</div>
			<div className="one">{one}</div>
		</div>
	);
};

export default Counter;