const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	sort: {
		type: `boolean`,
		alias: `-price-db`,
		desc: `Prints saved prices in the Data base`
	},
	price_db: {
		type: `boolean`,
		alias: `-price-db`,
		desc: `Prints saved prices in the Data base`
	},
	file: {
		type: `boolean`,
		alias: `-price-db`,
		desc: `Prints saved prices in the Data base`
	}
};

const commands = {
	help: { desc: `Print help info` },
	register: { desc: '' },
	balance: { desc: '' },
	print: { desc: 'prints the transactions' }
};

const helpText = meowHelp({
	name: `ledgerlike`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);