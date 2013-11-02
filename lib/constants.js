/*
 * lib/constants.js
 */

// Client version history
//
//  6 = Added parentId to orderStatus
//  7 = The new execDetails event returned for an order filled status and reqExecDetails
//      Also market depth is available.
//  8 = Added lastFillPrice to orderStatus() event and permId to execution details
//  9 = Added 'averageCost', 'unrealizedPNL', and 'unrealizedPNL' to updatePortfolio event
// 10 = Added 'serverId' to the 'open order' & 'order status' events.
//      We send back all the API open orders upon connection.
//      Added new methods reqAllOpenOrders, reqAutoOpenOrders()
//      Added FA support - reqExecution has filter.
//                       - reqAccountUpdates takes acct code.
// 11 = Added permId to openOrder event.
// 12 = requsting open order attributes ignoreRth, hidden, and discretionary
// 13 = added goodAfterTime
// 14 = always send size on bid/ask/last tick
// 15 = send allocation description string on openOrder
// 16 = can receive account name in account and portfolio updates, and fa params in openOrder
// 17 = can receive liquidation field in exec reports, and notAutoAvailable field in mkt data
// 18 = can receive good till date field in open order messages, and request intraday backfill
// 19 = can receive rthOnly flag in ORDER_STATUS
// 20 = expects TWS time string on connection after server version >= 20.
// 21 = can receive bond contract details.
// 22 = can receive price magnifier in version 2 contract details message
// 23 = support for scanner
// 24 = can receive volatility order parameters in open order messages
// 25 = can receive HMDS query start and end times
// 26 = can receive option vols in option market data messages
// 27 = can receive delta neutral order type and delta neutral aux price in place order version 20: API 8.85
// 28 = can receive option model computation ticks: API 8.9
// 29 = can receive trail stop limit price in open order and can place them: API 8.91
// 30 = can receive extended bond contract def, new ticks, and trade count in bars
// 31 = can receive EFP extensions to scanner and market data, and combo legs on open orders
//    ; can receive RT bars
// 32 = can receive TickType.LAST_TIMESTAMP
//    ; can receive "whyHeld" in order status messages
// 33 = can receive ScaleNumComponents and ScaleComponentSize is open order messages
// 34 = can receive whatIf orders / order state
// 35 = can receive contId field for Contract objects
// 36 = can receive outsideRth field for Order objects
// 37 = can receive clearingAccount and clearingIntent for Order objects
// 38 = can receive multiplier and primaryExchange in portfolio updates
//    ; can receive cumQty and avgPrice in execution
//    ; can receive fundamental data
//    ; can receive underComp for Contract objects
//    ; can receive reqId and end marker in contractDetails/bondContractDetails
//    ; can receive ScaleInitComponentSize and ScaleSubsComponentSize for Order objects
// 39 = can receive underConId in contractDetails
// 40 = can receive algoStrategy/algoParams in openOrder
// 41 = can receive end marker for openOrder
//    ; can receive end marker for account download
//    ; can receive end marker for executions download
// 42 = can receive deltaNeutralValidation
// 43 = can receive longName(companyName)
//    ; can receive listingExchange
//    ; can receive RTVolume tick
// 44 = can receive end market for ticker snapshot
// 45 = can receive notHeld field in openOrder
// 46 = can receive contractMonth, industry, category, subcategory fields in contractDetails
//    ; can receive timeZoneId, tradingHours, liquidHours fields in contractDetails
// 47 = can receive gamma, vega, theta, undPrice fields in TICK_OPTION_COMPUTATION
// 48 = can receive exemptCode in openOrder
// 49 = can receive hedgeType and hedgeParam in openOrder
// 50 = can receive optOutSmartRouting field in openOrder
// 51 = can receive smartComboRoutingParams in openOrder
// 52 = can receive deltaNeutralConId, deltaNeutralSettlingFirm, deltaNeutralClearingAccount and deltaNeutralClearingIntent in openOrder
// 53 = can receive orderRef in execution
// 54 = can receive scale order fields (PriceAdjustValue, PriceAdjustInterval, ProfitOffset, AutoReset,
//      InitPosition, InitFillQty and RandomPercent) in openOrder
// 55 = can receive orderComboLegs (price) in openOrder
// 56 = can receive trailingPercent in openOrder
// 57 = can receive commissionReport message
// 58 = can receive CUSIP/ISIN/etc. in contractDescription/bondContractDescription
// 59 = can receive evRule, evMultiplier in contractDescription/bondContractDescription/executionDetails
//      can receive multiplier in executionDetails
// 60 = can receive deltaNeutralOpenClose, deltaNeutralShortSale, deltaNeutralShortSaleSlot and deltaNeutralDesignatedLocation in openOrder
// 61 = can receive multiplier in openOrder
//      can receive tradingClass in openOrder, updatePortfolio, execDetails and position
// 62 = can receive avgCost in position message

'use strict';

exports.VERSION = 'twsapi_macunix.970.01';

exports.DEFAULT_HOST = '127.0.0.1';
exports.DEFAULT_PORT = 7496;
exports.DEFAULT_CLIENT_ID = 0;

exports.CLIENT_VERSION = 62;
exports.SERVER_VERSION = 38;

// incoming msg id's
exports.INCOMING = {
  TICK_PRICE: 1,
  TICK_SIZE: 2,
  ORDER_STATUS: 3,
  ERR_MSG: 4,
  OPEN_ORDER: 5,
  ACCT_VALUE: 6,
  PORTFOLIO_VALUE: 7,
  ACCT_UPDATE_TIME: 8,
  NEXT_VALID_ID: 9,
  CONTRACT_DATA: 10,
  EXECUTION_DATA: 11,
  MARKET_DEPTH: 12,
  MARKET_DEPTH_L2: 13,
  NEWS_BULLETINS: 14,
  MANAGED_ACCTS: 15,
  RECEIVE_FA: 16,
  HISTORICAL_DATA: 17,
  BOND_CONTRACT_DATA: 18,
  SCANNER_PARAMETERS: 19,
  SCANNER_DATA: 20,
  TICK_OPTION_COMPUTATION: 21,
  TICK_GENERIC: 45,
  TICK_STRING: 46,
  TICK_EFP: 47,
  CURRENT_TIME: 49,
  REAL_TIME_BARS: 50,
  FUNDAMENTAL_DATA: 51,
  CONTRACT_DATA_END: 52,
  OPEN_ORDER_END: 53,
  ACCT_DOWNLOAD_END: 54,
  EXECUTION_DATA_END: 55,
  DELTA_NEUTRAL_VALIDATION: 56,
  TICK_SNAPSHOT_END: 57,
  MARKET_DATA_TYPE: 58,
  COMMISSION_REPORT: 59,
  POSITION: 61,
  POSITION_END: 62,
  ACCOUNT_SUMMARY: 63,
  ACCOUNT_SUMMARY_END: 64
};

// outgoing msg id's
exports.OUTGOING = {
  REQ_MKT_DATA: 1,
  CANCEL_MKT_DATA: 2,
  PLACE_ORDER: 3,
  CANCEL_ORDER: 4,
  REQ_OPEN_ORDERS: 5,
  REQ_ACCOUNT_DATA: 6,
  REQ_EXECUTIONS: 7,
  REQ_IDS: 8,
  REQ_CONTRACT_DATA: 9,
  REQ_MKT_DEPTH: 10,
  CANCEL_MKT_DEPTH: 11,
  REQ_NEWS_BULLETINS: 12,
  CANCEL_NEWS_BULLETINS: 13,
  SET_SERVER_LOGLEVEL: 14,
  REQ_AUTO_OPEN_ORDERS: 15,
  REQ_ALL_OPEN_ORDERS: 16,
  REQ_MANAGED_ACCTS: 17,
  REQ_FA: 18,
  REPLACE_FA: 19,
  REQ_HISTORICAL_DATA: 20,
  EXERCISE_OPTIONS: 21,
  REQ_SCANNER_SUBSCRIPTION: 22,
  CANCEL_SCANNER_SUBSCRIPTION: 23,
  REQ_SCANNER_PARAMETERS: 24,
  CANCEL_HISTORICAL_DATA: 25,
  REQ_CURRENT_TIME: 49,
  REQ_REAL_TIME_BARS: 50,
  CANCEL_REAL_TIME_BARS: 51,
  REQ_FUNDAMENTAL_DATA: 52,
  CANCEL_FUNDAMENTAL_DATA: 53,
  REQ_CALC_IMPLIED_VOLAT: 54,
  REQ_CALC_OPTION_PRICE: 55,
  CANCEL_CALC_IMPLIED_VOLAT: 56,
  CANCEL_CALC_OPTION_PRICE: 57,
  REQ_GLOBAL_CANCEL: 58,
  REQ_MARKET_DATA_TYPE: 59,
  REQ_POSITIONS: 61,
  REQ_ACCOUNT_SUMMARY: 62,
  CANCEL_ACCOUNT_SUMMARY: 63,
  CANCEL_POSITIONS: 64
};

exports.MIN_SERVER_VER = {
  REAL_TIME_BARS: 34,
  SCALE_ORDERS: 35,
  SNAPSHOT_MKT_DATA: 35,
  SSHORT_COMBO_LEGS: 35,
  WHAT_IF_ORDERS: 36,
  CONTRACT_CONID: 37,
  PTA_ORDERS: 39,
  FUNDAMENTAL_DATA: 40,
  UNDER_COMP: 40,
  CONTRACT_DATA_CHAIN: 40,
  SCALE_ORDERS2: 40,
  ALGO_ORDERS: 41,
  EXECUTION_DATA_CHAIN: 42,
  NOT_HELD: 44,
  SEC_ID_TYPE: 45,
  PLACE_ORDER_CONID: 46,
  REQ_MKT_DATA_CONID: 47,
  REQ_CALC_IMPLIED_VOLAT: 49,
  REQ_CALC_OPTION_PRICE: 50,
  CANCEL_CALC_IMPLIED_VOLAT: 50,
  CANCEL_CALC_OPTION_PRICE: 50,
  SSHORTX_OLD: 51,
  SSHORTX: 52,
  REQ_GLOBAL_CANCEL: 53,
  HEDGE_ORDERS: 54,
  REQ_MARKET_DATA_TYPE: 55,
  OPT_OUT_SMART_ROUTING: 56,
  SMART_COMBO_ROUTING_PARAMS: 57,
  DELTA_NEUTRAL_CONID: 58,
  SCALE_ORDERS3: 60,
  ORDER_COMBO_LEGS_PRICE: 61,
  TRAILING_PERCENT: 62,
  DELTA_NEUTRAL_OPEN_CLOSE: 66,
  ACCT_SUMMARY: 67,
  TRADING_CLASS: 68,
  SCALE_TABLE: 69
};

exports.BAG_SEC_TYPE = 'BAG';

// FA msg data types
exports.FA = {
  GROUPS: 1,
  PROFILES: 2,
  ALIASES: 3
};

exports.LOG_LEVEL = {
  SYSTEM: 1,
  ERROR: 2,
  WARN: 3,
  INFO: 4,
  DETAIL: 5
};

// constants - tick types
exports.TICK_TYPE = {
  BID_SIZE:  0,
  BID: 1,
  ASK: 2,
  ASK_SIZE: 3,
  LAST: 4,
  LAST_SIZE: 5,
  HIGH: 6,
  LOW: 7,
  VOLUME: 8,
  CLOSE: 9,
  BID_OPTION: 10,
  ASK_OPTION: 11,
  LAST_OPTION: 12,
  MODEL_OPTION: 13,
  OPEN: 14,
  LOW_13_WEEK: 15,
  HIGH_13_WEEK: 16,
  LOW_26_WEEK: 17,
  HIGH_26_WEEK: 18,
  LOW_52_WEEK: 19,
  HIGH_52_WEEK: 20,
  AVG_VOLUME: 21,
  OPEN_INTEREST: 22,
  OPTION_HISTORICAL_VOL: 23,
  OPTION_IMPLIED_VOL: 24,
  OPTION_BID_EXCH: 25,
  OPTION_ASK_EXCH: 26,
  OPTION_CALL_OPEN_INTEREST: 27,
  OPTION_PUT_OPEN_INTEREST: 28,
  OPTION_CALL_VOLUME: 29,
  OPTION_PUT_VOLUME: 30,
  INDEX_FUTURE_PREMIUM: 31,
  BID_EXCH: 32,
  ASK_EXCH: 33,
  AUCTION_VOLUME: 34,
  AUCTION_PRICE: 35,
  AUCTION_IMBALANCE: 36,
  MARK_PRICE: 37,
  BID_EFP_COMPUTATION: 38,
  ASK_EFP_COMPUTATION: 39,
  LAST_EFP_COMPUTATION: 40,
  OPEN_EFP_COMPUTATION: 41,
  HIGH_EFP_COMPUTATION: 42,
  LOW_EFP_COMPUTATION: 43,
  CLOSE_EFP_COMPUTATION: 44,
  LAST_TIMESTAMP: 45,
  SHORTABLE: 46,
  FUNDAMENTAL_RATIOS: 47,
  RT_VOLUME: 48,
  HALTED: 49,
  BID_YIELD: 50,
  ASK_YIELD: 51,
  LAST_YIELD: 52,
  CUST_OPTION_COMPUTATION: 53,
  TRADE_COUNT: 54,
  TRADE_RATE: 55,
  VOLUME_RATE: 56,
  LAST_RTH_TRADE: 57,
  REGULATORY_IMBALANCE: 61
};