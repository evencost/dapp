'use client'

import { Create } from '@/components/Create'
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'

const CreatePagex = () => {
  const router = useRouter()
  const { isDisconnected } = useAccount()

  if (isDisconnected) router.push('/')

  return <Create />
}

export default CreatePagex
