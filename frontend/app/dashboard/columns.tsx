'use client'

import {
  CryptoType,
  CycleType,
  NetworkType,
  supportedCyclesMap,
} from '@/components/Create'
import { ColumnDef } from '@tanstack/react-table'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
export type Plan = {
  id: string
  user: string

  status: boolean // on/off
  network: NetworkType
  crypto: CryptoType
  amount: number
  total: number
  cycle: CycleType

  avPrice: number
  roi: number

  start: string // unix timestamp
}

type NetworkProps = {
  type: NetworkType | null
  selected?: boolean
}
export const Network = ({ type, selected }: NetworkProps) => (
  <div className='flex items-center justify-start gap-4'>
    <div
      className={`relative inline-flex h-[60px] items-center  justify-start gap-3 rounded-xl bg-zinc-100 px-4 py-3 ${
        selected && 'border border-blue-600'
      }`}
    >
      <img className='h-9 w-9' src={`images/${type?.toLowerCase()}.logo.png`} />
      {selected && (
        <img className='absolute -right-2.5 -top-2.5 ' src='images/check.svg' />
      )}
    </div>
    <p className='text-base font-medium text-slate-900'>{type}</p>
  </div>
)

const Crypto = ({ type }: { type: CryptoType }) => {
  return (
    <div
      className={`x relative inline-flex h-[60px]  items-center justify-start gap-3 rounded-xl bg-zinc-100 px-4 py-3`}
    >
      <img className='h-9 w-9' src={`images/${type.toLowerCase()}.logo.png`} />
      <p className='text-base font-medium text-slate-900'>{type}</p>
    </div>
  )
}

export const columns: ColumnDef<Plan>[] = [
  {
    accessorKey: 'status',
    header: 'Off/On',
    cell: ({ row }) => (
      <div className='flex items-center space-x-2'>
        <Switch checked={true} />
      </div>
    ),
  },
  {
    accessorKey: 'network',
    header: 'Network',
    cell: ({ row }) => {
      const network = row.getValue('network') as NetworkType
      return <Network type={network} />
    },
  },
  {
    accessorKey: 'crypto',
    header: 'Crypto',
    cell: ({ row }) => {
      const crypto = row.getValue('crypto') as CryptoType
      return <Crypto type={crypto} />
    },
  },
  {
    accessorKey: 'cycle',
    header: 'Frequency',
    cell: ({ row }) => {
      const cycle = row.getValue('cycle') as CycleType
      const label = supportedCyclesMap[cycle]
      return <p>{label}</p>
    },
  },
  {
    accessorKey: 'amount',
    header: 'Amount per period',
    cell: ({ row }) => {
      const amount = row.getValue('amount') as number
      return <p>{amount} xDAI</p>
    },
  },
  {
    accessorKey: 'total',
    header: 'Total invested',
    cell: ({ row }) => {
      const amount = row.getValue('total') as number
      return <p>{amount} xDAI</p>
    },
  },
  {
    accessorKey: 'avPrice',
    header: 'Average Price',
  },
  {
    accessorKey: 'roi',
    header: 'ROI',
  },
  {
    accessorKey: 'start',
    header: 'Start date',
  },
]
