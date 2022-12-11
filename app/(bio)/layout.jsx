// this layout is shared between all the pages in the (bio) folder and nested within
export default function Layout({ children }) {
	return (
		<main>
			{/* goes within the page component for the children and nested within */}
			<nav><a href="/">Home</a></nav>
			{children}
		</main>
	)
}
