const farmData = require("./fetchFarms");
const BigNumber = require('bignumber.js');
const ZERO = new BigNumber(0);
const ZEROPOINT1 = new BigNumber(0.01);
const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors());

app.get('/health', async function (req, res) {
    res.status(200).send("api okay");
});

// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/price', async function (req, res) {
    try {
        let data = await farmData()
        const farm = data[0];
        const farmBNB = data[1];
        const bnbPriceUSD = farmBNB.tokenPriceVsQuote ? new BigNumber(farmBNB.tokenPriceVsQuote) : ZERO
        console.log("bnb price",bnbPriceUSD.toNumber())
        let price = farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZEROPOINT1
        console.log("zono price",price.toNumber())
        return res.status(200).json({price : price.toNumber()});
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})