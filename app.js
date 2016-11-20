var GroceryListItem = (props) => {
	
	//function that will be invoked in response to event
	var clickHandler = () => (
		console.log('Hello World!!!')
		);

	// Since you are using {} after =>, you must include an explicit return
	// onClick = {function where you want to be directed}
	return (<ul>
		<li onClick={clickHandler}>{props.list[0]}</li>
		<li>{props.list[1]}</li>
		<li>{props.list[2]}</li>
	</ul>);

};

var GroceryList = () => (
	<div>
		<h2>My Grocery List:</h2>
		<GroceryListItem list = {['Milk', 'Eggs', 'Bread']}/>
	</div>
);


ReactDOM.render(<GroceryList />, document.getElementById('app'));