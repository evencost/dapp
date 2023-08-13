import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Chain, configureChains, createConfig, WagmiConfig } from 'wagmi'
import { Web3Modal, useWeb3ModalTheme } from '@web3modal/react'
import { optimism, zora } from 'wagmi/chains'

const base = {
  id: 8453,
  name: 'Base',
  network: 'base',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://mainnet.base.org'] },
    default: { http: ['https://mainnet.base.org'] },
  },
  blockExplorers: {
    default: { name: 'Base Scan', url: 'https://basescan.org' },
  },
} as const satisfies Chain

const mode = {
  id: 919,
  name: 'Mode',
  network: 'mode',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://sepolia.mode.network'] },
    default: { http: ['https://sepolia.mode.network'] },
  },
  blockExplorers: {
    default: {
      name: 'Mode Scan',
      url: 'https://sepolia.explorer.mode.network/',
    },
  },
} as const satisfies Chain

type ProvidersProps = { children: React.ReactNode }
export const supportedChains = [optimism, base, zora, mode]
export const Providers = ({ children }: ProvidersProps) => {
  const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? ''
  const { chains, publicClient } = configureChains(supportedChains, [
    w3mProvider({ projectId }),
  ])
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains)

  const { setTheme } = useWeb3ModalTheme()

  setTheme({
    themeMode: 'dark',
    // themeVariables: {
    //   '--w3m-font-family': 'monospace',
    //   '--w3m-accent-color': '#66ff66',
    //   '--w3m-background-color': '#15803d',
    // },
  })

  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
