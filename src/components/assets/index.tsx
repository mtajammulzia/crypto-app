import { FC, useEffect, useState } from "react";
import { getAccountAssets } from "modal/ethapi";
import { IAssetData } from "modal/helpers";
import { ShouldRender, useProfile, useWeb3 } from "hooks";
import * as Styled from "./styles";
import { Loader } from "components";

export const UserAssets: FC = () => {
  const { userState } = useProfile();
  const { isLoggedIn, address } = userState;
  const { web3 } = useWeb3();
  const { ethProvider } = web3;
  const [userAssets, setUserAssets] = useState<Array<IAssetData>>([]);
  const [loading, setLoading] = useState(false);

  const getChainId = async () => {
    if (ethProvider) {
      const chainId = await ethProvider.request({ method: "eth_chainId" });
      return Number(chainId);
    }
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      const chainId = await getChainId();
      if (address && chainId) {
        const assets: Array<IAssetData> = await getAccountAssets(
          address,
          chainId
        );
        setUserAssets(assets);
      }
      setLoading(false);
    })();
  }, [ethProvider, isLoggedIn]);

  return (
    <Styled.AssetsWrapper>
      <Styled.AssetsHeading>User Assets</Styled.AssetsHeading>
      <ShouldRender condition={loading}>
        <Loader />
      </ShouldRender>
      <ShouldRender condition={userAssets.length > 0}>
        <Styled.AllAssets>
          {userAssets.map((asset, index) => {
            const { symbol, name, decimals, contractAddress, balance } = asset;
            return (
              <UserAsset
                key={index}
                symbol={symbol}
                name={name}
                decimals={decimals}
                contractAddress={contractAddress}
                balance={balance}
              />
            );
          })}
        </Styled.AllAssets>
      </ShouldRender>
    </Styled.AssetsWrapper>
  );
};

const UserAsset: FC<IAssetData> = (props) => {
  const { symbol, name, decimals, contractAddress, balance } = props;
  return (
    <Styled.AssetWrapper>
      {name}: {balance}
    </Styled.AssetWrapper>
  );
};
