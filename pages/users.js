const UserList = ({ users }) => {
	return (
		<>
			<div>UserList</div>
			{users.map(user => {
				return (
					<div key={user.id}>
						<p>{user.name}</p>
						<p>{user.email}</p>
					</div>
				)
			})}
		</>
	)
}

export default UserList

export async function getStaticProps() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json()
	return {
		props: {
			users: data,
		},
	}
}
