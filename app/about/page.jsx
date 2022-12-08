// "use client";
import { ABOUT_ME } from './constants'
export default function About() {
	console.log('i am on the server, right? That is until a "use client" is added: then I will be run on each client and the server.')
	return (
		<div>
			<h1>About Me</h1>
			<p>{ABOUT_ME}</p>
		</div>
	);
}