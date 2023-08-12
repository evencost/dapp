export const Create = () => {
  return (
    <div id='form' className='flex flex-col gap-4 rounded-3xl bg-white p-4'>
      <div id='title' className='text-2xl'>
        Create your plan
      </div>
      <div id='divider' className='-mx-4 h-[2px] bg-[#F3F3F3]'></div>

      <div id='crypto'>
        <p className='text-xl'>1. Select crypto</p>
        <CryptoSelector />
      </div>
      <div id='amount'>
        <p className='text-xl'>2. Investement amount</p>
        {/* <AmountSelector/> */}
      </div>
      <div id='cycle`'>
        <p className='text-xl'>3. Recursive cycle</p>
        {/* <CycleSelector/> */}{' '}
      </div>
    </div>
  )
}

const supportedCryptos = ['Ethereum', 'Bitcoin'] as const
type cryptoType = (typeof supportedCryptos)[number]

const CryptoSelector = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-4 pt-4'>
      {supportedCryptos.map((crypto) => (
        <Crypto key={crypto} type={crypto} />
      ))}
    </div>
  )
}

// component to render crypto element
type CryptoProps = {
  selected?: boolean
  type: cryptoType
}
const Crypto = ({ selected, type }: CryptoProps) => {
  return (
    <div
      className={`relative inline-flex h-[60px] w-[149px] items-center justify-center gap-3 rounded-xl bg-zinc-100 px-4 py-3 ${
        selected && 'border border-blue-600'
      }`}
    >
      <img className='h-9 w-9' src={`images/${type.toLowerCase()}.logo.png`} />
      <p className='text-base font-medium text-slate-900'>{type}</p>
      {selected && (
        <img className='absolute -right-2.5 -top-2.5 ' src='images/check.svg' />
      )}
    </div>
  )
}
