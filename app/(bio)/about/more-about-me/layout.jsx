export default function Layout({children}) {
	return (
		<main>
			{/* to show going back to nested parent */}
			<nav><a href="/about">{"< "}Go back to About</a></nav>
			{children}
		</main>
	)
}
