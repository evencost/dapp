import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { Web3Modal, useWeb3ModalTheme } from '@web3modal/react'
import { baseGoerli, optimism, zora } from 'wagmi/chains'

type ProvidersProps = { children: React.ReactNode }

export const Providers = ({ children }: ProvidersProps) => {
  const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? ''
  const { chains, publicClient } = configureChains(
    [optimism, baseGoerli, zora],
    [w3mProvider({ projectId })]
  )
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
