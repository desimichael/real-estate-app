var listingsData = [
	{
		id: 1,
		address: '95616 Walter St',
		city: 'Atlanta',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 3,
		price: 200000,
		floorSpace: 1000,
		extras: ['garage', 'basement', 'fireplace', 'gym'],
		homeType: 'house',
		image:
			'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		userImage:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg'
	},
	{
		id: 2,
		address: '95776 Peter St',
		city: 'Buckhead',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 3,
		price: 350000,
		floorSpace: 1500,
		extras: ['garage', 'basement', 'fireplace', 'gym'],
		homeType: 'house',
		image:
			'https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
		userImage: 'https://randomuser.me/api/portraits/women/91.jpg'
	},
	{
		id: 3,
		address: '95643 Angle St',
		city: 'Marietta',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 3,
		price: 19500,
		floorSpace: 1700,
		extras: ['garage', 'basement', 'fireplace', 'gym'],
		homeType: 'house',
		image:
			'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userImage: 'https://randomuser.me/api/portraits/women/70.jpg'
	},
	{
		id: 4,
		address: '95616 Trailway',
		city: 'Atlanta',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 2,
		price: 256000,
		floorSpace: 2500,
		extras: ['garage', 'basement', 'fireplace', 'gym'],
		homeType: 'condo',
		image:
			'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		userImage: 'https://randomuser.me/api/portraits/men/90.jpg'
	},
	{
		id: 5,
		address: '95316 Tailway Dr',
		city: 'Buckhead',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 2,
		price: 250000,
		floorSpace: 2000,
		extras: ['garage', 'basement', 'fireplace', 'gym'],
		homeType: 'house',
		image:
			'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		userImage: 'https://randomuser.me/api/portraits/men/91.jpg'
	},
	{
		id: 6,
		address: '95067 Treelodge Rd',
		city: 'Atlanta',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 2,
		price: 150000,
		floorSpace: 2000,
		extras: ['fireplace', 'gym'],
		homeType: 'condo',
		image:
			'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
		userImage: 'https://randomuser.me/api/portraits/women/95.jpg'
	},
	{
		id: 7,
		address: '95096 Rander Rd',
		city: 'Buckhead',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 2,
		price: 250000,
		floorSpace: 2500,
		extras: ['garage', 'fireplace', 'gym'],
		homeType: 'condo',
		image:
			'https://images.pexels.com/photos/221506/pexels-photo-221506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userImage: 'https://randomuser.me/api/portraits/men/95.jpg'
	},
	{
		id: 8,
		address: '54096 Grimer Rd',
		city: 'Buckhead',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 2,
		price: 200000,
		floorSpace: 2500,
		extras: ['garage', 'fireplace', 'gym'],
		homeType: 'condo',
		image:
			'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
		userImage: 'https://randomuser.me/api/portraits/men/55.jpg'
	},
	{
		id: 9,
		address: '95096 Rander Rd',
		city: 'Atlanta',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 2,
		price: 120000,
		floorSpace: 1500,
		extras: ['garage', 'fireplace', 'gym'],
		homeType: 'condo',
		image:
			'https://images.pexels.com/photos/6185561/pexels-photo-6185561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userImage: 'https://randomuser.me/api/portraits/women/67.jpg'
	},
	{
		id: 10,
		address: '93596 Broad Rd',
		city: 'Buckhead',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 2,
		price: 120000,
		floorSpace: 1500,
		extras: ['garage', 'fireplace', 'gym'],
		homeType: 'townhome',
		image:
			'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
		userImage: 'https://randomuser.me/api/portraits/men/45.jpg'
	},
	{
		id: 11,
		address: '91096 Tree Rd',
		city: 'Atlanta',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 2,
		price: 150000,
		floorSpace: 1700,
		extras: ['garage', 'fireplace', 'gym'],
		homeType: 'townhome',
		image:
			'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
		userImage: 'https://randomuser.me/api/portraits/men/30.jpg'
	},
	{
		id: 12,
		address: '93560 Red Rd',
		city: 'Marietta',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 1,
		price: 135000,
		floorSpace: 1500,
		extras: ['garage', 'fireplace', 'gym'],
		homeType: 'townhome',
		image:
			'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
		userImage: 'https://randomuser.me/api/portraits/women/25.jpg'
	}
];

export default listingsData;
