const addresses = require('./contracts')

const chainId = process.env.REACT_APP_CHAIN_ID

exports.getAddress = (address) => {
    const mainNetChainId = "56"
    // const chainId = process.env.REACT_APP_CHAIN_ID
    return address[chainId] ? address[chainId] : address[mainNetChainId]
}

exports.getCakeAddress = () => {
    return addresses.cake[chainId]
}
exports.getMasterChefAddress = () => {
    return "0x75cA579c1789076E19C519E911fBbb5B995dEa9B"
}
exports.getMulticallAddress = () => {
    return "0x1ee38d535d541c55c9dae27b12edf090c608e6fb"
}
exports.getWbnbAddress = () => {
    return addresses.wbnb[chainId]
}
