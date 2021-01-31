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
								<select
									name="city"
									className="filters city"
									onChange={this.props.change}
								>
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
									onChange={this.props.change}
								>
									<option value="condo">Condo</option>
									<option value="town_home">Townhome</option>
									<option value="single_home">Single Home</option>
								</select>
							</div>
							<div className="search-area__filters-dropdown-item">
								<label htmlFor="city">Beds</label>
								<select
									name="bed"
									className="filters bed"
									onChange={this.props.change}
								>
									<option value="1 bedroom">1+</option>
									<option value="2 bedroom">2+</option>
									<option value="3 bedroom">3+</option>
									<option value="4 bedroom">4+</option>
								</select>
							</div>
							<div className="search-area__filters-dropdown-item">
								<label htmlFor="city">Baths</label>
								<select
									name="baths"
									className="filters baths"
									onChange={this.props.change}
								>
									<option value="1 bath">1+</option>
									<option value="2 bath">2+</option>
									<option value="3 bath">3+</option>
									<option value="4 bath">4+</option>
								</select>
							</div>
						</div>

						<div className="search-area__filters-text">
							<div className="search-area__filters-text-item">
								<label htmlFor="price">Price</label>
								<div className="search-area__filters-text-item-group">
									<input
										type="text"
										name="min_price"
										className="min__price"
										placeholder="min"
										onChange={this.props.change}
										value={this.props.globalState.min_price}
									/>
									<input
										type="text"
										name="max_price"
										className="max__price"
										placeholder="max"
										onChange={this.props.change}
										value={this.props.globalState.max_price}
									/>
								</div>
							</div>
							<div className="search-area__filters-text-item">
								<label htmlFor="price">Floor Space</label>
								<div className="search-area__filters-text-item-group">
									<input
										type="text"
										name="min_floor_space"
										className="min__floor-space"
										placeholder="min"
										onChange={this.props.change}
										value={this.props.globalState.min_floor_space}
									/>
									<input
										type="text"
										name="max_floor_space"
										className="max__floor-space"
										placeholder="max"
										onChange={this.props.change}
										value={this.props.globalState.max_floor_space}
									/>
								</div>
							</div>
						</div>

						<div className="search-area__filters-extras">
							<span className="title">Extras:</span>
							<div className="search-area__filters-extras-group">
								<div className="search-area__filters-extras-group-item">
									<h6 className="subtitle">Garage</h6>
									<input
										type="checkbox"
										name="garage"
										value="garage"
										onChange={this.props.change}
									/>
								</div>
								<div className="search-area__filters-extras-group-item">
									<h6 className="subtitle">Basement</h6>
									<input
										type="checkbox"
										name="basement"
										value="basement"
										onChange={this.props.change}
									/>
								</div>
								<div className="search-area__filters-extras-group-item">
									<h6 className="subtitle">Fireplace</h6>
									<input
										type="checkbox"
										name="fireplace"
										value="fireplace"
										onChange={this.props.change}
									/>
								</div>
								<div className="search-area__filters-extras-group-item">
									<h6 className="subtitle">Gym</h6>
									<input
										type="checkbox"
										name="gym"
										value="gym"
										onChange={this.props.change}
									/>
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
