var GroceryListItem = (props) => (
	<ul>
		<li>{props.list[0]}</li>
		<li>{props.list[1]}</li>
		<li>{props.list[2]}</li>
	</ul>

	);

//Grocery list is rendered
// Below, you are rendering an instance of GroceryListItem while passing the object list as a paramter. 
var GroceryList = () => (
	<div>
		<h2>My Grocery List:</h2>
		<GroceryListItem list = {['Milk', 'Eggs', 'Bread']}/>
	</div>
);


ReactDOM.render(<GroceryList />, document.getElementById('app'));