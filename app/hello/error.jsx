// error file 
"use client";

import { useEffect } from "react";

export default function HelloError({ error, reset }) {
	useEffect(() => {
		// log the error to a reporting service like Sentry
		/*
		TypeError: Failed to parse URL from https//httpstat.us/500
    at Object.fetch (/reactholiday22/node_modules/next/dist/compiled/undici/index.js:1:26684)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async HelloPage (webpack-internal:///(sc_server)/./app/hello/page.jsx:14:17)
		*/
		console.log(error)
	}, [error])

	return (
		<>
			<p>Something went wrong</p>
			<pre>{JSON.stringify(error, null, 2)}</pre>
			<button onClick={reset}>Try again</button>
		</>
	)
}