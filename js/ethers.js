// Made with <3 by CypherLabz
/*********************************************************************************/
/************************************ CONFIG *************************************/
/*********************************************************************************/

const correctNetworkID = 1;
// const correctNetworkID = 5;

const mainnet = correctNetworkID === 1;

const AUCTION_START_TIMESTAMP = 1682524800;
const AUCTION_RESTING_PRICE_TIMESTAMP = AUCTION_START_TIMESTAMP + 3600;
const ALLOWLIST_START_TIMESTAMP = 1682528400;
const ALLOWLIST_END_TIMESTAMP = 1682537400;
const PROJECT_ID = 1;

// Flip stage manually
const DUTCH_AUCTION_LIVE = false;
const ALLOWLIST_LIVE = false;
const FIXED_MINTER_LIVE = true;

const dutchAuctionAddressMainnet = "0x7a67130593A161124686EA55484D1A64d99eefc9";
const dutchAuctionAddressTestnet = "0x294fED5F1D3D30cfA6Fe86A937dC3141EEc8bC6d";
const dutchAuctionAddress = mainnet ? dutchAuctionAddressMainnet : dutchAuctionAddressTestnet;
const dutchAuctionAbi = `[ { "inputs": [ { "internalType": "address", "name": "_genArt721Address", "type": "address" }, { "internalType": "address", "name": "_minterFilter", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "ArtistAndAdminRevenuesWithdrawn", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "_minimumPriceDecayHalfLifeSeconds", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_maximumPriceDecayHalfLifeSeconds", "type": "uint256" } ], "name": "AuctionHalfLifeRangeSecondsUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" } ], "name": "ConfigKeyRemoved", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "_value", "type": "bytes32" } ], "name": "ConfigValueRemovedFromSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "_value", "type": "bytes32" } ], "name": "ConfigValueSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "_pricePerTokenInWei", "type": "uint256" } ], "name": "PricePerTokenInWeiUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "_currencyAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "_currencySymbol", "type": "string" } ], "name": "ProjectCurrencyInfoUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_maxInvocations", "type": "uint256" } ], "name": "ProjectMaxInvocationsLimitUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "_purchaseToDisabled", "type": "bool" } ], "name": "PurchaseToDisabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "_purchaser", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_numPurchased", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_netPosted", "type": "uint256" } ], "name": "ReceiptUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_selloutPrice", "type": "uint256" } ], "name": "SelloutPriceUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "projectId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_auctionTimestampStart", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_priceDecayHalfLifeSeconds", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_startPrice", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_basePrice", "type": "uint256" } ], "name": "SetAuctionDetails", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "uint256", "name": "_newSelloutPrice", "type": "uint256" } ], "name": "adminEmergencyReduceSelloutPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "genArt721CoreAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "getNumSettleableInvocations", "outputs": [ { "internalType": "uint256", "name": "numSettleableInvocations", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "getPriceInfo", "outputs": [ { "internalType": "bool", "name": "isConfigured", "type": "bool" }, { "internalType": "uint256", "name": "tokenPriceInWei", "type": "uint256" }, { "internalType": "string", "name": "currencySymbol", "type": "string" }, { "internalType": "address", "name": "currencyAddress", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "address", "name": "_walletAddress", "type": "address" } ], "name": "getProjectExcessSettlementFunds", "outputs": [ { "internalType": "uint256", "name": "excessSettlementFundsInWei", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "getProjectLatestPurchasePrice", "outputs": [ { "internalType": "uint256", "name": "latestPurchasePrice", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isEngine", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "uint256", "name": "_maxInvocations", "type": "uint256" } ], "name": "manuallyLimitProjectMaxInvocations", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "maximumPriceDecayHalfLifeSeconds", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minimumPriceDecayHalfLifeSeconds", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minterFilterAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minterType", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "projectAuctionParameters", "outputs": [ { "internalType": "uint256", "name": "timestampStart", "type": "uint256" }, { "internalType": "uint256", "name": "priceDecayHalfLifeSeconds", "type": "uint256" }, { "internalType": "uint256", "name": "startPrice", "type": "uint256" }, { "internalType": "uint256", "name": "basePrice", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "projectConfig", "outputs": [ { "internalType": "bool", "name": "maxHasBeenInvoked", "type": "bool" }, { "internalType": "uint24", "name": "maxInvocations", "type": "uint24" }, { "internalType": "bool", "name": "auctionRevenuesCollected", "type": "bool" }, { "internalType": "uint24", "name": "numSettleableInvocations", "type": "uint24" }, { "internalType": "uint64", "name": "timestampStart", "type": "uint64" }, { "internalType": "uint64", "name": "priceDecayHalfLifeSeconds", "type": "uint64" }, { "internalType": "uint128", "name": "startPrice", "type": "uint128" }, { "internalType": "uint128", "name": "basePrice", "type": "uint128" }, { "internalType": "uint256", "name": "latestPurchasePrice", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "projectMaxHasBeenInvoked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "projectMaxInvocations", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "purchase", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "purchaseTo", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "purchaseTo_do6", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "purchase_H4M", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "reclaimProjectExcessSettlementFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "reclaimProjectExcessSettlementFundsTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "_projectIds", "type": "uint256[]" } ], "name": "reclaimProjectsExcessSettlementFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_to", "type": "address" }, { "internalType": "uint256[]", "name": "_projectIds", "type": "uint256[]" } ], "name": "reclaimProjectsExcessSettlementFundsTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "resetAuctionDetails", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_minimumPriceDecayHalfLifeSeconds", "type": "uint256" }, { "internalType": "uint256", "name": "_maximumPriceDecayHalfLifeSeconds", "type": "uint256" } ], "name": "setAllowablePriceDecayHalfLifeRangeSeconds", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "uint256", "name": "_auctionTimestampStart", "type": "uint256" }, { "internalType": "uint256", "name": "_priceDecayHalfLifeSeconds", "type": "uint256" }, { "internalType": "uint256", "name": "_startPrice", "type": "uint256" }, { "internalType": "uint256", "name": "_basePrice", "type": "uint256" } ], "name": "setAuctionDetails", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "setProjectMaxInvocations", "outputs": [], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "togglePurchaseToDisabled", "outputs": [], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "withdrawArtistAndAdminRevenues", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]`;

const allowlistMinterAddressMainnet = "0xcBA628BcF6f458f6F929d875B69FE5f0F3fB99b6";
const allowlistMinterAddressTestnet = "0x21A95e1E97478db730b9564089A8Ca1D9aCF5B79";
const allowlistMinterAddress = mainnet ? allowlistMinterAddressMainnet : allowlistMinterAddressTestnet;
const allowlistMinterAbi = `[ { "inputs": [ { "internalType": "address", "name": "_genArt721Address", "type": "address" }, { "internalType": "address", "name": "_minterFilter", "type": "address" }, { "internalType": "address", "name": "_delegationRegistryAddress", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" } ], "name": "ConfigKeyRemoved", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "ConfigValueAddedToSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "_value", "type": "address" } ], "name": "ConfigValueAddedToSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "_value", "type": "bytes32" } ], "name": "ConfigValueAddedToSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "ConfigValueRemovedFromSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "_value", "type": "address" } ], "name": "ConfigValueRemovedFromSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "_value", "type": "bytes32" } ], "name": "ConfigValueRemovedFromSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "_value", "type": "bool" } ], "name": "ConfigValueSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "ConfigValueSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "_value", "type": "address" } ], "name": "ConfigValueSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "_key", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "_value", "type": "bytes32" } ], "name": "ConfigValueSet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "defaultMaxInvocationsPerAddress", "type": "uint256" } ], "name": "DefaultMaxInvocationsPerAddress", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "delegationRegistryAddress", "type": "address" } ], "name": "DelegationRegistryUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "_pricePerTokenInWei", "type": "uint256" } ], "name": "PricePerTokenInWeiUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "_currencyAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "_currencySymbol", "type": "string" } ], "name": "ProjectCurrencyInfoUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_maxInvocations", "type": "uint256" } ], "name": "ProjectMaxInvocationsLimitUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "_purchaseToDisabled", "type": "bool" } ], "name": "PurchaseToDisabledUpdated", "type": "event" }, { "inputs": [], "name": "DEFAULT_MAX_INVOCATIONS_PER_ADDRESS", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "delegationRegistryAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "genArt721CoreAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "getPriceInfo", "outputs": [ { "internalType": "bool", "name": "isConfigured", "type": "bool" }, { "internalType": "uint256", "name": "tokenPriceInWei", "type": "uint256" }, { "internalType": "string", "name": "currencySymbol", "type": "string" }, { "internalType": "address", "name": "currencyAddress", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_address", "type": "address" } ], "name": "hashAddress", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "isEngine", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "uint256", "name": "_maxInvocations", "type": "uint256" } ], "name": "manuallyLimitProjectMaxInvocations", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "minterFilterAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minterType", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "minterVersion", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32[]", "name": "_proof", "type": "bytes32[]" }, { "internalType": "address", "name": "_address", "type": "address" } ], "name": "processProofForAddress", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "projectConfig", "outputs": [ { "internalType": "bool", "name": "maxHasBeenInvoked", "type": "bool" }, { "internalType": "bool", "name": "priceIsConfigured", "type": "bool" }, { "internalType": "bool", "name": "useMaxInvocationsPerAddressOverride", "type": "bool" }, { "internalType": "uint24", "name": "maxInvocationsPerAddressOverride", "type": "uint24" }, { "internalType": "uint24", "name": "maxInvocations", "type": "uint24" }, { "internalType": "uint256", "name": "pricePerTokenInWei", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "projectMaxHasBeenInvoked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "projectMaxInvocations", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "projectMaxInvocationsPerAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "projectMerkleRoot", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "address", "name": "_address", "type": "address" } ], "name": "projectRemainingInvocationsForAddress", "outputs": [ { "internalType": "bool", "name": "projectLimitsMintInvocationsPerAddress", "type": "bool" }, { "internalType": "uint256", "name": "mintInvocationsRemaining", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "projectUserMintInvocations", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_proof", "type": "bytes32[]" } ], "name": "purchase", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_proof", "type": "bytes32[]" } ], "name": "purchaseTo", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "purchaseTo", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_proof", "type": "bytes32[]" }, { "internalType": "address", "name": "_vault", "type": "address" } ], "name": "purchaseTo", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_proof", "type": "bytes32[]" }, { "internalType": "address", "name": "_vault", "type": "address" } ], "name": "purchaseTo_kem", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_proof", "type": "bytes32[]" } ], "name": "purchase_gD5", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "uint24", "name": "_maxInvocationsPerAddress", "type": "uint24" } ], "name": "setProjectInvocationsPerAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "setProjectMaxInvocations", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" } ], "name": "togglePurchaseToDisabled", "outputs": [], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "bytes32", "name": "_root", "type": "bytes32" } ], "name": "updateMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "uint256", "name": "_pricePerTokenInWei", "type": "uint256" } ], "name": "updatePricePerTokenInWei", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_projectId", "type": "uint256" }, { "internalType": "bytes32[]", "name": "_proof", "type": "bytes32[]" }, { "internalType": "address", "name": "_address", "type": "address" } ], "name": "verifyAddress", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" } ]`;

const fixedMinterAddressMainnet = "0x0eB38A2666A74a8d4a8cb4E718B699E1651a4893";
const fixedMinterAddressTestnet = "";
const fixedMinterAddress = mainnet ? fixedMinterAddressMainnet : fixedMinterAddressTestnet;
const fixedMinterAbi = `[{"inputs":[{"internalType":"address","name":"_genArt721Address","type":"address"},{"internalType":"address","name":"_minterFilter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"}],"name":"ConfigKeyRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ConfigValueAddedToSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_value","type":"address"}],"name":"ConfigValueAddedToSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_value","type":"bytes32"}],"name":"ConfigValueAddedToSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ConfigValueRemovedFromSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_value","type":"address"}],"name":"ConfigValueRemovedFromSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_value","type":"bytes32"}],"name":"ConfigValueRemovedFromSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"bool","name":"_value","type":"bool"}],"name":"ConfigValueSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"ConfigValueSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_value","type":"address"}],"name":"ConfigValueSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"_key","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"_value","type":"bytes32"}],"name":"ConfigValueSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_pricePerTokenInWei","type":"uint256"}],"name":"PricePerTokenInWeiUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":true,"internalType":"address","name":"_currencyAddress","type":"address"},{"indexed":false,"internalType":"string","name":"_currencySymbol","type":"string"}],"name":"ProjectCurrencyInfoUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_maxInvocations","type":"uint256"}],"name":"ProjectMaxInvocationsLimitUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"_purchaseToDisabled","type":"bool"}],"name":"PurchaseToDisabledUpdated","type":"event"},{"inputs":[],"name":"genArt721CoreAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"getPriceInfo","outputs":[{"internalType":"bool","name":"isConfigured","type":"bool"},{"internalType":"uint256","name":"tokenPriceInWei","type":"uint256"},{"internalType":"string","name":"currencySymbol","type":"string"},{"internalType":"address","name":"currencyAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isEngine","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_maxInvocations","type":"uint256"}],"name":"manuallyLimitProjectMaxInvocations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minterFilterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterType","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projectConfig","outputs":[{"internalType":"bool","name":"maxHasBeenInvoked","type":"bool"},{"internalType":"bool","name":"priceIsConfigured","type":"bool"},{"internalType":"uint24","name":"maxInvocations","type":"uint24"},{"internalType":"uint256","name":"pricePerTokenInWei","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectMaxHasBeenInvoked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectMaxInvocations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"purchase","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"purchaseTo","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"purchaseTo_do6","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"purchase_H4M","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"setProjectMaxInvocations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"togglePurchaseToDisabled","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_pricePerTokenInWei","type":"uint256"}],"name":"updatePricePerTokenInWei","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;

const coreContractAddressMainnet = "0xD00495689D5161C511882364E0C342e12Dcc5f08";
const coreContractAddressTestnet = "0x41cc069871054C1EfB4Aa40aF12f673eA2b6a1fC";
const coreContractAddress = mainnet ? coreContractAddressMainnet : coreContractAddressTestnet;
const coreContractAbi = `[{"inputs":[{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"string","name":"_tokenSymbol","type":"string"},{"internalType":"address","name":"_renderProviderAddress","type":"address"},{"internalType":"address","name":"_platformProviderAddress","type":"address"},{"internalType":"address","name":"_randomizerContract","type":"address"},{"internalType":"address","name":"_adminACLContract","type":"address"},{"internalType":"uint248","name":"_startingProjectId","type":"uint248"},{"internalType":"bool","name":"_autoApproveArtistSplitProposals","type":"bool"},{"internalType":"address","name":"_engineRegistryContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"AcceptedArtistAddressesAndSplits","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_index","type":"uint256"}],"name":"ExternalAssetDependencyRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_index","type":"uint256"},{"indexed":false,"internalType":"string","name":"_cid","type":"string"},{"indexed":false,"internalType":"enum IGenArt721CoreContractV3_Engine_Flex.ExternalAssetDependencyType","name":"_dependencyType","type":"uint8"},{"indexed":false,"internalType":"uint24","name":"_externalAssetDependencyCount","type":"uint24"}],"name":"ExternalAssetDependencyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"enum IGenArt721CoreContractV3_Engine_Flex.ExternalAssetDependencyType","name":"_dependencyType","type":"uint8"},{"indexed":false,"internalType":"string","name":"_gatewayAddress","type":"string"}],"name":"GatewayUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_currentMinter","type":"address"}],"name":"MinterUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"_field","type":"bytes32"}],"name":"PlatformUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"ProjectExternalAssetDependenciesLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"_update","type":"bytes32"}],"name":"ProjectUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_projectId","type":"uint256"},{"indexed":false,"internalType":"address","name":"_artistAddress","type":"address"},{"indexed":false,"internalType":"address","name":"_additionalPayeePrimarySales","type":"address"},{"indexed":false,"internalType":"uint256","name":"_additionalPayeePrimarySalesPercentage","type":"uint256"},{"indexed":false,"internalType":"address","name":"_additionalPayeeSecondarySales","type":"address"},{"indexed":false,"internalType":"uint256","name":"_additionalPayeeSecondarySalesPercentage","type":"uint256"}],"name":"ProposedArtistAddressesAndSplits","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"string","name":"_projectName","type":"string"},{"internalType":"address payable","name":"_artistAddress","type":"address"}],"name":"addProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_cidOrData","type":"string"},{"internalType":"enum IGenArt721CoreContractV3_Engine_Flex.ExternalAssetDependencyType","name":"_dependencyType","type":"uint8"}],"name":"addProjectExternalAssetDependency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_script","type":"string"}],"name":"addProjectScript","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_contract","type":"address"},{"internalType":"bytes4","name":"_selector","type":"bytes4"}],"name":"adminACLAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminACLContract","outputs":[{"internalType":"contract IAdminACLV0","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"address payable","name":"_artistAddress","type":"address"},{"internalType":"address payable","name":"_additionalPayeePrimarySales","type":"address"},{"internalType":"uint256","name":"_additionalPayeePrimarySalesPercentage","type":"uint256"},{"internalType":"address payable","name":"_additionalPayeeSecondarySales","type":"address"},{"internalType":"uint256","name":"_additionalPayeeSecondarySalesPercentage","type":"uint256"}],"name":"adminAcceptArtistAddressesAndSplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"artblocksDependencyRegistryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoApproveArtistSplitProposals","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coreType","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"coreVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"defaultBaseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"forbidNewProjects","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getHistoricalRandomizerAt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"getPrimaryRevenueSplits","outputs":[{"internalType":"uint256","name":"renderProviderRevenue_","type":"uint256"},{"internalType":"address payable","name":"renderProviderAddress_","type":"address"},{"internalType":"uint256","name":"platformProviderRevenue_","type":"uint256"},{"internalType":"address payable","name":"platformProviderAddress_","type":"address"},{"internalType":"uint256","name":"artistRevenue_","type":"uint256"},{"internalType":"address payable","name":"artistAddress_","type":"address"},{"internalType":"uint256","name":"additionalPayeePrimaryRevenue_","type":"uint256"},{"internalType":"address payable","name":"additionalPayeePrimaryAddress_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRoyalties","outputs":[{"internalType":"address payable[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"bps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"isMintWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"lockProjectExternalAssetDependencies","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"address","name":"_by","type":"address"}],"name":"mint_Ecf","outputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minterContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newProjectsForbidden","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextProjectId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numHistoricalRandomizers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platformProviderPrimarySalesAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platformProviderPrimarySalesPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platformProviderSecondarySalesAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platformProviderSecondarySalesBPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preferredArweaveGateway","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preferredIPFSGateway","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectArtistPaymentInfo","outputs":[{"internalType":"address","name":"artistAddress","type":"address"},{"internalType":"address","name":"additionalPayeePrimarySales","type":"address"},{"internalType":"uint256","name":"additionalPayeePrimarySalesPercentage","type":"uint256"},{"internalType":"address","name":"additionalPayeeSecondarySales","type":"address"},{"internalType":"uint256","name":"additionalPayeeSecondarySalesPercentage","type":"uint256"},{"internalType":"uint256","name":"secondaryMarketRoyaltyPercentage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectDetails","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"artist","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"website","type":"string"},{"internalType":"string","name":"license","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"projectExternalAssetDependencyByIndex","outputs":[{"components":[{"internalType":"string","name":"cid","type":"string"},{"internalType":"enum IGenArt721CoreContractV3_Engine_Flex.ExternalAssetDependencyType","name":"dependencyType","type":"uint8"},{"internalType":"address","name":"bytecodeAddress","type":"address"},{"internalType":"string","name":"data","type":"string"}],"internalType":"struct IGenArt721CoreContractV3_Engine_Flex.ExternalAssetDependencyWithData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectExternalAssetDependencyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectIdToAdditionalPayeePrimarySales","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectIdToAdditionalPayeePrimarySalesPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectIdToAdditionalPayeeSecondarySales","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectIdToAdditionalPayeeSecondarySalesPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectIdToArtistAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectIdToSecondaryMarketRoyaltyPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"projectScriptByIndex","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"projectScriptBytecodeAddressByIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectScriptDetails","outputs":[{"internalType":"string","name":"scriptTypeAndVersion","type":"string"},{"internalType":"string","name":"aspectRatio","type":"string"},{"internalType":"uint256","name":"scriptCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectStateData","outputs":[{"internalType":"uint256","name":"invocations","type":"uint256"},{"internalType":"uint256","name":"maxInvocations","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"bool","name":"paused","type":"bool"},{"internalType":"uint256","name":"completedTimestamp","type":"uint256"},{"internalType":"bool","name":"locked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"projectURIInfo","outputs":[{"internalType":"string","name":"projectBaseURI","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"address payable","name":"_artistAddress","type":"address"},{"internalType":"address payable","name":"_additionalPayeePrimarySales","type":"address"},{"internalType":"uint256","name":"_additionalPayeePrimarySalesPercentage","type":"uint256"},{"internalType":"address payable","name":"_additionalPayeeSecondarySales","type":"address"},{"internalType":"uint256","name":"_additionalPayeeSecondarySalesPercentage","type":"uint256"}],"name":"proposeArtistPaymentAddressesAndSplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposedArtistAddressesAndSplitsHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randomizerContract","outputs":[{"internalType":"contract IRandomizerV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"removeProjectExternalAssetDependency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"removeProjectLastScript","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renderProviderPrimarySalesAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renderProviderPrimarySalesPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renderProviderSecondarySalesAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renderProviderSecondarySalesBPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes32","name":"_hashSeed","type":"bytes32"}],"name":"setTokenHash_8PT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingProjectId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"toggleProjectIsActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"name":"toggleProjectIsPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenIdToHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenIdToHashSeed","outputs":[{"internalType":"bytes12","name":"","type":"bytes12"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenIdToProjectId","outputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_artblocksDependencyRegistryAddress","type":"address"}],"name":"updateArtblocksDependencyRegistryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_gateway","type":"string"}],"name":"updateArweaveGateway","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_defaultBaseURI","type":"string"}],"name":"updateDefaultBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_gateway","type":"string"}],"name":"updateIPFSGateway","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"updateMinterContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"address payable","name":"_artistAddress","type":"address"}],"name":"updateProjectArtistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectArtistName","type":"string"}],"name":"updateProjectArtistName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_aspectRatio","type":"string"}],"name":"updateProjectAspectRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"updateProjectBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectDescription","type":"string"}],"name":"updateProjectDescription","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"string","name":"_cidOrData","type":"string"},{"internalType":"enum IGenArt721CoreContractV3_Engine_Flex.ExternalAssetDependencyType","name":"_dependencyType","type":"uint8"}],"name":"updateProjectExternalAssetDependency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectLicense","type":"string"}],"name":"updateProjectLicense","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint24","name":"_maxInvocations","type":"uint24"}],"name":"updateProjectMaxInvocations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectName","type":"string"}],"name":"updateProjectName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_scriptId","type":"uint256"},{"internalType":"string","name":"_script","type":"string"}],"name":"updateProjectScript","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"bytes32","name":"_scriptTypeAndVersion","type":"bytes32"}],"name":"updateProjectScriptType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"uint256","name":"_secondMarketRoyalty","type":"uint256"}],"name":"updateProjectSecondaryMarketRoyaltyPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_projectId","type":"uint256"},{"internalType":"string","name":"_projectWebsite","type":"string"}],"name":"updateProjectWebsite","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"renderProviderPrimarySalesPercentage_","type":"uint256"},{"internalType":"uint256","name":"platformProviderPrimarySalesPercentage_","type":"uint256"}],"name":"updateProviderPrimarySalesPercentages","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_renderProviderPrimarySalesAddress","type":"address"},{"internalType":"address payable","name":"_renderProviderSecondarySalesAddress","type":"address"},{"internalType":"address payable","name":"_platformProviderPrimarySalesAddress","type":"address"},{"internalType":"address payable","name":"_platformProviderSecondarySalesAddress","type":"address"}],"name":"updateProviderSalesAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_renderProviderSecondarySalesBPS","type":"uint256"},{"internalType":"uint256","name":"_platformProviderSecondarySalesBPS","type":"uint256"}],"name":"updateProviderSecondarySalesBPS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_randomizerAddress","type":"address"}],"name":"updateRandomizerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;

const ETHERSCAN_BASE = `https://${mainnet ? "" : "goerli."}etherscan.io/tx/`;
const GAS_LIMIT_MULTIPLIER = 1.2;

/*********************************END CONFIG************************************/

const WHITELIST = {
    '0x003512e61d37F3d7772305a89323790965A38f03': [
      '0x4700b3c2d532b5b3e719c7ab8e3144f8cffc2244fdff6a590379b8c255f0ddc2',
      '0xcb98d027af453fac3d30edbbffb1fb17786072395794c7f1ff8ce4ed34cf70fa',
      '0xd9af4e46a7002311553350dd31b1f6540204d55d7727356a38b25ddac940fb2e',
      '0x646132c9ac26a30093c4a12fd51b084624360e33b2cec4a2d949fbd8c270d046',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xb3741504DbEd045e45ff92EFd3821b0b0B406C91': [
      '0x382b1e3293d8e48398887a07f876964c6888144b013644a446a89c4adef675cb',
      '0xcb98d027af453fac3d30edbbffb1fb17786072395794c7f1ff8ce4ed34cf70fa',
      '0xd9af4e46a7002311553350dd31b1f6540204d55d7727356a38b25ddac940fb2e',
      '0x646132c9ac26a30093c4a12fd51b084624360e33b2cec4a2d949fbd8c270d046',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x51feE9bf45C5DAb188B57048658696edAB9d72Cf': [
      '0x968b7adef3d030311cdd095e79cac2dc6d70de15a312da1c3f7791f4e7495364',
      '0x2c81e94dd616f08947d572dd28c0431aff326811ad42e1bee0aad60d12565122',
      '0xd9af4e46a7002311553350dd31b1f6540204d55d7727356a38b25ddac940fb2e',
      '0x646132c9ac26a30093c4a12fd51b084624360e33b2cec4a2d949fbd8c270d046',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x2ffc2CA49E8Ec08E936bECc34e86cA630cBF3C51': [
      '0x209ed0c0377b7a661e7515f2c5b73546f81080f1f27b3ce64a7f1deee72c6839',
      '0x2c81e94dd616f08947d572dd28c0431aff326811ad42e1bee0aad60d12565122',
      '0xd9af4e46a7002311553350dd31b1f6540204d55d7727356a38b25ddac940fb2e',
      '0x646132c9ac26a30093c4a12fd51b084624360e33b2cec4a2d949fbd8c270d046',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x6120bbc42a36E996c9DA80dD7798Dc204b83e1c2': [
      '0xa333f90f1d6d8c0cce5a79385f018768d6840b6c9daf33091caf6046d49f2b50',
      '0x005e6629a775f6bb617c246d761c4bad8d5735cc6b4f22de82f8766aeaa8e06e',
      '0xeed5c60270e41dc900049c35baa617785d3718003feae373cc8b7137ddf0a251',
      '0x646132c9ac26a30093c4a12fd51b084624360e33b2cec4a2d949fbd8c270d046',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x2f7BE7bf120E476517E93e54CA8a48Ae8C8aB9c5': [
      '0x9f475e38d35b4985c513f447da10d711432e386d809b85705b718a919c7d7021',
      '0x005e6629a775f6bb617c246d761c4bad8d5735cc6b4f22de82f8766aeaa8e06e',
      '0xeed5c60270e41dc900049c35baa617785d3718003feae373cc8b7137ddf0a251',
      '0x646132c9ac26a30093c4a12fd51b084624360e33b2cec4a2d949fbd8c270d046',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x1F2a9082A7692aD4f1049B573313c52E49400137': [
      '0xf908e9b71b3e9cee1e35421e2409807664b7ace2e3e7e7327c438b37e18ab4a2',
      '0xe16087e72befb82a192d12488e7719936324f46e909983c00bb8c919eea14a87',
      '0xe830745522226f03f2da6350e9a1835b6cd18548e5b3deb36cdcc7ba781718c9',
      '0x6bb88b3299874a7ad3fa6b94acda84b6affb8063b74dcbd80820083c2df5349f',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xA0A6CB95a6c495427311D0c99c2811AcE8925569': [
      '0xf7332fbce723d1f32816ae93b96e1aff982a0adf6f6a71c0619d498290a543ab',
      '0x6efd0d0ede4e6c426dfd5ae6f35461a68dfc4a053d0b775e54dcfaca29491482',
      '0xeed5c60270e41dc900049c35baa617785d3718003feae373cc8b7137ddf0a251',
      '0x646132c9ac26a30093c4a12fd51b084624360e33b2cec4a2d949fbd8c270d046',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xc015Cf6E9E8CFDec29F9d73BfD44bD9Ea611D170': [
      '0xb22a99fb90ee74fd793c8be29d4b05ca5195e37dcbb2024917fdec9412d4875a',
      '0xce985723e51ed0c696dc0f62851d21ca7d2012916a180a499cbb846985140698',
      '0x508bbb4f81a2971d6b1abe0b99b568d096dd79017b4af8e15aa1811441c5c6b9',
      '0x6bb88b3299874a7ad3fa6b94acda84b6affb8063b74dcbd80820083c2df5349f',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x35A791707bfAD064e00B450f24b141d1c7BDb0dB': [
      '0xe0d32580adddbeac1d82d2ddebca9440770e87d62e3e2b8f23a9377a8a763d93',
      '0xce985723e51ed0c696dc0f62851d21ca7d2012916a180a499cbb846985140698',
      '0x508bbb4f81a2971d6b1abe0b99b568d096dd79017b4af8e15aa1811441c5c6b9',
      '0x6bb88b3299874a7ad3fa6b94acda84b6affb8063b74dcbd80820083c2df5349f',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xA7A3a06E9A649939f60bE309831B5e0EA6cC2513': [
      '0x91fa008b6f6dd1b694a2f0e37d426aed6d89762c3390917790b502b0c81781c1',
      '0x7d13a7ef83a0caac679d4bf8c87e5f770bcfceb51d4823d867b378d6fe6db6f3',
      '0x508bbb4f81a2971d6b1abe0b99b568d096dd79017b4af8e15aa1811441c5c6b9',
      '0x6bb88b3299874a7ad3fa6b94acda84b6affb8063b74dcbd80820083c2df5349f',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x1E399f3ed07621aB0E85db03faB455136394f022': [
      '0x360bd5daa3b0bf40fad7bd29d3ff42e909aada0d15be778bfa47a8a1aed21de6',
      '0x7d13a7ef83a0caac679d4bf8c87e5f770bcfceb51d4823d867b378d6fe6db6f3',
      '0x508bbb4f81a2971d6b1abe0b99b568d096dd79017b4af8e15aa1811441c5c6b9',
      '0x6bb88b3299874a7ad3fa6b94acda84b6affb8063b74dcbd80820083c2df5349f',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x8684e8C7D4Ae0256372e5FD727ca2bd3F4ac95b2': [
      '0xf50a01477d1f2bf20f1d1e28ea35e2ee1fc1f2c971e30eda63af5cf115a22120',
      '0x4e256fc6b087335810c5d287ac33e2adc9cbf20389665777aa4476423615ac15',
      '0xe830745522226f03f2da6350e9a1835b6cd18548e5b3deb36cdcc7ba781718c9',
      '0x6bb88b3299874a7ad3fa6b94acda84b6affb8063b74dcbd80820083c2df5349f',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x9017c92270F465FE35C8aDF47AD9B2C344765561': [
      '0x449749f69692600ddda68f3a64ef9cc232fab872a79687f16b42312011ffcfb0',
      '0x4e256fc6b087335810c5d287ac33e2adc9cbf20389665777aa4476423615ac15',
      '0xe830745522226f03f2da6350e9a1835b6cd18548e5b3deb36cdcc7ba781718c9',
      '0x6bb88b3299874a7ad3fa6b94acda84b6affb8063b74dcbd80820083c2df5349f',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x60C7A798175a9F20f9214809e5a5f57856A58042': [
      '0xf7332fbce723d1f32816ae93b96e1aff982a0adf6f6a71c0619d498290a543ab',
      '0xe16087e72befb82a192d12488e7719936324f46e909983c00bb8c919eea14a87',
      '0xe830745522226f03f2da6350e9a1835b6cd18548e5b3deb36cdcc7ba781718c9',
      '0x6bb88b3299874a7ad3fa6b94acda84b6affb8063b74dcbd80820083c2df5349f',
      '0xc1bd8642b9a3c58ae62d9deee769814dced13af3483ead6342c45b5ba6a61b9c',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xe0050f2A8aa898Da5829C5F1A270315062C56D30': [
      '0x60f4a5e0b97dab461c677713a7d7cb7e2a1fdbefcaf9570c4a8e31a8a3059665',
      '0xa94c562a0c99ebfb18736084d5ce66626e3b28e97f02273ba0da269c14d5617b',
      '0x63f10dc77b573b3c5cba3d1cc891beb54a1f5e9bfba7ceb231554bfe4c6c8d3f',
      '0x8d1c4fba45c0a1e1b4cc6a9cca79e20404e7e4b30c4becd6dbe91c48bb7d7895',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x9cB707b9A2De651D8A6960D59ccb6b11E7431C06': [
      '0x6f8ec3bef6c491fd1f93e75661db5de603832e4a967a0e6d3cc355f0e1755f8c',
      '0xa94c562a0c99ebfb18736084d5ce66626e3b28e97f02273ba0da269c14d5617b',
      '0x63f10dc77b573b3c5cba3d1cc891beb54a1f5e9bfba7ceb231554bfe4c6c8d3f',
      '0x8d1c4fba45c0a1e1b4cc6a9cca79e20404e7e4b30c4becd6dbe91c48bb7d7895',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xAbc9B3AF7ba302c60049Dc826fb2532b37504196': [
      '0x2cc31de89eb95c46caf28b18fbc0adf47eba809bc292502ffc777abbbf2b5c01',
      '0x1e9820e5a280d2d0f4359e9e50f4d8b334219003ae60824c2144de01991d3319',
      '0x63f10dc77b573b3c5cba3d1cc891beb54a1f5e9bfba7ceb231554bfe4c6c8d3f',
      '0x8d1c4fba45c0a1e1b4cc6a9cca79e20404e7e4b30c4becd6dbe91c48bb7d7895',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xDa48F08ebB71fa5778d02ad243cbF73fBB74C4C7': [
      '0xcb4a6f56052daf28a3ab2c85b62a833ae96c3e751867a9789e7f5dafcc902bde',
      '0x1e9820e5a280d2d0f4359e9e50f4d8b334219003ae60824c2144de01991d3319',
      '0x63f10dc77b573b3c5cba3d1cc891beb54a1f5e9bfba7ceb231554bfe4c6c8d3f',
      '0x8d1c4fba45c0a1e1b4cc6a9cca79e20404e7e4b30c4becd6dbe91c48bb7d7895',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x68db7D679969f265b14BA8A495E4028360AD6759': [
      '0xe2e42b3c24647271bfaf3ae6304249c6de470f1ddc766a0b23ba66f286a5f7e1',
      '0xc4e56efad1df444d7085a657f1bd67e1dfd2f175317727543514e968f87578af',
      '0x6da3508a8ccc715c061fd07d5726be63937e00cfeb363cb8a504d40a138a2f6d',
      '0x8d1c4fba45c0a1e1b4cc6a9cca79e20404e7e4b30c4becd6dbe91c48bb7d7895',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xEdC8A7204873071ccA464ED3AC68DEC4C69AfEA4': [
      '0xd225273023a9a7d28f4672c5bd55080dd0930ab1ae6d5c5899ec026f08ab519b',
      '0xc4e56efad1df444d7085a657f1bd67e1dfd2f175317727543514e968f87578af',
      '0x6da3508a8ccc715c061fd07d5726be63937e00cfeb363cb8a504d40a138a2f6d',
      '0x8d1c4fba45c0a1e1b4cc6a9cca79e20404e7e4b30c4becd6dbe91c48bb7d7895',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x7A8E90c9a198460D06fdf38099494BFFF9439b7E': [
      '0x8ca011df50f695d3e2b73fc6669cb3b78ba48490b10cf63adc1f2e4e753a501d',
      '0x82e1384805f834094fff1eda2fb19531fbfe2b479b517c938aa44ea8665633d4',
      '0x6da3508a8ccc715c061fd07d5726be63937e00cfeb363cb8a504d40a138a2f6d',
      '0x8d1c4fba45c0a1e1b4cc6a9cca79e20404e7e4b30c4becd6dbe91c48bb7d7895',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x4B9a1C32f44831Ca452e334DD1B26736C5AE7344': [
      '0x57209b0b17cdccddcf85f9cea13dd44feef38582f655cb2a377e18e69b10ffb2',
      '0x82e1384805f834094fff1eda2fb19531fbfe2b479b517c938aa44ea8665633d4',
      '0x6da3508a8ccc715c061fd07d5726be63937e00cfeb363cb8a504d40a138a2f6d',
      '0x8d1c4fba45c0a1e1b4cc6a9cca79e20404e7e4b30c4becd6dbe91c48bb7d7895',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x0E6e9d2c0Aab646EB4b13808e208fA1c6b308Db1': [
      '0xaa1949647489bc933e6e5eca830dd4cd1bb9c5bfa548c9b29785b1ba203f297b',
      '0x112e0cd94aa7bc8b8c3e8c5a493eabacccde5a1b928670b44272723f188a758b',
      '0xaa7309032c636ad282e41067009d850e8beb4200cecc23a18a203b0602f856cc',
      '0x631fbe3f1433c8307713d33a7da70586f86fc98314a02a3c7e227ab9f491b1d9',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x577D462A85Ad291D99089bC3D9b30feF29372252': [
      '0x6079d7ee31480ea29439b9422c2fffb17ec4abd0651209bb4751723e5b4cf972',
      '0x112e0cd94aa7bc8b8c3e8c5a493eabacccde5a1b928670b44272723f188a758b',
      '0xaa7309032c636ad282e41067009d850e8beb4200cecc23a18a203b0602f856cc',
      '0x631fbe3f1433c8307713d33a7da70586f86fc98314a02a3c7e227ab9f491b1d9',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x82cC352a452C1831D4b5CDb2394Da1fD988F6586': [
      '0x9fa075e929a8ddba487719974b2606e6f14bc9c31a4534786a4a27d7050938ec',
      '0x1fa01c4d9c16fea713721e3567c0277f36d9596e5b02779531106cc440d3ac16',
      '0xaa7309032c636ad282e41067009d850e8beb4200cecc23a18a203b0602f856cc',
      '0x631fbe3f1433c8307713d33a7da70586f86fc98314a02a3c7e227ab9f491b1d9',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x0F13316B80872Eda120d7844Ed1C1e90FC001Dc1': [
      '0xd7c08af20804842912bfd5096b5501fd927c8c83749b303bc42ac7ed967aefb2',
      '0x1fa01c4d9c16fea713721e3567c0277f36d9596e5b02779531106cc440d3ac16',
      '0xaa7309032c636ad282e41067009d850e8beb4200cecc23a18a203b0602f856cc',
      '0x631fbe3f1433c8307713d33a7da70586f86fc98314a02a3c7e227ab9f491b1d9',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x162f035FBD5bf34cd376B58122997A5525585DAf': [
      '0x21ee2fa320970a54f9e9701a71ecdd9de03d1d41b7fac800a7d1bb37f6d284d0',
      '0x6d0005b1010bf5cfd32c9422e56ebc6d67879cf4087e9093639f809177a4eaa3',
      '0x55abaa593787f970005ff50dabac5eb304fec717edd786639ebd472afa6f584f',
      '0x631fbe3f1433c8307713d33a7da70586f86fc98314a02a3c7e227ab9f491b1d9',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x4EC5B2606aC7d20B1b0030D156F6D789b5873ABD': [
      '0x5cf4a95ff7ee6d8db09fa800f7400926695eee9765ec440c5f35a415d4ee9578',
      '0x6d0005b1010bf5cfd32c9422e56ebc6d67879cf4087e9093639f809177a4eaa3',
      '0x55abaa593787f970005ff50dabac5eb304fec717edd786639ebd472afa6f584f',
      '0x631fbe3f1433c8307713d33a7da70586f86fc98314a02a3c7e227ab9f491b1d9',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xB60D52448A5C76c87853C011bB4b8EC3114A3277': [
      '0x4970508737851df0411f1cb27e62435c96dbe6d109fc0d17054e4f1c2587e7aa',
      '0xc5e4f0d484e8d96338fc51a3560f501ac23cee433d0cab6409033564c4f3953a',
      '0x55abaa593787f970005ff50dabac5eb304fec717edd786639ebd472afa6f584f',
      '0x631fbe3f1433c8307713d33a7da70586f86fc98314a02a3c7e227ab9f491b1d9',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x740da587b33CC378940C24Cf81Fd188cECA1Dd20': [
      '0xc7771ffaf0d6b81e814e3511402f726ae27e9a78be5d94fece0f9fdfce2e1569',
      '0xc5e4f0d484e8d96338fc51a3560f501ac23cee433d0cab6409033564c4f3953a',
      '0x55abaa593787f970005ff50dabac5eb304fec717edd786639ebd472afa6f584f',
      '0x631fbe3f1433c8307713d33a7da70586f86fc98314a02a3c7e227ab9f491b1d9',
      '0x33bba803c6030f7989656c79aa273650b1e2506b1b729baf5e8ad111613c0135',
      '0xd3e0aa7427efcc8590d80a22940115374258a298a127a781023a658bdcf0bc2d',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x86591EceF0b8F461c1d12F3b2ADE8863f29ED875': [
      '0xb0c3c75827ae730d3694ed32dde362bffa24a6fbd751c912eedbd407bd364724',
      '0x826a2f035f860528d27c8da64cbf71cbd94a527be908ce1807a7abeeb37bd224',
      '0x1803f8a50308400e623baedbd3ef43d2017a57e70b3823741c8bf5c8e6ad4e29',
      '0x7167e004996928d4fd813d67c65b6d686ef4447a2bca602b486f8302d2ad3dc3',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xd7E1bc51cd3F30e21b17Bab33D77078E3fB7cC26': [
      '0x9419a43922c96d13138641892b5458f83979f69086f64375df5ea592c94fdc82',
      '0x826a2f035f860528d27c8da64cbf71cbd94a527be908ce1807a7abeeb37bd224',
      '0x1803f8a50308400e623baedbd3ef43d2017a57e70b3823741c8bf5c8e6ad4e29',
      '0x7167e004996928d4fd813d67c65b6d686ef4447a2bca602b486f8302d2ad3dc3',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xe18Fc96ba325Ef22746aDA9A82d521845a2c16f8': [
      '0x7fcf896871295afdc3ce9bdd2dc960719d6db00146a170726d5c0fbe7f525e3c',
      '0xa366801d081b819fbf3d9e1cd1bd654a26037ea431a65705ba2a922d406a4212',
      '0x1803f8a50308400e623baedbd3ef43d2017a57e70b3823741c8bf5c8e6ad4e29',
      '0x7167e004996928d4fd813d67c65b6d686ef4447a2bca602b486f8302d2ad3dc3',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x89c214c487640D63a897cA618D0afeB18eF6108D': [
      '0xc0b7ce2f6f9c576a06bc36b118f0e7cce72ea4b50f88a15baf46b84742b78a5a',
      '0xa366801d081b819fbf3d9e1cd1bd654a26037ea431a65705ba2a922d406a4212',
      '0x1803f8a50308400e623baedbd3ef43d2017a57e70b3823741c8bf5c8e6ad4e29',
      '0x7167e004996928d4fd813d67c65b6d686ef4447a2bca602b486f8302d2ad3dc3',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x8F156296F3f0B3C70A80b7bCf7CE3A75CCCc0288': [
      '0xaca486e88e104abeff1c908465c10c34ed5bd24f4b9cf951e62c28f3dda971d8',
      '0x7a281ab41a5d75665c9de4d104b82cac2dfebb72a5d0b5706a00c506aadfada9',
      '0xdd9c6b543aa28a562a99c6de385b03d3e5f405b7a68c7d38d24d1c738e28814b',
      '0x7167e004996928d4fd813d67c65b6d686ef4447a2bca602b486f8302d2ad3dc3',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xac62b7B2C2C51Fd548b42aDc15Be68e8fcbB7b94': [
      '0x6ecd5e9f2a318e3aa0edf245adaaec0bd919d3ded171d7a80032b12e031b3bc5',
      '0x7a281ab41a5d75665c9de4d104b82cac2dfebb72a5d0b5706a00c506aadfada9',
      '0xdd9c6b543aa28a562a99c6de385b03d3e5f405b7a68c7d38d24d1c738e28814b',
      '0x7167e004996928d4fd813d67c65b6d686ef4447a2bca602b486f8302d2ad3dc3',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x965BB24b0B23EE3aAf8876DF4951de8F03390829': [
      '0xbc9ba3c9a6d285f8e9421000ab0c11ebd4657c05b5a09f123014fa3d038e1442',
      '0xea6b17c98f21aa84b5c94aaa791dd7430a79ee6421a766bf06791a975fc02396',
      '0xdd9c6b543aa28a562a99c6de385b03d3e5f405b7a68c7d38d24d1c738e28814b',
      '0x7167e004996928d4fd813d67c65b6d686ef4447a2bca602b486f8302d2ad3dc3',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xdb4782d463628cc5b1de8f1220f755BA3bA4728E': [
      '0xfdb8a8fb88c28aaf9d680dc2e1f0b1f0a3f1403ffbc742526afd0e1148e7d4c9',
      '0xea6b17c98f21aa84b5c94aaa791dd7430a79ee6421a766bf06791a975fc02396',
      '0xdd9c6b543aa28a562a99c6de385b03d3e5f405b7a68c7d38d24d1c738e28814b',
      '0x7167e004996928d4fd813d67c65b6d686ef4447a2bca602b486f8302d2ad3dc3',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x08cED81B81d05cBb237De4A13C6Fc62277B12c51': [
      '0x4db954447bf2b5778926fa7bb899a7d483378d62089cb667d1063931a5c12435',
      '0x37350bd0a20b924d0bda15ed1906c8c41af58d3a38a210b832207b6043a895ec',
      '0xcdad0962d7417b74b7df430de5aaa071fcca2b857cbb8edcd581c974aba4de56',
      '0xc42f2b2c8a9ddda6502a007f236e9799fdacbffff1bda50cb3dda73ebe83fed0',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x46e5803E36b445F3bBfa69160c2b818047F90F64': [
      '0x4efa3665fba1ae835c8db3ce7aaa39d4cf1f2ff81d7a86dbd5ba899b6262accd',
      '0x37350bd0a20b924d0bda15ed1906c8c41af58d3a38a210b832207b6043a895ec',
      '0xcdad0962d7417b74b7df430de5aaa071fcca2b857cbb8edcd581c974aba4de56',
      '0xc42f2b2c8a9ddda6502a007f236e9799fdacbffff1bda50cb3dda73ebe83fed0',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x8C41B04fc42F64D0D24acF504e2E2A82B5860e81': [
      '0x5a3495800c65395d5a100da943984c3b9ac0fc20a7503052a2a999f28f4fba2e',
      '0xe6692d2aa0df1c164f4d9435e29ea1d56e78af111310458fb66c8ecda0a0fd9e',
      '0xcdad0962d7417b74b7df430de5aaa071fcca2b857cbb8edcd581c974aba4de56',
      '0xc42f2b2c8a9ddda6502a007f236e9799fdacbffff1bda50cb3dda73ebe83fed0',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xC0482317aa426020c08F1E892E6b0414Ae7245D1': [
      '0xee782620295e8b94fa02853e2cc96ec1150c421400e97f959dbc2a28366ff1d1',
      '0xe6692d2aa0df1c164f4d9435e29ea1d56e78af111310458fb66c8ecda0a0fd9e',
      '0xcdad0962d7417b74b7df430de5aaa071fcca2b857cbb8edcd581c974aba4de56',
      '0xc42f2b2c8a9ddda6502a007f236e9799fdacbffff1bda50cb3dda73ebe83fed0',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x87Fbc14794EDe30e64905f0b8DA30aBb57ac1b15': [
      '0xbff74c5edad67962a4bfedea5b2dc95fa67f666d113fdd9dc06a0ffb4e020e6a',
      '0x2ab80b1e707a3a8e9f1805825106305f419cc35cca578e2eeaf3144f13b2a38a',
      '0x080827cb5f55ea5db4c531311c9e1d172bf8b573b7761bfbdaff2106c88f26ce',
      '0xc42f2b2c8a9ddda6502a007f236e9799fdacbffff1bda50cb3dda73ebe83fed0',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xB9d986224Fa704d3c8217a1301081a3C721B35bD': [
      '0x129b60cd0cc6e7c1fecc40deaedeba5cb551f88f485d056ebed5b870c8e777a2',
      '0x2ab80b1e707a3a8e9f1805825106305f419cc35cca578e2eeaf3144f13b2a38a',
      '0x080827cb5f55ea5db4c531311c9e1d172bf8b573b7761bfbdaff2106c88f26ce',
      '0xc42f2b2c8a9ddda6502a007f236e9799fdacbffff1bda50cb3dda73ebe83fed0',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x36A3c38BE73768D1c5A34A5e4775EE16fFD09214': [
      '0x576166711f7e8fe9294dfcc8877dd5526e9c4029e0e1af85a90507130fd8455d',
      '0x37d2bccb3281a1d7599a9cfe575ac8e552d057d8e9f9bcf9728b6547701502ac',
      '0x080827cb5f55ea5db4c531311c9e1d172bf8b573b7761bfbdaff2106c88f26ce',
      '0xc42f2b2c8a9ddda6502a007f236e9799fdacbffff1bda50cb3dda73ebe83fed0',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xf88901D8A60E742Abb67058d6D46905650517712': [
      '0x6c7d2016a33e096514d7e6b2204c0bafab100ee1697f80314b8538d91542b092',
      '0x37d2bccb3281a1d7599a9cfe575ac8e552d057d8e9f9bcf9728b6547701502ac',
      '0x080827cb5f55ea5db4c531311c9e1d172bf8b573b7761bfbdaff2106c88f26ce',
      '0xc42f2b2c8a9ddda6502a007f236e9799fdacbffff1bda50cb3dda73ebe83fed0',
      '0x86ce3518608cce29f1ba413b36d12176d119a70cee7f20ef956d5f237114fd52',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x77E8001a83E5175e36B0d80c11FE8b5a65AB5CA3': [
      '0x52cbcc47e31ea176b91b675aa9b72db521ad2ca1fbe2bdef0e16c0b104a3ae70',
      '0x13fdf081ff04148f4e32d7e0315c12c1e6fc2e809ea0f98c6ec4ccc35d1ebf4a',
      '0xfd09788f00726894d5779160b79cac478a1f6f38906f8f8967e13d4d5e5b8b7b',
      '0xcbb3ebf5f3144bfd953089a0cf11d8b3a24d40edace2c71035f23789a56285ef',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x80A5a328cF545A6d971F0D6F96B4B00639acD688': [
      '0x86619eb1608e0ee7c31497ef10e3f1befb81abe6b74281cc5fe1253903cb05ca',
      '0x13fdf081ff04148f4e32d7e0315c12c1e6fc2e809ea0f98c6ec4ccc35d1ebf4a',
      '0xfd09788f00726894d5779160b79cac478a1f6f38906f8f8967e13d4d5e5b8b7b',
      '0xcbb3ebf5f3144bfd953089a0cf11d8b3a24d40edace2c71035f23789a56285ef',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x40f465F1ba4c2Aba91c0C896cb92bbe4c7e545DF': [
      '0x8b5f2325ce4648c75100b5633f35c3112aa052dc8c779355f1390a7d06e00678',
      '0xdbf8ab5afd09e79d05602ffc5a52947f11be2e10bd35d4dbe35a662c8e794029',
      '0xfd09788f00726894d5779160b79cac478a1f6f38906f8f8967e13d4d5e5b8b7b',
      '0xcbb3ebf5f3144bfd953089a0cf11d8b3a24d40edace2c71035f23789a56285ef',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x51701271FF7589d21F919CE9dAFBaaFa73200B78': [
      '0xce7213f6cc4e422a6d0ef661433036e329fd4775ffdb6a7179fa4ebfbac0c7d3',
      '0xdbf8ab5afd09e79d05602ffc5a52947f11be2e10bd35d4dbe35a662c8e794029',
      '0xfd09788f00726894d5779160b79cac478a1f6f38906f8f8967e13d4d5e5b8b7b',
      '0xcbb3ebf5f3144bfd953089a0cf11d8b3a24d40edace2c71035f23789a56285ef',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x98313509ED4d62E98dA5Fa9bD0a00aCE55B76BD8': [
      '0x16b4acacbaaec1f52a3c516d46be143389ba3e1c030b5a2eb09fb829bb83be79',
      '0xfef31a06d5e9cc28ad02dc02cf56d3528102e4916e7d16707f972960dc7ee6fa',
      '0xf1e42596d5f05530c7a0e60e8fadf7d3f119570ca9cdbd2b2bac7985faf0200d',
      '0xcbb3ebf5f3144bfd953089a0cf11d8b3a24d40edace2c71035f23789a56285ef',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xEB0103f682Ba4013f9B990E6Ff411B71AFA73F77': [
      '0x53104caa4df01d9a8875f9031890fd85e14fb2d57104abfba28abca1fc851482',
      '0xfef31a06d5e9cc28ad02dc02cf56d3528102e4916e7d16707f972960dc7ee6fa',
      '0xf1e42596d5f05530c7a0e60e8fadf7d3f119570ca9cdbd2b2bac7985faf0200d',
      '0xcbb3ebf5f3144bfd953089a0cf11d8b3a24d40edace2c71035f23789a56285ef',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xee89C05E43B05DDb73309fb7f86F398006153dC5': [
      '0x916e2f25f753c21781fa344c2ef2e56e2ee6fb6595c6556e7df0cc8583476a4d',
      '0xb77519e35ceee2b8756542a1bbf2fbd8c3544e6d335a470fb9ad3061596afd1f',
      '0xf1e42596d5f05530c7a0e60e8fadf7d3f119570ca9cdbd2b2bac7985faf0200d',
      '0xcbb3ebf5f3144bfd953089a0cf11d8b3a24d40edace2c71035f23789a56285ef',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x137331ed7e7C9fffFb24f738C6D0Fb52BEdD97F9': [
      '0x1c5ebce88545353710dd083f06748a114a9d123d6c8464c0e8899017e897ad6a',
      '0xb77519e35ceee2b8756542a1bbf2fbd8c3544e6d335a470fb9ad3061596afd1f',
      '0xf1e42596d5f05530c7a0e60e8fadf7d3f119570ca9cdbd2b2bac7985faf0200d',
      '0xcbb3ebf5f3144bfd953089a0cf11d8b3a24d40edace2c71035f23789a56285ef',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x168E16Cf33F6E69FCB3AaC29FaFD702d44C8cA03': [
      '0xc2df9a001889e6a22d5301fb74f9c74df84fbf20e4a1a1062f1480a1d114d427',
      '0xde3e86734d5efb6585177794f578aad56a46799c30cdcb672806e3452a4c5d8e',
      '0xbd49ffff168e8c4af7027e685655cd6827c774e41544f62a199747ac6df77b44',
      '0xb4bb1ed5d7bb037d65a411c6a0a558caaa0b3ae4aa6663a7e1b550f2a4ded80c',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x3Fe877b86a298326c13d911A99D59F4C9d195957': [
      '0xc1ae5f22b053bc33bf48f74c033d1b833edc76d0e99cea065b57e4d31b4b1aac',
      '0xde3e86734d5efb6585177794f578aad56a46799c30cdcb672806e3452a4c5d8e',
      '0xbd49ffff168e8c4af7027e685655cd6827c774e41544f62a199747ac6df77b44',
      '0xb4bb1ed5d7bb037d65a411c6a0a558caaa0b3ae4aa6663a7e1b550f2a4ded80c',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x4A29367c5Ae9F84eF03E447D1f7deE8e6b16229D': [
      '0xaf1b4da12976f25fde740b4d33610c314149539a0b34c64d69368a5ba0859f69',
      '0xc005eb1525b64e937c080edee92ebe21ac7b7ec59f5ec1d4f93cfe97186477ba',
      '0xbd49ffff168e8c4af7027e685655cd6827c774e41544f62a199747ac6df77b44',
      '0xb4bb1ed5d7bb037d65a411c6a0a558caaa0b3ae4aa6663a7e1b550f2a4ded80c',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x6fAC5Ca3a8A7F53385e87a1E7e683Dd7486afc3b': [
      '0xedea7d47b8dba939491faccbd054198583f043adad9766e63a02f660cd2d3108',
      '0xc005eb1525b64e937c080edee92ebe21ac7b7ec59f5ec1d4f93cfe97186477ba',
      '0xbd49ffff168e8c4af7027e685655cd6827c774e41544f62a199747ac6df77b44',
      '0xb4bb1ed5d7bb037d65a411c6a0a558caaa0b3ae4aa6663a7e1b550f2a4ded80c',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x89D73DE516eFa8bff287925F8e593aB668779E15': [
      '0x1e3fcf8367b410ba28c2baf41e18c2fa3c0a093d3933542576ed1180049196b9',
      '0xa42c213dc46d6bd248e7af326cd95be11985c23ba7ee2b663a9df673a9c5b159',
      '0x5f9d3df610874e2546c8e1eee50b5f73e33d4749d80fbca0c17a6c149e784bb7',
      '0xb4bb1ed5d7bb037d65a411c6a0a558caaa0b3ae4aa6663a7e1b550f2a4ded80c',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x918453d249A22b6A8535c81e21F7530CD6Ab59F1': [
      '0x89c77f9a93d147d59a426c1bf93ee13f3e275e222a0b3a802645bb52c6bb48e7',
      '0xa42c213dc46d6bd248e7af326cd95be11985c23ba7ee2b663a9df673a9c5b159',
      '0x5f9d3df610874e2546c8e1eee50b5f73e33d4749d80fbca0c17a6c149e784bb7',
      '0xb4bb1ed5d7bb037d65a411c6a0a558caaa0b3ae4aa6663a7e1b550f2a4ded80c',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xA3C277b8f35881CBdb017E52bcC376B3ce8F21dA': [
      '0x8460291bceb7611d46d6f067a557568587f1dc16cafee26ac80e831ff42306f5',
      '0x4753172b922177dc3249f7cef6b41c79587ccbb55812f80ebdc505b27fedc033',
      '0x5f9d3df610874e2546c8e1eee50b5f73e33d4749d80fbca0c17a6c149e784bb7',
      '0xb4bb1ed5d7bb037d65a411c6a0a558caaa0b3ae4aa6663a7e1b550f2a4ded80c',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xb0a5c14Bb5A7fb3d8591f57AA53423c9A9b1dCF6': [
      '0x9c66c0988f49d47a0848f8c6147ac42fdd1fd3e4806f8dc09e3addf56d857ace',
      '0x4753172b922177dc3249f7cef6b41c79587ccbb55812f80ebdc505b27fedc033',
      '0x5f9d3df610874e2546c8e1eee50b5f73e33d4749d80fbca0c17a6c149e784bb7',
      '0xb4bb1ed5d7bb037d65a411c6a0a558caaa0b3ae4aa6663a7e1b550f2a4ded80c',
      '0x8b446966d200917286e281a23146e151a5e03247133805e53ddd8b49f281bad5',
      '0x2cd0f0d8d0f5028f6efdd56c8b396d8888b164c758584e068295dd960e8d0e10',
      '0x38cb8e0c6e5e39dd9b71b948938cc8aff75491f2163aa98ef3f8ade7da4971e0',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x22e33FADE9B6f805f3e75C7F9F15ff19690a2D0A': [
      '0xb1c72185c0ab8fee08595d234c29e4fb882638570b3b04b72182f43eba8ce105',
      '0xea24a02b7c303d3e428a14ab3d88d9516121a592828c0cee8f7faedcbfb441fa',
      '0x02c9bdb8ee1915ab09c78dd2b08fe9a96a461dcec1aa9710faa5daa4109a0e19',
      '0xb279d8a2ad29645d9b4c6db5569660881e184c6f55f2849f98eaf32ab4755a53',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x42E0492613eb391d0f1d736D37E0DFCe66665939': [
      '0x59fcedd030d69a94c6f6f5dc35815187319901df966a96b75da40adc850bf003',
      '0xea24a02b7c303d3e428a14ab3d88d9516121a592828c0cee8f7faedcbfb441fa',
      '0x02c9bdb8ee1915ab09c78dd2b08fe9a96a461dcec1aa9710faa5daa4109a0e19',
      '0xb279d8a2ad29645d9b4c6db5569660881e184c6f55f2849f98eaf32ab4755a53',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x577B16cC1Cf4e7dF737Fec086Caf52cCcfb55189': [
      '0xc0472bd4084c8803c45ef09d377e83c94b0b77639a86a6db7d3b627b38132a94',
      '0xb2dd246b4655f7f2fffb78414d667c63d744957ab88b40f338937daba2f4ebfb',
      '0x02c9bdb8ee1915ab09c78dd2b08fe9a96a461dcec1aa9710faa5daa4109a0e19',
      '0xb279d8a2ad29645d9b4c6db5569660881e184c6f55f2849f98eaf32ab4755a53',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x7915e43086Cd78Be341Df73726C0947B6334b978': [
      '0xc6e904b6809589642dd42247fa77d51ef3910a12a4788399b60eac1f6294bb72',
      '0xb2dd246b4655f7f2fffb78414d667c63d744957ab88b40f338937daba2f4ebfb',
      '0x02c9bdb8ee1915ab09c78dd2b08fe9a96a461dcec1aa9710faa5daa4109a0e19',
      '0xb279d8a2ad29645d9b4c6db5569660881e184c6f55f2849f98eaf32ab4755a53',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x7C62BE81B4372202E090Ee22cae8a8F643f4469e': [
      '0x2dd79472b7de0d0f823b7c46c43eb5dd9968d2f6a90da55ca1716281a1d3a72d',
      '0x3a55343559bac808dabc95e2326118dc0421d059dc7d6729ce8a9b3f3f960995',
      '0xff5c2175a97f8bc96dd83212874366ecf9cfae24abd0858d98756b6512eeeb61',
      '0xb279d8a2ad29645d9b4c6db5569660881e184c6f55f2849f98eaf32ab4755a53',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x7edd6E5AE510051F34155547b258047d1b1c527D': [
      '0x109adfbc8f99f8b1935bc97ac552f7c89e91dc4518fe7fe626d816300f959ddb',
      '0x3a55343559bac808dabc95e2326118dc0421d059dc7d6729ce8a9b3f3f960995',
      '0xff5c2175a97f8bc96dd83212874366ecf9cfae24abd0858d98756b6512eeeb61',
      '0xb279d8a2ad29645d9b4c6db5569660881e184c6f55f2849f98eaf32ab4755a53',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x89343eF54Def2Dfd091D79E23518783fEbD9bE55': [
      '0xd6452eff2aad9071bd9a156c7070b21e0f4342c4a6bf825d2eb603597b4c069c',
      '0xaa26413af946037fcd1fc54e36a5b2d08421817fefa884a310b2bc88c858059f',
      '0xff5c2175a97f8bc96dd83212874366ecf9cfae24abd0858d98756b6512eeeb61',
      '0xb279d8a2ad29645d9b4c6db5569660881e184c6f55f2849f98eaf32ab4755a53',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x8BD797326bf74d6DDA4BBDb2f469A3f620E4347d': [
      '0xbb6911dbda25b98d37d91b683af71b98a927b10ec8ff8f73c451bd3316da86c5',
      '0xaa26413af946037fcd1fc54e36a5b2d08421817fefa884a310b2bc88c858059f',
      '0xff5c2175a97f8bc96dd83212874366ecf9cfae24abd0858d98756b6512eeeb61',
      '0xb279d8a2ad29645d9b4c6db5569660881e184c6f55f2849f98eaf32ab4755a53',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xbb793AC55ea9A1cC5a72566Cd7c8323132acA1d3': [
      '0x5761301d2193cb23f7903e0c12e3435dd13d2a7bdab9bced436ffc7f5199070d',
      '0x99b41699401f03b9d645badca692c673e93b6e6918fd047304d230d8021e0cac',
      '0x115c0384f97d488a00ac842601cadcce7cb6a2f2db11d08e3338d563694a644d',
      '0x1a8ede4b96a7fcfa7a6c1c73f3e076ae5c7eb2cd87f41fd08e820d8fa0ed1cd4',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xBCDa17B44bD1C7149E7cFA7DeEaEab97ff2B4262': [
      '0x86fc64870f940a05f439bf9bb45acf92b4e33ee51f9e9d02b554e0fbc21cb705',
      '0x99b41699401f03b9d645badca692c673e93b6e6918fd047304d230d8021e0cac',
      '0x115c0384f97d488a00ac842601cadcce7cb6a2f2db11d08e3338d563694a644d',
      '0x1a8ede4b96a7fcfa7a6c1c73f3e076ae5c7eb2cd87f41fd08e820d8fa0ed1cd4',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xBF46B318A65bc213EB8e5EF4ea02590F82fD92B2': [
      '0x4e64e8b09630ecd1d496afc48c9b6803f1f2f3c2d58ae1863ed04db2907c5796',
      '0x198fae5d953e7f6fe56be463f3c099bc307e5d57d146b3dc28d9578dd829dc51',
      '0x115c0384f97d488a00ac842601cadcce7cb6a2f2db11d08e3338d563694a644d',
      '0x1a8ede4b96a7fcfa7a6c1c73f3e076ae5c7eb2cd87f41fd08e820d8fa0ed1cd4',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xcf88FA6eE6D111b04bE9b06ef6fAD6bD6691B88c': [
      '0x30a7a9379a29d757a1a908d67fa3dfa028ab4064ef853a79d2f3d05cf1b3e372',
      '0x198fae5d953e7f6fe56be463f3c099bc307e5d57d146b3dc28d9578dd829dc51',
      '0x115c0384f97d488a00ac842601cadcce7cb6a2f2db11d08e3338d563694a644d',
      '0x1a8ede4b96a7fcfa7a6c1c73f3e076ae5c7eb2cd87f41fd08e820d8fa0ed1cd4',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xd58518b059895D0628F065f42d2D90D37f347F1A': [
      '0x2765e641aff3c1fae6846d1b75d3c86dc8bdb31d8a0b3e09c524ba859bf3ccac',
      '0x1734f6844f9738784a04771cee816a50a4789fc27a042977d4666fe2b67bf151',
      '0x10ae3362bd127373ae12ca2310c0d5e939e5eb5147f1ba6ca4be209bcec5a5c4',
      '0x1a8ede4b96a7fcfa7a6c1c73f3e076ae5c7eb2cd87f41fd08e820d8fa0ed1cd4',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xDbbD4880CC6fb401d67b58C940Ec6c680d74E420': [
      '0x2b7c345f626a7620217d01cf4c72e6743eec66f538681f6982b286409feb0568',
      '0x1734f6844f9738784a04771cee816a50a4789fc27a042977d4666fe2b67bf151',
      '0x10ae3362bd127373ae12ca2310c0d5e939e5eb5147f1ba6ca4be209bcec5a5c4',
      '0x1a8ede4b96a7fcfa7a6c1c73f3e076ae5c7eb2cd87f41fd08e820d8fa0ed1cd4',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xe485656EC623115Bf2d445B925DB5D63707Bf74b': [
      '0xc134edac06deaf0ded89c9abfdb056abccc096530012db28e7c50caebea46fca',
      '0x468c88d0e1b9879934dbe4fb47a933522b235b3585b507ae6c4098cc8b6c1fe7',
      '0x10ae3362bd127373ae12ca2310c0d5e939e5eb5147f1ba6ca4be209bcec5a5c4',
      '0x1a8ede4b96a7fcfa7a6c1c73f3e076ae5c7eb2cd87f41fd08e820d8fa0ed1cd4',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x120F8d691e359561ABc080C2A9C98a1DE7a9Fd08': [
      '0x175e689b4f7665cbe81f58f19a9b8d0fcbf9ebc9e53ae80ba5cbe9c19220f3da',
      '0x468c88d0e1b9879934dbe4fb47a933522b235b3585b507ae6c4098cc8b6c1fe7',
      '0x10ae3362bd127373ae12ca2310c0d5e939e5eb5147f1ba6ca4be209bcec5a5c4',
      '0x1a8ede4b96a7fcfa7a6c1c73f3e076ae5c7eb2cd87f41fd08e820d8fa0ed1cd4',
      '0x2b802b4bd51c57681f50b15fef3a216b1f58e1d1306e3fd38700e74a0d0b1fc4',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x2E66dc5C7a533C16c185204Bf64bB102DEfA4419': [
      '0xbab957f3781d246482f5dc24bb9f75276a386ac51cdd134373edfb2b43cfc413',
      '0x3e837ec92954e37dacfcb4d8be0382e04cc2a7139f1fec6e8501a4615a75e711',
      '0x609604646637855da2bd7d46571e1bb34e7ce94f8b531fafdcb6afa02fad5730',
      '0x859e33a7fbf942be6c1227bed799ccd08641d3e8fdcccb93ba7e54bd4d6a67ac',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x4aEBFDD24A1a9EDC5ccb52069695Cc927aE9E1b7': [
      '0x68b96332aaa105babe903e5505412aa06f5f6f314cd27b606db5b37f19513bec',
      '0x3e837ec92954e37dacfcb4d8be0382e04cc2a7139f1fec6e8501a4615a75e711',
      '0x609604646637855da2bd7d46571e1bb34e7ce94f8b531fafdcb6afa02fad5730',
      '0x859e33a7fbf942be6c1227bed799ccd08641d3e8fdcccb93ba7e54bd4d6a67ac',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x6Be309c18Fbe511B6f7883b04D184992310D2aDa': [
      '0xc4fdaecdc4b9ce1f4b050417b9ec95f3f62432e7bc84e8ed4f50bb256a5b8b3f',
      '0xbf570fd9a23887a8d954c21eede491529b9434fadc500ba26e7fca480969e86a',
      '0x609604646637855da2bd7d46571e1bb34e7ce94f8b531fafdcb6afa02fad5730',
      '0x859e33a7fbf942be6c1227bed799ccd08641d3e8fdcccb93ba7e54bd4d6a67ac',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x7ee2C57dEAAEb6614e341e9556cde49f1C2557Ed': [
      '0x9fc79f6c4b93c9540a46c94ee740902a2f7469e8dd4bbd6eede573c6eee137b0',
      '0xbf570fd9a23887a8d954c21eede491529b9434fadc500ba26e7fca480969e86a',
      '0x609604646637855da2bd7d46571e1bb34e7ce94f8b531fafdcb6afa02fad5730',
      '0x859e33a7fbf942be6c1227bed799ccd08641d3e8fdcccb93ba7e54bd4d6a67ac',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x85F0a0BB2eF4192Bcd79A20c47B26096c99a9907': [
      '0xce9e4ebff8316b0a0bc68ea15ec315039fd2581bccfe3ebf7837ddf38fe3d729',
      '0x3cc3268ea7a9511a10d5157d7e74ab3040df0126509b36a2d0663703a5cb7285',
      '0xbd95d6dae5bd11568c32fd490d9a9f6c756725e3a935b47a5f20588562a1a4bb',
      '0x859e33a7fbf942be6c1227bed799ccd08641d3e8fdcccb93ba7e54bd4d6a67ac',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xBddAe6936532796AfD4346C207d9D87c9B65eA4c': [
      '0x616f1328c8495b2431d3914b036b26a422059690c26bc3663a7b42daa0f7b9cb',
      '0x3cc3268ea7a9511a10d5157d7e74ab3040df0126509b36a2d0663703a5cb7285',
      '0xbd95d6dae5bd11568c32fd490d9a9f6c756725e3a935b47a5f20588562a1a4bb',
      '0x859e33a7fbf942be6c1227bed799ccd08641d3e8fdcccb93ba7e54bd4d6a67ac',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xD97f52752e3F0eE37581810F7945756463B9CC94': [
      '0x181308dabc27d15e38b1f610a2d7c6fdad60fa3e19fec5b1dcc65855a13071ad',
      '0xb96a5c5468cb3c21c6b3b69786f163e95c4cecfa3c0e0ea4f01e59fb7373c6ab',
      '0xbd95d6dae5bd11568c32fd490d9a9f6c756725e3a935b47a5f20588562a1a4bb',
      '0x859e33a7fbf942be6c1227bed799ccd08641d3e8fdcccb93ba7e54bd4d6a67ac',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xE7F4fB77920dc6ce633bd90544cfC3C4288135B9': [
      '0xaeef81797bd25b51515f66d94e58f4373eef6eddb981f2befe08097366e3be72',
      '0xb96a5c5468cb3c21c6b3b69786f163e95c4cecfa3c0e0ea4f01e59fb7373c6ab',
      '0xbd95d6dae5bd11568c32fd490d9a9f6c756725e3a935b47a5f20588562a1a4bb',
      '0x859e33a7fbf942be6c1227bed799ccd08641d3e8fdcccb93ba7e54bd4d6a67ac',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xF8aE0C281ffa2426d742c97f1291151cE7aAe0d9': [
      '0x885f9af2ed14c25c7799c360075d1e51993646ed98ebf1e8cc240683d9d636ec',
      '0xe27dca3ccc7d0e91e16a3e9776a75a5a5cf9ebb4c8c417ff45eb6ea91d8e0a80',
      '0xff8e515f340c2e1db7cb891832a6f7366c0604a15038b178ff8f3ca5019f0c2a',
      '0xeb8429902eac68011e1b6e9ab276da653449f9fd826c48de6617cb3efcce5748',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x8cc0019C16bced6891a96d32FF36FeAB4A663a40': [
      '0x043eda4a7404b402d10f0a77db32b99abfe3aa1c83125774dbdd104fe971dd71',
      '0x1b1949fad6c769ba7906d3969b71797e12ddc73c8eec9bfe01b489768509bc05',
      '0x32bfa248bc62c74f962e698a71ae7c82a25c9286e658abfa5bb35ebaea83da64',
      '0x72238d80f2598e635011faf58903962241160c1aa57f86218615c48d7013e314',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xD1877f096DdE4eA00942F5EBAFf2aC1962838A8A': [
      '0xbb94df04a9fa9390bac2c8cd942791a46c251d7aea862a0469787e3245725472',
      '0xfadff5a3ef647107e3806861c3a88ea3d1425ec79c3f6c07baaeba8e7f642396',
      '0xff8e515f340c2e1db7cb891832a6f7366c0604a15038b178ff8f3ca5019f0c2a',
      '0xeb8429902eac68011e1b6e9ab276da653449f9fd826c48de6617cb3efcce5748',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xBE3352Ae7C20161d4fb1D0Dc2aad099227B5F246': [
      '0x55a6cea9a0cff81bc93c4d78f23b32a1ca37e8b9e07590adc9cf951350dc795c',
      '0xfadff5a3ef647107e3806861c3a88ea3d1425ec79c3f6c07baaeba8e7f642396',
      '0xff8e515f340c2e1db7cb891832a6f7366c0604a15038b178ff8f3ca5019f0c2a',
      '0xeb8429902eac68011e1b6e9ab276da653449f9fd826c48de6617cb3efcce5748',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x9117a2798182F79CC9AAD4038858b3F8B5B2D6e9': [
      '0xa1bd9d2f2de71223bedeed70b82a799964bc9e29b7aa5ec2154f71b7abc1fc1c',
      '0xb5317e4c9de5762bd0ad3469e10d3e49e165116e8841fc259434c7165b4f3f3e',
      '0x4ebbf8dc42ec7dfebe03dc931113e8cae7a0fb4305fbaa1cceb9cc2894504b74',
      '0xeb8429902eac68011e1b6e9ab276da653449f9fd826c48de6617cb3efcce5748',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xB970f60495B36Ac66c06f9b01e3b1520c2a2Fcd7': [
      '0x7139766af582b901d54ed700e2b2a427c5183bfabe1da7deb831a098c0a696fa',
      '0xb5317e4c9de5762bd0ad3469e10d3e49e165116e8841fc259434c7165b4f3f3e',
      '0x4ebbf8dc42ec7dfebe03dc931113e8cae7a0fb4305fbaa1cceb9cc2894504b74',
      '0xeb8429902eac68011e1b6e9ab276da653449f9fd826c48de6617cb3efcce5748',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x3A5bc2558C7DF30005507Eb2EF542c1bb000AA62': [
      '0xce0d37e080ecb440f10e216d37cabc09f57f4afd476e5c5dc7963dc1eb5a6a6d',
      '0x68f16f12bc4e50faa1a51ba46478f148121f607c1676b487c0328fd7231ef131',
      '0x4ebbf8dc42ec7dfebe03dc931113e8cae7a0fb4305fbaa1cceb9cc2894504b74',
      '0xeb8429902eac68011e1b6e9ab276da653449f9fd826c48de6617cb3efcce5748',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x726C9Dd77Ebe97d79C325Bd8e2fC1C9a57EaFDbe': [
      '0x2613b3cd284ddbcc79becb2cc8004154d0635a6764b8ef1574f338d005afaff6',
      '0x68f16f12bc4e50faa1a51ba46478f148121f607c1676b487c0328fd7231ef131',
      '0x4ebbf8dc42ec7dfebe03dc931113e8cae7a0fb4305fbaa1cceb9cc2894504b74',
      '0xeb8429902eac68011e1b6e9ab276da653449f9fd826c48de6617cb3efcce5748',
      '0x2883cc2bc3262b65d2fceed612252a6e13033072e63b7ace240fe58f99307121',
      '0xcbceafc9f581fc0ba9fb64e567cc0162fd91477d84b053150e4b1ae20b96f005',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x205B7a8637a8edB45f9c4f50bDb282B01c05615C': [
      '0x3b8b9b19f8141510ab5bd2b8d3bd475a93cb64b485272e2b080a31ed6d3c0dbb',
      '0xc090688cffc18301fd827ecb52d1cd825cde3836a1c7d03f4871ede254c00b1e',
      '0xda454a5d43404b488a61387ba3705a2b62d4453934389ad6ae62fb9f1995c64f',
      '0x4f455f5c47767337ef27dfbf6501a0151f6170037fab804779bc1f842517861b',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xdb24221316A0003292a2E97D1A18a6944bBf67b6': [
      '0x3034030551bcdcb9d8273c355c128b3f47affc33538b22d5f45d76ba6297b6b3',
      '0xc090688cffc18301fd827ecb52d1cd825cde3836a1c7d03f4871ede254c00b1e',
      '0xda454a5d43404b488a61387ba3705a2b62d4453934389ad6ae62fb9f1995c64f',
      '0x4f455f5c47767337ef27dfbf6501a0151f6170037fab804779bc1f842517861b',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x58cfaBf524C46D43F1235e08AB8Fe5E74cC8FD14': [
      '0x7ff766c6b16d320a99322b20f36589fe4052882e3867ecc74b8d428bae67320a',
      '0xcba12e3bfff557fc238753a244d37c0034a7df17412d528448e1a09165935d36',
      '0xda454a5d43404b488a61387ba3705a2b62d4453934389ad6ae62fb9f1995c64f',
      '0x4f455f5c47767337ef27dfbf6501a0151f6170037fab804779bc1f842517861b',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xCB28b2fC7CaD481F6D266F7e8983cbe15F9F292f': [
      '0x41ee767c3e1d766e2ffbf655a213acf7b1d4585ab325bdcefe3d0e9f6b4f4cda',
      '0xcba12e3bfff557fc238753a244d37c0034a7df17412d528448e1a09165935d36',
      '0xda454a5d43404b488a61387ba3705a2b62d4453934389ad6ae62fb9f1995c64f',
      '0x4f455f5c47767337ef27dfbf6501a0151f6170037fab804779bc1f842517861b',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x5B5fc02D41eAAFA7eCde3c02C3e5c59110A77d99': [
      '0x5a0b6d83faee80b949df43677b44e880b8d67d5847402b170697ae81026a15d7',
      '0x8e0b1546c960a3a4035219f258be0bf33d5dc4792d9f8e12bb6f170b32bf4c0b',
      '0xc3e6dae436d3a935d6eacb5865711d947588dd52d1073fe4f5fea6fe05c95da9',
      '0x4f455f5c47767337ef27dfbf6501a0151f6170037fab804779bc1f842517861b',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x1339d7EbD935ff9f94Fcde856799a1Cf9443b0Ee': [
      '0x6014ab88c20a4de4ca79abd4fb06eab8c39efd09c2c9b3eac10cc6a28cb26105',
      '0x8e0b1546c960a3a4035219f258be0bf33d5dc4792d9f8e12bb6f170b32bf4c0b',
      '0xc3e6dae436d3a935d6eacb5865711d947588dd52d1073fe4f5fea6fe05c95da9',
      '0x4f455f5c47767337ef27dfbf6501a0151f6170037fab804779bc1f842517861b',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x2c59900B9442b7A865F93219c04f553a0D7BD003': [
      '0x5177c8ac71af73d5ee040254e6232bacb3a97491be03c69732345c023bac77d2',
      '0xae13adb05ce95f88a6889229f2b90eb00094dee9786f84a9b6215e9a77ba58e7',
      '0xc3e6dae436d3a935d6eacb5865711d947588dd52d1073fe4f5fea6fe05c95da9',
      '0x4f455f5c47767337ef27dfbf6501a0151f6170037fab804779bc1f842517861b',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x311d61cD8310FEe771Db5C8D8352074E0e09591C': [
      '0x2c1c7909a585ad8fec76f9a70ec6ef1695ff55c855ed50b89ab20bd637150db0',
      '0xae13adb05ce95f88a6889229f2b90eb00094dee9786f84a9b6215e9a77ba58e7',
      '0xc3e6dae436d3a935d6eacb5865711d947588dd52d1073fe4f5fea6fe05c95da9',
      '0x4f455f5c47767337ef27dfbf6501a0151f6170037fab804779bc1f842517861b',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xE31Bb1A9a271B754cbaDCD5e993c883d8E4cf9af': [
      '0xb4415b60f5e363f7f689dd695a4f4c2778ed08de6c1f1e429814e638086e5b4d',
      '0x806f569a287278a466dfda3d6921858681464116e4f1dc8fafff56858729e485',
      '0x8ebae785c8a8996746c02896c30d75ae47cb0c6501104ce5a4f816c97ee3d02e',
      '0xcce2e54fb940076f89c561ba2ba47df6ca82159620a074be43700ccfd13f51a3',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x9dDFcB9A0b229985913255E8cFb2D938329C4F75': [
      '0xb119a12cc6b55064f2c2b3a6b4254810cd9fffdbe4e187cdd963c849d32e38fb',
      '0x806f569a287278a466dfda3d6921858681464116e4f1dc8fafff56858729e485',
      '0x8ebae785c8a8996746c02896c30d75ae47cb0c6501104ce5a4f816c97ee3d02e',
      '0xcce2e54fb940076f89c561ba2ba47df6ca82159620a074be43700ccfd13f51a3',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x9A52B14EA7049850796C27062df5dA8fbB99080d': [
      '0xcdf51436d4ed0e39fbc05b7441786187f96518c4114f428b8663f917341347ef',
      '0x783b86a6a12902b6d26b774d0a8705cf4fb3f83f81da09d0dc72aee5cf940714',
      '0x8ebae785c8a8996746c02896c30d75ae47cb0c6501104ce5a4f816c97ee3d02e',
      '0xcce2e54fb940076f89c561ba2ba47df6ca82159620a074be43700ccfd13f51a3',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x9C562e8d7B08b14109cd505F049a53637B9f63D1': [
      '0x79a3756c7392e447ac410106bc6a397623a850354c5888bac4560c2346f53f56',
      '0x783b86a6a12902b6d26b774d0a8705cf4fb3f83f81da09d0dc72aee5cf940714',
      '0x8ebae785c8a8996746c02896c30d75ae47cb0c6501104ce5a4f816c97ee3d02e',
      '0xcce2e54fb940076f89c561ba2ba47df6ca82159620a074be43700ccfd13f51a3',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x5856e31484AAA38e51f670636082Cd86c5a709cC': [
      '0x44aef7225492a769896e0e8c4c13f71c917f6cf4b4cff9977386ac81f6034e5a',
      '0x9eb5300bc5ec59eb3b6764465b78a6e765b9dcfe49c5d18ec19d4a624c998f65',
      '0x7d48f8077e70f3ed13d616cdc2192a2da4743b70dd93f0c13a7011b4f4b31d8c',
      '0xcce2e54fb940076f89c561ba2ba47df6ca82159620a074be43700ccfd13f51a3',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x5a5A774d42ffE9F34E2C815E219e9559E1876Ecb': [
      '0x7bc88d6f648096cdcc9ee200e1b56ae0e9075d2f38b3b6938b0c6d9e38174ece',
      '0x9eb5300bc5ec59eb3b6764465b78a6e765b9dcfe49c5d18ec19d4a624c998f65',
      '0x7d48f8077e70f3ed13d616cdc2192a2da4743b70dd93f0c13a7011b4f4b31d8c',
      '0xcce2e54fb940076f89c561ba2ba47df6ca82159620a074be43700ccfd13f51a3',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xaBF0eEF81cEfF99aAc3F306B74F68ca698363e8f': [
      '0x9a8ad8c1745d6bc8e244a9b3ae99e7f173dd55efa1b9b6e44f6be89925063685',
      '0xf86cf4dd4757c99af91b86e42f0a418d213140695d5f34befff66c755981cfa1',
      '0x7d48f8077e70f3ed13d616cdc2192a2da4743b70dd93f0c13a7011b4f4b31d8c',
      '0xcce2e54fb940076f89c561ba2ba47df6ca82159620a074be43700ccfd13f51a3',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x90e42Fa8351e93fBAd25dAB071255156c430DB33': [
      '0x4fbc80ab8fa7796206a01b7470de4ef370b5715f42bcdeb9e2090a88830fd9ad',
      '0xf86cf4dd4757c99af91b86e42f0a418d213140695d5f34befff66c755981cfa1',
      '0x7d48f8077e70f3ed13d616cdc2192a2da4743b70dd93f0c13a7011b4f4b31d8c',
      '0xcce2e54fb940076f89c561ba2ba47df6ca82159620a074be43700ccfd13f51a3',
      '0xe7805c147508da2ac7c2c3562d5c833e9f946ab3ae62056e032ab5588a56ea1a',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x73a2173130a51834d67e286414d9a3303530b16c': [
      '0xb1f72072a4d548847b8210e9162babc3a47f2d780f5e8ef53563647898196bdf',
      '0x5dd8b05e6a37c4a973c033c7b08290cd33f59d26d9e725893691c01fbf4adae9',
      '0x84dc12f86bb3cf58878c2d4a49d854be8bac14b34a0d9fd20541eb0db8877f67',
      '0x38d7de8ddeba15c2ae54054f9a7bdfe69c61a0da2643b97dae29d0cf19882d61',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xA91ce0DB5e4AcF43b8D489E2b2dAcEDD57a27524': [
      '0x205c91eb893d1ade7ae622989f1558fa80161e22ea1dc1c8d1e9c88416e3934e',
      '0x5dd8b05e6a37c4a973c033c7b08290cd33f59d26d9e725893691c01fbf4adae9',
      '0x84dc12f86bb3cf58878c2d4a49d854be8bac14b34a0d9fd20541eb0db8877f67',
      '0x38d7de8ddeba15c2ae54054f9a7bdfe69c61a0da2643b97dae29d0cf19882d61',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xa020410B6cdE5877388bA2dED1E1561015aF8697': [
      '0xb9f7b73bc14cac0517db84533e04afc1d2ef6ed17979cb3a21d5e7698b491842',
      '0x7772ec143f0f3801cd0d4af00dd7d9adf3d7f764d328f50095de91fee5db40b7',
      '0x84dc12f86bb3cf58878c2d4a49d854be8bac14b34a0d9fd20541eb0db8877f67',
      '0x38d7de8ddeba15c2ae54054f9a7bdfe69c61a0da2643b97dae29d0cf19882d61',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x9906ecC4EB8d7f2D463B00727991D8dFCd1cdabE': [
      '0x27193ce5c99b348b1ed406fef66bb837515a1df4f23d4e54b732a308261919c9',
      '0x7772ec143f0f3801cd0d4af00dd7d9adf3d7f764d328f50095de91fee5db40b7',
      '0x84dc12f86bb3cf58878c2d4a49d854be8bac14b34a0d9fd20541eb0db8877f67',
      '0x38d7de8ddeba15c2ae54054f9a7bdfe69c61a0da2643b97dae29d0cf19882d61',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xc7462f6E950c368E664a29a9383A98f92fDFcb69': [
      '0x4949ca1e78d5b357babf6f6503b3a67290e4e1e1cc2ad3f157dce2e68a4840d1',
      '0x0d7c1d2ddf8995be34248a2440a1091956fb263a6bafaa60a5b7006708203a7b',
      '0xfdfae0ebe7cf4db3662185dac23a04dce864b1b36a6e847f2ba84c41030e9290',
      '0x38d7de8ddeba15c2ae54054f9a7bdfe69c61a0da2643b97dae29d0cf19882d61',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x5D22BAbFDc8047C4A91070Aa04759BDa4eA77F84': [
      '0x59b822f11ac54792f9d611bff78ac6229691a4e0ec3b1829cc08678130f269ac',
      '0x0d7c1d2ddf8995be34248a2440a1091956fb263a6bafaa60a5b7006708203a7b',
      '0xfdfae0ebe7cf4db3662185dac23a04dce864b1b36a6e847f2ba84c41030e9290',
      '0x38d7de8ddeba15c2ae54054f9a7bdfe69c61a0da2643b97dae29d0cf19882d61',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xdE4E964529F4676C23ef744A23AC1EFd526D1983': [
      '0xa8152bf09510d9f61c77e8a61d7c0ccd1bc64ba796e0a0b34ee5b524e7d3312a',
      '0x9b1c8b32fc9211c39e90038dd3db6062d2a20447e08c83775bf6a6d35b96c6d8',
      '0xfdfae0ebe7cf4db3662185dac23a04dce864b1b36a6e847f2ba84c41030e9290',
      '0x38d7de8ddeba15c2ae54054f9a7bdfe69c61a0da2643b97dae29d0cf19882d61',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x1985BDE6F68fF743907D147ead62DA65aB651714': [
      '0x41d83254a9b2c78331c0ec4f96660b6e849318f73a217c141338a4c878eea21f',
      '0x9b1c8b32fc9211c39e90038dd3db6062d2a20447e08c83775bf6a6d35b96c6d8',
      '0xfdfae0ebe7cf4db3662185dac23a04dce864b1b36a6e847f2ba84c41030e9290',
      '0x38d7de8ddeba15c2ae54054f9a7bdfe69c61a0da2643b97dae29d0cf19882d61',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x307fbe5DecdEa1464b2b7D7F73E4BD8C09110AAd': [
      '0x0c004875cb67da9b0b3984f5b4f9ffea53c8b38bc45756921e3fbff73b6e366c',
      '0xd5e73058bdc993a122bed69d82fa73f0d7e44beff70e39698a90d4bcb4d1e5ec',
      '0xcb84bcc1b10af0b4814d4cf4004f7d2c4bd40e8d1e885ae2beb143aa4b8e5565',
      '0xf4a387bf160ceb47f080c39cfa7ef3a0346bcf1ef29ab224d1681aca82f42579',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xfed74f78700bB468e824b6BfE4A2ED305a9D86ba': [
      '0xc00fef6b10d201c5b962ccc21fd646b4992ebff912e1444839081dbeb250a88f',
      '0xd5e73058bdc993a122bed69d82fa73f0d7e44beff70e39698a90d4bcb4d1e5ec',
      '0xcb84bcc1b10af0b4814d4cf4004f7d2c4bd40e8d1e885ae2beb143aa4b8e5565',
      '0xf4a387bf160ceb47f080c39cfa7ef3a0346bcf1ef29ab224d1681aca82f42579',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x6C5491665B5aAc18F8e197A26632381AF9732028': [
      '0xdafe8cb4ad822da0875af39624157fc9c81b9b18a1c986609d1653c6fbbff232',
      '0x4590438ee18d1bffa7dc5d60ca698b6e961cca649530710eedb350ad173e192c',
      '0xcb84bcc1b10af0b4814d4cf4004f7d2c4bd40e8d1e885ae2beb143aa4b8e5565',
      '0xf4a387bf160ceb47f080c39cfa7ef3a0346bcf1ef29ab224d1681aca82f42579',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x6c9EF71D9CeF8886939c73B110C3B53cA7CbfE24': [
      '0x0939c94ac7bb6b8596080e5ae12568333e605d721c55ad43b6d465e74ca4c5b0',
      '0x4590438ee18d1bffa7dc5d60ca698b6e961cca649530710eedb350ad173e192c',
      '0xcb84bcc1b10af0b4814d4cf4004f7d2c4bd40e8d1e885ae2beb143aa4b8e5565',
      '0xf4a387bf160ceb47f080c39cfa7ef3a0346bcf1ef29ab224d1681aca82f42579',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x51867BB682047166032c990D75F49389168C73A2': [
      '0x69dde964af4cec540585293c5dfcce403d076ed5dda7c78971480b17c9ff4158',
      '0x3961a695a02e199f98bb77f0840c470c31901f86c2c24372fdc711e8477f899a',
      '0x281fc2442fcf7a0181ea137ccae7afb2a5b27755ba64fdc1c82a7e189061c801',
      '0xf4a387bf160ceb47f080c39cfa7ef3a0346bcf1ef29ab224d1681aca82f42579',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0xDf19C0D8e341dD8F047C5Fd6aD6404cb1f354238': [
      '0x0c6ecf940cd933744d7cc0727a4507d3acd08ca0683ad1aacd27b5eba8e9b1d6',
      '0x3961a695a02e199f98bb77f0840c470c31901f86c2c24372fdc711e8477f899a',
      '0x281fc2442fcf7a0181ea137ccae7afb2a5b27755ba64fdc1c82a7e189061c801',
      '0xf4a387bf160ceb47f080c39cfa7ef3a0346bcf1ef29ab224d1681aca82f42579',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x470299A90C371B17D6DFC101cBC7c090C1555408': [
      '0x682bc90dcdb95593dbc0612baf787840cf11757498915ca3aac7290b475f7dab',
      '0x18f60e88c0de072c786a42c26168e3201fed3d446e64aa76948c6c84302d7821',
      '0x281fc2442fcf7a0181ea137ccae7afb2a5b27755ba64fdc1c82a7e189061c801',
      '0xf4a387bf160ceb47f080c39cfa7ef3a0346bcf1ef29ab224d1681aca82f42579',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x81e53dd4f3DBfb7F3896Aa5Da54e6Ac480031977': [
      '0xde9f373bde439a12c9987ad22cdd680d1d485ca50bbee1e0eaba66eb85e9b3ac',
      '0x18f60e88c0de072c786a42c26168e3201fed3d446e64aa76948c6c84302d7821',
      '0x281fc2442fcf7a0181ea137ccae7afb2a5b27755ba64fdc1c82a7e189061c801',
      '0xf4a387bf160ceb47f080c39cfa7ef3a0346bcf1ef29ab224d1681aca82f42579',
      '0x7b7880fc823c4a46582d3250449adabd77d939a72a34d1df29e9073646c7dc70',
      '0xde68c84c24555334cc09ca166937c53dd940e2799357101b5f4f69af9f22d76d',
      '0x5a024fdb3755b402cbffcf85b023d56905f8881d7aafc23532b49ab14e5cc55a',
      '0xab0ef3083ebc4ce4c51655aa12f3a8283af32e00a87036410193c199916cb0c8'
    ],
    '0x7261a3b25f410a2E90D12a79BF6A2EEA89A41993': [
      '0x4fbb25623d97eb4475276d806fe8aadb8c097149d9df1f826c5d1e9275107119',
      '0xac1290853f6140d7b3a87e21fcee048fb92a496fa98ae214678cdbc60ba76082',
      '0x6bfd0ccad63b2b89028581aa29109f9b000fa2cf22ef7d607a8afd5d3d148e89',
      '0xe3134a693499ba61fdad1b28f9d627960ba89314246505ef3579f1e4d0d44b2b',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x7E6d4810eA233d7588E3675d704571e29C4BCbBa': [
      '0x88ff225938816964405ebe5b9dda99ec93050fd516a10c5f3f8125302a551745',
      '0xac1290853f6140d7b3a87e21fcee048fb92a496fa98ae214678cdbc60ba76082',
      '0x6bfd0ccad63b2b89028581aa29109f9b000fa2cf22ef7d607a8afd5d3d148e89',
      '0xe3134a693499ba61fdad1b28f9d627960ba89314246505ef3579f1e4d0d44b2b',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x59D6779Eca6c91eD7679E261b54299b5155EAdF0': [
      '0xa5eb35e56430363c3ea3c5e71e7cc8eeebbb5d00bab93a8f77c1ffbd10f16f3b',
      '0x091ffe9a1d7ddc2d6a29ea961106523c8415d071cea806908091a0b0269edbfb',
      '0x6bfd0ccad63b2b89028581aa29109f9b000fa2cf22ef7d607a8afd5d3d148e89',
      '0xe3134a693499ba61fdad1b28f9d627960ba89314246505ef3579f1e4d0d44b2b',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x07D049adf79804bf75D9ABEF9F12D2db4a90e4D1': [
      '0x9594406eceb4d3c64c1fdd2b873373eb02dfdd156211c09f498c9df89a1debef',
      '0x091ffe9a1d7ddc2d6a29ea961106523c8415d071cea806908091a0b0269edbfb',
      '0x6bfd0ccad63b2b89028581aa29109f9b000fa2cf22ef7d607a8afd5d3d148e89',
      '0xe3134a693499ba61fdad1b28f9d627960ba89314246505ef3579f1e4d0d44b2b',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x1FBe7279DA134C53Fa521f5EE65891948e775e17': [
      '0xafa88799050dbae5752ddb566078e6c6bd6203a4695de54318fa9632ea8f7855',
      '0x811932628c0c13702da03fac42ef5bb8ba6b4980b48c2462e6e03b533a134717',
      '0x77cb4aafc668bff713bbd8430662a0448b84c08d83deeff35ac2b9005508cc9d',
      '0xe3134a693499ba61fdad1b28f9d627960ba89314246505ef3579f1e4d0d44b2b',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x435a4CCC3712B0B40cE16A1C7Bfa263Ed6e9Bb33': [
      '0x0720ae12c0aac1c15a2ea37da81dee647a6fada464686771de849a33a0ae1415',
      '0x811932628c0c13702da03fac42ef5bb8ba6b4980b48c2462e6e03b533a134717',
      '0x77cb4aafc668bff713bbd8430662a0448b84c08d83deeff35ac2b9005508cc9d',
      '0xe3134a693499ba61fdad1b28f9d627960ba89314246505ef3579f1e4d0d44b2b',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xb6682691708Da7B85Da007eA51E9F9d85bad5b15': [
      '0x74c762025bbcb37874378e36d26fc2b7754765e5a9c3ad9dfdfca907b399e863',
      '0x8fb1cedd1ddbb452c3679fd2e6a2c5d4d3a7f02d2ddb4c1318b61f134cfc9583',
      '0x77cb4aafc668bff713bbd8430662a0448b84c08d83deeff35ac2b9005508cc9d',
      '0xe3134a693499ba61fdad1b28f9d627960ba89314246505ef3579f1e4d0d44b2b',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x2586319850DEfD14dBFa93fE588780FDEA0d4336': [
      '0x7dc299f40bae36263b3fa9fe415e1b85aaf413a949e7a851beb5e7da51e70ca3',
      '0x8fb1cedd1ddbb452c3679fd2e6a2c5d4d3a7f02d2ddb4c1318b61f134cfc9583',
      '0x77cb4aafc668bff713bbd8430662a0448b84c08d83deeff35ac2b9005508cc9d',
      '0xe3134a693499ba61fdad1b28f9d627960ba89314246505ef3579f1e4d0d44b2b',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xBf7dDE433C85F7Eb8Fe734343101FBCc21548591': [
      '0x7f6e43d19e04425d4c29873637d0be414c2a6ad2965b3bd41e6fab389fd5857a',
      '0x2c4855feb607c977f24c8886a0ecff7126973e84218407126f426093d63701b2',
      '0xd03e7baaf02c97b9f6179e20d4df20dfdba7f27bd40200a7fdadc2dc1d558ee6',
      '0x684c88abc5399524ddcf17b1725db0d968dc4466d9217dc01d2fc4467ba16860',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x3B4a1872F72B4a51b9d7d1d4a1110174A54c92D6': [
      '0x77b4cffd85357af0b3520c8812ffa004b9a36d710e1aca0351a9a69fcbca05d3',
      '0x2c4855feb607c977f24c8886a0ecff7126973e84218407126f426093d63701b2',
      '0xd03e7baaf02c97b9f6179e20d4df20dfdba7f27bd40200a7fdadc2dc1d558ee6',
      '0x684c88abc5399524ddcf17b1725db0d968dc4466d9217dc01d2fc4467ba16860',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x1AfdC32f7d4a34147806468F9D6515FbDE701FF5': [
      '0xd4ecef76818dd734b949c00a6bfe32d33e5ad98823c45c13ed2182482b69c3ec',
      '0x2d154e3a0c4f81b896d03d51c49c452b50c2caf29227098f2097fa0d01c553a3',
      '0xd03e7baaf02c97b9f6179e20d4df20dfdba7f27bd40200a7fdadc2dc1d558ee6',
      '0x684c88abc5399524ddcf17b1725db0d968dc4466d9217dc01d2fc4467ba16860',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xF06d8224e3B936f2183003BBB060Ab4c79cE9BEc': [
      '0x6fec06000fc06a4ad9a24678d9ced09cf2e504b79b29a2c8ef44a3936d505d3b',
      '0x2d154e3a0c4f81b896d03d51c49c452b50c2caf29227098f2097fa0d01c553a3',
      '0xd03e7baaf02c97b9f6179e20d4df20dfdba7f27bd40200a7fdadc2dc1d558ee6',
      '0x684c88abc5399524ddcf17b1725db0d968dc4466d9217dc01d2fc4467ba16860',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xB684aFe21D28dc6bF235Ca7c7DA3c21df19B3bCd': [
      '0x6c257280a66ae5dcf05189c1d5cb33a0667f7bd5b012767a655edb8952115db2',
      '0x1665810ae678376472ffa177605a29531a2abe4bbae921246ab1c7aaf5474975',
      '0xce41c8a8e7bb05fc75a0e4207c0848cf34d7a6ebb12a3786fb77cd6668251a70',
      '0x684c88abc5399524ddcf17b1725db0d968dc4466d9217dc01d2fc4467ba16860',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x3d559D0a7E6BDA753008c9a0C138D9A1D6115d6f': [
      '0x7c57a022b4614d2c7cbd85191a0e45deca48b47550ad5e50435583f73b7216f3',
      '0x1665810ae678376472ffa177605a29531a2abe4bbae921246ab1c7aaf5474975',
      '0xce41c8a8e7bb05fc75a0e4207c0848cf34d7a6ebb12a3786fb77cd6668251a70',
      '0x684c88abc5399524ddcf17b1725db0d968dc4466d9217dc01d2fc4467ba16860',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x9A7BAca97Bf39ab9bF14Bbe1307718d9240eC501': [
      '0x765e156f576aa05edb8bd51db58c09ca2d89a56acc65281d71057e33506db079',
      '0x2088ec06f03bf4a7e66a74d165fcfa940161094fab3199e38dcaadced945b08c',
      '0xce41c8a8e7bb05fc75a0e4207c0848cf34d7a6ebb12a3786fb77cd6668251a70',
      '0x684c88abc5399524ddcf17b1725db0d968dc4466d9217dc01d2fc4467ba16860',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x01F57397a11956cc5b944C7F711a95C2cbCA4fa8': [
      '0xd29e7887007ee4a1f1e0b5928e1c474d093a81c6b6c0e983a9601210a77362bf',
      '0x2088ec06f03bf4a7e66a74d165fcfa940161094fab3199e38dcaadced945b08c',
      '0xce41c8a8e7bb05fc75a0e4207c0848cf34d7a6ebb12a3786fb77cd6668251a70',
      '0x684c88abc5399524ddcf17b1725db0d968dc4466d9217dc01d2fc4467ba16860',
      '0x0483fe33d9677c8cf8cf3878d97dd96f780693fe8e71a4dc39d34a093833ac9e',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x846727d5f39339272Fd20c0819Df14ea20FE3500': [
      '0x11010a89a8b70e286109ffaea5083de753a107aafab31c14008972900a355f25',
      '0xd4a6982701d238d24188e9fffb88363ec3e224d72dd64ad24d94c94423caa228',
      '0x0a7aef68ed097b1181552d09d29e6fe7fe8d003c2f71dd039a09e73038f950de',
      '0x685d5f4f73b9a7b5f54f3343406716dfd195cdd4b1f445787dd4eb6bfd8349f1',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x0aED1878803e2f86B6ddB83f5523f0a793E973FC': [
      '0x1c3144b14fa66d492c52365d1d25c82fe23b982c99934087e9147ff70767bc17',
      '0xd4a6982701d238d24188e9fffb88363ec3e224d72dd64ad24d94c94423caa228',
      '0x0a7aef68ed097b1181552d09d29e6fe7fe8d003c2f71dd039a09e73038f950de',
      '0x685d5f4f73b9a7b5f54f3343406716dfd195cdd4b1f445787dd4eb6bfd8349f1',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x0f541d23B9fc40f864c90F7f90992D89BcF0a61d': [
      '0x8de87841cc41ed6b09e4536f6b43d7b06bb90637d6afce98658534b85ac17fae',
      '0x90d35d5ac99ab4efee6ee9c6270d90aa544794131d40145f2cf413d0c8365fe6',
      '0x0a7aef68ed097b1181552d09d29e6fe7fe8d003c2f71dd039a09e73038f950de',
      '0x685d5f4f73b9a7b5f54f3343406716dfd195cdd4b1f445787dd4eb6bfd8349f1',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xc17893d140B19F153Ad9bCFFC5240C7D76a35ff9': [
      '0xd7ea6a599c1c8880c640ab96178b4d416a4dd7006f32907a19fea5b748b74afe',
      '0x90d35d5ac99ab4efee6ee9c6270d90aa544794131d40145f2cf413d0c8365fe6',
      '0x0a7aef68ed097b1181552d09d29e6fe7fe8d003c2f71dd039a09e73038f950de',
      '0x685d5f4f73b9a7b5f54f3343406716dfd195cdd4b1f445787dd4eb6bfd8349f1',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x6d1db4A7e83dae0eEe7E95d421722d46D2A7e94B': [
      '0x6456f9a6b6218a05d609f14ff360e9830f2a865b8d30838d498e8f1f0d4926c3',
      '0xcbceb92b6ff7eb8695880d28b3dae4d0399a45564e08c5449d58893df02d0834',
      '0x9542d688fd16fc9b0b91224f4eedad7a1585f9bf5a000eeb01aa22efeb1390ff',
      '0x685d5f4f73b9a7b5f54f3343406716dfd195cdd4b1f445787dd4eb6bfd8349f1',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x2aC81C02fBFA8fc432d572F2894Ea61554D11dD0': [
      '0x353e8f192bcf6604597703e9d1ca1c6e286586b6f278500f85806bf5c56eee3e',
      '0xcbceb92b6ff7eb8695880d28b3dae4d0399a45564e08c5449d58893df02d0834',
      '0x9542d688fd16fc9b0b91224f4eedad7a1585f9bf5a000eeb01aa22efeb1390ff',
      '0x685d5f4f73b9a7b5f54f3343406716dfd195cdd4b1f445787dd4eb6bfd8349f1',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x171894aB7173BAA5a9d95ead96ddD20DF56870d0': [
      '0xb40919acd552493eba1ba3183b55d0b4dfae31699dde851115ba8c071f92f3df',
      '0x00742864cdc5a93d69ac5ce38cec0f8deaee122aa9fcd22fcfa4ad3a399d7c28',
      '0x9542d688fd16fc9b0b91224f4eedad7a1585f9bf5a000eeb01aa22efeb1390ff',
      '0x685d5f4f73b9a7b5f54f3343406716dfd195cdd4b1f445787dd4eb6bfd8349f1',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xB4510c3128921FFDF5d04e27eD68489FB30334eE': [
      '0xcd719987924a601cc96cf74d5d75249b355c0e05c9475b1f5f0f77ba28cc54d4',
      '0x00742864cdc5a93d69ac5ce38cec0f8deaee122aa9fcd22fcfa4ad3a399d7c28',
      '0x9542d688fd16fc9b0b91224f4eedad7a1585f9bf5a000eeb01aa22efeb1390ff',
      '0x685d5f4f73b9a7b5f54f3343406716dfd195cdd4b1f445787dd4eb6bfd8349f1',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x3A72982f0CEf60C558ad5Aa627Ba82038A40db0B': [
      '0x429be2d97ad222dec4475cf12c0c08ca3032a307849f7750cbc7cfff31802841',
      '0xba0d8f71110d13aa352e99c4ef1e1f1ec55f6b0870d71a30e9c8e59af224dd85',
      '0x86b5240b1b0edbedeadaa6c8f08f4a194abdf78d13b09ec245770b10655fc0b1',
      '0x46ed50ceca1988429baa529c2da5e749ac797bcbc57b265fdee8f0e8a363721b',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xB0E56acF3c2973b61aD92eA456858221489e5355': [
      '0x3f94f77ee0950f1ab5609f83b4ef68096f1890961596dc2997c884431e1d05df',
      '0xba0d8f71110d13aa352e99c4ef1e1f1ec55f6b0870d71a30e9c8e59af224dd85',
      '0x86b5240b1b0edbedeadaa6c8f08f4a194abdf78d13b09ec245770b10655fc0b1',
      '0x46ed50ceca1988429baa529c2da5e749ac797bcbc57b265fdee8f0e8a363721b',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x34De073dF81de0D2403D507fcb2457a4713173Ac': [
      '0x75e8b2bdebf41d263e80db626db759bcdacbef4159ff6acfdbd056a19c54a639',
      '0xf18577ec048a7e47d2094ecaf1b3b46780c65ea9172a0d478ed056ddebc08ba5',
      '0x86b5240b1b0edbedeadaa6c8f08f4a194abdf78d13b09ec245770b10655fc0b1',
      '0x46ed50ceca1988429baa529c2da5e749ac797bcbc57b265fdee8f0e8a363721b',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x4d9ABA895bC407A101Bb0E899cd48BAed968eB01': [
      '0xaa41b3e4d1473d2ced569a3fe900a5f65bcf3c67245445895c2370ab976556d1',
      '0xf18577ec048a7e47d2094ecaf1b3b46780c65ea9172a0d478ed056ddebc08ba5',
      '0x86b5240b1b0edbedeadaa6c8f08f4a194abdf78d13b09ec245770b10655fc0b1',
      '0x46ed50ceca1988429baa529c2da5e749ac797bcbc57b265fdee8f0e8a363721b',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x54af12E34e8c1Dd798C19A96a955ecE7D24D7Ac0': [
      '0x74031e6389cd186d4ae80c42f4f912e26f085e9379a945d0302a8b037fa09e19',
      '0xa3e120a7698e925f70b3e03d04f6554d75b8b2e1bf8854851425750a99920598',
      '0x1d6518fa59b6471337baa43824351b099a1a44203d6bd3ccea39aeba6b4b9685',
      '0x46ed50ceca1988429baa529c2da5e749ac797bcbc57b265fdee8f0e8a363721b',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x1D057813123B6B113d4cf92B84Ab4792e45d7e15': [
      '0x3f397e9a1ffe1a79e5c08ea0acfe6bb869b59a5b13640707469c9d85f14c9883',
      '0xa3e120a7698e925f70b3e03d04f6554d75b8b2e1bf8854851425750a99920598',
      '0x1d6518fa59b6471337baa43824351b099a1a44203d6bd3ccea39aeba6b4b9685',
      '0x46ed50ceca1988429baa529c2da5e749ac797bcbc57b265fdee8f0e8a363721b',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x3578Bafd8bE6FC380047E423D875573294410f57': [
      '0xce338bfb6cc337b8546742014414b69166bbeb37355c660a543cdbbf895343e5',
      '0xfd2f51e400783151f4a1fd7b7ca17879b90dc09b1f0c5ba5c66393669c6cce83',
      '0x1d6518fa59b6471337baa43824351b099a1a44203d6bd3ccea39aeba6b4b9685',
      '0x46ed50ceca1988429baa529c2da5e749ac797bcbc57b265fdee8f0e8a363721b',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xFa12D0611Dd4de8Dad5806C70382Cda0aa2926F6': [
      '0x17bee8590d8dfd86d34620e0f320015e9b1aa257d3d9aca3c8e42478bba76a90',
      '0xfd2f51e400783151f4a1fd7b7ca17879b90dc09b1f0c5ba5c66393669c6cce83',
      '0x1d6518fa59b6471337baa43824351b099a1a44203d6bd3ccea39aeba6b4b9685',
      '0x46ed50ceca1988429baa529c2da5e749ac797bcbc57b265fdee8f0e8a363721b',
      '0x47c299ab99d49f47c9b27addeadff6a6b4d7e19b48cb52434b881b7cb0c0e834',
      '0x551ea1c7f47d484834e1f857edc843715c5427dbb2413fe0512ad4773f3ff911',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x8754E1eD406a72f8dECa5b4c9654Ad2Db698Ba83': [
      '0xdb0abf2039b54b74cc00d3f3cf77f9f2852b165c967a4b4f8494b9347e67d6ed',
      '0xa7deedf13b3730104120988922febf603332b046585bfd3ff4d3fb2243c06cca',
      '0x8ec76f2ac31e576a20ce0bd6ac0d4e7157076d8ae7f7e168aa55c1dbbb0d1ab7',
      '0x1fcfcfa6225eba013c234aca939040d9cbc323fd3c888066842dc075e12c7543',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xda91a981eddAc2aB2B18c86663D501C1DBF8Dcc2': [
      '0xcc2aee63c419e2e571b862e07cc487ad75511a6db94acf428d95a34101f88368',
      '0xa7deedf13b3730104120988922febf603332b046585bfd3ff4d3fb2243c06cca',
      '0x8ec76f2ac31e576a20ce0bd6ac0d4e7157076d8ae7f7e168aa55c1dbbb0d1ab7',
      '0x1fcfcfa6225eba013c234aca939040d9cbc323fd3c888066842dc075e12c7543',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x116BA3ee776d1B8Ec735b3a2ecEEF759e236904b': [
      '0xf19762327a7de89a37c1125f35af79754797333ab1eff74ac43768606487db27',
      '0x881aa093ae05b1a841b29cf650c7cbea3824d0fdc5b776c7cd01cbbf8d7d3d5f',
      '0x8ec76f2ac31e576a20ce0bd6ac0d4e7157076d8ae7f7e168aa55c1dbbb0d1ab7',
      '0x1fcfcfa6225eba013c234aca939040d9cbc323fd3c888066842dc075e12c7543',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x5B85AF2c7A6f1C46132A170bbe5328719c7385e5': [
      '0xb685a87e57c3e577f0eff1e629daf4dddc07ee14d06976949c15f7de171eb408',
      '0x881aa093ae05b1a841b29cf650c7cbea3824d0fdc5b776c7cd01cbbf8d7d3d5f',
      '0x8ec76f2ac31e576a20ce0bd6ac0d4e7157076d8ae7f7e168aa55c1dbbb0d1ab7',
      '0x1fcfcfa6225eba013c234aca939040d9cbc323fd3c888066842dc075e12c7543',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x83908a05948c78E4218a17B68Cc38813f3DD43f3': [
      '0xcfac8787232ad580e7d331e5e8010109530e8f329156f218c5ecbf71fbed949f',
      '0xc3a01c7eea0a25a8875ae883c13acd017bce0e78effbc606c600a6ccee902f5d',
      '0x85eefde8a1b4433a43a97b4c573d3f612c6b3a6af8e03c6b41162d1cdc506f35',
      '0x1fcfcfa6225eba013c234aca939040d9cbc323fd3c888066842dc075e12c7543',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0x2761BFcACe72eC27F5eAE7ad050AB9A13aF9fAac': [
      '0x71560f88fee94d7e28feb3c55a171b6804b7916e343478cb06f9dbbc7b5b022d',
      '0xc3a01c7eea0a25a8875ae883c13acd017bce0e78effbc606c600a6ccee902f5d',
      '0x85eefde8a1b4433a43a97b4c573d3f612c6b3a6af8e03c6b41162d1cdc506f35',
      '0x1fcfcfa6225eba013c234aca939040d9cbc323fd3c888066842dc075e12c7543',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xEd2Ea24d7434bebBFf9ba08515033Dd546Ac4799': [
      '0xaf5e9be087099bd0037aad45a3ce6c3e82451dcd6c7df16df36fe53babfe7b52',
      '0x5b107034794e48d680ce33d1aa402c976afb5cf7c263bf612b6ef50a0cac52c9',
      '0x85eefde8a1b4433a43a97b4c573d3f612c6b3a6af8e03c6b41162d1cdc506f35',
      '0x1fcfcfa6225eba013c234aca939040d9cbc323fd3c888066842dc075e12c7543',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xe618914a10238295072850802FA12f80E2D55150': [
      '0x980ed1a3562f5d63d1b1934583a23dfba2e478e9556879adbeae0e122b41618e',
      '0x5b107034794e48d680ce33d1aa402c976afb5cf7c263bf612b6ef50a0cac52c9',
      '0x85eefde8a1b4433a43a97b4c573d3f612c6b3a6af8e03c6b41162d1cdc506f35',
      '0x1fcfcfa6225eba013c234aca939040d9cbc323fd3c888066842dc075e12c7543',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xCb40EEe5b577F670b6C45cF34d308d8DB62CE7bb': [
      '0x885f9af2ed14c25c7799c360075d1e51993646ed98ebf1e8cc240683d9d636ec',
      '0x1b1949fad6c769ba7906d3969b71797e12ddc73c8eec9bfe01b489768509bc05',
      '0x32bfa248bc62c74f962e698a71ae7c82a25c9286e658abfa5bb35ebaea83da64',
      '0x72238d80f2598e635011faf58903962241160c1aa57f86218615c48d7013e314',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xa9df5f70E85cE1271aEe4e087b3B5088C3658862': [
      '0x5e51f792b6d03eadd1926d691d136e5dcff583a9a10c3208b5fb645555bc0aa1',
      '0x539f604ebed533a1c22887de73c98604074978d007966e23f4facb30307100ae',
      '0x32bfa248bc62c74f962e698a71ae7c82a25c9286e658abfa5bb35ebaea83da64',
      '0x72238d80f2598e635011faf58903962241160c1aa57f86218615c48d7013e314',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xa021FdA5105F6FC335c6ba06EBB973C9EB43e798': [
      '0xc2b0314db7bd8275e757c8e9a3726099bb758f57a12d4e833411d700e18aa09e',
      '0x539f604ebed533a1c22887de73c98604074978d007966e23f4facb30307100ae',
      '0x32bfa248bc62c74f962e698a71ae7c82a25c9286e658abfa5bb35ebaea83da64',
      '0x72238d80f2598e635011faf58903962241160c1aa57f86218615c48d7013e314',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ],
    '0xB78B75e7f2e4CD451917A7fdc358db6A6fCB3B23': [
      '0x0f111a47dc79db8426a383d6187d38de0217acee83f26649f05192a714089829',
      '0x72238d80f2598e635011faf58903962241160c1aa57f86218615c48d7013e314',
      '0xc7fd1c90a24140c27ea4ba7e3f002a2506bc9f789c2108e726091b7a0de74964',
      '0xfa23d9e1616d7db35f3799a4bcf3048b4297b2c62e9e4590c26fcd8cc7cf0dd6'
    ]
  }
  ;


let web3provider, signer, walletAddress, web3Modal, unwatchAccount, unwatchNetwork, account, network;
let soldOut = false, publicMintStarted = false, allowlistMintStarted = false;
let auctionStartInterval, auctionRestingPriceInterval, allowlistStartInterval, allowlistEndInterval, currentAuctionPriceInEth, currentPriceWei, restingPrice, userProof;
let dutchAuctionContract, allowlistMinterContract, fixedMinterContract, coreContract;

const refreshInterface = async () => {
    updateErrorMessage();
    $("#transaction-status-container").addClass("hidden");
    account = window["wagmi"].getAccount();
    if (account?.isConnected) {
        walletAddress = account.address;
        $("#connect-button").addClass("hidden");
        signer = await window["wagmi"].fetchSigner();
        const providerNetwork = await signer?.provider?.getNetwork();
        if (providerNetwork?.chainId !== correctNetworkID) {
            instantiateContracts(false);
        }
        else {
            instantiateContracts(true);
        }
        network = window["wagmi"].getNetwork();
        await refreshMintInformation();
    }
    else {
        showButtons({ showConnect: true });
        if (!web3provider) {
            web3provider = new ethers.providers.InfuraProvider(mainnet ? "homestead" : "goerli");
        }
        instantiateContracts(false);
        await refreshMintInformation();
    }
};

const refreshMintInformation = async () => {
    if (DUTCH_AUCTION_LIVE) {
        publicMintStarted = await checkPublicMintStarted();
    }
    else if (ALLOWLIST_LIVE) {
        allowlistMintStarted = await checkAllowlistMintStarted();
    }
    await updateRemainingMints();

    showCurrentPhase();
}

const checkPublicMintStarted = async () => {
    const currenBlockNumber = await web3provider.getBlockNumber();
    const currentBlockData = await web3provider.getBlock(currenBlockNumber);
    const currentBlockTime = currentBlockData.timestamp;
    const isStarted = currentBlockTime >= AUCTION_START_TIMESTAMP;
    return isStarted;
};

const checkAllowlistMintStarted = async () => {
    const currenBlockNumber = await web3provider.getBlockNumber();
    const currentBlockData = await web3provider.getBlock(currenBlockNumber);
    const currentBlockTime = currentBlockData.timestamp;
    const isStarted = currentBlockTime >= ALLOWLIST_START_TIMESTAMP;
    return isStarted;
};

const updateAuctionCurrentPrice = async () => {
    const auctionInfo = await dutchAuctionContract.getPriceInfo(PROJECT_ID);
    currentPriceWei = auctionInfo.tokenPriceInWei;
    const formattedPrice = roundWeiToNumericString(currentPriceWei);
    currentAuctionPriceInEth = Number(formattedPrice);
    $("#current-price").text(currentAuctionPriceInEth);
    $("#auction-cost").text(currentAuctionPriceInEth);
};

const updateAuctionPriceInfo = async () => {
    const auctionInfo = await dutchAuctionContract.projectAuctionParameters(PROJECT_ID);
    const startPrice = auctionInfo.startPrice;
    const formattedStartPrice = roundWeiToNumericString(startPrice);
    if (!publicMintStarted) {
        $("#current-price").text(formattedStartPrice);
    }
    restingPrice = auctionInfo.basePrice;
    const formattedRestingPrice = roundWeiToNumericString(restingPrice);
    $("#resting-price-1").text(formattedRestingPrice);
};

const updateRemainingMints = async () => {
    const projectTokenInfo = await coreContract.projectStateData(PROJECT_ID);
    const invocations = projectTokenInfo.invocations;
    $("#mints-remaining").text(projectTokenInfo.maxInvocations - invocations);
    if (projectTokenInfo.invocations === projectTokenInfo.maxInvocations) {
        soldOut = true;
    }
};


const showCurrentPhase = async () => {
    if (soldOut) {
        $("#auction-info").addClass("hidden");
        $("#mints-remaining").text(0);
        showButtons({ showSoldOut: true });
    }
    else {
        if (DUTCH_AUCTION_LIVE) {
            await updateAuctionPriceInfo();
            if (publicMintStarted) {
                await updateAuctionCurrentPrice();
                $("#price-title").text("Current Price");
                $("#auction-cost-wrap").removeClass("hidden");
                showButtons({ showPublicMint: true });
                startAuctionPriceUpdateListener();
                startSupplyUpdateListener();
                startAuctionRestingPriceCountdown();
            }
            else {
                $("#price-title").text("Starting Price");
                showButtons({ showNotLive: true });
                startAuctionStartCountdown();
            }
        }
        else if (ALLOWLIST_LIVE) {
            $("#price-title").text("Allowlist Price");
            $("#resting-price").addClass("hidden");
            if (allowlistMintStarted) {
                const isAllowlisted = await checkIfAllowlisted(walletAddress);
                if (isAllowlisted) {
                    const mintLimitInfo = await allowlistMinterContract.projectRemainingInvocationsForAddress(PROJECT_ID, walletAddress);
                    if (mintLimitInfo.mintInvocationsRemaining.eq(0)) {
                        showButtons({ showAllowlistMaxMints: true });
                    }
                    else {
                        showButtons({ showAllowlistMint: true });
                    }
                }
                else {
                    showButtons({ showNotAllowlisted: true });
                }
                const allowlistInfo = await allowlistMinterContract.getPriceInfo(PROJECT_ID);
                const tokenPriceInWei = allowlistInfo.tokenPriceInWei;
                const formattedTokenPrice = roundWeiToNumericString(tokenPriceInWei);
                $("#current-price").text(formattedTokenPrice);
                startSupplyUpdateListener();
                startAllowlistEndCountdown()
            }
            else {
                showButtons({ showNotLive: true });
                startAllowlistStartCountdown();
            }
            await updateUserAuctionRefund(walletAddress);
        }
        else if (FIXED_MINTER_LIVE) {
            $("#price-title").text("Mint Price");
            $("#resting-price").addClass("hidden");
            $("#auction-title").text("");
            $("#auction-time-left").text("");
            showButtons({ showFixedPriceMint: true });
            const fixedPriceInfo = await fixedMinterContract.getPriceInfo(PROJECT_ID);
            const tokenPriceInWei = fixedPriceInfo.tokenPriceInWei;
            const formattedTokenPrice = roundWeiToNumericString(tokenPriceInWei);
            $("#current-price").text(formattedTokenPrice);
            startSupplyUpdateListener();
            await updateUserAuctionRefund(walletAddress);
        }
    }
};

const checkIfAllowlisted = async (address) => {
    try {
        const checksumAddress = ethers.utils.getAddress(address);
        userProof = WHITELIST[checksumAddress];
        if (userProof) {
            const isAllowlisted = await allowlistMinterContract.verifyAddress(PROJECT_ID, userProof, address);
            return isAllowlisted;
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
};

const updateUserAuctionRefund = async (address) => {
    try {
        const userRefundInWei = await dutchAuctionContract.getProjectExcessSettlementFunds(PROJECT_ID, address);
        const formattedUserRefund = roundWeiToNumericString(userRefundInWei, 3);
        $("#auction-refund-amount").text(formattedUserRefund);
        $("#auction-refund-section").removeClass("hidden");
    }
    catch (error) {
        $("#auction-refund-section").addClass("hidden");
        console.log("No refund available for user.")
    }
    
}

const claimAuctionRefund = async () => {
    try {
        const gasLimit = await dutchAuctionContract.estimateGas.reclaimProjectExcessSettlementFunds(PROJECT_ID);
        const newGasLimit = parseInt(gasLimit * GAS_LIMIT_MULTIPLIER).toString();

        await dutchAuctionContract.reclaimProjectExcessSettlementFunds(PROJECT_ID, { gasLimit: newGasLimit })
            .then(async (tx) => {
                updateErrorMessage();
                await updateTransactionStatus(tx);
            });
    } catch (error) {
        if (error?.message) {
            if (error.message.includes("No purchases made by this address")) {
                updateErrorMessage("Error: Address has no refund to claim.");
            }
            else if (error.message.includes("Reclaiming failed")) {
                updateErrorMessage("Error: Reclaiming failed.");
            }
            else if (error.message.includes("denied") || error.message.includes("rejected")) {
                console.log("Transaction rejected.");
            }
            else {
                updateErrorMessage("Error: A contract error occurred.");
                console.error(error);
            }
        }
        else {
            updateErrorMessage("Error: A website error occurred.");
            console.error(error);
        }
    }
};

const publicMint = async () => {
    try {
        const auctionInfo = await dutchAuctionContract.getPriceInfo(PROJECT_ID);
        const tokenPrice = ethers.BigNumber.from(auctionInfo.tokenPriceInWei);

        const gasLimit = await dutchAuctionContract.estimateGas.purchase(PROJECT_ID, { value: tokenPrice });
        const newGasLimit = parseInt(gasLimit * GAS_LIMIT_MULTIPLIER).toString();

        await dutchAuctionContract
            .purchase(PROJECT_ID, { value: tokenPrice, gasLimit: newGasLimit })
            .then(async (tx) => {
                updateErrorMessage();
                await updateTransactionStatus(tx);
            });
    } catch (error) {
        if (error?.message) {
            if (error.message.includes("Maximum number of invocations reached")) {
                updateErrorMessage("Error: Max supply minted.");
            }
            else if (error.message.includes("Must send minimum value to mint")) {
                updateErrorMessage("Error: Insufficient mint value sent.");
            }
            else if (error.message.includes("insufficient funds")) {
                updateErrorMessage("Error: Insufficient funds to mint.");
            }
            else if (error.message.includes("Purchases are paused")) {
                updateErrorMessage("Error: Purchases are paused.");
            }
            else if (error.message.includes("Auction not yet started")) {
                updateErrorMessage("Error: Auction not yet started.");
            }
            else if (error.message.includes("denied") || error.message.includes("rejected")) {
                console.log("Transaction rejected.");
            }
            else {
                updateErrorMessage("Error: A contract error occurred.");
                console.error(error);
            }
        }
        else {
            updateErrorMessage("Error: A website error occurred.");
            console.error(error);
        }
    }
};

const allowlistMint = async () => {
    try {
        const auctionInfo = await allowlistMinterContract.getPriceInfo(PROJECT_ID);
        const tokenPrice = ethers.BigNumber.from(auctionInfo.tokenPriceInWei);
        const gasLimit = await allowlistMinterContract.estimateGas.purchase(PROJECT_ID, userProof, { value: tokenPrice });

        const newGasLimit = parseInt(gasLimit * GAS_LIMIT_MULTIPLIER).toString();

        await allowlistMinterContract
        .purchase(PROJECT_ID, userProof, { value: tokenPrice, gasLimit: newGasLimit })
            .then(async (tx) => {
                updateErrorMessage();
                await updateTransactionStatus(tx);
            });
    } catch (error) {
        if (error?.message) {
            if (error.message.includes("Maximum number of invocations reached")) {
                updateErrorMessage("Error: Max supply minted.");
            }
            else if (error.message.includes("Must send minimum value to mint")) {
                updateErrorMessage("Error: Insufficient mint value sent.");
            }
            else if (error.message.includes("insufficient funds")) {
                updateErrorMessage("Error: Insufficient funds to mint.");
            }
            else if (error.message.includes("Maximum number of invocations per address reached")) {
                updateErrorMessage("Error: Address already minted allowlist.");
            }
            else if (error.message.includes("Invalid Merkle proof")) {
                updateErrorMessage("Error: Invalid Merkle proof. Please verify you are whitelisted.");
            }
            else if (error.message.includes("denied") || error.message.includes("rejected")) {
                console.log("Transaction rejected.");
            }
            else {
                updateErrorMessage("Error: A contract error occurred.");
                console.error(error);
            }
        }
        else {
            updateErrorMessage("Error: A website error occurred.");
            console.error(error);
        }
    }
};

const fixedPriceMint = async () => {
    try {
        const auctionInfo = await fixedMinterContract.getPriceInfo(PROJECT_ID);
        const tokenPrice = ethers.BigNumber.from(auctionInfo.tokenPriceInWei);
        const gasLimit = await fixedMinterContract.estimateGas.purchase(PROJECT_ID, { value: tokenPrice });

        const newGasLimit = parseInt(gasLimit * GAS_LIMIT_MULTIPLIER).toString();

        await fixedMinterContract
        .purchase(PROJECT_ID, { value: tokenPrice, gasLimit: newGasLimit })
            .then(async (tx) => {
                updateErrorMessage();
                await updateTransactionStatus(tx);
            });
    } catch (error) {
        if (error?.message) {
            if (error.message.includes("Maximum number of invocations reached")) {
                updateErrorMessage("Error: Max supply minted.");
            }
            else if (error.message.includes("Must send minimum value to mint")) {
                updateErrorMessage("Error: Insufficient mint value sent.");
            }
            else if (error.message.includes("Maximum invocations reached")) {
                updateErrorMessage("Error: Max supply minted.");
            }
            else if (error.message.includes("insufficient funds")) {
                updateErrorMessage("Error: Insufficient funds to mint.");
            }
            else if (error.message.includes("denied") || error.message.includes("rejected")) {
                console.log("Transaction rejected.");
            }
            else {
                updateErrorMessage("Error: A contract error occurred.");
                console.error(error);
            }
        }
        else {
            updateErrorMessage("Error: A website error occurred.");
            console.error(error);
        }
    }
};

const updateErrorMessage = (message) => {
    if (message) {
        $("#error-message-container").removeClass("hidden");
        $("#error-message").text(message);
    }
    else {
        $("#error-message-container").addClass("hidden");
        $("#error-message").text("");
    }
};

const updateTransactionStatus = async (tx) => {
    const etherscanLink = `${ETHERSCAN_BASE}${tx.hash}`;
    $("#transaction-status").attr("href", etherscanLink);
    $("#transaction-status").removeClass("success error");
    $("#transaction-status").addClass("loading-transaction");
    $("#transaction-status").text("Pending (Click for Etherscan)");
    $("#transaction-status-container").removeClass("hidden");
    let result = await tx.wait();
    if (result.status == 1) {
        $("#transaction-status").removeClass("loading-transaction");
        $("#transaction-status").addClass("success");
        $("#transaction-status").text("Success (Click for Etherscan)");
    } else {
        $("#transaction-status").removeClass("loading-transaction");
        $("#transaction-status").addClass("error");
        $("#transaction-status").text("Error (Click for Etherscan)");
    }
};

const startAuctionPriceUpdateListener = () => {
    if (web3provider) {
        web3provider.on("block", async (blockNumber) => {
            await updateAuctionCurrentPrice();
        });
    }
};

const startSupplyUpdateListener = () => {
    if (web3provider) {
        web3provider.on("block", async (blockNumber) => {
            await updateRemainingMints();
            if (soldOut) {
                showCurrentPhase(false, false, soldOut);
            }
        });
    }
};

const startAuctionStartCountdown = () => {
    clearInterval(auctionStartInterval);
    auctionStartInterval = setInterval(async () => {
        const now = Date.now() / 1000;
        let distance = AUCTION_START_TIMESTAMP - now;

        let hoursLeft = Math.floor(distance / (60 * 60));
        let minutesLeft = Math.floor((distance % (60 * 60)) / (60));
        let secondsLeft = Math.floor((distance % (60)));

        hoursLeft = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
        minutesLeft = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
        secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

        if (distance <= 0) {
            const currenBlockNumber = await web3provider.getBlockNumber();
            const currentBlockData = await web3provider.getBlock(currenBlockNumber);
            const currentBlockTime = currentBlockData.timestamp;
            if (currentBlockTime > AUCTION_START_TIMESTAMP) {
                clearInterval(auctionStartInterval);
                refreshInterface();
            }
            else {
                $("#auction-time-left").text("Next block");
            }
        }
        else {
            $("#auction-time-left").text(`${hoursLeft}H ${minutesLeft}M ${secondsLeft}S`);
        }
    }, 1000);
};

const startAuctionRestingPriceCountdown = () => {
    clearInterval(auctionRestingPriceInterval);
    $("#auction-title").text("")
    auctionRestingPriceInterval = setInterval(async () => {
        const now = Date.now() / 1000;
        let distance = AUCTION_RESTING_PRICE_TIMESTAMP - now;

        let hoursLeft = Math.floor(distance / (60 * 60));
        let minutesLeft = Math.floor((distance % (60 * 60)) / (60));
        let secondsLeft = Math.floor((distance % (60)));

        hoursLeft = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
        minutesLeft = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
        secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

        if (distance <= 0) {
            const currenBlockNumber = await web3provider.getBlockNumber();
            const currentBlockData = await web3provider.getBlock(currenBlockNumber);
            const currentBlockTime = currentBlockData.timestamp;
            if (currentBlockTime > AUCTION_RESTING_PRICE_TIMESTAMP) {
                if (Number(currentPriceWei) === Number(restingPrice)) {
                    $("#auction-time-left").addClass("hidden");
                    $("#resting-price-reached").removeClass("hidden");
                    await updateUserAuctionRefund(walletAddress);
                    clearInterval(auctionRestingPriceInterval);
                }
                else {
                    $("#auction-time-left").text("Next block");
                }
            }
            else {
                $("#auction-time-left").text("Next block");
            }
        }
        else {
            $("#auction-time-left").text(`${hoursLeft}H ${minutesLeft}M ${secondsLeft}S`);
        }
    }, 1000);
};

const startAllowlistStartCountdown = () => {
    clearInterval(allowlistStartInterval);
    $("#auction-title").text("Allowlist Starts in")
    allowlistStartInterval = setInterval(async () => {
        const now = Date.now() / 1000;
        let distance = ALLOWLIST_START_TIMESTAMP - now;

        let hoursLeft = Math.floor(distance / (60 * 60));
        let minutesLeft = Math.floor((distance % (60 * 60)) / (60));
        let secondsLeft = Math.floor((distance % (60)));

        hoursLeft = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
        minutesLeft = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
        secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

        if (distance <= 0) {
            const currenBlockNumber = await web3provider.getBlockNumber();
            const currentBlockData = await web3provider.getBlock(currenBlockNumber);
            const currentBlockTime = currentBlockData.timestamp;
            if (currentBlockTime > ALLOWLIST_START_TIMESTAMP) {
                clearInterval(allowlistStartInterval);
                refreshInterface();
            }
            else {
                $("#auction-time-left").text("Next block");
            }
        }
        else {
            $("#auction-time-left").text(`${hoursLeft}H ${minutesLeft}M ${secondsLeft}S`);
        }
    }, 1000);
};

const startAllowlistEndCountdown = () => {
    clearInterval(allowlistEndInterval);
    $("#auction-title").text("Allowlist Ends in")
    allowlistEndInterval = setInterval(async () => {
        const now = Date.now() / 1000;
        let distance = ALLOWLIST_END_TIMESTAMP - now;

        let hoursLeft = Math.floor(distance / (60 * 60));
        let minutesLeft = Math.floor((distance % (60 * 60)) / (60));
        let secondsLeft = Math.floor((distance % (60)));

        hoursLeft = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
        minutesLeft = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
        secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

        if (distance <= 0) {
            const currenBlockNumber = await web3provider.getBlockNumber();
            const currentBlockData = await web3provider.getBlock(currenBlockNumber);
            const currentBlockTime = currentBlockData.timestamp;
            if (currentBlockTime > ALLOWLIST_END_TIMESTAMP) {
                $("#auction-time-left").text("Ended");
                showButtons({ showNotLive: true });
                clearInterval(allowlistEndInterval);
            }
            else {
                $("#auction-time-left").text("Next block");
            }
        }
        else {
            $("#auction-time-left").text(`${hoursLeft}H ${minutesLeft}M ${secondsLeft}S`);
        }
    }, 1000);
};

const showButtons = ({ showNotLive = false, showPublicMint = false, showAllowlistMint = false, showFixedPriceMint = false, showNotAllowlisted = false, showAllowlistMaxMints = false, showSoldOut = false, showSwitchNetwork = false, showConnect = false }) => {
    if (!account?.isConnected) {
        $("#not-started-button").addClass("hidden");
        $("#public-mint-button").addClass("hidden");
        $("#allowlist-mint-button").addClass("hidden");
        $("#fixed-price-mint-button").addClass("hidden");
        $("#not-allowlisted-button").addClass("hidden");
        $("#allowlist-max-mints-button").addClass("hidden");
        $("#sold-out-button").addClass("hidden");
        $("#switch-network-button").addClass("hidden");
        $("#connect-button").removeClass("hidden");
    }
    else {
        if (network?.chain?.id !== correctNetworkID) {
            $("#not-started-button").addClass("hidden");
            $("#public-mint-button").addClass("hidden");
            $("#allowlist-mint-button").addClass("hidden");
            $("#fixed-price-mint-button").addClass("hidden");
            $("#not-allowlisted-button").addClass("hidden");
            $("#allowlist-max-mints-button").addClass("hidden");
            $("#sold-out-button").addClass("hidden");
            $("#switch-network-button").removeClass("hidden");
            $("#connect-button").addClass("hidden");
        }
        else {
            showNotLive ? $("#not-started-button").removeClass("hidden") : $("#not-started-button").addClass("hidden");
            showPublicMint ? $("#public-mint-button").removeClass("hidden") : $("#public-mint-button").addClass("hidden");
            showAllowlistMint ? $("#allowlist-mint-button").removeClass("hidden") : $("#allowlist-mint-button").addClass("hidden");
            showFixedPriceMint ? $("#fixed-price-mint-button").removeClass("hidden") : $("#fixed-price-mint-button").addClass("hidden");
            showNotAllowlisted ? $("#not-allowlisted-button").removeClass("hidden") : $("#not-allowlisted-button").addClass("hidden");
            showAllowlistMaxMints ? $("#allowlist-max-mints-button").removeClass("hidden") : $("#allowlist-max-mints-button").addClass("hidden");
            showSoldOut ? $("#sold-out-button").removeClass("hidden") : $("#sold-out-button").addClass("hidden");
            showSwitchNetwork ? $("#switch-network-button").removeClass("hidden") : $("#switch-network-button").addClass("hidden");
            showConnect ? $("#connect-button").removeClass("hidden") : $("#connect-button").addClass("hidden");
        }
    }
};

const instantiateContracts = (useSigner) => {
    dutchAuctionContract = new ethers.Contract(dutchAuctionAddress, dutchAuctionAbi, useSigner ? signer : web3provider);
    allowlistMinterContract = new ethers.Contract(allowlistMinterAddress, allowlistMinterAbi, useSigner ? signer : web3provider);
    fixedMinterContract = new ethers.Contract(fixedMinterAddress, fixedMinterAbi, useSigner ? signer : web3provider);
    coreContract = new ethers.Contract(coreContractAddress, coreContractAbi, useSigner ? signer : web3provider);
};

const setUpWeb3Modal = async () => {
    // 1. Define constants
    const projectId = '24652b654a6a5c60a8bff193f2b2de71';
    const chains = mainnet ? [window["wagmi"].chains.mainnet] : [window["wagmi"].chains.goerli];
    const walletConnectProvider = window["w3m"].walletConnectProvider;

    // 2. Configure wagmi client
    const { provider } = window["wagmi"].configureChains(chains, [walletConnectProvider({ projectId })]);
    const wagmiClient = window["wagmi"].createClient({
        autoConnect: true,
        connectors: [...window["w3m"].modalConnectors({ appName: 'web3Modal', chains })],
        provider
    });

    web3provider = window["wagmi"].getProvider();

    if (!web3provider) {
        web3provider = new ethers.providers.InfuraProvider(mainnet ? "homestead" : "goerli");
    }
    else {
        const providerNetwork = await web3provider.getNetwork();
        if (providerNetwork.chainId !== correctNetworkID) {
            web3provider = new ethers.providers.InfuraProvider(mainnet ? "homestead" : "goerli");
        }
    }

    // 3. Create ethereum and modal clients
    const ethereumClient = new window["w3m"].EthereumClient(wagmiClient, chains);
    web3Modal = new window["w3m"].Web3Modal(
        {
            projectId
        },
        ethereumClient
    );

    web3Modal.setTheme({
        themeMode: "dark",
        themeColor: "blackWhite",
        themeBackground: "gradient",
    });
};

const roundWeiToNumericString = (wei, PRICE_DISPLAY_DECIMALS = 2) => {
    return Number(ethers.utils.formatEther(wei)).toFixed(PRICE_DISPLAY_DECIMALS);
}

const handleConnectWallet = async () => {
    await web3Modal.openModal();
};

const handleSwitchNetwork = async () => {
    await window["wagmi"].switchNetwork({ chainId: correctNetworkID });
};

const showPossibilities = () => {
    const iframe = $("#possibilities-iframe");
    iframe.attr("src", iframe.attr("src"));
    $("#possibilities-container").toggleClass("hidden");
};

const refreshPossibilities = () => {
    const iframe = $("#possibilities-iframe");
    iframe.attr("src", iframe.attr("src"));
};

window.onload = async () => {
    await setUpWeb3Modal();
    unwatchAccount = window["wagmi"].watchAccount(async (account) => await refreshInterface());
    unwatchNetwork = window["wagmi"].watchNetwork(async (network) => await refreshInterface());
    await refreshInterface();
};