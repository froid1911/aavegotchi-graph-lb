const ethers = require("ethers");
const RegistryArtifact = require("./../abis/Registry.json")

module.exports = class {

    constructor(registryContractAddress, jsonRPCProvider) {
        const provider = new ethers.providers.JsonRpcProvider(jsonRPCProvider);
        this.contract = new ethers.Contract(registryContractAddress, RegistryArtifact.abi, provider);
    }

    async getServer(subgraphName) {
        const instance = await this.contract.deployed();
        const servers = await instance.getServers(subgraphName);
        const randomNr = Math.random() * (servers.length-1);
        return servers[randomNr];
    }
}