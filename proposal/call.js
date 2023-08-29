
async function callVerfier() {
    var TronWeb = require('tronweb');
    var tronWeb = new TronWeb({
        fullNode: 'http://127.0.0.1:26667',
        solidityNode: 'http://127.0.0.1:26668',
        privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
    })

    let abi = [
        {
            "inputs": [
                {
                    "internalType": "uint256[3]",
                    "name": "input",
                    "type": "uint256[3]"
                },
                {
                    "internalType": "uint256[8]",
                    "name": "p",
                    "type": "uint256[8]"
                }
            ],
            "name": "verifyProof",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    let contract = await tronWeb.contract(abi, 'TTm9tCzzbUfDUkCk1DtQty16RLCC6kE64Q'); 
    let result = await contract.verifyProof([0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]).call();
    console.log(result);
}

callVerfier().catch(error => console.log(error));
