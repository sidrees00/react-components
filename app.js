var GroceryListItem = (props) => (
	<ul>
		<li>{props.list[0]}</li>
		<li>{props.list[1]}</li>
		<li>{props.list[2]}</li>
	</ul>

	);

var GroceryList = () => (
	<div>
		<h2>My Grocery List:</h2>
		<GroceryListItem list = {['Milk', 'Eggs', 'Bread']}/>
	</div>
);


ReactDOM.render(<GroceryList />, document.getElementById('app'));