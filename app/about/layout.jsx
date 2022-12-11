export default function Layout({children}) {
	return (
		<main>
			{/* goes within the page component for the children and nested within */}
			<nav><a href="/">Home</a></nav>
			{children}
		</main>
	)
}
