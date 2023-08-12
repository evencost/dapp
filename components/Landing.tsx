'use client'
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'

import { Button } from '@/components/Button'
import { useWeb3Modal } from '@web3modal/react'

export const Landing = () => {
  const router = useRouter()
  const { isConnected } = useAccount()

  if (isConnected) router.push('/dashboard')

  const { open } = useWeb3Modal()

  return (
    <div className='flex flex-col items-center gap-6'>
      <p className='items- text-center text-5xl text-[#131635]'>
        Autoinvest decentralized way
      </p>
      <Button label={'Launch'} onClick={open} />
    </div>
  )
}
