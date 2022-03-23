import { IWalletConnectConnectorOptions, getChainId } from "../../helpers";

const ConnectToWalletConnect = (
  WalletConnectProvider: any,
  opts: IWalletConnectConnectorOptions
) => {
  return new Promise(async (resolve, reject) => {
    const bridge = opts.bridge || "https://bridge.walletconnect.org";
    const qrcode = opts.qrcode || true;
    const infuraId = opts.infuraId || "";
    const rpc = opts.rpc || undefined;
    // const chainId =
    //   opts.network && getChainId(opts.network) ? getChainId(opts.network) : 1;
    const chainId = 4;
    const qrcodeModalOptions = opts.qrcodeModalOptions || undefined;

    const provider = new WalletConnectProvider({
      bridge,
      qrcode,
      infuraId,
      rpc,
      chainId,
      qrcodeModalOptions,
    });
    try {
      await provider.enable();
      resolve(provider);
    } catch (e) {
      reject(e);
    }
  });
};

export default ConnectToWalletConnect;
