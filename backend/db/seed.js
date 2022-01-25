const mongoose = require('../db/connection');
const seedData = require('../db/seeds.json');
const Listing = require('../backend/models/Listing.js');

Listing.deleteMany({})
	.then(() => {
		console.log('all listings deleted');
		return seedData.map((listing) => {
			return { ...listing };
		});
	})
	.then((listing) => {
		return Listing.insertMany(listing);
	})
	.then((newListing) => {
		console.log('created new listings', newListing);
	})
	.catch((err) => console.error(err));
