function ListGroup() {
	const items = [
		"New York",
		"Nairobi",
		"Hellsinki",
		"Paris",
		"Tokyo",
		"London",
	]

	return (
		<>
			<h1>List</h1>
			<ul className="list-group">
				{items.length === 0 && <p>No item found</p>}
				{items.map(item => <li key={item} className="list-group-item">{item}</li>)}
			</ul>
		</>
	);
}

export default ListGroup;
