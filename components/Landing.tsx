'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

export const Landing = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <p className='items- text-center text-5xl text-[#131635]'>
        Autoinvest decentralized way
      </p>
      <Button label={'Create plan'} onClick={() => router.push('/create')} />
      <Button
        label={'To the dashboard'}
        onClick={() => router.push('/dashboard')}
        className='bg-[#3E406F]'
      />
    </div>
  )
}
