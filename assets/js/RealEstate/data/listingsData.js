var listingsData = [
	{
		id: 1,
		address: '95616 Walter St',
		city: 'Atlanta',
		state: 'Ga',
		userName: 'rachel wells',
		rooms: 4,
		baths: 4,
		price: 1000000,
		floorSpace: 6000,
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
		userName: 'Jennifer Williams',
		rooms: 3,
		baths: 2,
		price: 600000,
		floorSpace: 4500,
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
		userName: 'jenna lei',
		rooms: 3,
		baths: 3,
		price: 650500,
		floorSpace: 4000,
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
		userName: 'tom lo',
		rooms: 2,
		baths: 2,
		price: 256000,
		floorSpace: 2500,
		extras: ['garage', 'basement', 'fireplace', 'gym'],
		homeType: 'house',
		image:
			'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		userImage: 'https://randomuser.me/api/portraits/men/90.jpg'
	},
	{
		id: 5,
		address: '95316 Tailway Dr',
		city: 'Buckhead',
		state: 'Ga',
		userName: 'bryan johnson',
		rooms: 2,
		baths: 1,
		price: 350000,
		floorSpace: 2000,
		extras: ['garage', 'basement', 'fireplace', 'gym'],
		homeType: 'condo',
		image:
			'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		userImage: 'https://randomuser.me/api/portraits/men/91.jpg'
	},
	{
		id: 6,
		address: '95067 Treelodge Rd',
		city: 'Atlanta',
		state: 'Ga',
		userName: 'ramina rosloff',
		rooms: 2,
		baths: 2,
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
		userName: 'david tyler',
		rooms: 1,
		baths: 1,
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
		userName: 'jackson smith',
		rooms: 3,
		baths: 3,
		price: 200000,
		floorSpace: 2200,
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
		userName: 'ali wright',
		rooms: 2,
		baths: 2,
		price: 320000,
		floorSpace: 2500,
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
		userName: 'steven becnel',
		rooms: 3,
		baths: 3,
		price: 400000,
		floorSpace: 3500,
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
		userName: 'josh norman',
		rooms: 2,
		baths: 1,
		price: 450000,
		floorSpace: 2300,
		extras: ['garage', 'fireplace', 'gym'],
		homeType: 'townhome',
		image:
			'https://images.pexels.com/photos/4445317/pexels-photo-4445317.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		userImage: 'https://randomuser.me/api/portraits/men/30.jpg'
	},
	{
		id: 12,
		address: '93560 Red Rd',
		city: 'Marietta',
		state: 'Ga',
		userName: 'susie hall',
		rooms: 1,
		baths: 1,
		price: 305000,
		floorSpace: 1700,
		extras: ['garage', 'fireplace', 'gym'],
		homeType: 'townhome',
		image:
			'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
		userImage: 'https://randomuser.me/api/portraits/women/25.jpg'
	}
];

export default listingsData;
