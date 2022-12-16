export default async function HelloPage() {
	// console.log('called on server?') // note this doesn't reflect in turbo mode. yes, in `npm run dev` it does
	// only absolute urls are allowed here
	// I suppose because that's because this is on the server
	const req = await fetch('http://localhost:3000/api/hello');
	const res = await req.json();

	// force a server error
	// const req = await fetch('https//httpstat.us/500');
	// const res = await req.json();

	// process the loading state
	await new Promise((resolve) => setTimeout(resolve, 1000));
	
	return <div>Hello {res.name}</div>;
}