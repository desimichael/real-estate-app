import React, { Component } from 'react';

class Listings extends Component {
	state = {};
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
					<div className="listings__grid-container">
						<div className="listing__card">
							<div className="listing__card-image">
								<img
									src={
										'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
									}
									alt="listings image"
								/>
								<section className="listing__card-img-info">
									<div className="listing__card-img-info-home-type">house</div>
									<address className="listing__card-img-info-address">
										95616 Walter St
									</address>
								</section>
								<div className="listing__overlay">
									<div className="listing__overlay-user-details">
										<figure className="listing__overlay-user-image">
											<img
												src={
													'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg'
												}
												alt="user image"
											/>
										</figure>
										<div className="listing__overlay-user-info">
											<div className="listing__overlay-user-name">
												rachel wells
											</div>
											<div className="listing__overlay-date">1/14/21</div>
										</div>
									</div>

									<div className="listing__overlay-listing-details">
										<div className="listing__overlay-floor-space">
											1000
											<i className="far fa-square"></i>
											&sup2;
										</div>
										<div className="listing__overlay-rooms">
											2+<i className="fas fa-bed"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="listing__card-info">
								<div className="listing__card-item">
									<i className="fas fa-dollar-sign"></i>
									<div className="listing__card-item-price">200000</div>
								</div>
								<div className="listing__card-item">
									<i className="fas fa-map-marker-alt"></i>
									<div className="listing__card-item-city">Atlanta,</div>
									<div className="listing__card-item-state">Ga</div>
								</div>
							</div>
						</div>
					</div>
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
