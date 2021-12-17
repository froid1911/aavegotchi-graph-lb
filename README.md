# Aavegotchi graph load balancer

This package provides an interface to the Aavegotchi Graph Registry.

## How to use

1. Install package ```npm i aavegotchi-graph-lb```
2. Require lib ```const Lb = require("aavegotchi-graph-lb")``` 
3. Create instance with contract address of Registry and JSON RPC Endpoint (e.g. Polygon Node) ```const lb = new Lb(contractAddress, jsonRPCEndpoint); ```
4. Get randomly selected server for specific Subgraphs: ```const server = await lb.getServer("aavegotchi-core-matic");```
5. Use response to create GraphQL Instance

## Deployed Contracts
| Network| Address|
|:--:|:--:|
| Polygon Mumbai | 0xA584366CC854BFcAbad473fC8fCE549dcbFB0e98 |
| Polygon Mainnet | ... |


## Contribute

Feel free to create a PR and/ or Issues.