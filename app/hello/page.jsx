import { notFound } from 'next/navigation';

async function fetchUser(id) {
	// simulated "Page not found" response 
	const res = await fetch("https://httpstat.us/404");

	if (!res.ok) {
		return undefined;
	}

	return res.json();
}

export default async function HelloPage() {
	// console.log('called on server?') // note this doesn't reflect in turbo mode. yes, in `npm run dev` it does
	// only absolute urls are allowed here
	// I suppose because that's because this is on the server
	const req = await fetch(`${process.env.HOSTNAME}/api/hello`);
	const res = await req.json();

	// const user = await fetchUser();

	// shows the not-found.jsx file
	// if (!user) {
	// 	// huh just invoke the function not return
	// 	notFound();
	// }

	// force a server error
	// const req = await fetch('https//httpstat.us/500');
	// const res = await req.json();

	// process the loading state
	await new Promise((resolve) => setTimeout(resolve, 1000));
	
	return <div>Hello {res.name}</div>;
}