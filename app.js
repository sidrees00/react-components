//------beginning of class component
class GroceryListItem extends React.Component {
	//constructor is expected on all ES6 classes
	constructor(props) {
		super(props);
	}

	// Every class component must have a 'render' method
	render() {
		return(
			<li>{this.props.list}</li>
		);
	};
}
//-----end of class component


var GroceryList = (props) => (
	<div>
		<h2>My Grocery List:</h2>
		<GroceryListItem list = {['Milk']}/>
	</div>
);


ReactDOM.render(<GroceryList />, document.getElementById('app'));