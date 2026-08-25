/**
 * Single source of truth for the Curb-King spec site.
 * Public facts only. Update prices and phones here.
 */
export const site = {
	name: 'Curb-King',
	legalName: 'Tool Engineering & Manufacturing, Inc.',
	tagline: 'Landscape concrete curb machines',
	url: 'https://curb-king-spec.vercel.app',
	locale: 'en-US',
	specHost: 'Narrow Road Studios',
	specNote: 'Hosted by Narrow Road Studios — spec preview, not the live Curb-King domain'
} as const;

export const shop = {
	street: '807 West Forest Street',
	city: 'Brigham City',
	region: 'UT',
	regionName: 'Utah',
	postal: '84302',
	country: 'US',
	countryName: 'USA',
	mapsUrl:
		'https://www.google.com/maps/search/?api=1&query=807+West+Forest+Street+Brigham+City+UT+84302'
} as const;

export const phones = {
	sales: {
		label: '1-800-YES-CURB',
		display: '1-800-937-2872',
		tel: '+18009372872',
		hint: 'Sales and packages'
	},
	financing: {
		name: 'Alan',
		display: '435-723-8860',
		tel: '+14357238860',
		hint: 'Financing'
	}
} as const;

export const people = {
	founder: 'Paul McKinnon',
	foundedYear: 1967,
	gm: 'Lane McKinnon'
} as const;

export const starter = {
	name: 'Starter curb package',
	price: 14600,
	priceLabel: '$14,600',
	listedValue: 17011,
	listedValueLabel: '$17,011',
	note: 'Published package price. Confirm current pricing when you call.',
	items: [
		{ name: 'Creative Curb gas machine', priceLabel: '$5,470' },
		{ name: '601 9 cu ft mixer (mount on your own trailer)', priceLabel: '$5,360' },
		{ name: '791h bed-edger trencher, 9 HP', priceLabel: '$4,700' },
		{
			name: 'Three slipform systems with standard trowels (choose from six styles)',
			priceLabel: '$1,481'
		}
	]
} as const;

export const packages = {
	rangeLabel: '$15,000–$50,000',
	rangeNote:
		'Curb-King publishes additional packages from about $15,000 to $50,000, and will build a custom list if the starter mix is not the right fit.',
	customNote: 'Customized packages are available. Call and say what you already own.'
} as const;

export const compare = {
	note: 'Published facts only. Confirm the current list when you call.',
	columns: [
		{
			id: 'starter',
			name: 'Starter curb package',
			price: starter.priceLabel,
			who: 'You need a first machine and the pieces to take first jobs.',
			cta: `Call ${phones.sales.label} for this kit`,
			featured: true
		},
		{
			id: 'custom',
			name: 'Custom shop kit',
			price: packages.rangeLabel,
			who: 'You already own a trailer, mixer, or want a thicker list.',
			cta: 'Call for a custom list',
			featured: false
		}
	],
	rows: [
		{ label: 'Creative Curb gas machine', starter: 'Included', custom: 'Built to order' },
		{ label: '601 9 cu ft mixer', starter: 'Included — mount on your trailer', custom: 'Ask' },
		{ label: '791h bed-edger, 9 HP', starter: 'Included', custom: 'Ask' },
		{ label: 'Slipform systems', starter: 'Three systems, six styles', custom: 'Ask' },
		{ label: 'Franchise fee', starter: 'None — not a franchise', custom: 'None — not a franchise' },
		{ label: 'Who it is for', starter: 'First kit', custom: 'Already have pieces / bigger crew' }
	]
} as const;

export const photoNote =
	'Stock photography from Unsplash and Pexels. Reference only — not Curb-King machines, crews, or jobs.';

export const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/machines', label: 'Machines' },
	{ href: '/business', label: 'Start a business' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' }
] as const;

export const pages = {
	home: {
		path: '/',
		title: 'Curb-King | Landscape curb machines in Brigham City, Utah',
		description:
			'Curb-King builds landscape concrete curbing machines and start-a-shop kits in Brigham City, Utah. Published starter package $14,600. Call 1-800-YES-CURB.'
	},
	machines: {
		path: '/machines',
		title: 'Curb machines and packages | Starter $14,600 | Curb-King',
		description:
			'Published Curb-King starter package at $14,600: Creative Curb gas machine, 9 cu ft mixer, bed-edger, and slipforms. Custom packages $15,000–$50,000.'
	},
	business: {
		path: '/business',
		title: 'Start a landscape curbing business | Curb-King equipment kits',
		description:
			'Buy Curb-King equipment and run your own landscape curbing shop. Not a franchise. Starter kit published at $14,600. Call 1-800-YES-CURB.'
	},
	about: {
		path: '/about',
		title: 'About Curb-King | Tool Engineering, Brigham City UT',
		description:
			'Curb-King is Tool Engineering & Manufacturing, Inc. in Brigham City, Utah. Founded by Paul McKinnon in 1967. Lane McKinnon, general manager.'
	},
	contact: {
		path: '/contact',
		title: 'Contact Curb-King | 1-800-YES-CURB | Brigham City, Utah',
		description:
			'Call Curb-King at 1-800-YES-CURB (937-2872). Shop at 807 West Forest Street, Brigham City, UT 84302. Financing: Alan, 435-723-8860.'
	}
} as const;

export function formatPhoneHref(tel: string) {
	return `tel:${tel}`;
}

export function addressLines() {
	return [shop.street, `${shop.city}, ${shop.region} ${shop.postal}`, shop.countryName];
}

export function localBusinessJsonLd(canonicalOrigin: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${canonicalOrigin}/#business`,
		name: site.name,
		legalName: site.legalName,
		description:
			'Manufacturer of landscape concrete curbing machines and equipment packages in Brigham City, Utah.',
		url: canonicalOrigin,
		telephone: phones.sales.tel,
		address: {
			'@type': 'PostalAddress',
			streetAddress: shop.street,
			addressLocality: shop.city,
			addressRegion: shop.region,
			postalCode: shop.postal,
			addressCountry: shop.country
		},
		areaServed: {
			'@type': 'Country',
			name: 'United States'
		},
		makesOffer: {
			'@type': 'Offer',
			name: starter.name,
			price: starter.price,
			priceCurrency: 'USD',
			description: starter.items.map((item) => item.name).join('; ')
		}
	};
}
