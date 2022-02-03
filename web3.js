const Web3 = require('web3')

const RPC_URL = 'https://bsc-dataseed.binance.org/';
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 })
const web3NoAccount = new Web3(httpProvider)

/**
 * Provides a web3 instance using our own private provider httpProver
 */
exports.getWeb3 = () => {
    const web3 = new Web3(httpProvider)
    return web3
}
exports.getContract = (abi, address, contractOptions) => {
    const web3 = getWeb3()
    return new web3.eth.Contract((abi), address, contractOptions)
}

exports.getWeb3NoAccount = () => {
    return web3NoAccount
}

// module.exports = web3NoAccount