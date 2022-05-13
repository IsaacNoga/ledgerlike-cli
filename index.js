#!/usr/bin/env node

/**
 * ledgerlike-cli
 * Initialites a ledger like cli program
 *
 * @author Isaac Noriega <github.com/isaacnoga>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const print = require('./utils/print');
const fs = require('fs');
//Suported commands register, balance and print
//Supported flags sort, prince-db and file
const input = cli.input;
const flags = cli.flags;
const { clear, debug, sort, price, file } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);
	switch(input){
		case input.includes(`register`):
			break;
		case input.includes(`balance`):
			break;
		case input.includes(`print`):

			break;
	}
})();
