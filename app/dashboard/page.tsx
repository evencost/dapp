'use client'

import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'

const Dashboard = () => {
  const router = useRouter()
  const { isConnected } = useAccount()
  if (!isConnected) router.push('/')

  return <></>
}
export default Dashboard
