'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { useEffect } from 'react'

export const Landing = () => {
  const router = useRouter()

  const { open } = useWeb3Modal()

  const { address, isConnected, isConnecting, isReconnecting } = useAccount()

  useEffect(() => {
    console.debug({ address, isConnected, isConnecting, isReconnecting })
    if (address && isConnected && !isConnecting && !isReconnecting) {
      router.push('/create')
    }
  }, [address, isConnected, isConnecting, isReconnecting])

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <p className='items- text-center text-5xl text-[#131635]'>
        Autoinvest decentralized way
      </p>
      <Button label={'Create plan'} onClick={() => open()} />
    </div>
  )
}
