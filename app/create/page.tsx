'use client'

import { Create } from '@/components/Create'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'

const CreatePagex = () => {
  const router = useRouter()
  const { isDisconnected } = useAccount()

  useEffect(() => {
    isDisconnected && router.push('/')
  }, [isDisconnected, router])
  return <Create />
}

export default CreatePagex
