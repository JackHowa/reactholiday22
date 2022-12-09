// default tags are meant to be used in every page if not overwritten by head or other tags logic
// via https://beta.nextjs.org/docs/api-reference/file-conventions/head#sharing-tags-across-multiple-routes

export default function DefaultTags() {
	return ( 
		<>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<link rel="icon" href="/favicon.ico" />
		</>
	)
}