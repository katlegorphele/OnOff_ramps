declare const AuthControllerAuthLogin: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly examples: readonly ["example@gmail.com"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["login magic link sent to your email"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AuthControllerGenerateApiKey: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Api-key generated successfully"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly key: {
                            readonly type: "string";
                            readonly description: "key";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                    };
                    readonly required: readonly ["key"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Api Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CryptoWalletControllerCreateCryptoWallet: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the wallet";
                readonly examples: readonly ["My Wallet"];
            };
            readonly chain: {
                readonly type: "string";
                readonly description: "The chain of the wallet.Its required if the wallet is a crypto wallet";
                readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
                readonly examples: readonly ["eg CELO or ETHEREUM or AVALANCHE or POLYGON"];
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Wallet has been successfully created."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the wallet";
                            readonly examples: readonly ["My Wallet"];
                        };
                        readonly balance: {
                            readonly type: "number";
                            readonly description: "The amount of the wallet";
                            readonly examples: readonly [1000];
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly description: "Wallet transaction address";
                            readonly examples: readonly ["0x1234567890"];
                        };
                        readonly customAddress: {
                            readonly type: "string";
                            readonly description: "custom for deposits public address";
                            readonly examples: readonly ["0x1234567890"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Select wallet type\n\n`crypto` `fiat`";
                            readonly enum: readonly ["crypto", "fiat"];
                            readonly examples: readonly ["eg crypto or fiat"];
                        };
                        readonly coin: {
                            readonly type: "string";
                            readonly description: "The currency of the wallet\n\n`CUSD` `USDC` `USDT` `SAT` `BTC` `HASH` `FUSE` `HBAR` `USDGLO` `CKES` `CGHS`";
                            readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
                            readonly examples: readonly ["eg CUSD or USDC or USDT"];
                        };
                        readonly chain: {
                            readonly type: "string";
                            readonly description: "The chain of the wallet.Its required if the wallet is a crypto wallet\n\n`ETHEREUM` `CELO` `AVALANCHE` `POLYGON` `ARBITRUM` `OPTIMISM` `STELLAR` `TRON` `FUSE` `LIGHTNING` `SOLANA` `PROVENANCE` `CARDANO` `HEDERA` `BASE` `LISK`";
                            readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
                            readonly examples: readonly ["eg CELO or ETHEREUM or AVALANCHE or POLYGON"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The id of the wallet";
                            readonly examples: readonly ["f053188c-d924-4423-bbba-871eda0b1cd9"];
                        };
                    };
                    readonly required: readonly ["name", "balance", "type", "coin", "id"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CryptoWalletControllerGetFiatWallet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Crypto Wallet has been successfully retrieved."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the wallet";
                            readonly examples: readonly ["My Wallet"];
                        };
                        readonly balance: {
                            readonly type: "number";
                            readonly description: "The amount of the wallet";
                            readonly examples: readonly [1000];
                        };
                        readonly privateAddress: {
                            readonly type: "string";
                            readonly description: "Wallet private address";
                            readonly examples: readonly ["0x1234567890"];
                        };
                        readonly publicAddress: {
                            readonly type: "string";
                            readonly description: "Wallet public address";
                            readonly examples: readonly ["0x1234567890"];
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly description: "Wallet transaction address";
                            readonly examples: readonly ["0x1234567890"];
                        };
                        readonly customAddress: {
                            readonly type: "string";
                            readonly description: "custom for deposits public address";
                            readonly examples: readonly ["0x1234567890"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Select wallet type\n\n`crypto` `fiat`";
                            readonly enum: readonly ["crypto", "fiat"];
                            readonly examples: readonly ["eg crypto or fiat"];
                        };
                        readonly coin: {
                            readonly type: "string";
                            readonly description: "The currency of the wallet\n\n`CUSD` `USDC` `USDT` `SAT` `BTC` `HASH` `FUSE` `HBAR` `USDGLO` `CKES` `CGHS`";
                            readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
                            readonly examples: readonly ["eg CUSD or USDC or USDT"];
                        };
                        readonly chain: {
                            readonly type: "string";
                            readonly description: "The chain of the wallet.Its required if the wallet is a crypto wallet\n\n`ETHEREUM` `CELO` `AVALANCHE` `POLYGON` `ARBITRUM` `OPTIMISM` `STELLAR` `TRON` `FUSE` `LIGHTNING` `SOLANA` `PROVENANCE` `CARDANO` `HEDERA` `BASE` `LISK`";
                            readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
                            readonly examples: readonly ["eg CELO or ETHEREUM or AVALANCHE or POLYGON"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The id of the wallet";
                            readonly examples: readonly ["f053188c-d924-4423-bbba-871eda0b1cd9"];
                        };
                    };
                    readonly required: readonly ["name", "balance", "type", "coin", "id"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CryptoWalletControllerGetUsersCryptoWallets: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Crypto wallet has been successfully retrieved."];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the wallet";
                                readonly examples: readonly ["My Wallet"];
                            };
                            readonly balance: {
                                readonly type: "number";
                                readonly description: "The amount of the wallet";
                                readonly examples: readonly [1000];
                            };
                            readonly privateAddress: {
                                readonly type: "string";
                                readonly description: "Wallet private address";
                                readonly examples: readonly ["0x1234567890"];
                            };
                            readonly publicAddress: {
                                readonly type: "string";
                                readonly description: "Wallet public address";
                                readonly examples: readonly ["0x1234567890"];
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly description: "Wallet transaction address";
                                readonly examples: readonly ["0x1234567890"];
                            };
                            readonly customAddress: {
                                readonly type: "string";
                                readonly description: "custom for deposits public address";
                                readonly examples: readonly ["0x1234567890"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Select wallet type\n\n`crypto` `fiat`";
                                readonly enum: readonly ["crypto", "fiat"];
                                readonly examples: readonly ["eg crypto or fiat"];
                            };
                            readonly coin: {
                                readonly type: "string";
                                readonly description: "The currency of the wallet\n\n`CUSD` `USDC` `USDT` `SAT` `BTC` `HASH` `FUSE` `HBAR` `USDGLO` `CKES` `CGHS`";
                                readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
                                readonly examples: readonly ["eg CUSD or USDC or USDT"];
                            };
                            readonly chain: {
                                readonly type: "string";
                                readonly description: "The chain of the wallet.Its required if the wallet is a crypto wallet\n\n`ETHEREUM` `CELO` `AVALANCHE` `POLYGON` `ARBITRUM` `OPTIMISM` `STELLAR` `TRON` `FUSE` `LIGHTNING` `SOLANA` `PROVENANCE` `CARDANO` `HEDERA` `BASE` `LISK`";
                                readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
                                readonly examples: readonly ["eg CELO or ETHEREUM or AVALANCHE or POLYGON"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The id of the wallet";
                                readonly examples: readonly ["f053188c-d924-4423-bbba-871eda0b1cd9"];
                            };
                        };
                        readonly required: readonly ["name", "balance", "type", "coin", "id"];
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DepositBankCheckoutControllerGetWithdrawalStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly reference_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["reference_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Deposit status retrieved."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "reference id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly referenceNumber: {
                            readonly type: "number";
                            readonly description: "reference number";
                            readonly examples: readonly [1234567890];
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "message";
                            readonly examples: readonly ["Deposit request sent successfully"];
                        };
                        readonly redirectUrl: {
                            readonly type: "string";
                            readonly description: "redirect url";
                            readonly examples: readonly [""];
                        };
                        readonly customerKey: {
                            readonly type: "string";
                            readonly description: "customer key";
                            readonly examples: readonly [""];
                        };
                    };
                    readonly required: readonly ["id", "referenceId", "referenceNumber", "message"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DepositBankCheckoutControllerMobileMoney: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly fullName: {
                readonly type: "string";
                readonly description: "full name";
                readonly examples: readonly ["John Doe"];
            };
            readonly phoneNumber: {
                readonly type: "string";
                readonly description: "Customer Phone Number";
                readonly examples: readonly ["+245XXXXXXXXX"];
            };
            readonly paymentMethod: {
                readonly type: "string";
                readonly enum: readonly ["PAYBYBANK", "CARD"];
                readonly description: "Payment Method";
                readonly examples: readonly ["PAYBYBANK"];
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "ZAR is currently supported";
                readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                readonly examples: readonly ["eg ZAR"];
            };
            readonly referenceId: {
                readonly type: "string";
                readonly description: "reference id";
                readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "amount to deposit";
                readonly examples: readonly [10];
            };
            readonly walletId: {
                readonly type: "string";
                readonly description: "wallet id";
                readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
            };
            readonly callbackUrl: {
                readonly type: "string";
                readonly description: "callback url";
                readonly examples: readonly ["https://example.com"];
            };
        };
        readonly required: readonly ["fullName", "phoneNumber", "paymentMethod", "currency", "amount", "walletId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Checkout Created successfully created."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly fullName: {
                            readonly type: "string";
                            readonly description: "full name";
                            readonly examples: readonly ["John Doe"];
                        };
                        readonly phoneNumber: {
                            readonly type: "string";
                            readonly description: "Customer Phone Number";
                            readonly examples: readonly ["+245XXXXXXXXX"];
                        };
                        readonly paymentMethod: {
                            readonly type: "string";
                            readonly enum: readonly ["PAYBYBANK", "CARD"];
                            readonly description: "Payment Method\n\n`PAYBYBANK` `CARD`";
                            readonly examples: readonly ["PAYBYBANK"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "ZAR is currently supported\n\n`KES` `GHS` `NGN` `ZAR` `USD` `XOF` `ZMW` `XAF` `CDF` `TZS` `UGX` `EGP` `MWK` `RWF`";
                            readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                            readonly examples: readonly ["eg ZAR"];
                        };
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "reference id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "amount to deposit";
                            readonly examples: readonly [10];
                        };
                        readonly walletId: {
                            readonly type: "string";
                            readonly description: "wallet id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly callbackUrl: {
                            readonly type: "string";
                            readonly description: "callback url";
                            readonly examples: readonly ["https://example.com"];
                        };
                    };
                    readonly required: readonly ["fullName", "phoneNumber", "paymentMethod", "currency", "amount", "walletId"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DepositMobileMoneyControllerGetWithdrawalStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly reference_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["reference_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Deposit status retrieved."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "deposit id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "amount to deposit";
                            readonly examples: readonly [10];
                        };
                        readonly wallet_id: {
                            readonly type: "string";
                            readonly description: "deposit id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly callback_url: {
                            readonly type: "string";
                            readonly description: "callback url";
                            readonly examples: readonly ["https://example.com"];
                        };
                        readonly reference_id: {
                            readonly type: "string";
                            readonly description: "reference id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "INITIATED", "SUCCESSFUL", "FAILED", "EXPIRED", "CANCELLED", "DECLINED", "REVERSED", "IN_PROGRESS", "DUPLICATE", "ERROR_OCCURRED", "REQUIRE_REVIEW", "SUCCESS"];
                            readonly description: "`PENDING` `INITIATED` `SUCCESSFUL` `FAILED` `EXPIRED` `CANCELLED` `DECLINED` `REVERSED` `IN_PROGRESS` `DUPLICATE` `ERROR_OCCURRED` `REQUIRE_REVIEW` `SUCCESS`";
                        };
                        readonly reference_number: {
                            readonly type: "number";
                        };
                        readonly created_at: {
                            readonly format: "date-time";
                            readonly type: "string";
                        };
                        readonly transaction_cost: {
                            readonly type: "number";
                        };
                        readonly transaction_amount: {
                            readonly type: "number";
                        };
                        readonly customer_key: {
                            readonly type: "string";
                        };
                        readonly initialDepositBalance: {
                            readonly type: "number";
                        };
                        readonly finalDepositBalance: {
                            readonly type: "number";
                        };
                        readonly error_message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["id", "amount", "wallet_id", "status", "reference_number", "created_at", "transaction_cost", "transaction_amount", "customer_key"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DepositMobileMoneyControllerMobileMoney: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly customer_key: {
                readonly type: "string";
                readonly description: "Customer key";
                readonly examples: readonly ["customer-key-123"];
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "amount to deposit";
                readonly examples: readonly [10];
            };
            readonly wallet_id: {
                readonly type: "string";
                readonly description: "deposit id";
                readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
            };
            readonly callback_url: {
                readonly type: "string";
                readonly description: "callback url";
                readonly examples: readonly ["https://example.com"];
            };
            readonly reference_id: {
                readonly type: "string";
                readonly description: "reference id";
                readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
            };
        };
        readonly required: readonly ["customer_key", "amount", "wallet_id"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Deposit has been successfully created."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly reference_id: {
                            readonly type: "string";
                        };
                        readonly reference_number: {
                            readonly type: "number";
                        };
                        readonly customer_key: {
                            readonly type: "string";
                        };
                        readonly redirect_url: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["id", "message", "reference_id", "reference_number"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FiatWalletControllerCreateFiatWallet: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the wallet";
                readonly examples: readonly ["My Wallet"];
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "The currency of the wallet";
                readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                readonly examples: readonly ["eg NGN or GHS or KES"];
            };
        };
        readonly required: readonly ["name", "currency"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Fiat wallet has been successfully created."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the wallet";
                            readonly examples: readonly ["My Wallet"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Select wallet type\n\n`crypto` `fiat`";
                            readonly enum: readonly ["crypto", "fiat"];
                            readonly examples: readonly ["eg crypto or fiat"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "The currency of the wallet\n\n`KES` `GHS` `NGN` `ZAR` `USD` `XOF` `ZMW` `XAF` `CDF` `TZS` `UGX` `EGP` `MWK` `RWF`";
                            readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                            readonly examples: readonly ["eg NGN or GHS or KES"];
                        };
                        readonly integrator: {
                            readonly type: "string";
                            readonly description: "The integrator of the wallet";
                            readonly examples: readonly ["4440cb6a-f7c7-11ed-b67e-0242ac120002"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the wallet\n\n`active` `inactive` `suspended` `deleted`";
                            readonly enum: readonly ["active", "inactive", "suspended", "deleted"];
                            readonly examples: readonly ["eg active or inactive"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The id of the wallet";
                            readonly examples: readonly ["f053188c-d924-4423-bbba-871eda0b1cd9"];
                        };
                        readonly balance: {
                            readonly type: "number";
                            readonly description: "The amount of the wallet";
                            readonly examples: readonly [1000];
                        };
                        readonly deposit_balance: {
                            readonly type: "number";
                            readonly description: "Amount of the wallet that has been deposited so far";
                            readonly examples: readonly [1000];
                        };
                    };
                    readonly required: readonly ["name", "type", "currency", "integrator", "id", "balance", "deposit_balance"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FiatWalletControllerGetFiatWallet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The wallet has been successfully retrieved."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the wallet";
                            readonly examples: readonly ["My Wallet"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Select wallet type\n\n`crypto` `fiat`";
                            readonly enum: readonly ["crypto", "fiat"];
                            readonly examples: readonly ["eg crypto or fiat"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "The currency of the wallet\n\n`KES` `GHS` `NGN` `ZAR` `USD` `XOF` `ZMW` `XAF` `CDF` `TZS` `UGX` `EGP` `MWK` `RWF`";
                            readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                            readonly examples: readonly ["eg NGN or GHS or KES"];
                        };
                        readonly integrator: {
                            readonly type: "string";
                            readonly description: "The integrator of the wallet";
                            readonly examples: readonly ["4440cb6a-f7c7-11ed-b67e-0242ac120002"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the wallet\n\n`active` `inactive` `suspended` `deleted`";
                            readonly enum: readonly ["active", "inactive", "suspended", "deleted"];
                            readonly examples: readonly ["eg active or inactive"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The id of the wallet";
                            readonly examples: readonly ["f053188c-d924-4423-bbba-871eda0b1cd9"];
                        };
                        readonly balance: {
                            readonly type: "number";
                            readonly description: "The amount of the wallet";
                            readonly examples: readonly [1000];
                        };
                        readonly deposit_balance: {
                            readonly type: "number";
                            readonly description: "Amount of the wallet that has been deposited so far";
                            readonly examples: readonly [1000];
                        };
                    };
                    readonly required: readonly ["name", "type", "currency", "integrator", "id", "balance", "deposit_balance"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Wallet Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FiatWalletControllerGetFiatWalletByCurrency: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["currency"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The wallet has been successfully retrieved."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the wallet";
                            readonly examples: readonly ["My Wallet"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Select wallet type\n\n`crypto` `fiat`";
                            readonly enum: readonly ["crypto", "fiat"];
                            readonly examples: readonly ["eg crypto or fiat"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "The currency of the wallet\n\n`KES` `GHS` `NGN` `ZAR` `USD` `XOF` `ZMW` `XAF` `CDF` `TZS` `UGX` `EGP` `MWK` `RWF`";
                            readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                            readonly examples: readonly ["eg NGN or GHS or KES"];
                        };
                        readonly integrator: {
                            readonly type: "string";
                            readonly description: "The integrator of the wallet";
                            readonly examples: readonly ["4440cb6a-f7c7-11ed-b67e-0242ac120002"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the wallet\n\n`active` `inactive` `suspended` `deleted`";
                            readonly enum: readonly ["active", "inactive", "suspended", "deleted"];
                            readonly examples: readonly ["eg active or inactive"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The id of the wallet";
                            readonly examples: readonly ["f053188c-d924-4423-bbba-871eda0b1cd9"];
                        };
                        readonly balance: {
                            readonly type: "number";
                            readonly description: "The amount of the wallet";
                            readonly examples: readonly [1000];
                        };
                        readonly deposit_balance: {
                            readonly type: "number";
                            readonly description: "Amount of the wallet that has been deposited so far";
                            readonly examples: readonly [1000];
                        };
                    };
                    readonly required: readonly ["name", "type", "currency", "integrator", "id", "balance", "deposit_balance"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Wallet Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FiatWalletControllerGetUsersFiatWallet: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Fiat wallet has been successfully retrieved."];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the wallet";
                                readonly examples: readonly ["My Wallet"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Select wallet type\n\n`crypto` `fiat`";
                                readonly enum: readonly ["crypto", "fiat"];
                                readonly examples: readonly ["eg crypto or fiat"];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "The currency of the wallet\n\n`KES` `GHS` `NGN` `ZAR` `USD` `XOF` `ZMW` `XAF` `CDF` `TZS` `UGX` `EGP` `MWK` `RWF`";
                                readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                                readonly examples: readonly ["eg NGN or GHS or KES"];
                            };
                            readonly integrator: {
                                readonly type: "string";
                                readonly description: "The integrator of the wallet";
                                readonly examples: readonly ["4440cb6a-f7c7-11ed-b67e-0242ac120002"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "The status of the wallet\n\n`active` `inactive` `suspended` `deleted`";
                                readonly enum: readonly ["active", "inactive", "suspended", "deleted"];
                                readonly examples: readonly ["eg active or inactive"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The id of the wallet";
                                readonly examples: readonly ["f053188c-d924-4423-bbba-871eda0b1cd9"];
                            };
                            readonly balance: {
                                readonly type: "number";
                                readonly description: "The amount of the wallet";
                                readonly examples: readonly [1000];
                            };
                            readonly deposit_balance: {
                                readonly type: "number";
                                readonly description: "Amount of the wallet that has been deposited so far";
                                readonly examples: readonly [1000];
                            };
                        };
                        readonly required: readonly ["name", "type", "currency", "integrator", "id", "balance", "deposit_balance"];
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FiatWalletControllerTransferDepositBalance: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly walletId: {
                readonly type: "string";
                readonly description: "The ID of the fiat wallet.";
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "The amount to transfer from the deposit balance to the main balance.";
            };
        };
        readonly required: readonly ["walletId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Transfer deposit balance has been successfully done."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the wallet";
                            readonly examples: readonly ["My Wallet"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Select wallet type\n\n`crypto` `fiat`";
                            readonly enum: readonly ["crypto", "fiat"];
                            readonly examples: readonly ["eg crypto or fiat"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "The currency of the wallet\n\n`KES` `GHS` `NGN` `ZAR` `USD` `XOF` `ZMW` `XAF` `CDF` `TZS` `UGX` `EGP` `MWK` `RWF`";
                            readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                            readonly examples: readonly ["eg NGN or GHS or KES"];
                        };
                        readonly integrator: {
                            readonly type: "string";
                            readonly description: "The integrator of the wallet";
                            readonly examples: readonly ["4440cb6a-f7c7-11ed-b67e-0242ac120002"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the wallet\n\n`active` `inactive` `suspended` `deleted`";
                            readonly enum: readonly ["active", "inactive", "suspended", "deleted"];
                            readonly examples: readonly ["eg active or inactive"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The id of the wallet";
                            readonly examples: readonly ["f053188c-d924-4423-bbba-871eda0b1cd9"];
                        };
                        readonly balance: {
                            readonly type: "number";
                            readonly description: "The amount of the wallet";
                            readonly examples: readonly [1000];
                        };
                        readonly deposit_balance: {
                            readonly type: "number";
                            readonly description: "Amount of the wallet that has been deposited so far";
                            readonly examples: readonly [1000];
                        };
                    };
                    readonly required: readonly ["name", "type", "currency", "integrator", "id", "balance", "deposit_balance"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Wallet Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FiatWalletControllerUpdateFiatWallet: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the wallet";
                readonly examples: readonly ["My Wallet"];
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Fiat wallet has been successfully updated."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the wallet";
                            readonly examples: readonly ["My Wallet"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly description: "Select wallet type\n\n`crypto` `fiat`";
                            readonly enum: readonly ["crypto", "fiat"];
                            readonly examples: readonly ["eg crypto or fiat"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "The currency of the wallet\n\n`KES` `GHS` `NGN` `ZAR` `USD` `XOF` `ZMW` `XAF` `CDF` `TZS` `UGX` `EGP` `MWK` `RWF`";
                            readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                            readonly examples: readonly ["eg NGN or GHS or KES"];
                        };
                        readonly integrator: {
                            readonly type: "string";
                            readonly description: "The integrator of the wallet";
                            readonly examples: readonly ["4440cb6a-f7c7-11ed-b67e-0242ac120002"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the wallet\n\n`active` `inactive` `suspended` `deleted`";
                            readonly enum: readonly ["active", "inactive", "suspended", "deleted"];
                            readonly examples: readonly ["eg active or inactive"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The id of the wallet";
                            readonly examples: readonly ["f053188c-d924-4423-bbba-871eda0b1cd9"];
                        };
                        readonly balance: {
                            readonly type: "number";
                            readonly description: "The amount of the wallet";
                            readonly examples: readonly [1000];
                        };
                        readonly deposit_balance: {
                            readonly type: "number";
                            readonly description: "Amount of the wallet that has been deposited so far";
                            readonly examples: readonly [1000];
                        };
                    };
                    readonly required: readonly ["name", "type", "currency", "integrator", "id", "balance", "deposit_balance"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Wallet Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const HealthControllerCheck: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ok"];
                };
                readonly info: {
                    readonly type: readonly ["object", "null"];
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
                readonly error: {
                    readonly type: readonly ["object", "null"];
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
                readonly details: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly info: {
                    readonly type: readonly ["object", "null"];
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
                readonly error: {
                    readonly type: readonly ["object", "null"];
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
                readonly details: {
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const IntegratorControllerCreateIntegrator: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly organization: {
                readonly type: "string";
                readonly description: "organization";
                readonly examples: readonly ["A&B Company"];
            };
            readonly first_name: {
                readonly type: "string";
                readonly description: "first_name";
                readonly examples: readonly ["John"];
            };
            readonly last_name: {
                readonly type: "string";
                readonly description: "last_name";
                readonly examples: readonly ["Doe"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "email";
                readonly examples: readonly ["ab@gmail.com"];
            };
            readonly phone: {
                readonly type: "string";
                readonly description: "phone";
                readonly examples: readonly ["+xxx xxx xxx xxx"];
            };
            readonly country_code: {
                readonly type: "string";
                readonly description: "country_code";
                readonly examples: readonly ["US"];
            };
        };
        readonly required: readonly ["organization", "first_name", "last_name", "email", "phone", "country_code"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The record has been successfully created."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "id";
                            readonly examples: readonly ["xxxxxxxxxxxxxxxxxxxxxxxx"];
                        };
                        readonly organization: {
                            readonly type: "string";
                            readonly description: "organization";
                            readonly examples: readonly ["A&B Company"];
                        };
                        readonly first_name: {
                            readonly type: "string";
                            readonly description: "first_name";
                            readonly examples: readonly ["John"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly description: "last_name";
                            readonly examples: readonly ["Doe"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "email";
                            readonly examples: readonly ["ab@gmail.com"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly description: "phone";
                            readonly examples: readonly ["+xxx xxx xxx xxx"];
                        };
                    };
                    readonly required: readonly ["organization", "first_name", "last_name", "email", "phone"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const IntegratorControllerGetIntegrator: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["The record has been successfully retrieved."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "id";
                            readonly examples: readonly ["xxxxxxxxxxxxxxxxxxxxxxxx"];
                        };
                        readonly organization: {
                            readonly type: "string";
                            readonly description: "organization";
                            readonly examples: readonly ["A&B Company"];
                        };
                        readonly first_name: {
                            readonly type: "string";
                            readonly description: "first_name";
                            readonly examples: readonly ["John"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly description: "last_name";
                            readonly examples: readonly ["Doe"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "email";
                            readonly examples: readonly ["ab@gmail.com"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly description: "phone";
                            readonly examples: readonly ["+xxx xxx xxx xxx"];
                        };
                    };
                    readonly required: readonly ["organization", "first_name", "last_name", "email", "phone"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const KycControllerCreateAddress: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly kycId: {
                readonly type: "string";
            };
            readonly street: {
                readonly type: "string";
            };
            readonly town: {
                readonly type: "string";
            };
            readonly country: {
                readonly type: "string";
                readonly description: "example GH,KE,NG";
            };
        };
        readonly required: readonly ["kycId", "street", "town", "country"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Kyc Address created successfully"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                        };
                        readonly kycId: {
                            readonly type: "string";
                        };
                        readonly kycStatus: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["status"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const KycControllerCreateDocument: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly kycId: {
                readonly type: "string";
            };
            readonly nationality: {
                readonly type: "string";
                readonly description: "example Ghanian, Nigerian";
            };
            readonly documentNo: {
                readonly type: "string";
            };
            readonly documentExpirationDate: {
                readonly type: "string";
                readonly description: "should be of this format YYYY-MM-DD";
            };
            readonly country: {
                readonly type: "string";
                readonly description: "example Ghana, Nigeria, Kenya";
            };
            readonly documentName: {
                readonly type: "string";
                readonly description: "example PASSPORT, GOVERNMENT ID, VOTERS ID";
            };
        };
        readonly required: readonly ["kycId", "nationality", "documentNo", "documentExpirationDate", "country", "documentName"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Kyc Document created successfully"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                        };
                        readonly kycId: {
                            readonly type: "string";
                        };
                        readonly kycStatus: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["status"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const KycControllerCreateKyc: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly userEmail: {
                readonly type: "string";
            };
            readonly customerKey: {
                readonly type: "string";
            };
            readonly firstName: {
                readonly type: "string";
            };
            readonly lastName: {
                readonly type: "string";
            };
            readonly dob: {
                readonly type: "string";
                readonly description: "should be of this format YYYY-MM-DD";
            };
            readonly gender: {
                readonly type: "string";
                readonly enum: readonly ["M", "F"];
            };
            readonly country: {
                readonly type: "string";
                readonly description: "example GH,KE,NG";
            };
            readonly phone: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["userEmail", "customerKey", "firstName", "lastName", "dob", "gender", "country", "phone"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Kyc Basic Details created successfully"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                        };
                        readonly kycId: {
                            readonly type: "string";
                        };
                        readonly kycStatus: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["status"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const KycControllerIntegratorKycUsers: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Successfully retrieved kyc users"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly kycId: {
                                readonly type: "string";
                            };
                            readonly kycVerified: {
                                readonly type: "boolean";
                            };
                            readonly basicDetails: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly userEmail: {
                                        readonly type: "string";
                                    };
                                    readonly customerKey: {
                                        readonly type: "string";
                                    };
                                    readonly firstName: {
                                        readonly type: "string";
                                    };
                                    readonly lastName: {
                                        readonly type: "string";
                                    };
                                    readonly dob: {
                                        readonly type: "string";
                                        readonly description: "should be of this format YYYY-MM-DD";
                                    };
                                    readonly gender: {
                                        readonly type: "string";
                                        readonly enum: readonly ["M", "F"];
                                        readonly description: "`M` `F`";
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "example GH,KE,NG";
                                    };
                                    readonly phone: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["userEmail", "customerKey", "firstName", "lastName", "dob", "gender", "country", "phone"];
                            };
                            readonly address: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kycId: {
                                        readonly type: "string";
                                    };
                                    readonly street: {
                                        readonly type: "string";
                                    };
                                    readonly town: {
                                        readonly type: "string";
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "example GH,KE,NG";
                                    };
                                };
                                readonly required: readonly ["kycId", "street", "town", "country"];
                            };
                            readonly document: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly kycId: {
                                        readonly type: "string";
                                    };
                                    readonly nationality: {
                                        readonly type: "string";
                                        readonly description: "example Ghanian, Nigerian";
                                    };
                                    readonly documentNo: {
                                        readonly type: "string";
                                    };
                                    readonly documentExpirationDate: {
                                        readonly type: "string";
                                        readonly description: "should be of this format YYYY-MM-DD";
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "example Ghana, Nigeria, Kenya";
                                    };
                                    readonly documentName: {
                                        readonly type: "string";
                                        readonly description: "example PASSPORT, GOVERNMENT ID, VOTERS ID";
                                    };
                                };
                                readonly required: readonly ["kycId", "nationality", "documentNo", "documentExpirationDate", "country", "documentName"];
                            };
                        };
                        readonly required: readonly ["kycId", "kycVerified", "basicDetails", "address", "document"];
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const KycControllerVerifyKyc: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly kycId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["kycId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Successfully retrieved kyc status"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly status: {
                            readonly type: "string";
                        };
                        readonly kycId: {
                            readonly type: "string";
                        };
                        readonly kycStatus: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["status"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MobileMoneyCustomerControllerCreateCustomer: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly phone_number: {
                readonly type: "string";
            };
            readonly country_code: {
                readonly type: "string";
                readonly enum: readonly ["GHA", "NG", "KE", "ZA", "CIV", "ZM", "CMR", "COD", "SEN", "TZ", "MWI", "UG", "EG", "RW"];
                readonly examples: readonly ["GHA or KE"];
            };
            readonly network: {
                readonly type: "string";
                readonly enum: readonly ["MTN", "AIRTEL", "VODAFONE", "TIGO", "ORANGE", "NOT_SUPPORTED", "ZAMTEL", "MPESA", "CHECKOUT", "BKTRX"];
                readonly examples: readonly ["MPESA or MTN or AIRTEL or VODAFONE"];
            };
            readonly account_name: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["phone_number", "country_code"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Customer has been successfully created."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly phone_number: {
                            readonly type: "string";
                        };
                        readonly country_code: {
                            readonly type: "string";
                            readonly enum: readonly ["GHA", "NG", "KE", "ZA", "CIV", "ZM", "CMR", "COD", "SEN", "TZ", "MWI", "UG", "EG", "RW"];
                            readonly examples: readonly ["GHA or KE"];
                            readonly description: "`GHA` `NG` `KE` `ZA` `CIV` `ZM` `CMR` `COD` `SEN` `TZ` `MWI` `UG` `EG` `RW`";
                        };
                        readonly network: {
                            readonly type: "string";
                            readonly enum: readonly ["MTN", "AIRTEL", "VODAFONE", "TIGO", "ORANGE", "NOT_SUPPORTED", "ZAMTEL", "MPESA", "CHECKOUT", "BKTRX"];
                            readonly examples: readonly ["MPESA or MTN or AIRTEL or VODAFONE"];
                            readonly description: "`MTN` `AIRTEL` `VODAFONE` `TIGO` `ORANGE` `NOT_SUPPORTED` `ZAMTEL` `MPESA` `CHECKOUT` `BKTRX`";
                        };
                        readonly customer_key: {
                            readonly type: "string";
                        };
                        readonly account_name: {
                            readonly type: "string";
                        };
                        readonly integrator: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["phone_number", "country_code"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MobileMoneyCustomerControllerGetCustomerDetails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_key: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["customer_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Customer fetched successfully."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly phone_number: {
                            readonly type: "string";
                        };
                        readonly country_code: {
                            readonly type: "string";
                            readonly enum: readonly ["GHA", "NG", "KE", "ZA", "CIV", "ZM", "CMR", "COD", "SEN", "TZ", "MWI", "UG", "EG", "RW"];
                            readonly examples: readonly ["GHA or KE"];
                            readonly description: "`GHA` `NG` `KE` `ZA` `CIV` `ZM` `CMR` `COD` `SEN` `TZ` `MWI` `UG` `EG` `RW`";
                        };
                        readonly network: {
                            readonly type: "string";
                            readonly enum: readonly ["MTN", "AIRTEL", "VODAFONE", "TIGO", "ORANGE", "NOT_SUPPORTED", "ZAMTEL", "MPESA", "CHECKOUT", "BKTRX"];
                            readonly examples: readonly ["MPESA or MTN or AIRTEL or VODAFONE"];
                            readonly description: "`MTN` `AIRTEL` `VODAFONE` `TIGO` `ORANGE` `NOT_SUPPORTED` `ZAMTEL` `MPESA` `CHECKOUT` `BKTRX`";
                        };
                        readonly customer_key: {
                            readonly type: "string";
                        };
                        readonly account_name: {
                            readonly type: "string";
                        };
                        readonly integrator: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["phone_number", "country_code"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MobileMoneyCustomerControllerGetCustomerDetailsByPhone: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly phone_number: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["phone_number"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Customer fetched successfully."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly phone_number: {
                            readonly type: "string";
                        };
                        readonly country_code: {
                            readonly type: "string";
                            readonly enum: readonly ["GHA", "NG", "KE", "ZA", "CIV", "ZM", "CMR", "COD", "SEN", "TZ", "MWI", "UG", "EG", "RW"];
                            readonly examples: readonly ["GHA or KE"];
                            readonly description: "`GHA` `NG` `KE` `ZA` `CIV` `ZM` `CMR` `COD` `SEN` `TZ` `MWI` `UG` `EG` `RW`";
                        };
                        readonly network: {
                            readonly type: "string";
                            readonly enum: readonly ["MTN", "AIRTEL", "VODAFONE", "TIGO", "ORANGE", "NOT_SUPPORTED", "ZAMTEL", "MPESA", "CHECKOUT", "BKTRX"];
                            readonly examples: readonly ["MPESA or MTN or AIRTEL or VODAFONE"];
                            readonly description: "`MTN` `AIRTEL` `VODAFONE` `TIGO` `ORANGE` `NOT_SUPPORTED` `ZAMTEL` `MPESA` `CHECKOUT` `BKTRX`";
                        };
                        readonly customer_key: {
                            readonly type: "string";
                        };
                        readonly account_name: {
                            readonly type: "string";
                        };
                        readonly integrator: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["phone_number", "country_code"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Customer not found."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MobileMoneyCustomerControllerGetUserCustomers: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Customers successfully retrieved."];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly phone_number: {
                                readonly type: "string";
                            };
                            readonly country_code: {
                                readonly type: "string";
                                readonly enum: readonly ["GHA", "NG", "KE", "ZA", "CIV", "ZM", "CMR", "COD", "SEN", "TZ", "MWI", "UG", "EG", "RW"];
                                readonly examples: readonly ["GHA or KE"];
                                readonly description: "`GHA` `NG` `KE` `ZA` `CIV` `ZM` `CMR` `COD` `SEN` `TZ` `MWI` `UG` `EG` `RW`";
                            };
                            readonly network: {
                                readonly type: "string";
                                readonly enum: readonly ["MTN", "AIRTEL", "VODAFONE", "TIGO", "ORANGE", "NOT_SUPPORTED", "ZAMTEL", "MPESA", "CHECKOUT", "BKTRX"];
                                readonly examples: readonly ["MPESA or MTN or AIRTEL or VODAFONE"];
                                readonly description: "`MTN` `AIRTEL` `VODAFONE` `TIGO` `ORANGE` `NOT_SUPPORTED` `ZAMTEL` `MPESA` `CHECKOUT` `BKTRX`";
                            };
                            readonly customer_key: {
                                readonly type: "string";
                            };
                            readonly account_name: {
                                readonly type: "string";
                            };
                            readonly integrator: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["phone_number", "country_code"];
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Forbidden"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MobileMoneyCustomerControllerUpdateCustomer: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly network: {
                readonly type: "string";
                readonly enum: readonly ["MTN", "AIRTEL", "VODAFONE", "TIGO", "ORANGE", "NOT_SUPPORTED", "ZAMTEL", "MPESA", "CHECKOUT", "BKTRX"];
                readonly examples: readonly ["MPESA or MTN or AIRTEL or VODAFONE"];
            };
            readonly account_name: {
                readonly type: "string";
            };
            readonly country_code: {
                readonly type: "string";
                readonly enum: readonly ["GHA", "NG", "KE", "ZA", "CIV", "ZM", "CMR", "COD", "SEN", "TZ", "MWI", "UG", "EG", "RW"];
                readonly examples: readonly ["GHA or KE"];
            };
            readonly first_name: {
                readonly type: "string";
                readonly examples: readonly ["John"];
            };
            readonly last_name: {
                readonly type: "string";
                readonly examples: readonly ["Doe"];
            };
            readonly date_of_birth: {
                readonly type: "string";
                readonly examples: readonly ["1990-01-01"];
            };
            readonly id_number: {
                readonly type: "string";
                readonly examples: readonly ["123456789"];
            };
            readonly image: {
                readonly type: "string";
            };
            readonly id_type: {
                readonly type: "string";
                readonly enum: readonly ["NATIONAL_ID", "ECOWAS_ID"];
                readonly examples: readonly ["ECOWAS_ID or NATIONAL_ID"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_key: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["customer_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bio Data has been successfully updated."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly phone_number: {
                            readonly type: "string";
                        };
                        readonly country_code: {
                            readonly type: "string";
                            readonly enum: readonly ["GHA", "NG", "KE", "ZA", "CIV", "ZM", "CMR", "COD", "SEN", "TZ", "MWI", "UG", "EG", "RW"];
                            readonly examples: readonly ["GHA or KE"];
                            readonly description: "`GHA` `NG` `KE` `ZA` `CIV` `ZM` `CMR` `COD` `SEN` `TZ` `MWI` `UG` `EG` `RW`";
                        };
                        readonly network: {
                            readonly type: "string";
                            readonly enum: readonly ["MTN", "AIRTEL", "VODAFONE", "TIGO", "ORANGE", "NOT_SUPPORTED", "ZAMTEL", "MPESA", "CHECKOUT", "BKTRX"];
                            readonly examples: readonly ["MPESA or MTN or AIRTEL or VODAFONE"];
                            readonly description: "`MTN` `AIRTEL` `VODAFONE` `TIGO` `ORANGE` `NOT_SUPPORTED` `ZAMTEL` `MPESA` `CHECKOUT` `BKTRX`";
                        };
                        readonly customer_key: {
                            readonly type: "string";
                        };
                        readonly account_name: {
                            readonly type: "string";
                        };
                        readonly integrator: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["phone_number", "country_code"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Api Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OffRampControllerCreateOfframp: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly mobileMoneyReceiver: {
                readonly description: "The mobile money receiver details";
                readonly type: "object";
                readonly required: readonly ["phoneNumber", "accountName", "networkProvider"];
                readonly properties: {
                    readonly phoneNumber: {
                        readonly type: "string";
                        readonly description: "Phone number";
                    };
                    readonly accountName: {
                        readonly type: "string";
                        readonly description: "Account name";
                    };
                    readonly networkProvider: {
                        readonly type: "string";
                        readonly description: "Network provider example MTN, GLO, AIRTEL";
                        readonly enum: readonly ["MTN", "AIRTEL", "VODAFONE", "TIGO", "ORANGE", "NOT_SUPPORTED", "ZAMTEL", "MPESA", "CHECKOUT", "BKTRX"];
                    };
                };
            };
            readonly cryptoAmount: {
                readonly type: "number";
                readonly description: "The crypto amount";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Fiat currency";
                readonly enum: readonly ["KES", "GHS", "TZS", "UGX", "ZMW", "XAF"];
            };
            readonly chain: {
                readonly type: "string";
                readonly description: "Chain";
                readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
            };
            readonly token: {
                readonly type: "string";
                readonly description: "Stable Coin or Token";
                readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
            };
            readonly referenceId: {
                readonly type: "string";
                readonly description: "Reference ID";
            };
            readonly senderAddress: {
                readonly type: "string";
                readonly description: "Sender address";
            };
        };
        readonly required: readonly ["mobileMoneyReceiver", "cryptoAmount", "currency", "chain", "token", "referenceId", "senderAddress"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Offramp has been successfully created"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "Reference ID";
                        };
                        readonly fiatAmount: {
                            readonly type: "number";
                            readonly description: "Fiat amount";
                        };
                        readonly fiatTransactionAmount: {
                            readonly type: "number";
                            readonly description: "Fiat transaction amount";
                        };
                        readonly cryptoAmount: {
                            readonly type: "number";
                            readonly description: "Crypto amount";
                        };
                        readonly fiatCurrency: {
                            readonly type: "string";
                            readonly description: "Fiat currency\n\n`KES` `GHS` `TZS` `UGX` `ZMW` `XAF`";
                            readonly enum: readonly ["KES", "GHS", "TZS", "UGX", "ZMW", "XAF"];
                        };
                        readonly customerKey: {
                            readonly type: "string";
                            readonly description: "Customer key";
                        };
                        readonly fiatWalletId: {
                            readonly type: "string";
                            readonly description: "Fiat wallet ID";
                        };
                        readonly senderAddress: {
                            readonly type: "string";
                            readonly description: "Sender address";
                        };
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly description: "Transaction hash";
                        };
                        readonly transactionHashAmount: {
                            readonly type: "number";
                            readonly description: "Transaction hash amount";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                        };
                        readonly onchainStatus: {
                            readonly type: "string";
                            readonly description: "Onchain status";
                        };
                        readonly rate: {
                            readonly type: "object";
                            readonly description: "Rate";
                            readonly additionalProperties: true;
                        };
                        readonly escrowAddress: {
                            readonly type: "string";
                            readonly description: "Escrow address";
                        };
                    };
                    readonly required: readonly ["referenceId", "fiatAmount", "fiatTransactionAmount", "cryptoAmount", "fiatCurrency", "customerKey", "fiatWalletId", "senderAddress", "transactionHash", "transactionHashAmount", "status", "onchainStatus", "rate", "escrowAddress"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OffRampControllerGetOfframpStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly referenceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["referenceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Offramp status retrieved"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "Reference ID";
                        };
                        readonly fiatAmount: {
                            readonly type: "number";
                            readonly description: "Fiat amount";
                        };
                        readonly fiatTransactionAmount: {
                            readonly type: "number";
                            readonly description: "Fiat transaction amount";
                        };
                        readonly cryptoAmount: {
                            readonly type: "number";
                            readonly description: "Crypto amount";
                        };
                        readonly fiatCurrency: {
                            readonly type: "string";
                            readonly description: "Fiat currency\n\n`KES` `GHS` `TZS` `UGX` `ZMW` `XAF`";
                            readonly enum: readonly ["KES", "GHS", "TZS", "UGX", "ZMW", "XAF"];
                        };
                        readonly customerKey: {
                            readonly type: "string";
                            readonly description: "Customer key";
                        };
                        readonly fiatWalletId: {
                            readonly type: "string";
                            readonly description: "Fiat wallet ID";
                        };
                        readonly senderAddress: {
                            readonly type: "string";
                            readonly description: "Sender address";
                        };
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly description: "Transaction hash";
                        };
                        readonly transactionHashAmount: {
                            readonly type: "number";
                            readonly description: "Transaction hash amount";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Status";
                        };
                        readonly onchainStatus: {
                            readonly type: "string";
                            readonly description: "Onchain status";
                        };
                        readonly rate: {
                            readonly type: "object";
                            readonly description: "Rate";
                            readonly additionalProperties: true;
                        };
                        readonly escrowAddress: {
                            readonly type: "string";
                            readonly description: "Escrow address";
                        };
                    };
                    readonly required: readonly ["referenceId", "fiatAmount", "fiatTransactionAmount", "cryptoAmount", "fiatCurrency", "customerKey", "fiatWalletId", "senderAddress", "transactionHash", "transactionHashAmount", "status", "onchainStatus", "rate", "escrowAddress"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Reference Id not found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OfframpMobileMoneyControllerGetWithdrawalStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly reference_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["reference_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Withdrawal status retrieved"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "withdrawal id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "amount to withdraw";
                            readonly examples: readonly [10];
                        };
                        readonly walletId: {
                            readonly type: "string";
                            readonly description: "wallet id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly callbackUrl: {
                            readonly type: "string";
                            readonly description: "callback url";
                            readonly examples: readonly ["https://example.com"];
                        };
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "reference id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "SUCCESSFUL", "FAILED", "CANCELLED", "REVERSED", "IN_PROGRESS", "INITIATED", "ERROR_OCCURRED", "DECLINED", "EXPIRED", "REQUIRE_REVIEW", "NOT_INITIATED", "TRANSACTION_INITIATED"];
                            readonly description: "`PENDING` `SUCCESSFUL` `FAILED` `CANCELLED` `REVERSED` `IN_PROGRESS` `INITIATED` `ERROR_OCCURRED` `DECLINED` `EXPIRED` `REQUIRE_REVIEW` `NOT_INITIATED` `TRANSACTION_INITIATED`";
                        };
                        readonly referenceNumber: {
                            readonly type: "number";
                        };
                        readonly created_at: {
                            readonly format: "date-time";
                            readonly type: "string";
                        };
                        readonly transactionCost: {
                            readonly type: "number";
                        };
                        readonly transactionAmount: {
                            readonly type: "number";
                        };
                        readonly customerKey: {
                            readonly type: "string";
                        };
                        readonly integratorFeeAmount: {
                            readonly type: "number";
                        };
                        readonly integratorFee: {
                            readonly type: "number";
                        };
                        readonly integratorCommissionType: {
                            readonly type: "string";
                            readonly enum: readonly ["PERCENTAGE", "FLAT", "NONE"];
                            readonly description: "`PERCENTAGE` `FLAT` `NONE`";
                        };
                    };
                    readonly required: readonly ["id", "amount", "walletId", "status", "referenceNumber", "created_at", "transactionCost", "transactionAmount", "customerKey", "integratorFeeAmount", "integratorFee", "integratorCommissionType"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Reference Id not found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OfframpMobileMoneyControllerOnchain: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly transaction_hash: {
                readonly type: "string";
                readonly description: "The transaction hash";
            };
            readonly chain: {
                readonly type: "string";
                readonly description: "supported chain";
                readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
            };
            readonly token: {
                readonly type: "string";
                readonly description: "supported token";
                readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
            };
            readonly wallet_id: {
                readonly type: "string";
                readonly description: "Should Be Fiat Wallet Id";
            };
            readonly preview: {
                readonly type: "boolean";
                readonly description: "The preview";
            };
            readonly customer_key: {
                readonly type: "string";
                readonly description: "The customer key";
            };
            readonly request_id: {
                readonly type: "string";
                readonly description: "request id obtained from Generate Offramp Request api";
            };
            readonly callback_url: {
                readonly type: "string";
                readonly description: "The callback url";
            };
            readonly referenceId: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["transaction_hash", "chain", "token", "wallet_id", "customer_key", "request_id"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Withdrawal has been successfully created"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly referenceId: {
                            readonly type: "string";
                        };
                        readonly referenceNumber: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["id", "message", "referenceId", "referenceNumber"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "201": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Withdrawal preview"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transaction_amount: {
                            readonly type: "number";
                        };
                        readonly usd_amount: {
                            readonly type: "number";
                        };
                        readonly transaction_cost: {
                            readonly type: "number";
                        };
                        readonly transaction_cost_type: {
                            readonly type: "string";
                            readonly enum: readonly ["CUSTOM", "DEFAULT", "BILL_ON_INTEGRATOR", "BILL_AFTER_TRANSACTION", "BILL_ON_INVOICE"];
                            readonly description: "`CUSTOM` `DEFAULT` `BILL_ON_INTEGRATOR` `BILL_AFTER_TRANSACTION` `BILL_ON_INVOICE`";
                        };
                        readonly local_currency_amount: {
                            readonly type: "number";
                        };
                        readonly rates: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly required: readonly ["transaction_amount", "usd_amount", "transaction_cost", "transaction_cost_type", "local_currency_amount", "rates"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OfframpMobileMoneyControllerOnchainRequest: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly senders_address: {
                readonly type: "string";
                readonly description: "senders address";
            };
            readonly senders_amount: {
                readonly type: "number";
                readonly description: "Senders amount";
            };
            readonly chain: {
                readonly type: "string";
                readonly description: "supported chain";
                readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
            };
            readonly token: {
                readonly type: "string";
                readonly description: "supported token";
                readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
            };
        };
        readonly required: readonly ["senders_address", "senders_amount", "chain", "token"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request has been successfully created"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly request_id: {
                            readonly type: "string";
                            readonly description: "Request Id";
                        };
                        readonly escrow_address: {
                            readonly type: "string";
                            readonly description: "Senders amount";
                        };
                        readonly bolt11: {
                            readonly type: "string";
                            readonly description: "Bolt11 invoice";
                        };
                    };
                    readonly required: readonly ["request_id", "escrow_address"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OfframpMobileMoneyControllerSupportedChains: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["ok"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly STELLAR: {
                            readonly type: "array";
                            readonly examples: readonly ["USDC"];
                            readonly items: {};
                        };
                        readonly CELO: {
                            readonly type: "array";
                            readonly examples: readonly ["cUSD"];
                            readonly items: {};
                        };
                        readonly TRON: {
                            readonly type: "array";
                            readonly examples: readonly ["USDT", "USDC"];
                            readonly items: {};
                        };
                        readonly FUSE: {
                            readonly type: "array";
                            readonly examples: readonly ["USDT", "USDC"];
                            readonly items: {};
                        };
                        readonly AVALANCHE: {
                            readonly type: "array";
                            readonly examples: readonly ["USDC"];
                            readonly items: {};
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OnrampControllerCreateOnrampCrypto: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "The receiver address of the onramp crypto transaction";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
                readonly description: "The chain of the onramp crypto transaction";
            };
            readonly token: {
                readonly type: "string";
                readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
                readonly description: "The token of the onramp crypto transaction";
            };
            readonly cryptoAmount: {
                readonly type: "number";
                readonly description: "The amount of crypto sent";
            };
            readonly referenceId: {
                readonly type: "string";
                readonly description: "The reference ID of the onramp crypto transaction";
            };
        };
        readonly required: readonly ["receiverAddress", "chain", "token", "cryptoAmount", "referenceId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request has been successfully created"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "The reference ID of the onramp crypto transaction";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the onramp crypto transaction";
                        };
                        readonly cryptoAmount: {
                            readonly type: "number";
                            readonly description: "The amount of crypto sent";
                        };
                        readonly cryptoAmountReceived: {
                            readonly type: "number";
                            readonly description: "The amount of crypto received";
                        };
                        readonly feeInCrypto: {
                            readonly type: "number";
                            readonly description: "The fee in crypto";
                        };
                        readonly feeType: {
                            readonly type: "string";
                            readonly description: "The type of fee";
                        };
                        readonly cryptoWallet: {
                            readonly type: "string";
                            readonly description: "The ID of the crypto wallet";
                        };
                        readonly chain: {
                            readonly type: "object";
                            readonly description: "The chain of the onramp crypto transaction";
                            readonly additionalProperties: true;
                        };
                        readonly token: {
                            readonly type: "object";
                            readonly description: "The token of the onramp crypto transaction";
                            readonly additionalProperties: true;
                        };
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly description: "The transaction hash of the onramp crypto transaction";
                        };
                    };
                    readonly required: readonly ["referenceId", "status", "cryptoAmount", "cryptoAmountReceived", "feeInCrypto", "feeType", "cryptoWallet", "chain", "token", "transactionHash"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OnrampControllerGetOnramp: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly referenceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["referenceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Onramp status successfully retrieved."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "Onramp reference ID";
                        };
                        readonly depositStatus: {
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "INITIATED", "SUCCESSFUL", "FAILED", "EXPIRED", "CANCELLED", "DECLINED", "REVERSED", "IN_PROGRESS", "DUPLICATE", "ERROR_OCCURRED", "REQUIRE_REVIEW", "SUCCESS"];
                            readonly description: "Deposit status\n\n`PENDING` `INITIATED` `SUCCESSFUL` `FAILED` `EXPIRED` `CANCELLED` `DECLINED` `REVERSED` `IN_PROGRESS` `DUPLICATE` `ERROR_OCCURRED` `REQUIRE_REVIEW` `SUCCESS`";
                        };
                        readonly onchainStatus: {
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "INITIATED", "SUCCESSFUL", "FAILED", "EXPIRED", "CANCELLED", "DECLINED", "REVERSED", "IN_PROGRESS", "DUPLICATE", "ERROR_OCCURRED", "REQUIRE_REVIEW", "SUCCESS"];
                            readonly description: "Onchain status\n\n`PENDING` `INITIATED` `SUCCESSFUL` `FAILED` `EXPIRED` `CANCELLED` `DECLINED` `REVERSED` `IN_PROGRESS` `DUPLICATE` `ERROR_OCCURRED` `REQUIRE_REVIEW` `SUCCESS`";
                        };
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly description: "Transaction hash";
                        };
                        readonly rate: {
                            readonly type: "object";
                            readonly description: "Rate";
                            readonly additionalProperties: true;
                        };
                        readonly fiatAmount: {
                            readonly type: "number";
                            readonly description: "Crypto amount";
                        };
                        readonly cryptoAmount: {
                            readonly type: "number";
                            readonly description: "Crypto amount";
                        };
                    };
                    readonly required: readonly ["referenceId", "depositStatus", "onchainStatus", "rate", "fiatAmount", "cryptoAmount"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OnrampControllerGetOnrampCrypto: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly referenceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["referenceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Onramp crypto status successfully retrieved."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "The reference ID of the onramp crypto transaction";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "The status of the onramp crypto transaction";
                        };
                        readonly cryptoAmount: {
                            readonly type: "number";
                            readonly description: "The amount of crypto sent";
                        };
                        readonly cryptoAmountReceived: {
                            readonly type: "number";
                            readonly description: "The amount of crypto received";
                        };
                        readonly feeInCrypto: {
                            readonly type: "number";
                            readonly description: "The fee in crypto";
                        };
                        readonly feeType: {
                            readonly type: "string";
                            readonly description: "The type of fee";
                        };
                        readonly cryptoWallet: {
                            readonly type: "string";
                            readonly description: "The ID of the crypto wallet";
                        };
                        readonly chain: {
                            readonly type: "object";
                            readonly description: "The chain of the onramp crypto transaction";
                            readonly additionalProperties: true;
                        };
                        readonly token: {
                            readonly type: "object";
                            readonly description: "The token of the onramp crypto transaction";
                            readonly additionalProperties: true;
                        };
                        readonly transactionHash: {
                            readonly type: "string";
                            readonly description: "The transaction hash of the onramp crypto transaction";
                        };
                    };
                    readonly required: readonly ["referenceId", "status", "cryptoAmount", "cryptoAmountReceived", "feeInCrypto", "feeType", "cryptoWallet", "chain", "token", "transactionHash"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OnrampControllerOnramp: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly mobileMoney: {
                readonly description: "Mobile Money details";
                readonly type: "object";
                readonly required: readonly ["phoneNumber", "accountName", "providerNetwork"];
                readonly properties: {
                    readonly phoneNumber: {
                        readonly type: "string";
                        readonly description: "Phone number";
                    };
                    readonly accountName: {
                        readonly type: "string";
                        readonly description: "Account name";
                    };
                    readonly providerNetwork: {
                        readonly type: "string";
                        readonly enum: readonly ["MTN", "AIRTEL", "VODAFONE", "TIGO", "ORANGE", "NOT_SUPPORTED", "ZAMTEL", "MPESA", "CHECKOUT", "BKTRX"];
                        readonly description: "Provider network";
                    };
                };
            };
            readonly bankCheckout: {
                readonly description: "Bank Checkout details";
                readonly type: "object";
                readonly required: readonly ["fullName", "phoneNumber", "paymentMethod"];
                readonly properties: {
                    readonly fullName: {
                        readonly type: "string";
                        readonly description: "Full name";
                    };
                    readonly phoneNumber: {
                        readonly type: "string";
                        readonly description: "Phone number";
                    };
                    readonly paymentMethod: {
                        readonly type: "string";
                        readonly enum: readonly ["CARD", "PAYBYBANK"];
                        readonly description: "Payment method";
                    };
                };
            };
            readonly fiatAmount: {
                readonly type: "number";
                readonly description: "Fiat amount";
            };
            readonly currency: {
                readonly type: "string";
                readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                readonly description: "Currency";
            };
            readonly chain: {
                readonly type: "string";
                readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
                readonly description: "Chain";
            };
            readonly token: {
                readonly type: "string";
                readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
                readonly description: "Stable Coin";
            };
            readonly receiverAddress: {
                readonly type: "string";
                readonly description: "Receiver address";
            };
            readonly referenceId: {
                readonly type: "string";
                readonly description: "Reference ID";
            };
        };
        readonly required: readonly ["fiatAmount", "currency", "chain", "token", "receiverAddress", "referenceId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Request has been successfully created"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Onramp ID";
                        };
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "Onramp reference ID";
                        };
                        readonly referenceNumber: {
                            readonly type: "number";
                            readonly description: "Onramp reference number";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Onramp message";
                        };
                        readonly customerKey: {
                            readonly type: "string";
                            readonly description: "Onramp customer key";
                        };
                        readonly redirectUrl: {
                            readonly type: "string";
                            readonly description: "Onramp redirect URL";
                        };
                    };
                    readonly required: readonly ["id", "referenceId", "referenceNumber", "message", "customerKey"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OnrampFiatWalletControllerOnchainWalletWithdrawal: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly source_wallet: {
                readonly type: "string";
                readonly description: "source wallet, should be fiat wallet";
            };
            readonly receivers_address: {
                readonly type: "string";
                readonly description: "receivers address";
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "Senders amount";
            };
            readonly chain: {
                readonly type: "string";
                readonly description: "supported chain";
                readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
            };
            readonly token: {
                readonly type: "string";
                readonly description: "supported token";
                readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
            };
            readonly preview: {
                readonly type: "boolean";
                readonly description: "preview, set preview to true to get transaction data with rates";
            };
            readonly callback_url: {
                readonly type: "string";
                readonly description: "callback url";
            };
        };
        readonly required: readonly ["source_wallet", "receivers_address", "amount", "chain", "token", "callback_url"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Wallet Withdrawal has been successfully created"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly transaction_hash: {
                            readonly type: "string";
                        };
                        readonly reference_id: {
                            readonly type: "string";
                        };
                        readonly reference_number: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["id", "transaction_hash", "reference_id", "reference_number"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "201": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Preview Retrieved Successfully"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transactionCostInFiat: {
                            readonly type: "number";
                        };
                        readonly transactionAmountInFiat: {
                            readonly type: "number";
                        };
                        readonly transactionAmountInUsd: {
                            readonly type: "number";
                        };
                        readonly transactionAmountInUsdRate: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly amountInFiat: {
                            readonly type: "number";
                        };
                        readonly amountInFiatRate: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly required: readonly ["transactionCostInFiat", "transactionAmountInFiat", "transactionAmountInUsd", "transactionAmountInUsdRate", "amountInFiat", "amountInFiatRate"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OnrampFiatWalletControllerOnchainWalletWithdrawalStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly reference_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["reference_id"];
        }];
    };
};
declare const OnrampMobileMoneyControllerGetSupportedChains: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Onramp onchain supported chains retrieved successfully."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly FUSE: {
                            readonly type: "array";
                            readonly examples: readonly ["USDT", "USDC"];
                            readonly items: {};
                        };
                        readonly CELO: {
                            readonly type: "array";
                            readonly examples: readonly ["CUSD"];
                            readonly items: {};
                        };
                        readonly ETHEREUM: {
                            readonly type: "array";
                            readonly examples: readonly ["USDT", "USDC"];
                            readonly items: {};
                        };
                        readonly POLYGON: {
                            readonly type: "array";
                            readonly examples: readonly ["USDC"];
                            readonly items: {};
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OnrampMobileMoneyControllerGetWithdrawalStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly reference_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["reference_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Deposit status successfully retrieved."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly mobile_money: {
                            readonly description: "mobile money status";
                            readonly type: "object";
                            readonly required: readonly ["id", "amount", "wallet_id", "status", "reference_number", "created_at", "transaction_cost", "transaction_amount", "customer_key"];
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "deposit id";
                                    readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly description: "amount to deposit";
                                    readonly examples: readonly [10];
                                };
                                readonly wallet_id: {
                                    readonly type: "string";
                                    readonly description: "deposit id";
                                    readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                                };
                                readonly callback_url: {
                                    readonly type: "string";
                                    readonly description: "callback url";
                                    readonly examples: readonly ["https://example.com"];
                                };
                                readonly reference_id: {
                                    readonly type: "string";
                                    readonly description: "reference id";
                                    readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly enum: readonly ["PENDING", "INITIATED", "SUCCESSFUL", "FAILED", "EXPIRED", "CANCELLED", "DECLINED", "REVERSED", "IN_PROGRESS", "DUPLICATE", "ERROR_OCCURRED", "REQUIRE_REVIEW", "SUCCESS"];
                                    readonly description: "`PENDING` `INITIATED` `SUCCESSFUL` `FAILED` `EXPIRED` `CANCELLED` `DECLINED` `REVERSED` `IN_PROGRESS` `DUPLICATE` `ERROR_OCCURRED` `REQUIRE_REVIEW` `SUCCESS`";
                                };
                                readonly reference_number: {
                                    readonly type: "number";
                                };
                                readonly created_at: {
                                    readonly format: "date-time";
                                    readonly type: "string";
                                };
                                readonly transaction_cost: {
                                    readonly type: "number";
                                };
                                readonly transaction_amount: {
                                    readonly type: "number";
                                };
                                readonly customer_key: {
                                    readonly type: "string";
                                };
                                readonly initialDepositBalance: {
                                    readonly type: "number";
                                };
                                readonly finalDepositBalance: {
                                    readonly type: "number";
                                };
                                readonly error_message: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly onchain: {
                            readonly description: "onchain status";
                            readonly type: "object";
                            readonly required: readonly ["chain", "token"];
                            readonly properties: {
                                readonly public_address: {
                                    readonly type: "string";
                                    readonly description: "The transaction public address";
                                };
                                readonly chain: {
                                    readonly type: "string";
                                    readonly description: "supported chain\n\n`ETHEREUM` `CELO` `AVALANCHE` `POLYGON` `ARBITRUM` `OPTIMISM` `STELLAR` `TRON` `FUSE` `LIGHTNING` `SOLANA` `PROVENANCE` `CARDANO` `HEDERA` `BASE` `LISK`";
                                    readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
                                };
                                readonly token: {
                                    readonly type: "string";
                                    readonly description: "supported token\n\n`CUSD` `USDC` `USDT` `SAT` `BTC` `HASH` `FUSE` `HBAR` `USDGLO` `CKES` `CGHS`";
                                    readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
                                };
                                readonly reference_id: {
                                    readonly type: "string";
                                    readonly description: "Optional reference id";
                                };
                                readonly crypto_amount: {
                                    readonly type: "string";
                                    readonly description: "crypto amount";
                                };
                                readonly transaction_hash: {
                                    readonly type: "string";
                                    readonly description: "transaction hash";
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly description: "transaction status\n\n`PENDING` `INITIATED` `SUCCESSFUL` `FAILED` `EXPIRED` `CANCELLED` `DECLINED` `REVERSED` `IN_PROGRESS` `DUPLICATE` `ERROR_OCCURRED` `REQUIRE_REVIEW` `SUCCESS`";
                                    readonly enum: readonly ["PENDING", "INITIATED", "SUCCESSFUL", "FAILED", "EXPIRED", "CANCELLED", "DECLINED", "REVERSED", "IN_PROGRESS", "DUPLICATE", "ERROR_OCCURRED", "REQUIRE_REVIEW", "SUCCESS"];
                                };
                                readonly crypto_received_status: {
                                    readonly type: "string";
                                    readonly description: "crypto received status\n\n`PENDING` `INITIATED` `SUCCESSFUL` `FAILED` `EXPIRED` `CANCELLED` `DECLINED` `REVERSED` `IN_PROGRESS` `DUPLICATE` `ERROR_OCCURRED` `REQUIRE_REVIEW` `SUCCESS`";
                                    readonly enum: readonly ["PENDING", "INITIATED", "SUCCESSFUL", "FAILED", "EXPIRED", "CANCELLED", "DECLINED", "REVERSED", "IN_PROGRESS", "DUPLICATE", "ERROR_OCCURRED", "REQUIRE_REVIEW", "SUCCESS"];
                                };
                            };
                        };
                    };
                    readonly required: readonly ["mobile_money", "onchain"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OnrampMobileMoneyControllerOnchain: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly public_address: {
                readonly type: "string";
                readonly description: "The transaction public address";
            };
            readonly chain: {
                readonly type: "string";
                readonly description: "supported chain";
                readonly enum: readonly ["ETHEREUM", "CELO", "AVALANCHE", "POLYGON", "ARBITRUM", "OPTIMISM", "STELLAR", "TRON", "FUSE", "LIGHTNING", "SOLANA", "PROVENANCE", "CARDANO", "HEDERA", "BASE", "LISK"];
            };
            readonly token: {
                readonly type: "string";
                readonly description: "supported token";
                readonly enum: readonly ["CUSD", "USDC", "USDT", "SAT", "BTC", "HASH", "FUSE", "HBAR", "USDGLO", "CKES", "CGHS"];
            };
            readonly wallet_id: {
                readonly type: "string";
                readonly description: "The wallet id";
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "The amount to deposit";
            };
            readonly customer_key: {
                readonly type: "string";
                readonly description: "The customer key";
            };
            readonly callback_url: {
                readonly type: "string";
                readonly description: "The callback url";
            };
            readonly reference_id: {
                readonly type: "string";
                readonly description: "Optional reference id";
            };
        };
        readonly required: readonly ["chain", "token", "wallet_id", "amount", "customer_key"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Deposit has been successfully created."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly reference_id: {
                            readonly type: "string";
                        };
                        readonly reference_number: {
                            readonly type: "number";
                        };
                        readonly customer_key: {
                            readonly type: "string";
                        };
                        readonly redirect_url: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["id", "message", "reference_id", "reference_number"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Not Found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PaymentProviderControllerProviders: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly currency: {
                readonly type: "string";
                readonly description: "Currency";
                readonly enum: readonly ["KES", "GHS", "TZS", "UGX", "ZMW", "XAF"];
                readonly examples: readonly ["NGN"];
            };
            readonly paymentMethod: {
                readonly type: "string";
                readonly description: "Payment method";
                readonly enum: readonly ["mobile_money", "bank"];
                readonly examples: readonly ["BANK_TRANSFER"];
            };
        };
        readonly required: readonly ["currency", "paymentMethod"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
};
declare const RateControllerGetFiatToFiatRate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly from: {
                readonly type: "string";
                readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                readonly description: "From currency";
                readonly examples: readonly ["KES"];
            };
            readonly to: {
                readonly type: "string";
                readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                readonly description: "To currency";
                readonly examples: readonly ["EUR"];
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "Rate value";
                readonly examples: readonly ["0.85"];
            };
        };
        readonly required: readonly ["from", "to", "amount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Available exchange rate."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly from: {
                            readonly type: "string";
                            readonly description: "From currency";
                            readonly examples: readonly ["USD"];
                        };
                        readonly to: {
                            readonly type: "string";
                            readonly description: "To currency";
                            readonly examples: readonly ["EUR"];
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "Rate value";
                            readonly examples: readonly ["0.85"];
                        };
                        readonly depositAmount: {
                            readonly type: "number";
                            readonly description: "Deposit amount";
                            readonly examples: readonly ["100"];
                        };
                        readonly withdrawalAmount: {
                            readonly type: "number";
                            readonly description: "Withdrawal amount";
                            readonly examples: readonly ["100"];
                        };
                        readonly depositTransactionAmount: {
                            readonly type: "number";
                            readonly description: "Deposit transaction amount";
                            readonly examples: readonly ["100"];
                        };
                        readonly withdrawalTransactionAmount: {
                            readonly type: "number";
                            readonly description: "Withdrawal transaction amount";
                            readonly examples: readonly ["100"];
                        };
                        readonly depositFee: {
                            readonly type: "number";
                            readonly description: "Deposit fee";
                            readonly examples: readonly ["100"];
                        };
                        readonly withdrawalFee: {
                            readonly type: "number";
                            readonly description: "Withdrawal fee";
                            readonly examples: readonly ["100"];
                        };
                    };
                    readonly required: readonly ["from", "to", "value", "depositAmount", "withdrawalAmount", "depositTransactionAmount", "withdrawalTransactionAmount", "depositFee", "withdrawalFee"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RateControllerGetOffRampRates: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly from: {
                readonly type: "string";
                readonly enum: readonly ["CUSD", "USDC", "USDT", "USDGLO", "CKES", "CGHS"];
                readonly description: "From currency";
                readonly examples: readonly ["USDC"];
            };
            readonly to: {
                readonly type: "string";
                readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                readonly description: "To currency";
                readonly examples: readonly ["EUR"];
            };
            readonly cryptoAmount: {
                readonly type: "number";
                readonly description: "Rate value";
                readonly examples: readonly ["0.85"];
            };
        };
        readonly required: readonly ["from", "to", "cryptoAmount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Available exchange rate."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly from: {
                            readonly type: "string";
                            readonly description: "From currency";
                            readonly examples: readonly ["USD"];
                        };
                        readonly to: {
                            readonly type: "string";
                            readonly description: "To currency";
                            readonly examples: readonly ["EUR"];
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "Rate value";
                            readonly examples: readonly ["0.85"];
                        };
                    };
                    readonly required: readonly ["from", "to", "value"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RateControllerGetOnrampRates: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly from: {
                readonly type: "string";
                readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                readonly description: "From currency";
                readonly examples: readonly ["KES"];
            };
            readonly to: {
                readonly type: "string";
                readonly enum: readonly ["CUSD", "USDC", "USDT", "USDGLO", "CKES", "CGHS"];
                readonly description: "To currency";
                readonly examples: readonly ["USDT"];
            };
            readonly fiatAmount: {
                readonly type: "number";
                readonly description: "Rate value";
                readonly examples: readonly ["0.85"];
            };
        };
        readonly required: readonly ["from", "to", "fiatAmount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Available exchange rate."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly from: {
                            readonly type: "string";
                            readonly description: "From currency";
                            readonly examples: readonly ["USD"];
                        };
                        readonly to: {
                            readonly type: "string";
                            readonly description: "To currency";
                            readonly examples: readonly ["EUR"];
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "Rate value";
                            readonly examples: readonly ["0.85"];
                        };
                    };
                    readonly required: readonly ["from", "to", "value"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RateControllerGetRates: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly to: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["from", "to"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Available exchange rate."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly from: {
                            readonly type: "string";
                            readonly description: "From currency";
                            readonly examples: readonly ["USD"];
                        };
                        readonly to: {
                            readonly type: "string";
                            readonly description: "To currency";
                            readonly examples: readonly ["EUR"];
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "Rate value";
                            readonly examples: readonly ["0.85"];
                        };
                    };
                    readonly required: readonly ["from", "to", "value"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RateControllerRates: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Available exchange rate."];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly from: {
                                readonly type: "string";
                                readonly description: "From currency";
                                readonly examples: readonly ["USD"];
                            };
                            readonly to: {
                                readonly type: "string";
                                readonly description: "To currency";
                                readonly examples: readonly ["EUR"];
                            };
                            readonly value: {
                                readonly type: "string";
                                readonly description: "Rate value";
                                readonly examples: readonly ["0.85"];
                            };
                        };
                        readonly required: readonly ["from", "to", "value"];
                    };
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WithdrawControllerGetWithdrawalStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly reference_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["reference_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Withdrawal status retrieved"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "withdrawal id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "amount to withdraw";
                            readonly examples: readonly [10];
                        };
                        readonly walletId: {
                            readonly type: "string";
                            readonly description: "wallet id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly callbackUrl: {
                            readonly type: "string";
                            readonly description: "callback url";
                            readonly examples: readonly ["https://example.com"];
                        };
                        readonly referenceId: {
                            readonly type: "string";
                            readonly description: "reference id";
                            readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly enum: readonly ["PENDING", "SUCCESSFUL", "FAILED", "CANCELLED", "REVERSED", "IN_PROGRESS", "INITIATED", "ERROR_OCCURRED", "DECLINED", "EXPIRED", "REQUIRE_REVIEW", "NOT_INITIATED", "TRANSACTION_INITIATED"];
                            readonly description: "`PENDING` `SUCCESSFUL` `FAILED` `CANCELLED` `REVERSED` `IN_PROGRESS` `INITIATED` `ERROR_OCCURRED` `DECLINED` `EXPIRED` `REQUIRE_REVIEW` `NOT_INITIATED` `TRANSACTION_INITIATED`";
                        };
                        readonly referenceNumber: {
                            readonly type: "number";
                        };
                        readonly created_at: {
                            readonly format: "date-time";
                            readonly type: "string";
                        };
                        readonly transactionCost: {
                            readonly type: "number";
                        };
                        readonly transactionAmount: {
                            readonly type: "number";
                        };
                        readonly customerKey: {
                            readonly type: "string";
                        };
                        readonly integratorFeeAmount: {
                            readonly type: "number";
                        };
                        readonly integratorFee: {
                            readonly type: "number";
                        };
                        readonly integratorCommissionType: {
                            readonly type: "string";
                            readonly enum: readonly ["PERCENTAGE", "FLAT", "NONE"];
                            readonly description: "`PERCENTAGE` `FLAT` `NONE`";
                        };
                    };
                    readonly required: readonly ["id", "amount", "walletId", "status", "referenceNumber", "created_at", "transactionCost", "transactionAmount", "customerKey", "integratorFeeAmount", "integratorFee", "integratorCommissionType"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Reference Id not found"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WithdrawControllerMobileMoney: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly customer_key: {
                readonly type: "string";
                readonly description: "Customer key";
                readonly examples: readonly ["customer-key-123"];
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "amount to withdraw";
                readonly examples: readonly [10];
            };
            readonly walletId: {
                readonly type: "string";
                readonly description: "wallet id";
                readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
            };
            readonly callbackUrl: {
                readonly type: "string";
                readonly description: "callback url";
                readonly examples: readonly ["https://example.com"];
            };
            readonly referenceId: {
                readonly type: "string";
                readonly description: "reference id";
                readonly examples: readonly ["5f9b2c7b9c9d6b0017b4e6b1"];
            };
        };
        readonly required: readonly ["customer_key", "amount", "walletId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Withdrawal has been successfully created."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly referenceId: {
                            readonly type: "string";
                        };
                        readonly referenceNumber: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["id", "message", "referenceId", "referenceNumber"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WithdrawTransactionControllerGetWithdrawTransaction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly referenceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["referenceId"];
        }];
    };
};
declare const WithdrawTransactionControllerMobileMoney: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly bankDetails: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Customer Full Name";
                        readonly examples: readonly ["George Smith"];
                    };
                    readonly address: {
                        readonly type: "string";
                        readonly description: "Customer Address";
                        readonly examples: readonly ["Unit 163 Richmond Street, 25 Allan Road, Oakdene, 4250"];
                    };
                    readonly phoneNumber: {
                        readonly type: "string";
                        readonly description: "Customer Phone Number, Phone number must be in international format";
                        readonly examples: readonly ["712345678"];
                    };
                    readonly bankCode: {
                        readonly type: "number";
                        readonly description: "The code of the bank gotten from the bank list api";
                        readonly examples: readonly ["2500"];
                    };
                    readonly accountNumber: {
                        readonly type: "string";
                        readonly description: "The account number of the bank";
                        readonly examples: readonly ["63122514698"];
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "The country of the bank";
                        readonly examples: readonly ["South Africa"];
                    };
                };
                readonly required: readonly ["name", "address", "phoneNumber", "bankCode", "accountNumber", "country"];
            };
            readonly currency: {
                readonly type: "string";
                readonly enum: readonly ["KES", "GHS", "NGN", "ZAR", "USD", "XOF", "ZMW", "XAF", "CDF", "TZS", "UGX", "EGP", "MWK", "RWF"];
                readonly description: "The currency of the transaction";
                readonly examples: readonly ["ZAR"];
            };
            readonly amount: {
                readonly type: "number";
                readonly description: "The amount of the transaction";
                readonly examples: readonly [100];
            };
            readonly referenceId: {
                readonly type: "string";
                readonly description: "The reference id of the transaction";
                readonly examples: readonly ["1234567890"];
            };
        };
        readonly required: readonly ["bankDetails", "currency", "amount", "referenceId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Withdrawal has been successfully created."];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly referenceId: {
                            readonly type: "string";
                        };
                        readonly referenceNumber: {
                            readonly type: "number";
                        };
                    };
                    readonly required: readonly ["id", "message", "referenceId", "referenceNumber"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Bad Request"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid API Key"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AuthControllerAuthLogin, AuthControllerGenerateApiKey, CryptoWalletControllerCreateCryptoWallet, CryptoWalletControllerGetFiatWallet, CryptoWalletControllerGetUsersCryptoWallets, DepositBankCheckoutControllerGetWithdrawalStatus, DepositBankCheckoutControllerMobileMoney, DepositMobileMoneyControllerGetWithdrawalStatus, DepositMobileMoneyControllerMobileMoney, FiatWalletControllerCreateFiatWallet, FiatWalletControllerGetFiatWallet, FiatWalletControllerGetFiatWalletByCurrency, FiatWalletControllerGetUsersFiatWallet, FiatWalletControllerTransferDepositBalance, FiatWalletControllerUpdateFiatWallet, HealthControllerCheck, IntegratorControllerCreateIntegrator, IntegratorControllerGetIntegrator, KycControllerCreateAddress, KycControllerCreateDocument, KycControllerCreateKyc, KycControllerIntegratorKycUsers, KycControllerVerifyKyc, MobileMoneyCustomerControllerCreateCustomer, MobileMoneyCustomerControllerGetCustomerDetails, MobileMoneyCustomerControllerGetCustomerDetailsByPhone, MobileMoneyCustomerControllerGetUserCustomers, MobileMoneyCustomerControllerUpdateCustomer, OffRampControllerCreateOfframp, OffRampControllerGetOfframpStatus, OfframpMobileMoneyControllerGetWithdrawalStatus, OfframpMobileMoneyControllerOnchain, OfframpMobileMoneyControllerOnchainRequest, OfframpMobileMoneyControllerSupportedChains, OnrampControllerCreateOnrampCrypto, OnrampControllerGetOnramp, OnrampControllerGetOnrampCrypto, OnrampControllerOnramp, OnrampFiatWalletControllerOnchainWalletWithdrawal, OnrampFiatWalletControllerOnchainWalletWithdrawalStatus, OnrampMobileMoneyControllerGetSupportedChains, OnrampMobileMoneyControllerGetWithdrawalStatus, OnrampMobileMoneyControllerOnchain, PaymentProviderControllerProviders, RateControllerGetFiatToFiatRate, RateControllerGetOffRampRates, RateControllerGetOnrampRates, RateControllerGetRates, RateControllerRates, WithdrawControllerGetWithdrawalStatus, WithdrawControllerMobileMoney, WithdrawTransactionControllerGetWithdrawTransaction, WithdrawTransactionControllerMobileMoney };
