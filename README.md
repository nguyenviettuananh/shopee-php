# Unofficial Shopee API Client in PHP

[![Total Downloads](https://poser.pugx.org/ecomphp/shopee-php/downloads)](https://packagist.org/packages/ecomphp/https://github.com/EcomPHP/shopee-php) 
[![Latest Stable Version](https://poser.pugx.org/ecomphp/shopee-php/v/stable)](https://packagist.org/packages/ecomphp/shopee-php) 
[![Latest Unstable Version](https://poser.pugx.org/ecomphp/shopee-php/v/unstable)](https://packagist.org/packages/ecomphp/shopee-php)
[![Build Status](https://img.shields.io/github/actions/workflow/status/ecomphp/shopee-php/ci.yml?branch=master&label=ci%20build&style=flat-square)](https://github.com/ecomphp/shopee-php/actions?query=workflow%3ATest)
[![License](https://poser.pugx.org/ecomphp/shopee-php/license)](https://packagist.org/packages/ecomphp/shopee-php)

Shopee Client is a simple SDK implementation of Shopee API.

## Installation

Install with Composer

```shell
composer require ecomphp/shopee-php
```

## Configure Shopee PHP Client

```php
use EcomPHP\Shopee\Client;

$partner_id = 'your partner id';
$partner_key = 'your partner key';

$client = new Client($partner_id, $partner_key);
```

## Grant token

There is a Auth class to help you getting the token from the shop using oAuth.

```php
$auth = $client->auth();
```

1) Create the authentication request

```php
$redirect_uri = 'http://your-redirect-url.com';
$auth->createAuthRequest($redirect_uri);
```

> If you want the function to return the authentication url instead of auto-redirecting, you can set the argument $return (2nd argument) to true.

```php
$authUrl = $auth->createAuthRequest($redirect_uri, true);

// redirect user to auth url
header('Location: '.$authUrl);
```

2) Get authentication code when redirected back to `Redirect callback URL` after app authorization and exchange it for access token

```php
$authorization_code = $_GET['code'];
$shop_id = $_GET['shop_id'];
$token = $auth->getToken($authorization_code, $shop_id);

$access_token = $token['access_token'];
$refresh_token = $token['refresh_token'];

// save your access_token & refresh_token & shop_id for later use
```

3) Get authorized Shop cipher

```php
$access_token = 'your access token';
$shop_id = 'your shop id';
$client->setAccessToken($shop_id, $access_token);
```

## Refresh your access token

> Access token will be expired soon, so you need refresh new token by using `refresh_token`

```php
$new_token = $auth->refreshNewToken($refresh_token, $shop_id);

$new_access_token = $new_token['access_token'];
$new_refresh_token = $new_token['refresh_token'];
```
## Usage API Example

> You need `access_token` and `shop_id` to start using Shopee API

```php
$client = new Client($partner_id, $partner_key);
$client->setAccessToken($shop_id, $access_token);
```

* Get item list: [api document](https://open.shopee.com/documents/v2/v2.product.get_item_list?module=89&type=1)

```php
$products = $client->Product->getItemList([
    'offset' => 0,
    'page_size' => 50,
    'item_status' => 'NORMAL',
]);
```

* Get order list: [api document](https://open.shopee.com/documents/v2/v2.order.get_order_list?module=94&type=1)

```php
$orders = $client->Order->getOrderList([
    'order_status' => 'READY_TO_SHIP',
    'page_size' => 50,
]);
```

## TypeScript Version

A minimal TypeScript port is provided under `ts-src`. Build it with:

```bash
npm install
npm run build
```

Usage example:

```typescript
import { Client, Resources } from './dist';

const client = new Client(PARTNER_ID, PARTNER_KEY);
client.setAccessToken(SHOP_ID, ACCESS_TOKEN);

const products = await new Resources.Product().useApiClient(client).getItemList();

// Download shipping labels using the Logistic resource
await new Resources.Logistic().useApiClient(client).downloadShippingDocument(
  [{ order_sn: '123', package_number: 'ABC' }],
  'NORMAL_AIR_WAYBILL'
);
```

The TypeScript build now includes ports of all PHP resources. They can be imported from the `Resources` namespace just like the PHP SDK.

### Available TypeScript Resources

Below is a list of every resource class and its methods. Each method maps to a Shopee API endpoint.

- **AccountHealth**
  - `getShopPerformance`
  - `shopPenalty`
  - `getMetricSourceDetail`
  - `getPenaltyPointHistory`
  - `getPunishmentHistory`
  - `getListingsWithIssues`
  - `getLateOrders`
- **AddOnDeal**
  - `addAddOnDeal`
  - `addAddOnDealMainItem`
  - `addAddOnDealSubItem`
  - `deleteAddOnDeal`
  - `deleteAddOnDealMainItem`
  - `deleteAddOnDealSubItem`
  - `getAddOnDealList`
  - `getAddOnDeal`
  - `getAddOnDealMainItem`
  - `getAddOnDealSubItem`
  - `updateAddOnDeal`
  - `updateAddOnDealMainItem`
  - `updateAddOnDealSubItem`
  - `endAddOnDeal`
- **Ads**
  - `getTotalBalance`
  - `getShopToggleInfo`
  - `getRecommendedKeywordList`
  - `getRecommendedItemList`
  - `getAllCpcAdsHourlyPerformance`
  - `getAllCpcAdsDailyPerformance`
- **Authorization**
  - `getShopsByPartner`
  - `getMerchantsByPartner`
  - `getToken`
  - `refreshNewToken`
  - `getTokenByResendCode`
  - `getRefreshTokenByUpgradeCode`
  - `getShopeeIpRanges`
- **BundleDeal**
  - `addBundleDeal`
  - `updateBundleDeal`
  - `endBundleDeal`
  - `getBundleDealList`
  - `getBundleDeal`
  - `getBundleDealItem`
  - `updateBundleDealItem`
- **Chat**
  - `getMessage`
  - `sendMessage`
  - `getConversationList`
  - `getOneConversation`
  - `deleteConversation`
  - `getUnreadConversationCount`
  - `pinConversation`
  - `unpinConversation`
  - `readConversation`
  - `unreadConversation`
  - `uploadImage`
  - `sendAutoreplyMessage`
  - `muteConversation`
  - `deleteMessage`
- **Discount**
  - `addDiscount`
  - `addDiscountItem`
  - `deleteDiscount`
  - `deleteDiscountItem`
  - `getDiscount`
  - `getDiscountList`
  - `updateDiscount`
  - `updateDiscountItem`
- **FirstMile**
  - `getShippingDocumentInfo`
  - `downloadShippingDocument`
- **FollowPrize**
  - `getPrizeList`
  - `getPrizeItem`
  - `createPrize`
  - `updatePrize`
  - `deletePrize`
- **Logistic**
  - `getShippingParameter`
  - `getTrackingNumber`
  - `shipOrder`
  - `updateShippingOrder`
  - `getShippingDocumentParameter`
  - `createShippingDocument`
  - `getShippingDocumentResult`
  - `downloadShippingDocument`
  - `getTrackingInfo`
  - `getAddressList`
  - `setAddressConfig`
  - `deleteAddress`
  - `getChannelList`
  - `updateChannel`
  - `batchShipOrder`
  - `getShippingDocumentDataInfo`
- **MediaSpace**
  - `uploadImage`
  - `getImageList`
- **Merchant**
  - `getMerchant`
  - `getMerchantAuthSites`
  - `getMerchantShopList`
- **Order**
  - `getOrderList`
  - `getOrderDetail`
  - `setNote`
  - `cancelOrder`
  - `handleBuyerCancellation`
  - `splitOrder`
  - `unsplitOrder`
  - `getEscrowList`
  - `massGetEscrowDetails`
  - `setInvoiceData`
- **Payment**
  - `getEscrowDetail`
  - `setShopInstallmentStatus`
  - `getShopInstallmentStatus`
  - `getPayoutDetail`
  - `setItemInstallmentStatus`
  - `getItemInstallmentStatus`
  - `getPaymentMethodList`
  - `getWalletTransactionList`
  - `getEscrowList`
  - `getPayoutInfo`
  - `getBillingTransactionInfo`
- **Product**
  - `getItemList`
- **Push**
  - `publicKey`
  - `getWebhookInfo`
  - `setWebhookInfo`
- **Returns**
  - `getReturnList`
  - `getReturnDetail`
  - `confirm`
  - `dispute`
  - `getEscalationList`
- **Shop**
  - `getShopInfo`
  - `performance`
  - `getProfile`
  - `updateProfile`
- **ShopCategory**
  - `addShopCategory`
  - `deleteShopCategory`
  - `getShopCategoryList`
  - `updateShopCategory`
  - `addItemList`
  - `deleteItemList`
- **ShopFlashSale**
  - `addShopFlashSale`
  - `deleteShopFlashSale`
  - `getShopFlashSale`
  - `getShopFlashSaleList`
  - `updateShopFlashSale`
  - `addItem`
  - `deleteItem`
- **TopPicks**
  - `addTopPicks`
  - `deleteTopPicks`
  - `updateTopPicks`
  - `getTopPicksList`
  - `endTopPicks`
- **Voucher**
  - `addVoucher`
  - `deleteVoucher`
  - `updateVoucher`
  - `getVoucher`
  - `getVoucherList`
