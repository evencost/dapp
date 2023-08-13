import { ChangeEvent, useEffect, useState } from 'react'
import { supportedChains } from '@/app/providers'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Toaster } from './ui/toaster'
import { Web3NetworkSwitch } from '@web3modal/react'
import { useNetwork } from 'wagmi'

export const Create = () => {
  const [network, setNetwork] = useState<NetworkType | null>(null)
  const [crypto, setCrypto] = useState<CryptoType | null>(null)
  const [amount, setAmount] = useState<number>()
  const [cycle, setCycle] = useState<CycleType | null>(null)

  return (
    <div
      id='create'
      className='mx-2 my-2 flex w-full flex-col justify-center gap-4 lg:flex-row'
    >
      <Toaster />

      <div
        id='form'
        className='flex flex-col gap-4 rounded-3xl bg-white px-4 lg:max-w-[772px]'
      >
        <p id='title' className='mt-6 whitespace-pre text-2xl'>
          {'  Create your plan'}
        </p>
        <div id='network'>
          <p className='whitespace-pre text-xl'> {'  1.Select network'}</p>
          <NetworkSelector onChange={setNetwork} selected={network} />
        </div>
        <div className='-mx-4 h-[2px] bg-[#F3F3F3]'></div>
        <div id='crypto'>
          <p className='whitespace-pre text-xl'> {'  2.Select crypto'}</p>
          <CryptoSelector onChange={setCrypto} selected={crypto} />
        </div>
        <div className='-mx-4 h-[2px] bg-[#F3F3F3]'></div>

        <div id='amount'>
          <p className='whitespace-pre text-xl'>{'  3. Investement amount'}</p>
          <AmountSelector onChange={setAmount} />
        </div>
        <div className='-mx-4 h-[2px] bg-[#F3F3F3]'></div>

        <div id='cycle' className='mb-4'>
          <p className='whitespace-pre text-xl'>{'  4. Recursive cycle'}</p>
          <CycleSelector onChange={setCycle} selected={cycle} />
        </div>
      </div>
      <div
        id='summary'
        className='flex w-full max-w-[360px] flex-col gap-4 rounded-3xl bg-white px-4'
      >
        <p id='title' className='mt-6 whitespace-pre text-2xl'>
          {'Plan Summary'}
        </p>

        <div className='-mx-4 h-[2px] bg-[#F3F3F3]'></div>

        <div className='flex h-[19px]  items-start justify-start gap-4'>
          <div className='shrink grow basis-0 text-base font-medium tracking-tight text-zinc-400'>
            Chain
          </div>
          <div className='text-base font-medium tracking-tight text-gray-800'>
            {network}
          </div>
        </div>

        <div className='flex h-[19px]  items-start justify-start gap-4'>
          <div className='shrink grow basis-0 text-base font-medium tracking-tight text-zinc-400'>
            Asset
          </div>
          <div className='text-base font-medium tracking-tight text-gray-800'>
            {crypto}
          </div>
        </div>

        <div className='flex h-[19px]  items-start justify-start gap-4'>
          <div className='shrink grow basis-0 text-base font-medium tracking-tight text-zinc-400'>
            Frequency
          </div>
          <div className='text-base font-medium tracking-tight text-gray-800'>
            {cycle && supportedCyclesMap[cycle]}
          </div>
        </div>

        <div className='flex h-[19px]  items-start justify-start gap-4'>
          <div className='shrink grow basis-0 text-base font-medium tracking-tight text-zinc-400'>
            Amount per period
          </div>
          <div className='text-base font-medium tracking-tight text-gray-800'>
            {amount} xDAI
          </div>
        </div>

        <div className='-mx-4 h-[2px] bg-[#F3F3F3]'></div>
        <Confirm
          network={network}
          crypto={crypto}
          amount={amount ?? null}
          cycle={cycle}
        />
      </div>
    </div>
  )
}

const supportedNetworks = supportedChains
  .map((chain) => chain.name)
  .filter((network) => network !== 'Zora')
export type NetworkType = (typeof supportedNetworks)[number]

type NetworkSelectorProps = {
  selected: NetworkType | null
  onChange: (selected: NetworkType | null) => void
}

const NetworkSelector = ({ selected, onChange }: NetworkSelectorProps) => {
  return (
    <div className='flex  items-start justify-start gap-4 pt-4'>
      {supportedNetworks.map((network) => (
        <Network
          key={network}
          type={network}
          onChange={onChange}
          selected={selected === network}
        />
      ))}
    </div>
  )
}

type NetworkProps = {
  type: NetworkType | null
  selected?: boolean
  onChange: (selected: NetworkType | null) => void
}
export const Network = ({ type, selected, onChange }: NetworkProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div
        className={`relative inline-flex h-[60px] items-center  justify-start gap-3 rounded-xl bg-zinc-100 px-4 py-3 ${
          selected && 'border border-blue-600'
        }`}
        onClick={() => onChange(type)}
      >
        <img
          className='h-9 w-9'
          src={`images/${type?.toLowerCase()}.logo.png`}
        />
        {selected && (
          <img
            className='absolute -right-2.5 -top-2.5 '
            src='images/check.svg'
          />
        )}
      </div>
      <p className='text-base font-medium text-slate-900'>{type}</p>
    </div>
  )
}

const supportedCryptos = ['Ethereum', 'Bitcoin'] as const
export type CryptoType = (typeof supportedCryptos)[number]

type CryptoSelectorProps = {
  selected: CryptoType | null
  onChange: (selected: CryptoType) => void
}
const CryptoSelector = ({ selected, onChange }: CryptoSelectorProps) => {
  return (
    <div className='flex flex-col items-start justify-start gap-4 pt-4'>
      {supportedCryptos.map((crypto) => (
        <Crypto
          key={crypto}
          type={crypto}
          onChange={onChange}
          selected={selected === crypto}
        />
      ))}
    </div>
  )
}

type CryptoProps = {
  type: CryptoType
  selected?: boolean
  onChange: (selected: CryptoType) => void
}
const Crypto = ({ type, selected, onChange }: CryptoProps) => {
  return (
    <div
      className={`relative inline-flex h-[60px] items-center  justify-start gap-3 rounded-xl bg-zinc-100 px-4 py-3 ${
        selected && 'border border-blue-600'
      }`}
      onClick={() => onChange(type)}
    >
      <img className='h-9 w-9' src={`images/${type.toLowerCase()}.logo.png`} />
      <p className='text-base font-medium text-slate-900'>{type}</p>
      {selected && (
        <img className='absolute -right-2.5 -top-2.5 ' src='images/check.svg' />
      )}
    </div>
  )
}

type AmountSelectorProps = {
  onChange: (amount: number) => void
}
const AmountSelector = ({ onChange }: AmountSelectorProps) => {
  const [amount, setAmount] = useState<number>()

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    // @TODO add validation
    setAmount(Number(e.target.value))
    onChange(Number(e.target.value))
  }

  // @TODO add user xDAI available balance

  return (
    <div className='flex flex-col'>
      <div className='mb-2 mt-4 text-sm font-medium text-[#B3B3B3] '>
        Amount
      </div>
      <div
        className={cn(
          'flex h-14 max-w-[270px] items-center justify-start rounded-xl bg-[#F3F3F3] pb-3 pl-4 pt-3 shadow-inner',
          `${amount && 'border border-blue-500'}`
        )}
      >
        <input
          type='number'
          value={amount}
          onChange={handleAmountChange}
          className='max-w-[170px] bg-[#F3F3F3] text-lg font-medium'
          placeholder='from 1 xDAI'
        />
        <div className='transform-origin-left h-0 w-6 rotate-90 border border-[#B3B3B3]'></div>
        <div className='font-custom break-words pr-4 text-right text-lg font-medium text-[#131836]'>
          xDAI
        </div>
      </div>
      <div className='mt-2 flex items-start justify-start space-x-1'>
        <div className='font-custom break-words text-sm font-medium text-[#B3B3B3]'>
          Available:
        </div>
        <div className='font-custom break-words text-sm font-medium text-[#131836]'>
          not-implemented
        </div>
      </div>
    </div>
  )
}

const supportedCyclesMap = {
  '1h': '1 hour',
  '2h': '2 hours',
  '4h': '4 hours',
  '8h': '8 hours',
  '12h': '12 hours',
  d: 'Daily',
  w: 'Weekly',
  '2w': 'Bi-weekly',
  m: 'Monthly',
} as const

const supportedCycles = Object.keys(
  supportedCyclesMap
) as (keyof typeof supportedCyclesMap)[]

export type CycleType = (typeof supportedCycles)[number]

type CycleSelectorProps = {
  selected: CycleType | null
  onChange: (selected: CycleType) => void
}
const CycleSelector = ({ selected, onChange }: CycleSelectorProps) => (
  <div className='flex flex-col'>
    <div className='mb-2 mt-4 text-sm font-medium text-[#B3B3B3]'>
      Purchase frequency
    </div>
    <div className='flex flex-wrap gap-2'>
      {supportedCycles.map((cycle) => (
        <Cycle
          key={cycle}
          type={cycle}
          onClick={onChange}
          selected={selected === cycle}
        />
      ))}
    </div>
  </div>
)
type CycleProps = {
  type: CycleType
  selected?: boolean
  onClick: (cycle: CycleType) => void
}

const Cycle = ({ type, selected, onClick }: CycleProps) => (
  <div
    onClick={() => onClick(type)}
    className={`relative flex h-12 items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3 ${
      selected && 'border border-blue-500'
    }`}
  >
    <div className={'text-base font-medium text-gray-800'}>
      {supportedCyclesMap[type]}
    </div>
    {selected && (
      <img className='absolute -right-2 -top-2 ' src='images/check.svg' />
    )}
  </div>
)

type ConfirmProps = {
  network: NetworkType | null
  crypto: CryptoType | null
  amount: number | null
  cycle: CycleType | null
}
const Confirm = ({ network, crypto, amount, cycle }: ConfirmProps) => {
  const router = useRouter()
  const { chain } = useNetwork()
  const [total, setTotal] = useState<number>(0)
  const { toast } = useToast()
  if (
    !network ||
    !crypto ||
    !amount ||
    !cycle ||
    amount.toString().startsWith('0') ||
    amount < 0
  ) {
    return (
      <Button
        onClick={() =>
          toast({ title: 'Please fill up the form', variant: 'destructive' })
        }
      >
        Confirm
      </Button>
    )
  }

  const handleConfirm = () => {
    // step 0: create plan
    // step 0.1: send tx
    // step 1: redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className='w-full'>{'Confirm'} </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Choose total amount to invest</AlertDialogTitle>
          <AmountSelector onChange={setTotal} />
        </AlertDialogHeader>
        <AlertDialogFooter>
          {chain?.name !== network ? (
            <>
              <p>Wrong network please select {network}</p>
              <Web3NetworkSwitch />
            </>
          ) : (
            <AlertDialogAction onClick={handleConfirm}>
              Continue
            </AlertDialogAction>
          )}

          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
