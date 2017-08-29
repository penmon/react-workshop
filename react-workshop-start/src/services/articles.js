import axios from 'axios';

export function getAllArticles() {
  return [{
      "id": 314,
      "title": "6 innovative apps utilizing the ethereum network",
      "source": "Investopedia‎",
      "link": "http://www.investopedia.com/news/6-innovative-apps-utilizing-ethereum-network/",
      "date": "1500523200",
      "type": "msm"
    },
    {
      "id": 893,
      "title": "what is plasma and how will it strengthen the ethereum blockchain?",
      "source": "Investopedia‎",
      "link": "http://www.investopedia.com/news/what-plasma-and-how-will-it-strengthen-ethereum-blockchain/",
      "date": "1502856000",
      "type": "msm"
    },
    {
      "id": 320,
      "title": "enterprise ethereum alliance joined by 34 more organizations ...",
      "source": "CoinTelegraph‎",
      "link": "https://cointelegraph.com/news/enterprise-ethereum-alliance-joined-by-34-more-organizations-including-mastercard-and-cisco",
      "date": "1501214400",
      "type": "crypto"
    },
    {
      "id": 338,
      "title": "trust but verify: first ethereum decompiler launched with jp ...",
      "source": "CoinTelegraph‎",
      "link": "https://cointelegraph.com/news/trust-but-verify-first-ethereum-decompiler-launched-with-jp-morgan-project",
      "date": "1501300800",
      "type": "crypto"
    },
    {
      "id": 343,
      "title": "how to actually buy bitcoin or ethereum",
      "source": "Benzinga‎",
      "link": "https://www.benzinga.com/general/education/17/07/9801330/how-to-actually-buy-bitcoin-or-ethereum",
      "date": "1500523200",
      "type": null
    },
    {
      "id": 335,
      "title": "ethereum classic price technical analysis – etc/usd buy dips",
      "source": "newsBTC‎",
      "link": "http://www.newsbtc.com/2017/08/02/ethereum-classic-price-technical-analysis-etcusd-buy-dips/",
      "date": "1501646400",
      "type": "crypto"
    },
    {
      "id": 378,
      "title": "we spoke to the vigilante hackers who stole $85 million in ether to ...",
      "source": "Mashable‎",
      "link": "http://mashable.com/2017/07/26/ethereum-stolen-white-hat-group-rescued/",
      "date": "1501041600",
      "type": "msm"
    },
    {
      "id": 363,
      "title": "no joke: blockchain startup tierion to seek $25 million in ethereum ...",
      "source": "CoinDesk‎",
      "link": "https://www.coindesk.com/no-joke-tierion-seek-25-million-ethereum-token-sale/",
      "date": "1499659200",
      "type": "crypto"
    },
    {
      "id": 383,
      "title": "ethereum price technical analysis – eth/usd upside capped",
      "source": "newsBTC‎",
      "link": "http://www.newsbtc.com/2017/07/25/ethereum-price-technical-analysis-ethusd-upside-capped/",
      "date": "1500868800",
      "type": "crypto"
    },
    {
      "id": 388,
      "title": "ethereum price technical analysis – eth/usd struggle to gain ...",
      "source": "newsBTC‎",
      "link": "http://www.newsbtc.com/2017/08/03/ethereum-price-technical-analysis-ethusd-struggle-gain-momentum/",
      "date": "1501732800",
      "type": "crypto"
    },
    {
      "id": 393,
      "title": "ethereum price weekly analysis – eth/usd may recover soon",
      "source": "newsBTC‎",
      "link": "http://www.newsbtc.com/2017/07/30/ethereum-price-weekly-analysis-ethusd-may-recover-soon/",
      "date": "1501300800",
      "type": "crypto"
    },
    {
      "id": 901,
      "title": "chronologic launches the first 'proof of time' token on ethereum ...",
      "source": "Bitcoinist‎",
      "link": "http://bitcoinist.com/chronologic-launches-first-proof-time-token-ethereum-blockchain-announces-crowdsale/",
      "date": "1502856000",
      "type": "crypto"
    },
    {
      "id": 458,
      "title": "ethereum's superdao enlists the services of ex-google and uber ...",
      "source": "Bitcoinist‎",
      "link": "https://bitcoinist.com/ethereums-superdao-enlists-services-ex-google-uber-developers-sets-timeline-new-dapps-projects/",
      "date": "1501992000",
      "type": "crypto"
    },
    {
      "id": 398,
      "title": "ethereum to hit $1000 in 2019 and its best developers are ...",
      "source": "CryptoCoinsNews‎",
      "link": "https://www.cryptocoinsnews.com/ethereum-hit-1000-2019-best-developers-millionaires-aragon-co-founder/",
      "date": "1499918400",
      "type": "crypto"
    },
    {
      "id": 403,
      "title": "ethereum co-founder helps launch new blockchain startup",
      "source": "Futurism‎",
      "link": "https://futurism.com/ethereum-co-founder-helps-launch-new-blockchain-startup/",
      "date": "1500523200",
      "type": "msm"
    },
    {
      "id": 408,
      "title": "ethereum price technical analysis – eth/usd gaining pace",
      "source": "newsBTC‎",
      "link": "http://www.newsbtc.com/2017/08/01/ethereum-price-technical-analysis-ethusd-gaining-pace/",
      "date": "1501560000",
      "type": "crypto"
    },
    {
      "id": 413,
      "title": "bitcoin to surge nearly 80% to $5000, ethereum to double ...",
      "source": "CNBC‎",
      "link": "https://www.cnbc.com/2017/07/31/bitcoin-to-surge-nearly-80-percent-to-5000-standpoints-moas-predicts.html",
      "date": "1501473600",
      "type": "msm"
    },
    {
      "id": 418,
      "title": "vault one leverages ethereum blockchain technology to secure ...",
      "source": "ETHNews‎",
      "link": "https://www.ethnews.com/vault-one-leverages-ethereum-blockchain-technology-to-secure-data",
      "date": "1501646400",
      "type": "crypto"
    },
    {
      "id": 423,
      "title": "ethereum is on a wild ride",
      "source": "Business Insider‎",
      "link": "http://www.businessinsider.com/ethereum-bitcoin-price-july-13-2017-7",
      "date": "1499918400",
      "type": "msm"
    },
    {
      "id": 433,
      "title": "us top banking exec backs ethereum over bitcoin",
      "source": "CoinTelegraph‎",
      "link": "https://cointelegraph.com/news/us-top-banking-exec-backs-ethereum-over-bitcoin",
      "date": "1499572800",
      "type": "crypto"
    },
    {
      "id": 428,
      "title": "ethereum is the second most valuable digital currency, behind ...",
      "source": "HuffPost‎",
      "link": "http://www.huffingtonpost.com/entry/ethereum-is-the-second-most-valuable-digital-currency_us_596bc5c7e4b022bb9372b2b2",
      "date": "1500264000",
      "type": "msm"
    },
    {
      "id": 438,
      "title": "ethereum weekly price analysis: july 30 - august 6",
      "source": "CoinTelegraph‎",
      "link": "https://cointelegraph.com/news/ethereum-weekly-price-analysis-july-30-august-6",
      "date": "1501992000",
      "type": "crypto"
    },
    {
      "id": 443,
      "title": "there's a house full of cryptocurrency gurus in san francisco, and ...",
      "source": "CNBC‎",
      "link": "https://www.cnbc.com/2017/08/06/bitcoin-ethereum-startups-crypto-castle-san-francisco-commune.html",
      "date": "1501992000",
      "type": "msm"
    },
    {
      "id": 448,
      "title": "the sec is throwing a damper on ethereum madness",
      "source": "The Verge‎",
      "link": "https://www.theverge.com/2017/7/27/16046978/sec-ethereum-cryptocurrency-dao-ico-bitcoin-blockchain",
      "date": "1501128000",
      "type": "msm"
    },
    {
      "id": 453,
      "title": "a cheat sheet to investing in cryptocurrencies, customized just for you",
      "source": "Quartz‎",
      "link": "https://qz.com/1041286/a-cheat-sheet-to-investing-in-cryptocurrencies-customized-just-for-you/",
      "date": "1502078400",
      "type": "msm"
    },
    {
      "id": 463,
      "title": "ethereum struggles to rise as regulatory scrutiny weighs on digital ...",
      "source": "MarketWatch‎",
      "link": "http://www.marketwatch.com/story/ethereum-struggles-to-rise-as-regulatory-scrutiny-weighs-on-digital-currency-2017-07-27",
      "date": "1501128000",
      "type": "msm"
    },
    {
      "id": 544,
      "title": "how ethereum prices will react to bitcoin fork",
      "source": "Profit Confidential‎",
      "link": "http://www.profitconfidential.com/cryptocurrency/ethereum/ethereum-prices-will-react-bitcoin-fork/",
      "date": "1501732800",
      "type": null
    },
    {
      "id": 971,
      "title": "ex-bankers keep falling for digital currencies, integrating crypto in ...",
      "source": "CoinTelegraph‎",
      "link": "https://cointelegraph.com/news/uk-startup-by-former-banker-plans-expansion-into-digital-currency",
      "date": "1500177600",
      "type": "crypto"
    },
    {
      "id": 1042,
      "title": "bitcoin is forking. again.",
      "source": "Motherboard‎",
      "link": "https://motherboard.vice.com/en_us/article/bjjmy8/bitcoin-is-forking-again",
      "date": "1502856000",
      "type": "msm"
    },
    {
      "id": 339,
      "title": "rumor has it vega mines ether like a beast, but it could be fud ...",
      "source": "Tom's Hardware‎",
      "link": "http://www.tomshardware.com/news/vega-ethereum-mining-performance-rumor,35160.html",
      "date": "1501819200",
      "type": null
    },
    {
      "id": 894,
      "title": "researchers find issues with 0x, an ethereum-based project ...",
      "source": "Forbes‎",
      "link": "https://www.forbes.com/sites/amycastor/2017/08/15/researchers-find-issues-with-0x-the-latest-etherem-based-project-aiming-to-raise-millions-in-an-ico/",
      "date": "1502769600",
      "type": "msm"
    },
    {
      "id": 360,
      "title": "pr: bitaccess reveals eft is available to buy bitcoin and ethereum",
      "source": "Bitcoin News (press release)‎",
      "link": "https://news.bitcoin.com/bitaccess-reveals-eft-available-buy-bitcoin-ethereum/",
      "date": "1500350400",
      "type": "crypto"
    },
    {
      "id": 319,
      "title": "pr: monetha challenges paypal's and trustpilot's status quo with ...",
      "source": "Bitcoin News (press release)‎",
      "link": "https://news.bitcoin.com/pr-monetha-challenges-paypals-trustpilots-status-quo-ethereum-blockchain/",
      "date": "1499832000",
      "type": "crypto"
    },
    {
      "id": 325,
      "title": "one of the biggest global currency exchanges is more excited about ...",
      "source": "Quartz‎",
      "link": "https://qz.com/1027425/nex-group-ceo-michael-spencer-may-launch-trading-platforms-for-ethereum-and-ripple/",
      "date": "1499832000",
      "type": "msm"
    },
    {
      "id": 331,
      "title": "“ethereum island” may soon exist off the coast of africa",
      "source": "Futurism‎",
      "link": "https://futurism.com/ethereum-island-may-soon-exist-off-the-coast-of-africa/",
      "date": "1499832000",
      "type": "msm"
    },
    {
      "id": 337,
      "title": "ethereum co-founder takes to twitter to disagree with tezos ...",
      "source": "Futurism‎",
      "link": "https://futurism.com/ethereum-co-founder-takes-to-twitter-to-disagree-with-tezos-blockchain-plan/",
      "date": "1499745600",
      "type": "msm"
    },
    {
      "id": 364,
      "title": "hp gains on ibm with 'mission critical' move into blockchain",
      "source": "CoinDesk‎",
      "link": "https://www.coindesk.com/hp-gains-ibm-mission-critical-move-blockchain/",
      "date": "1502078400",
      "type": "crypto"
    },
    {
      "id": 369,
      "title": "price analysis, july 31: bitcoin, ethereum, ripple, litecoin ...",
      "source": "CoinTelegraph‎",
      "link": "https://cointelegraph.com/news/price-analysis-july-31-bitcoin-ethereum-ripple-litecoin-ethereum-classic",
      "date": "1501473600",
      "type": "crypto"
    },
    {
      "id": 375,
      "title": "ethereum is rising in popularity in venezuela along with bitcoin",
      "source": "CoinTelegraph‎",
      "link": "https://cointelegraph.com/news/ethereum-is-rising-in-popularity-in-venezuela-along-with-bitcoin",
      "date": "1499832000",
      "type": "crypto"
    },
    {
      "id": 381,
      "title": "ethereum, bitcoin prices decline amid wavy crypto markets",
      "source": "CryptoCoinsNews‎",
      "link": "https://www.cryptocoinsnews.com/ethereum-bitcoin-prices-decline-amid-wavy-crypto-markets/",
      "date": "1501041600",
      "type": "crypto"
    },
    {
      "id": 385,
      "title": "how coders hacked back to 'rescue' $208 million in ethereum",
      "source": "Motherboard‎",
      "link": "https://motherboard.vice.com/en_us/article/qvp5b3/how-ethereum-coders-hacked-back-to-rescue-dollar208-million-in-ethereum",
      "date": "1500868800",
      "type": "msm"
    },
    {
      "id": 395,
      "title": "ethereum price analysis: july 4 - july 11",
      "source": "CoinTelegraph‎",
      "link": "https://cointelegraph.com/news/ethereum-price-analysis-july-4-july-11",
      "date": "1499745600",
      "type": "crypto"
    },
    {
      "id": 401,
      "title": "ethereum developers are building a sharding solution using python",
      "source": "The Merkle‎",
      "link": "https://themerkle.com/ethereum-developers-are-building-a-sharding-solution-using-python/",
      "date": "1501732800",
      "type": "crypto"
    },
    {
      "id": 405,
      "title": "the sec ruling should be positive, not negative for bitcoin ...",
      "source": "Forbes‎",
      "link": "https://www.forbes.com/sites/panosmourdoukoutas/2017/07/26/the-sec-ruling-should-be-positive-not-negative-for-bitcoin-ethereum-and-litecoin/",
      "date": "1501041600",
      "type": "msm"
    }
  ]
}
