import { useEffect, useState } from "react";
import "./App.css";

const weekday = ["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"];

const date = new Date();
let day = weekday[date.getDay()];

const users = [
	{
		username: "sunday",
		age: 15,
		hobbies: ["Football", "Cricket"],
	},
	{
		username: "monday",
		age: 23,
		hobbies: ["Reading", "Writing"],
	},
  {
		username: "tuesday",
		age: 15,
		hobbies: ["Football", "Cricket"],
	},
	{
		username: "wednesday",
		age: 23,
		hobbies: ["Reading", "Writing"],
	},
  {
		username: "thrusday",
		age: 15,
		hobbies: ["Football", "Cricket"],
	},
	{
		username: "friday",
		age: 23,
		hobbies: ["Reading", "Writing"],
	},
  {
		username: "saturday",
		age: 23,
		hobbies: ["Reading", "Writing"],
	},
];

function App() {
	const [subdomain, setSubDomain] = useState(null);
	useEffect(() => {
		const host = window.location.host; // gets the full domain of the app

		const arr = host
			.split(".")
			.slice(0, host.includes("localhost") ? -1 : -2);
		if (arr.length > 0) setSubDomain(arr[0]);
	}, []);
	const requestedUser = users.find((user) => user.username === subdomain);
	return (
		<div className="app">
			{subdomain ? (
				requestedUser ? (
					<div>
						<h1>Username</h1>
						<h3>{requestedUser.username}</h3>
						<h1>Age</h1>
						<h3>{requestedUser.age}</h3>
						<h1>Hobbies</h1>
						<ul>
							{requestedUser.hobbies.map((hobby) => (
								<li key={hobby}>{hobby}</li>
							))}
						</ul>
					</div>
				) : (
          <div> 
            <h1>{day}day is today.</h1>
            <article>
              <p>This website changes its domain name depending on the day.<br></br>
                <p>By Tom Cav, 2023, hello test</p>
              </p>
            </article>
          </div>
				)
			) : (
				<div>
					{users.map((user) => (
						<div>
							<a
								key={user.username}
								href={
									window.location.protocol +
									"//" +
									day +
									"." +
									window.location.host
								}
							>
								{user.username}
							</a>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;