var TransferVerifier = artifacts.require("./TransferVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(TransferVerifier);
};
