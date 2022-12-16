export default async function HelloPage() {
	// console.log('called on server?') // note this doesn't reflect in turbo mode. yes, in `npm run dev` it does
	// only absolute urls are allowed here
	// I suppose because that's because this is on the server
	const req = await fetch('http://localhost:3000/api/hello');
	const res = await req.json();
	return <div>Hello {res.name}</div>;
}