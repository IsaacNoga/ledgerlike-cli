const fs = require('fs');

const ledgerIndexFile = 'ledger-cli/ledgerlike-cli/ledger-sample-files/index.ledger';
/*onst fileRegister ={
    date: RegExp = /(/\d+\/\d+\/\d+/),
    description:'s',
}
*/
const printLedger = (resultFile) =>{
    
    fileContent = fs.readFile(ledgerIndexFile);
    fileContent.forEach(element => {
        
    });
};