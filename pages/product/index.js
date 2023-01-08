import Link from 'next/link'

const ProductList = ({ productId = 100 }) => {
	return (
		<>
			<Link href='/'>Home</Link>
			<h2>
				<Link href='/product/1'>Product 1</Link>
			</h2>
			<h2>
				<Link href='/product/2'>Product 2</Link>
			</h2>
			<h2>
				{/* replace tag will replace the navigation history to home directory */}
				<Link href='/product/3' replace>
					Product 3
				</Link>
			</h2>
			<h2>
				<Link href={`/product/${productId}`}>Product {productId}</Link>
			</h2>
		</>
	)
}
export default ProductList
