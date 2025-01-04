
import React, {useContext, useEffect} from 'react'
import { defineChain } from "thirdweb";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { thirdwebClient } from '../client';
import { TransactionContext } from "@/context/TransactionContext";

const ConnectWallet = () => {
    const userAddress = useActiveAccount();
    const { setCurrentAccount } = useContext(TransactionContext);

    useEffect(() => {
        if (userAddress) {
            setCurrentAccount(userAddress.address);
        }
    }
    , [userAddress]);

  
  const customTheme = lightTheme({
    colors: {
      primaryButtonBg: '#0ba0fc'
    }
   })

  return (
    <ConnectButton
        supportedTokens={{
          [1135]: [
            {
              address: "0xE29E8434FF23c4ab128AEA088eE4f434129F1Bf1",
              name: "Universel Zar",
              symbol: "uZAR",
              icon: "...",
            },
          ],
        }}
        client={thirdwebClient}
        accountAbstraction={{
          chain: defineChain(4202),
          sponsorGas: true,
        }}
        connectModal={{
          size: "wide",
          showThirdwebBranding: false,
        }}
      />
  )
}
export default ConnectWallet