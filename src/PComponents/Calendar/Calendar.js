import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
	format,
	parse,
	startOfWeek,
	endOfWeek,
	startOfMonth,
	endOfMonth,
	addDays,
	addMonths,
	subMonths,
	isSameMonth,
	isSameDay,
} from "date-fns";

import "./calendar.css";

const Calendar = (props) => {
	// .map((entry) => {
	// 	var st = entry.start_time
	// 	var t =moment(entry.start_time.split("  ")[0]).tz("America/Los_Angeles").format('DD-MMMM-yyyy')
	// 	console.log(t)
	// })
	const timelist = props.location.calendarProps.member.activity_periods;

	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	const header = () => {
		const dateFormat = "MMMM yyyy";
		return (
			<div className="header row flex-middle">
				<div className="column col-start">
					<div className="icon" onClick={prevMonth}>
						<i className="fas fa-chevron-left"></i>
					</div>
				</div>
				<div className="column col-center">
					<span>{format(currentDate, dateFormat)}</span>
				</div>
				<div className="column col-end">
					<div className="icon" onClick={nextMonth}>
						<i className="fas fa-chevron-right"></i>
					</div>
				</div>
			</div>
		);
	};
	const days = () => {
		const dateFormat = "ddd";
		const days = [];
		let startDate = startOfWeek(currentDate);
		for (let i = 0; i < 7; i++) {
			days.push(
				<div className="column col-center" key={i}>
					{format(addDays(startDate, i), dateFormat)}
				</div>
			);
		}
		return <div className="days row">{days}</div>;
	};
	const func = (entry, formattedDate) => {
		return (
			<React.Fragment>
				{timelist.map((entry) =>
					currentDate.getMonth() ===
						new Date(entry.start_time.split("  ")[0]).getMonth() &&
					new Date(entry.start_time.split("  ")[0]).getDate() ===
						formattedDate ? (
						<span>
							{console.log(
								currentDate.getMonth() ===
									new Date(entry.start_time.split("  ")[0]).getMonth() &&
									new Date(entry.start_time.split("  ")[0]).getDate() ===
										formattedDate
							)}
							{entry.start_time.split("  ")[1]}
							{entry.end_time.split("  ")[1]}
						</span>
					) : (
						<></>
					)
				)}
			</React.Fragment>
		);
	};

	const cells = (list) => {
		const monthStart = startOfMonth(currentDate);
		const monthEnd = endOfMonth(monthStart);
		const startDate = startOfWeek(monthStart);
		const endDate = endOfWeek(monthEnd);
		const dateFormat = "d";
		const rows = [];
		let days = [];
		let day = startDate;
		let formattedDate = "";
		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = format(day, dateFormat);
				const cloneDay = day;
				days.push(
					<div
						className={`column cell ${
							!isSameMonth(day, monthStart)
								? "disabled"
								: isSameDay(day, selectedDate)
								? "selected"
								: ""
						}`}
						key={day}
						onClick={() => onDateClick(parse(cloneDay))}
					>
						{func()}
						<span className="number">{formattedDate}</span>
						<span className="bg">{formattedDate}</span>
					</div>
				);
				day = addDays(day, 1);
			}
			rows.push(
				<div className="row" key={day}>
					{" "}
					{days}{" "}
				</div>
			);
			days = [];
		}
		return <div className="body">{rows}</div>;
	};
	const nextMonth = () => {
		setCurrentDate(addMonths(currentDate, 1));
	};
	const prevMonth = () => {
		setCurrentDate(subMonths(currentDate, 1));
	};
	const onDateClick = (day) => {
		setSelectedDate(day);
	};

	return (
		<>
			<div className="calendar">
				<div>{header()}</div>
				<div>{days()}</div>
				<div>{cells()}</div>
			</div>
			<div className="go-back-btn-wrapper">
				<Link to="/userview">
					<button className="go-back-button">
						<span className="view-users-button__title">
							<i className="fas fa-chevron-left"></i>
							&nbsp;&nbsp;Go Back
						</span>
					</button>
				</Link>
			</div>
		</>
	);
};
export default withRouter(Calendar);
