import { providers } from "ethers";
import {
  Connector,
  ICoreOptions,
  IProviderInfo,
  IWalletConnectConnectorOptions,
} from "modal/helpers";
import { connectors } from "modal/providers";
import {
  providerOptions,
  ACCOUNT_CHANGED_EVENT,
  CHAIN_CHANGED_EVENT,
} from "modal/constants";

export class Core {
  private providerId;
  private providerName;
  private providerType;
  private providerCheck;

  constructor(opts: ICoreOptions) {
    const { id, name, type, check } = opts;
    this.providerId = id;
    this.providerName = name;
    this.providerType = type;
    this.providerCheck = check;
  }

  public connect: Connector = async ({ handleAccountChange }) => {
    try {
      const ethProvider = await this.getEthProvider();
      const provider = new providers.Web3Provider(ethProvider);
      this.subscribeToProivder(ethProvider, handleAccountChange);
      return { ethProvider, provider };
    } catch (error) {
      throw new Error("Failed at connect(): " + error);
    }
  };

  public getEthProvider = async () => {
    const connector = connectors[this.providerId];
    let opts: Partial<IProviderInfo> | Partial<IWalletConnectConnectorOptions>;
    try {
      if (this.providerId === "injected") {
        opts = {
          name: this.providerName,
          check: this.providerCheck,
        };
        return await connector(opts);
      } else {
        const providerOpts = providerOptions[this.providerId];
        const { ConnectorInstance, opts } = providerOpts;
        return await connector(ConnectorInstance, opts);
      }
    } catch (error) {
      throw new Error("Failed at getEthProvider(): " + error);
    }
  };

  public subscribeToProivder = (provider: any, handler: any) => {
    provider.on(ACCOUNT_CHANGED_EVENT, () => {
      this.eventHandler(ACCOUNT_CHANGED_EVENT, handler);
    });
    provider.on(CHAIN_CHANGED_EVENT, () => {
      this.eventHandler(CHAIN_CHANGED_EVENT, handler);
    });

    return () => {
      provider.removeListener(ACCOUNT_CHANGED_EVENT, this.eventHandler);
      provider.removeListener(CHAIN_CHANGED_EVENT, this.eventHandler);
    };
  };

  public unSubscribeToProvider = (provider: any) => {
    provider.removeListener(ACCOUNT_CHANGED_EVENT, this.eventHandler);
    provider.removeListener(CHAIN_CHANGED_EVENT, this.eventHandler);
  };

  private eventHandler(event: string, handler: any) {
    handler();
  }
}

export default Core;
