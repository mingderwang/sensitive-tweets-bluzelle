const { bluzelle } = require('../src/main.js');
const config = require('./blz-config.js');
const gas_params = {'gas_price': '10.0'};
var bz;

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

const main = async () => { bz = await bluzelle({
          address: config.address,
          mnemonic: config.mnemonic,
          uuid: "demo-d",
          endpoint: config.endpoint,
          chain_id: config.chain_id
     }); 
     try
     {
//          res = await bz.create("xtest1", "awesome", gas_params);
 //         console.log(typeof res != 'undefined' ? res : "success");

await bz.create(process.argv[2]?process.argv[2]:"same_id", (process.argv[3]?process.argv[3]:"empty parm in command line"), gas_params);

          res = await bz.read(process.argv[2]?process.argv[2]:"same_id", false);
          console.log(typeof res != 'undefined' ? res : "success");
console.log(process.argv[2]?process.argv[2]:"same_id")

//const hasMyKey = await bz.has('mykey');
//console.log(hasMyKey)
     } catch(e)
     {
          console.log(e)
          console.error(e.message);
     }};
main();
