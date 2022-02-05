const ABSToken = artifacts.require("ABSToken");
const ABSCrowdsale = artifacts.require("ABSCrowdsale");

module.exports = async function(deployer, network, accounts) {
    //deploy token contract
    await deployer.deploy(ABSToken, "ABSON KAB TOKENS", "ABSTK", "1000000000000000000000000000");
    const token = await ABSToken.deployed();

    //deploy crowdsale contract
    await deployer.deploy(ABSCrowdsale,"10000000000000000000000", "0xF616C5901adDce6219c3de0AF1757Fef869Cba65", token.address);
    const crowdsale = await ABSCrowdsale.deployed();

    //calculate tokens amount to sale in ICO
    //const totalSupply = await token.totalSupply();
    //const tokenAvailable = totalSupply - 10000000000;

    //transfer token to crowdsale adresse
    token.transfer(crowdsale.address, await token.totalSupply())
};