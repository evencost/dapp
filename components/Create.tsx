import { SetStateAction, useState } from 'react'

export const Create = () => {
  const [crypto, setCrypto] = useState<CryptoType>('Ethereum')

  const [amount, setAmount] = useState<number>(0)

  const [cycle, setCycle] = useState<CycleType>('1h')
  return (
    <div id='create' className='mx-2 flex w-full flex-col gap-4'>
      <div
        id='form'
        className='mt-4 flex flex-col gap-4 rounded-3xl bg-white px-4'
      >
        <p id='title' className='mt-6 whitespace-pre text-2xl'>
          {'  Create your plan'}
        </p>
        <div className='-mx-4 h-[2px] bg-[#F3F3F3]'></div>
        <div id='crypto'>
          <p className='whitespace-pre text-xl'> {'  1.Select crypto'}</p>
          <CryptoSelector onChange={setCrypto} selected={crypto} />
        </div>
        <div className='-mx-4 h-[2px] bg-[#F3F3F3]'></div>

        <div id='amount'>
          <p className='whitespace-pre text-xl'>{'  2. Investement amount'}</p>
          <AmountSelector onChange={setAmount} />
        </div>
        <div className='-mx-4 h-[2px] bg-[#F3F3F3]'></div>

        <div id='cycle'>
          <p className='whitespace-pre text-xl'>{'  3. Recursive cycle'}</p>
          <CycleSelector onChange={setCycle} selected={cycle} />
        </div>
      </div>
      {/* <div
        id='summary'
        className='mx-2 mt-4 flex w-full flex-col gap-4 rounded-3xl bg-white px-4'
      >
        <p id='title' className='mt-6 whitespace-pre text-2xl'>
          {'  Plan Summary'}
        </p>
      </div> */}
    </div>
  )
}

const supportedCryptos = ['Ethereum', 'Bitcoin'] as const
type CryptoType = (typeof supportedCryptos)[number]

type CryptoSelectorProps = {
  selected: CryptoType
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
  const [amount, setAmount] = useState<number>(0)

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div className='flex flex-col'>
      <div className='mb-2 mt-4 text-sm font-medium text-[#B3B3B3] '>
        Amount
      </div>
      <div className='flex h-14 max-w-[270px] items-center justify-start rounded-xl bg-[#F3F3F3] pb-3 pl-4 pt-3 shadow-inner'>
        <input
          type='number'
          value={amount}
          onChange={handleAmountChange}
          className='max-w-[170px] bg-[#F3F3F3] text-lg font-medium '
          placeholder='from 1 USDT'
        />
        <div className='transform-origin-left h-0 w-6 rotate-90 border border-[#B3B3B3]'></div>
        <div className='font-custom break-words pr-4 text-right text-lg font-medium text-[#131836]'>
          USDT
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

type CycleType = (typeof supportedCycles)[number]

type CycleSelectorProps = {
  selected: CycleType
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
