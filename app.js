// TODO
/*
------------------------------------------------------------------
Creating and Rendering a Reach Component
------------------------------------------------------------------
*/

// var Eggs = () => (
//   <li>Eggs</li>
// );

// var Bread = () => (
//   <li>Bread</li>
// );

// var GroceryList = () => (
//   <ul>
//     <Eggs />
//     <Bread />
//   </ul>
// );

// ReactDOM.render(<GroceryList />, document.getElementById('app'));

/*
------------------------------------------------------------------
Creating and Rendering NESTED React Components,
Passing in Data,
Handling User Events
------------------------------------------------------------------
*/

// var onListItemClick = (event) => {
//   console.log('I got clicked');
// };

// var GroceryListItem = (items) => (
//   <ul>
//     <li onClick={onListItemClick}>{items.groceryItems[0]}</li>
//     <li>{items.groceryItems[1]}</li>
//     <li>{items.groceryItems[2]}</li>
//   </ul>
// );

// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem groceryItems={['Eggs', 'Bread', 'Milk']}/>
//   </div>
// );

/*
------------------------------------------------------------------
Iteractive with state (TodoList example)
------------------------------------------------------------------
*/

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
// class TodoListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }

//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {

//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li>{this.props.todo}</li>
//     );

//   }

// }

// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var TodoList = (props) => (
//   <ul>
//     {console.log(props.todos)};
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );

// ReactDOM.render(<TodoList todos={[1, 2]}/>, document.getElementById('app'));

/*
------------------------------------------------------------------
Iteractive with state
------------------------------------------------------------------
*/

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.groceryItem}</li>
//     );
//   }
// };

// var GroceryList = (props) => (
//   <ul>
//     {props.groceryItems.map(groceryItem =>
//       <GroceryListItem groceryItem={groceryItem} />
//     )}
//   </ul>
// )

// ReactDOM.render(<GroceryList groceryItems={['Eggs', 'Milk', 'Bread']}/>, document.getElementById('app'));

/*
------------------------------------------------------------------
Iteractive with state continued
------------------------------------------------------------------
*/

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // state style is updated based on user interaction
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    // can pass inline styles using React's 'style' attr to any component
    // snake-cased css props -> camelCased
    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
};

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
)

ReactDOM.render(<GroceryList groceryItems={['Eggs', 'Milk', 'Bread']}/>, document.getElementById('app'));
