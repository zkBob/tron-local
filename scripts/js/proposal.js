
async function executeProposal() {
    var TronWeb = require('tronweb');
    var tronWeb = new TronWeb({
        fullNode: process.env.FULL_NODE_URL,
        solidityNode: process.env.SOLIDITY_NODE_URL,
        privateKey: process.env.PRIVATE_KEY,
    })
    
    var unsignedProposal1Txn = await tronWeb.transactionBuilder.createProposal([{"key":9,"value":1},{"key":10,"value":1},{"key":11,"value":280},{"key":19,"value":90000000000},{"key":15,"value":1},{"key":18,"value":1},{"key":16,"value":1},{"key":20,"value":1},{"key":26,"value":1},{"key":30,"value":1},{"key":5,"value":16000000},{"key":31,"value":160000000},{"key":32,"value":1},{"key":39,"value":1},{"key":41,"value":1},{"key":3,"value":1000},{"key":47,"value":10000000000},{"key":49,"value":1},{"key":13,"value":80},{"key":7,"value":1000000},{"key":61,"value":1500},{"key":63,"value":1}],"41928c9af0651632157ef27a2cf17ca72c575a4d21");
    var signedProposal1Txn = await tronWeb.trx.sign(unsignedProposal1Txn, process.env.PRIVATE_KEY);
    var receipt1 = await tronWeb.trx.sendRawTransaction(signedProposal1Txn);
    console.log(receipt1);
    
    setTimeout(async function() { 
        console.log("Vote proposal!") 
        var unsignedVoteP1Txn = await tronWeb.transactionBuilder.voteProposal(1, true, tronWeb.defaultAddress.hex)
        var signedVoteP1Txn = await tronWeb.trx.sign(unsignedVoteP1Txn, process.env.PRIVATE_KEY);
        var rtn1 = await tronWeb.trx.sendRawTransaction(signedVoteP1Txn);
        console.log(rtn1);
    }, 1000)
}

executeProposal().catch(error => console.log(error));
