import React, { Component } from 'react';

class Filter extends Component {
	state = {};
	render() {
		return (
			<section className="filter">
				<section className="search-area">
					<form className="search-area__input">
						<i className="fas fa-search"></i>
						<input type="text" name="search" id="search" placeholder="Search" />
					</form>
					<section className="search-area__filters">
						<div className="search-area__filters-dropdown">
							<div className="search-area__filters-dropdown-item">
								<label htmlFor="city">City</label>
								<select name="city" className="filters city">
									<option value="atlanta">Atlanta</option>
									<option value="buckhead">Buckhead</option>
									<option value="merietta">Merietta</option>
								</select>
							</div>
							<div className="search-area__filters-dropdown-item">
								<label htmlFor="propertyType">Property Type</label>
								<select
									name="property__type"
									className="filters property__type"
								>
									<option value="condo">Condo</option>
									<option value="townHome">Townhome</option>
									<option value="singleHome">Single Home</option>
								</select>
							</div>
							<div className="search-area__filters-dropdown-item">
								<label htmlFor="city">Beds</label>
								<select name="bed" className="filters bed">
									<option value="room1">1+</option>
									<option value="room2">2+</option>
									<option value="room3">3+</option>
								</select>
							</div>
							<div className="search-area__filters-dropdown-item">
								<label htmlFor="city">Baths</label>
								<select name="baths" className="filters baths">
									<option value="bath1">1+</option>
									<option value="bath2">2+</option>
									<option value="bath3">3+</option>
								</select>
							</div>
						</div>

						<div className="search-area__filters-text">
							<div className="search-area__filters-text-item">
								<label htmlFor="price">Price</label>
								<div className="search-area__filters-text-item-group">
									<input type="text" className="min__price" placeholder="min" />
									<input type="text" className="max__price" placeholder="max" />
								</div>
							</div>
							<div className="search-area__filters-text-item">
								<label htmlFor="price">Floor Space</label>
								<div className="search-area__filters-text-item-group">
									<input type="text" className="min__price" placeholder="min" />
									<input type="text" className="max__price" placeholder="max" />
								</div>
							</div>
						</div>

						<div className="search-area__filters-extras">
							<span className="title">Extras:</span>
							<div className="search-area__filters-extras-group">
								<div className="search-area__filters-extras-group-item">
									<h6 className="subtitle">Garage</h6>
									<input type="checkbox" name="extras" value="garage" />
								</div>
								<div className="search-area__filters-extras-group-item">
									<h6 className="subtitle">Basement</h6>
									<input type="checkbox" name="extras" value="basement" />
								</div>
								<div className="search-area__filters-extras-group-item">
									<h6 className="subtitle">Fireplace</h6>
									<input type="checkbox" name="extras" value="fireplace" />
								</div>
								<div className="search-area__filters-extras-group-item">
									<h6 className="subtitle">Gym</h6>
									<input type="checkbox" name="extras" value="gym" />
								</div>
							</div>
						</div>
					</section>
				</section>
			</section>
		);
	}
}

export default Filter;
