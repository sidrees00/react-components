//------beginning of class component
class GroceryListItem extends React.Component {
	//constructor is expected on all ES6 classes
	constructor(props) {
		super(props);
	
		// state is just an object literal, must be within constructor
		this.state = { done: false };
	}

	onListItemClick() {
		this.setState({done: !this.state.done });
	}

	// Every class component must have a 'render' method
	render() {
		//make the stye condition on our sate
		var style = {
			fontWeight : this.state.done ? 'bold' : 'normal'
		}

		return(
			<li style={style} onMouseEnter={this.onListItemClick.bind(this)} onMouseLeave={this.onListItemClick.bind(this)}>{this.props.list}</li>
		);
	};
}

//-----end of class component

var Grocery = (props) => (
	<ul>
		{props.list.map(list =>
			<GroceryListItem list={list} />
			)}
	</ul>
	);


var GroceryList = (props) => (
	<div>
		<h2>My Grocery List:</h2>
		<Grocery list={['Milk', 'Bread', 'Eggs', 'cheese']}/>
	</div>
);


ReactDOM.render(<GroceryList />, document.getElementById('app'));


/*
- If a component is to be dynamic, it must be a state
- Wtate is only availabe on class components
- We initialize a class conponent's state in its constructor
- Wheneve r this.setState is called, the component re-renders
*/ 