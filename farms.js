const contracts = require('./contracts')

const farms = [
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'zono-BNB LP',
    lpAddresses: {
      97: '0x362783c55308eBd57E01B8BD332010321291e02d',
      56: '0x362783c55308eBd57E01B8BD332010321291e02d',
    },
    tokenSymbol: 'zono',
    tokenAddresses: {
      97: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
      56: '0xAc97796B45F9627e16da9C93e608579ceEb410a4',
    },
    quoteTokenSymbol: "BNB",
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x45D11635b4701FDD9A5236971B419C6A291ADd45',
      56: '0x45D11635b4701FDD9A5236971B419C6A291ADd45',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: "BUSD",
    quoteTokenAdresses: contracts.busd,
  }
]

module.exports= farms
