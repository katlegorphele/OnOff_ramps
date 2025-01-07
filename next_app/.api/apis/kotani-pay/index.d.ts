import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * This endpoint is used to check for the health of the application
     *
     * @summary Check for the application health
     * @throws FetchError<503, types.HealthControllerCheckResponse503> The Health Check is not successful
     */
    healthController_check(): Promise<FetchResponse<200, types.HealthControllerCheckResponse200>>;
    /**
     * This endpoint will help you create an integrator
     *
     * @summary Create an integrator
     * @throws FetchError<400, types.IntegratorControllerCreateIntegratorResponse400>
     * @throws FetchError<401, types.IntegratorControllerCreateIntegratorResponse401>
     */
    integratorController_createIntegrator(body: types.IntegratorControllerCreateIntegratorBodyParam): Promise<FetchResponse<200, types.IntegratorControllerCreateIntegratorResponse200>>;
    /**
     * This endpoint is used to retrieve an integrator details
     *
     * @summary Get an Integrator Details.
     * @throws FetchError<400, types.IntegratorControllerGetIntegratorResponse400>
     * @throws FetchError<401, types.IntegratorControllerGetIntegratorResponse401>
     * @throws FetchError<404, types.IntegratorControllerGetIntegratorResponse404>
     */
    integratorController_getIntegrator(): Promise<FetchResponse<200, types.IntegratorControllerGetIntegratorResponse200>>;
    /**
     * Login to your integrator account. This endpoint allows you to login to your account
     *
     * @summary Authentication Login
     * @throws FetchError<400, types.AuthControllerAuthLoginResponse400>
     * @throws FetchError<500, types.AuthControllerAuthLoginResponse500>
     */
    authController_authLogin(body: types.AuthControllerAuthLoginBodyParam): Promise<FetchResponse<200, types.AuthControllerAuthLoginResponse200>>;
    /**
     * This endpoint is used to generate an the API Key which can be used to authorize
     * transactions and more
     *
     * @summary Generate API Key.
     * @throws FetchError<400, types.AuthControllerGenerateApiKeyResponse400>
     * @throws FetchError<403, types.AuthControllerGenerateApiKeyResponse403>
     * @throws FetchError<404, types.AuthControllerGenerateApiKeyResponse404>
     * @throws FetchError<500, types.AuthControllerGenerateApiKeyResponse500>
     */
    authController_generateApiKey(): Promise<FetchResponse<200, types.AuthControllerGenerateApiKeyResponse200>>;
    /**
     * This endpoint will create a fiat wallet for the integrator.
     *
     * @summary Create a Fiat Wallet
     * @throws FetchError<400, types.FiatWalletControllerCreateFiatWalletResponse400>
     * @throws FetchError<401, types.FiatWalletControllerCreateFiatWalletResponse401>
     */
    fiatWalletController_createFiatWallet(body: types.FiatWalletControllerCreateFiatWalletBodyParam): Promise<FetchResponse<200, types.FiatWalletControllerCreateFiatWalletResponse200>>;
    /**
     * This endpoint will return all the fiat wallets created by the integrator.
     *
     * @summary Get Integrator Fiat Wallets
     * @throws FetchError<401, types.FiatWalletControllerGetUsersFiatWalletResponse401>
     */
    fiatWalletController_getUsersFiatWallet(): Promise<FetchResponse<200, types.FiatWalletControllerGetUsersFiatWalletResponse200>>;
    /**
     * This endpoint will return the fiat wallet created by the integrator.
     *
     * @summary Get Integrator Fiat Wallet by Wallet ID
     * @throws FetchError<401, types.FiatWalletControllerGetFiatWalletResponse401>
     * @throws FetchError<404, types.FiatWalletControllerGetFiatWalletResponse404>
     */
    fiatWalletController_getFiatWallet(metadata: types.FiatWalletControllerGetFiatWalletMetadataParam): Promise<FetchResponse<200, types.FiatWalletControllerGetFiatWalletResponse200>>;
    /**
     * This endpoint will update the fiat wallet created by the integrator.
     *
     * @summary Update Integrator Fiat Wallet by Wallet ID
     * @throws FetchError<401, types.FiatWalletControllerUpdateFiatWalletResponse401>
     * @throws FetchError<404, types.FiatWalletControllerUpdateFiatWalletResponse404>
     */
    fiatWalletController_updateFiatWallet(body: types.FiatWalletControllerUpdateFiatWalletBodyParam, metadata: types.FiatWalletControllerUpdateFiatWalletMetadataParam): Promise<FetchResponse<200, types.FiatWalletControllerUpdateFiatWalletResponse200>>;
    /**
     * This endpoint will return the fiat wallet created by the integrator.
     *
     * @summary Get Integrator Fiat Wallet by Currency
     * @throws FetchError<401, types.FiatWalletControllerGetFiatWalletByCurrencyResponse401>
     * @throws FetchError<404, types.FiatWalletControllerGetFiatWalletByCurrencyResponse404>
     */
    fiatWalletController_getFiatWalletByCurrency(metadata: types.FiatWalletControllerGetFiatWalletByCurrencyMetadataParam): Promise<FetchResponse<200, types.FiatWalletControllerGetFiatWalletByCurrencyResponse200>>;
    /**
     * This endpoint will transfer the deposit balance of the fiat wallet to the main balance.
     *
     * @summary Transfer Deposit Balance
     * @throws FetchError<401, types.FiatWalletControllerTransferDepositBalanceResponse401>
     * @throws FetchError<404, types.FiatWalletControllerTransferDepositBalanceResponse404>
     */
    fiatWalletController_transferDepositBalance(body: types.FiatWalletControllerTransferDepositBalanceBodyParam): Promise<FetchResponse<200, types.FiatWalletControllerTransferDepositBalanceResponse200>>;
    /**
     * The crypto wallet will contain the specified chain and coins an integrator desires to
     * hold and one can create as many wallets as needed.
     *
     * @summary Create a Crypto wallet
     * @throws FetchError<400, types.CryptoWalletControllerCreateCryptoWalletResponse400>
     * @throws FetchError<401, types.CryptoWalletControllerCreateCryptoWalletResponse401>
     */
    cryptoWalletController_createCryptoWallet(body: types.CryptoWalletControllerCreateCryptoWalletBodyParam): Promise<FetchResponse<200, types.CryptoWalletControllerCreateCryptoWalletResponse200>>;
    /**
     * This endpoint will return all the crypto wallets created by the integrator.
     *
     * @summary Get Integrator Crypto Wallets
     * @throws FetchError<401, types.CryptoWalletControllerGetUsersCryptoWalletsResponse401>
     */
    cryptoWalletController_getUsersCryptoWallets(): Promise<FetchResponse<200, types.CryptoWalletControllerGetUsersCryptoWalletsResponse200>>;
    /**
     * This endpoint will return the crypto wallet created by the integrator by passing the
     * wallet id.
     *
     * @summary Get Integrator Crypto Wallet by Wallet ID
     * @throws FetchError<401, types.CryptoWalletControllerGetFiatWalletResponse401>
     */
    cryptoWalletController_getFiatWallet(metadata: types.CryptoWalletControllerGetFiatWalletMetadataParam): Promise<FetchResponse<200, types.CryptoWalletControllerGetFiatWalletResponse200>>;
    /**
     * An integrator can use this endpoint to create the customers who will be either receiving
     * or sending money using mobile money.
     *
     * @summary Create a mobile money customer
     * @throws FetchError<400, types.MobileMoneyCustomerControllerCreateCustomerResponse400>
     * @throws FetchError<401, types.MobileMoneyCustomerControllerCreateCustomerResponse401>
     */
    mobileMoneyCustomerController_createCustomer(body: types.MobileMoneyCustomerControllerCreateCustomerBodyParam): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerCreateCustomerResponse200>>;
    /**
     * An integrator can use this endpoint to get all the customers who will be either
     * receiving or sending money using mobile money.
     *
     * @summary Get all mobile money customers
     * @throws FetchError<400, types.MobileMoneyCustomerControllerGetUserCustomersResponse400>
     * @throws FetchError<401, types.MobileMoneyCustomerControllerGetUserCustomersResponse401>
     * @throws FetchError<404, types.MobileMoneyCustomerControllerGetUserCustomersResponse404>
     */
    mobileMoneyCustomerController_getUserCustomers(): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerGetUserCustomersResponse200>>;
    /**
     * An integrator can use this endpoint to update the customers who will be either receiving
     * or sending money using mobile money.
     *
     * @summary Update a mobile money customer
     * @throws FetchError<401, types.MobileMoneyCustomerControllerUpdateCustomerResponse401>
     * @throws FetchError<404, types.MobileMoneyCustomerControllerUpdateCustomerResponse404>
     */
    mobileMoneyCustomerController_updateCustomer(body: types.MobileMoneyCustomerControllerUpdateCustomerBodyParam, metadata: types.MobileMoneyCustomerControllerUpdateCustomerMetadataParam): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerUpdateCustomerResponse200>>;
    /**
     * An integrator can use this endpoint to get the customer who will be either receiving or
     * sending money using mobile money by passing customer key.
     *
     * @summary Get a mobile money customer by customer key
     */
    mobileMoneyCustomerController_getCustomerDetails(metadata: types.MobileMoneyCustomerControllerGetCustomerDetailsMetadataParam): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerGetCustomerDetailsResponse200>>;
    /**
     * An integrator can use this endpoint to get the customer who will be either receiving or
     * sending money using mobile money by passing phone number.
     *
     * @summary Get a mobile money customer by Phone
     * @throws FetchError<401, types.MobileMoneyCustomerControllerGetCustomerDetailsByPhoneResponse401>
     * @throws FetchError<404, types.MobileMoneyCustomerControllerGetCustomerDetailsByPhoneResponse404>
     */
    mobileMoneyCustomerController_getCustomerDetailsByPhone(metadata: types.MobileMoneyCustomerControllerGetCustomerDetailsByPhoneMetadataParam): Promise<FetchResponse<200, types.MobileMoneyCustomerControllerGetCustomerDetailsByPhoneResponse200>>;
    /**
     * This api will withdraw fiat from the integrator’s fiat wallet to the customer’s mobile
     * money wallet.
     *
     * @summary Withdraw Fiat to Mobile Money
     * @throws FetchError<400, types.WithdrawControllerMobileMoneyResponse400>
     * @throws FetchError<401, types.WithdrawControllerMobileMoneyResponse401>
     */
    withdrawController_mobileMoney(body: types.WithdrawControllerMobileMoneyBodyParam): Promise<FetchResponse<200, types.WithdrawControllerMobileMoneyResponse200>>;
    /**
     * This endpoint will return the status of the withdrawal request.
     *
     * @summary Get Withdrawal Mobile Money Status
     * @throws FetchError<401, types.WithdrawControllerGetWithdrawalStatusResponse401>
     * @throws FetchError<404, types.WithdrawControllerGetWithdrawalStatusResponse404>
     */
    withdrawController_getWithdrawalStatus(metadata: types.WithdrawControllerGetWithdrawalStatusMetadataParam): Promise<FetchResponse<200, types.WithdrawControllerGetWithdrawalStatusResponse200>>;
    /**
     * An integrator’s customers can initiate a deposit from their respective mobile money
     * wallets.     An STK push will be sent to the customer and the respective amount will be
     * deducted from their mobile money wallets and deposited into the integrator’s fiat wallet
     *
     * @summary Deposit via mobile money
     * @throws FetchError<400, types.DepositMobileMoneyControllerMobileMoneyResponse400>
     * @throws FetchError<401, types.DepositMobileMoneyControllerMobileMoneyResponse401>
     */
    depositMobileMoneyController_mobileMoney(body: types.DepositMobileMoneyControllerMobileMoneyBodyParam): Promise<FetchResponse<200, types.DepositMobileMoneyControllerMobileMoneyResponse200>>;
    /**
     * An integrator can use this endpoint to check the status of a deposit
     *
     * @summary Get Deposit on Mobile Money status
     * @throws FetchError<400, types.DepositMobileMoneyControllerGetWithdrawalStatusResponse400>
     * @throws FetchError<401, types.DepositMobileMoneyControllerGetWithdrawalStatusResponse401>
     * @throws FetchError<404, types.DepositMobileMoneyControllerGetWithdrawalStatusResponse404>
     */
    depositMobileMoneyController_getWithdrawalStatus(metadata: types.DepositMobileMoneyControllerGetWithdrawalStatusMetadataParam): Promise<FetchResponse<200, types.DepositMobileMoneyControllerGetWithdrawalStatusResponse200>>;
    /**
     * Customer Completed transaction using Checkout Url
     *
     * @summary Deposit via bank checkout
     * @throws FetchError<400, types.DepositBankCheckoutControllerMobileMoneyResponse400>
     * @throws FetchError<401, types.DepositBankCheckoutControllerMobileMoneyResponse401>
     */
    depositBankCheckoutController_mobileMoney(body: types.DepositBankCheckoutControllerMobileMoneyBodyParam): Promise<FetchResponse<200, types.DepositBankCheckoutControllerMobileMoneyResponse200>>;
    /**
     * An integrator can use this endpoint to check the status of a deposit
     *
     * @summary Get Deposit status
     * @throws FetchError<400, types.DepositBankCheckoutControllerGetWithdrawalStatusResponse400>
     * @throws FetchError<401, types.DepositBankCheckoutControllerGetWithdrawalStatusResponse401>
     * @throws FetchError<404, types.DepositBankCheckoutControllerGetWithdrawalStatusResponse404>
     */
    depositBankCheckoutController_getWithdrawalStatus(metadata: types.DepositBankCheckoutControllerGetWithdrawalStatusMetadataParam): Promise<FetchResponse<200, types.DepositBankCheckoutControllerGetWithdrawalStatusResponse200>>;
    /**
     * An integrator can use this endpoint to get the exchange rate between two currencies
     *
     * @summary Get exchange rate
     * @throws FetchError<401, types.RateControllerGetRatesResponse401>
     */
    rateController_getRates(metadata: types.RateControllerGetRatesMetadataParam): Promise<FetchResponse<200, types.RateControllerGetRatesResponse200>>;
    /**
     * An integrator can use this endpoint to get the exchange rate between two currencies
     *
     * @summary Get Onramp Exchange rate
     * @throws FetchError<401, types.RateControllerGetOnrampRatesResponse401>
     */
    rateController_getOnrampRates(body: types.RateControllerGetOnrampRatesBodyParam): Promise<FetchResponse<200, types.RateControllerGetOnrampRatesResponse200>>;
    /**
     * An integrator can use this endpoint to get the exchange rate between two currencies
     *
     * @summary Get Offramp Exchange rate
     * @throws FetchError<401, types.RateControllerGetOffRampRatesResponse401>
     */
    rateController_getOffRampRates(body: types.RateControllerGetOffRampRatesBodyParam): Promise<FetchResponse<200, types.RateControllerGetOffRampRatesResponse200>>;
    /**
     * An integrator can use this endpoint to get the exchange rate between two fiat currencies
     *
     * @summary Get Fiat to Fiat exchange rate
     * @throws FetchError<401, types.RateControllerGetFiatToFiatRateResponse401>
     */
    rateController_getFiatToFiatRate(body: types.RateControllerGetFiatToFiatRateBodyParam): Promise<FetchResponse<200, types.RateControllerGetFiatToFiatRateResponse200>>;
    /**
     * An integrator can use this endpoint to get all the exchange rates available
     *
     * @summary Get all exchange rates
     * @throws FetchError<401, types.RateControllerRatesResponse401>
     */
    rateController_rates(): Promise<FetchResponse<200, types.RateControllerRatesResponse200>>;
    /**
     * This Api Handles fetching of payment providers
     *
     * @summary Get Payment Providers
     */
    paymentProviderController_providers(body: types.PaymentProviderControllerProvidersBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This Api Handles payout to bank, currently only supports SA Banks
     *
     * @summary BANK WITHDRAWAL
     * @throws FetchError<400, types.WithdrawTransactionControllerMobileMoneyResponse400>
     * @throws FetchError<401, types.WithdrawTransactionControllerMobileMoneyResponse401>
     */
    withdrawTransactionController_mobileMoney(body: types.WithdrawTransactionControllerMobileMoneyBodyParam): Promise<FetchResponse<200, types.WithdrawTransactionControllerMobileMoneyResponse200>>;
    /**
     * This Api Handles payout to bank, currently only supports SA Banks
     *
     * @summary BANK WITHDRAWAL STATUS
     */
    withdrawTransactionController_getWithdrawTransaction(metadata: types.WithdrawTransactionControllerGetWithdrawTransactionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This Api Handles fetching of supporting banks
     *
     * @summary GET SUPPORTING BANKS
     */
    withdrawSupportedBanksController_getSupportingBanks(): Promise<FetchResponse<number, unknown>>;
    /**
     * This api will create a new kyc basic details
     *
     * @summary Create Kyc Basic Details
     */
    kycController_createKyc(body: types.KycControllerCreateKycBodyParam): Promise<FetchResponse<200, types.KycControllerCreateKycResponse200>>;
    /**
     * This api will create a new kyc address
     *
     * @summary Create Kyc Address
     */
    kycController_createAddress(body: types.KycControllerCreateAddressBodyParam): Promise<FetchResponse<200, types.KycControllerCreateAddressResponse200>>;
    /**
     * This api will create a new kyc document
     *
     * @summary Create Kyc Document
     */
    kycController_createDocument(body: types.KycControllerCreateDocumentBodyParam): Promise<FetchResponse<200, types.KycControllerCreateDocumentResponse200>>;
    /**
     * This api will get kyc status
     *
     * @summary Get Kyc Status
     */
    kycController_verifyKyc(metadata: types.KycControllerVerifyKycMetadataParam): Promise<FetchResponse<200, types.KycControllerVerifyKycResponse200>>;
    /**
     * This api will get all integrator kyc users
     *
     * @summary Get Integrator Kyc Users
     * @throws FetchError<401, types.KycControllerIntegratorKycUsersResponse401>
     */
    kycController_integratorKycUsers(): Promise<FetchResponse<200, types.KycControllerIntegratorKycUsersResponse200>>;
    /**
     * NB: This API is Deprecated. Please use /offramp endpoint. This endpoint will create a
     * request for off ramp and returns escrow address from which the integrator will send
     * funds to.The request id generated will be used in /onchain/mobile-money api
     *
     * @summary Generate Off Ramp Request
     * @throws FetchError<400, types.OfframpMobileMoneyControllerOnchainRequestResponse400>
     * @throws FetchError<401, types.OfframpMobileMoneyControllerOnchainRequestResponse401>
     */
    offrampMobileMoneyController_onchainRequest(body: types.OfframpMobileMoneyControllerOnchainRequestBodyParam): Promise<FetchResponse<200, types.OfframpMobileMoneyControllerOnchainRequestResponse200>>;
    /**
     * NB: This endpoint is deprecated.Please use /offramp endpoint.  This endpoint will
     * withdraw from crypto transaction details you provided  into customer mobile money wallet
     *
     * @summary Send customer fiat from your crypto wallet
     * @throws FetchError<400, types.OfframpMobileMoneyControllerOnchainResponse400>
     * @throws FetchError<401, types.OfframpMobileMoneyControllerOnchainResponse401>
     */
    offrampMobileMoneyController_onchain(body: types.OfframpMobileMoneyControllerOnchainBodyParam): Promise<FetchResponse<200, types.OfframpMobileMoneyControllerOnchainResponse200> | FetchResponse<201, types.OfframpMobileMoneyControllerOnchainResponse201>>;
    /**
     * NB: This endpoint is deprecated. Please use /offramp endpoint.  This endpoint will
     * return the status of the withdrawal request.
     *
     * @summary Get Offramp MobileMoney Status
     * @throws FetchError<401, types.OfframpMobileMoneyControllerGetWithdrawalStatusResponse401>
     * @throws FetchError<404, types.OfframpMobileMoneyControllerGetWithdrawalStatusResponse404>
     */
    offrampMobileMoneyController_getWithdrawalStatus(metadata: types.OfframpMobileMoneyControllerGetWithdrawalStatusMetadataParam): Promise<FetchResponse<200, types.OfframpMobileMoneyControllerGetWithdrawalStatusResponse200>>;
    /**
     * This endpoint will return all the chains and coins that are supported by off ramp
     *
     * @summary Off Ramp Supported Chains
     * @throws FetchError<401, types.OfframpMobileMoneyControllerSupportedChainsResponse401>
     */
    offrampMobileMoneyController_supportedChains(): Promise<FetchResponse<200, types.OfframpMobileMoneyControllerSupportedChainsResponse200>>;
    /**
     * This endpoint will create a offramp request for a customer
     *
     * @summary Offramp to Mobile Money
     * @throws FetchError<400, types.OffRampControllerCreateOfframpResponse400>
     * @throws FetchError<401, types.OffRampControllerCreateOfframpResponse401>
     */
    offRampController_createOfframp(body: types.OffRampControllerCreateOfframpBodyParam): Promise<FetchResponse<200, types.OffRampControllerCreateOfframpResponse200>>;
    /**
     * This endpoint will return the status of the withdrawal request.
     *
     * @summary Get Offramp MobileMoney Status
     * @throws FetchError<401, types.OffRampControllerGetOfframpStatusResponse401>
     * @throws FetchError<404, types.OffRampControllerGetOfframpStatusResponse404>
     */
    offRampController_getOfframpStatus(metadata: types.OffRampControllerGetOfframpStatusMetadataParam): Promise<FetchResponse<200, types.OffRampControllerGetOfframpStatusResponse200>>;
    /**
     * Api is Deprecated, user /onramp api by Passing MobileMoney Object.Crypto deposits are
     * where a customer’s mobile money wallet account is deducted a specific fiat amount which
     * is then converted to a specified stablecoin amount and sent to the integrator’s crypto
     * wallet. From there, the money/ stablecoin is transferred to the customer’s public
     * address that matches the chain. This can also be called on-ramp
     *
     * @summary Onramp Mobile Money to Crypto
     * @throws FetchError<400, types.OnrampMobileMoneyControllerOnchainResponse400>
     * @throws FetchError<401, types.OnrampMobileMoneyControllerOnchainResponse401>
     * @throws FetchError<404, types.OnrampMobileMoneyControllerOnchainResponse404>
     */
    onrampMobileMoneyController_onchain(body: types.OnrampMobileMoneyControllerOnchainBodyParam): Promise<FetchResponse<200, types.OnrampMobileMoneyControllerOnchainResponse200>>;
    /**
     * This API is deprecated, use /onramp/<referenceId>  This endpoint will be used to get the
     * status of the deposit onchain request
     *
     * @summary Get Onramp Status
     * @throws FetchError<400, types.OnrampMobileMoneyControllerGetWithdrawalStatusResponse400>
     * @throws FetchError<401, types.OnrampMobileMoneyControllerGetWithdrawalStatusResponse401>
     * @throws FetchError<404, types.OnrampMobileMoneyControllerGetWithdrawalStatusResponse404>
     */
    onrampMobileMoneyController_getWithdrawalStatus(metadata: types.OnrampMobileMoneyControllerGetWithdrawalStatusMetadataParam): Promise<FetchResponse<200, types.OnrampMobileMoneyControllerGetWithdrawalStatusResponse200>>;
    /**
     * This endpoint will be used to get the supported chains for deposit onchain
     *
     * @summary Get Onramp MobileMoney Supported Chains
     * @throws FetchError<400, types.OnrampMobileMoneyControllerGetSupportedChainsResponse400>
     * @throws FetchError<401, types.OnrampMobileMoneyControllerGetSupportedChainsResponse401>
     */
    onrampMobileMoneyController_getSupportedChains(): Promise<FetchResponse<200, types.OnrampMobileMoneyControllerGetSupportedChainsResponse200>>;
    /**
     * NB: Api Is Deprecated, kindly use /onramp Api without passing Bank or MobileMoney
     * objects.  This api give you the opportunity to withdraw from your kotanipay fiat wallet
     * to a crypto address
     *
     * @summary Send from Fiat Wallet to Crypto Wallet
     * @throws FetchError<400, types.OnrampFiatWalletControllerOnchainWalletWithdrawalResponse400>
     * @throws FetchError<401, types.OnrampFiatWalletControllerOnchainWalletWithdrawalResponse401>
     */
    onrampFiatWalletController_onchainWalletWithdrawal(body: types.OnrampFiatWalletControllerOnchainWalletWithdrawalBodyParam): Promise<FetchResponse<200, types.OnrampFiatWalletControllerOnchainWalletWithdrawalResponse200> | FetchResponse<201, types.OnrampFiatWalletControllerOnchainWalletWithdrawalResponse201>>;
    /**
     * NB: Api Is Deprecated, kindly use /onramp/<reference_id>. This api give you the
     * opportunity to check transaction status of onchain/wallet withdrawal
     *
     * @summary Get transaction status
     */
    onrampFiatWalletController_onchainWalletWithdrawalStatus(metadata: types.OnrampFiatWalletControllerOnchainWalletWithdrawalStatusMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint will send token to any crypto wallet
     *
     * @summary Send Token to Crypto Wallet
     * @throws FetchError<400, types.OnrampControllerCreateOnrampCryptoResponse400>
     * @throws FetchError<401, types.OnrampControllerCreateOnrampCryptoResponse401>
     */
    onrampController_createOnrampCrypto(body: types.OnrampControllerCreateOnrampCryptoBodyParam): Promise<FetchResponse<200, types.OnrampControllerCreateOnrampCryptoResponse200>>;
    /**
     * This endpoint will be used to get the status of the transaction
     *
     * @summary Get Status Response
     * @throws FetchError<400, types.OnrampControllerGetOnrampCryptoResponse400>
     * @throws FetchError<401, types.OnrampControllerGetOnrampCryptoResponse401>
     * @throws FetchError<404, types.OnrampControllerGetOnrampCryptoResponse404>
     */
    onrampController_getOnrampCrypto(metadata: types.OnrampControllerGetOnrampCryptoMetadataParam): Promise<FetchResponse<200, types.OnrampControllerGetOnrampCryptoResponse200>>;
    /**
     * You can create an onramp request with either mobile money or bank checkout
     *
     * @summary Create Onramp
     * @throws FetchError<400, types.OnrampControllerOnrampResponse400>
     * @throws FetchError<401, types.OnrampControllerOnrampResponse401>
     */
    onrampController_onramp(body: types.OnrampControllerOnrampBodyParam): Promise<FetchResponse<200, types.OnrampControllerOnrampResponse200>>;
    /**
     * This endpoint will be used to get the status of the transaction
     *
     * @summary Get Status Response
     * @throws FetchError<400, types.OnrampControllerGetOnrampResponse400>
     * @throws FetchError<401, types.OnrampControllerGetOnrampResponse401>
     * @throws FetchError<404, types.OnrampControllerGetOnrampResponse404>
     */
    onrampController_getOnramp(metadata: types.OnrampControllerGetOnrampMetadataParam): Promise<FetchResponse<200, types.OnrampControllerGetOnrampResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
