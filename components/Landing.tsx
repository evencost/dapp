'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'

export const Landing = () => {
  const router = useRouter()

  const { open } = useWeb3Modal()

  const { isConnected } = useAccount()

  if (isConnected) router.push('/create')

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <p className='items- text-center text-5xl text-[#131635]'>
        Autoinvest decentralized way
      </p>
      <Button label={'Create plan'} onClick={() => open()} />
      {/* <Button
        label={'To the dashboard'}
        onClick={() => router.push('/dashboard')}
        className='bg-[#3E406F]'
      /> */}
    </div>
  )
}
