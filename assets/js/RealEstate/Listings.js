import React, { Component } from 'react';

class Listings extends Component {
	constructor() {
		super();
		this.state = {};

		this.loopListings = this.loopListings.bind(this);
	}
	loopListings() {
		let { listingsData } = this.props;

		if (listingsData == undefined || listingsData.length == 0) {
			return 'Sorry, no listings available';
		}

		return listingsData.map((listing, id) => {
			return (
				<div className="listing__card" key={id}>
					<div className="listing__card-image">
						<img src={listing.image} alt="listings image" />
						<section className="listing__card-img-info">
							<div className="listing__card-img-info-home-type">
								{listing.homeType}
							</div>
							<address className="listing__card-img-info-address">
								{listing.address}
							</address>
						</section>
						<div className="listing__overlay">
							<div className="listing__overlay-user-details">
								<figure className="listing__overlay-user-image">
									<img src={listing.userImage} alt="user image" />
								</figure>
								<div className="listing__overlay-user-info">
									<div className="listing__overlay-user-name">
										{listing.userName}
									</div>
									<div className="listing__overlay-date">1/14/21</div>
								</div>
							</div>

							<div className="listing__overlay-listing-details">
								<div className="listing__overlay-floor-space">
									{listing.floorSpace}
									<i className="far fa-square"></i>
									&sup2;
								</div>
								<div className="listing__overlay-rooms">
									{listing.rooms}+<i className="fas fa-bed"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="listing__card-info">
						<div className="listing__card-item">
							<i className="fas fa-dollar-sign"></i>
							<div className="listing__card-item-price">{listing.price}</div>
						</div>
						<div className="listing__card-item">
							<i className="fas fa-map-marker-alt"></i>
							<div className="listing__card-item-city">{listing.city},</div>
							<div className="listing__card-item-state">{listing.state}</div>
						</div>
					</div>
				</div>
			);
		});
	}
	render() {
		return (
			<section className="listings">
				<section className="sortby-area">
					<div className="sortby-area__item-results">
						200 listings available
					</div>
					<div className="sortby-area__item-options">
						<select name="sortby" className="sortby">
							<option value="price__asc">Highest Price</option>
							<option value="price__dsc">Lowest Price</option>
						</select>
					</div>
				</section>
				<section className="listings-results">
					<div className="listings__grid-container">{this.loopListings()}</div>
				</section>
				<section className="pagination">
					<ul className="pages">
						<li>Prev</li>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>Next</li>
					</ul>
				</section>
			</section>
		);
	}
}

export default Listings;
