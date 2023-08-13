import { Plan, columns } from '@/app/dashboard/columns'
import { DataTable } from './data-table'

const getData = async (): Promise<Plan[]> => {
  return [
    {
      id: '1',
      user: '0x123',
      status: true,
      network: 'Base',
      crypto: 'Ethereum',
      amount: 100,
      total: 100,
      cycle: '1h',
      avPrice: 199129,
      roi: 25,
      start: '1000',
    },
    {
      id: '1',
      user: '0x123',
      status: true,
      network: 'Optimism',
      crypto: 'Ethereum',
      amount: 100,
      total: 100,
      cycle: '1h',
      avPrice: 199129,
      roi: 25,
      start: '1000',
    },
    {
      id: '1',
      user: '0x123',
      status: true,
      network: 'Mode',
      crypto: 'Ethereum',
      amount: 100,
      total: 100,
      cycle: '1h',
      avPrice: 199129,
      roi: 25,
      start: '1000',
    },
    {
      id: '1',
      user: '0x123',
      status: true,
      network: 'Base',
      crypto: 'Ethereum',
      amount: 100,
      total: 100,
      cycle: '1h',
      avPrice: 199129,
      roi: 25,
      start: '1000',
    },
  ] as Plan[]
}
const Dashboard = async () => {
  const data = await getData()

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Dashboard
