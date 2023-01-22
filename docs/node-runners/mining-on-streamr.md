---
sidebar_position: 2
---

# Mining on Streamr
Mining means that a Broker node subscribes to selected incentivized streams and helps propagate the messages in those streams, essentially contributing bandwidth to the stream in exchange for earning DATA tokens. Technically, the mining process is controlled by a mining plugin that is included with the Broker node.

The mining process and associated token economics are described at a high level on the DATA token page on the project website, as well as in the Tokenomics section of the docs.

## Coming in Tatum
The full token economics, along with delegated staking and the ability to incentivize any stream, will be launched in the Tatum milestone.

## Mining in Brubeck
A simplified form of mining is possible in the current mainnet, called Brubeck. To mine, you need to do two things:

- Run a Broker node
- Stake on the Broker node (see below section)

Mining incentives for the Brubeck mainnet have been decided by the Streamr governance process here: [SIP-7](https://snapshot.org/#/streamr.eth/proposal/0x483729ba13a18c5630247d57a28e02241efb47cf52b7055d27488448e1f4e22c).

In Brubeck, the only incentivised streams are special ones created for this purpose. The simplified mining in Brubeck works as follows: When running the Broker node, you are automatically subscribing to these special ‘rewards’ streams, which contain reward codes that are delivered on a random interval. When your Broker node receives a reward code, it will then call our Rewards Backend, and based on this, we are able to verify that your node remains online and is eligible for mining rewards. Additionally, your node's DATA balance is checked - see below for more information on staking.

## Staking in Brubeck
Staking happens by simply transferring DATA tokens to your node's address. Your node's mining rewards are determined by its stake. Before the Rewards Backend publishes a new reward code, it takes a snapshot of DATA balances on the Polygon blockchain. When your Broker node observes a reward code and proves its presence in the incentivized stream to the Rewards Backend, your share of the reward is determined by the DATA balance of your node, relative to the balances of other nodes that also claim the reward code.

You can stake between 0 and 20,000 DATA tokens on your node address. You can, of course, have more DATA on your node address than that, but reward calculation will cap it to 20,000. For example, if the node has 40,000 DATA, can only earn rewards as if it had 20,000 DATA. In order to get the benefits from 40,000 DATA, you need to have two nodes running that each have 20,000 DATA.

At launch, staking is possible only on the Polygon Mainnet. If you have DATA token holdings on the Ethereum Mainnet or some other chain, you need to move them to the Polygon Mainnet and deposit them to the address of your Broker node(s). Only DATA can be used for staking. The stake needs to remain on the node’s address - if you transfer it out, the node will not accumulate rewards anymore. Rewards already claimed will not be affected.