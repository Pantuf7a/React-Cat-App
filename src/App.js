import './App.css';
import { Component } from 'react';
import { CardList } from './components/card__list/CardList';
import { SearchBox } from './components/search__box/SearchBox' 

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      cats: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({cats: users}))
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  
  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat => 
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Cats React App</h1>
        <SearchBox placeholder="Search cats" handleChange={this.handleChange}/>
        <CardList cats={filteredCats} />
      </div>
    );
  }
}


export default App;
