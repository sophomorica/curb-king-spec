export type Photo = {
	src: string;
	alt: string;
	credit: string;
	width: number;
	height: number;
};

/**
 * Licensed stock from Unsplash / Pexels. Local copies live in
 * src/lib/assets/photos for offline work. Production uses the official CDNs.
 */
export const photos = {
	hero: {
		src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=2000',
		alt: 'Dusk light on a finished lawn and wet concrete driveway at a house',
		credit: 'Pexels',
		width: 2000,
		height: 1333
	},
	path: {
		src: 'https://images.pexels.com/photos/10795020/pexels-photo-10795020.jpeg?auto=compress&cs=tinysrgb&w=2200',
		alt: 'Concrete walk slabs set through a green lawn toward a house',
		credit: 'Pexels / Ronny Siegel',
		width: 2200,
		height: 1650
	},
	patio: {
		src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
		alt: 'Dusk lawn and concrete pavers at a finished house',
		credit: 'Unsplash',
		width: 2000,
		height: 1333
	},
	pour: {
		src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=2000',
		alt: 'A hand float smoothing wet concrete in a form',
		credit: 'Pexels',
		width: 2000,
		height: 1333
	},
	mixer: {
		src: 'https://images.unsplash.com/photo-1770822662967-7f66605f9103?auto=format&fit=crop&w=2000&q=80',
		alt: 'Crew loading aggregate into a portable concrete mixer on a job',
		credit: 'Unsplash',
		width: 2000,
		height: 1333
	},
	crewHose: {
		src: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=2000',
		alt: 'A worker in a hard hat carrying a concrete hose',
		credit: 'Pexels',
		width: 2000,
		height: 1333
	},
	crewSite: {
		src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80',
		alt: 'A construction crew standing on a poured concrete slab',
		credit: 'Unsplash',
		width: 2000,
		height: 1333
	},
	lawnFinish: {
		src: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=2000',
		alt: 'A striped finished lawn meeting a house patio',
		credit: 'Pexels',
		width: 2000,
		height: 1328
	},
	suburb: {
		src: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=2000',
		alt: 'Dusk curb appeal — lawn meeting a wet concrete driveway',
		credit: 'Pexels',
		width: 2000,
		height: 1364
	},
	grass: {
		src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80',
		alt: 'Close blades of a maintained lawn',
		credit: 'Unsplash',
		width: 2000,
		height: 1125
	},
	workshop: {
		src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80',
		alt: 'Sparks from steel being cut in a shop',
		credit: 'Unsplash',
		width: 2000,
		height: 1333
	},
	duskField: {
		src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80',
		alt: 'Low sun over a field at dusk',
		credit: 'Unsplash',
		width: 2200,
		height: 1238
	},
	garden: {
		src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=80',
		alt: 'A finished garden path with tight planted edges',
		credit: 'Unsplash',
		width: 2000,
		height: 1125
	}
} as const satisfies Record<string, Photo>;
