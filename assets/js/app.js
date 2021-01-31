import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './RealEstate/Header';
import Filter from './RealEstate/Filter';
import Listings from './RealEstate/Listings';
import listingsData from './RealEstate/data/listingsData';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Desi',
			listingsData,
			city: 'Atlanta',
			rooms: 1,
			baths: 1,
			min_price: 0,
			max_price: 8000000,
			min_floor_space: 0,
			max_floor_space: 20000,
			basement: false,
			fireplace: false,
			garage: false,
			gym: false,
			filteredData: listingsData
		};

		this.change = this.change.bind(this);
		this.filteredData = this.filteredData.bind(this);
	}

	change(event) {
		let name = event.target.name;
		let value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
				this.filteredData();
			}
		);
	}

	filteredData() {
		let newData = this.state.listingsData.filter(item => {
			return (
				item.price >= this.state.min_price &&
				item.price <= this.state.max_price &&
				item.floorSpace >= this.state.min_floor_space &&
				item.floorSpace <= this.state.max_floor_space
			);
		});
		this.setState({
			filteredData: newData
		});
	}

	render() {
		return (
			<Fragment>
				<Header />
				<div className="container">
					<section className="content__area">
						<Filter change={this.change} globalState={this.state} />
						<Listings listingsData={this.state.filteredData} />
					</section>
				</div>
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
