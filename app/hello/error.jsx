// error file 
"use client";

export default function HelloError({ error }) {
	return (
		<>
			<p>Something went wrong</p>
			<pre>{JSON.stringify(error, null, 2)}</pre>
		</>
	)
}