import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component {
	constructor() {
		super()
		this.state = {
			cats: [],
			searchField: ''	
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ cats: users}))
	}
 
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}

	render() {
		// const { cats searchField } = this.state
		// cats.filter
		const filteredcats = this.state.cats.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		//cats.length
		if (!this.state.cats.length){
			return <h1 className="tc">loading...</h1>
		}
	return(
		<div className="tc">
			<h1 className="f2">CatFriends</h1>
			<SearchBox SearchChange={this.onSearchChange}/>
			<Scroll>
				<CardList cats={filteredcats}/>
			</Scroll>
		</div>
	)
	}
}

export default App;