import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './RealEstate/Header';
import Filter from './RealEstate/Filter';
import Listings from './RealEstate/Listings';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Desi'
		};
	}
	render() {
		return (
			<Fragment>
				<Header />
				<div className="container">
					<section className="content__area">
						<Filter />
						<Listings />
					</section>
				</div>
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
