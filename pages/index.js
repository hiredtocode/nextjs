import Link from 'next/link'
import { useRouter } from 'next/router'

const Home = () => {
	const router = useRouter()

	const onPlaceOrder = () => {
		console.log(`Placing your order`)
		router.push('/product')
	}

	return (
		<div>
			<h1>Home Page</h1>

			<Link href='/blog'>Blog</Link>
			<Link href='/users'>Users</Link>
			<Link href='/product'>Products</Link>
			<Link href='/posts'>Posts</Link>
			<button onClick={onPlaceOrder}>Place order</button>
		</div>
	)
}
export default Home
