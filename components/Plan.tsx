export const Plan = () => (
  <div className='inline-flex h-[774px] w-[1440px] items-center justify-center bg-zinc-100 px-36 pb-[82px] pt-[59px]'>
    <div className='inline-flex items-start justify-start gap-5 self-stretch'>
      <div className='inline-flex w-[772px] flex-col items-start justify-center gap-3 rounded-3xl bg-white'>
        <div className='flex flex-col items-start justify-start gap-12 rounded-3xl bg-white px-6 pt-6'>
          <div className='text-2xl font-semibold text-gray-800'>
            Create your plan{' '}
          </div>
        </div>
        <div className='h-[0px] self-stretch border border-zinc-100'></div>
        <div className='flex h-[135px] flex-col items-start justify-start gap-9 self-stretch rounded-3xl bg-white px-6 py-[18px]'>
          <div className='flex h-[99px] flex-col items-start justify-start gap-4 self-stretch'>
            <div className='text-base font-semibold text-gray-800'>
              Select crypto
            </div>
            <div className='inline-flex items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
              <div className='flex h-10 w-10 items-center justify-center'>
                <img
                  className='h-10 w-10'
                  src='https://via.placeholder.com/40x40'
                />
              </div>
              <div className='text-lg font-medium text-slate-900'>Ethereum</div>
            </div>
          </div>
        </div>
        <div className='h-[0px] self-stretch border border-zinc-100'></div>
        <div className='flex h-[175px] flex-col items-start justify-start gap-12 self-stretch rounded-3xl bg-white px-6 py-[18px]'>
          <div className='flex h-[139px] flex-col items-start justify-start gap-4 self-stretch'>
            <div className='text-base font-semibold text-gray-800'>
              Investment amount
            </div>
            <div className='flex h-[104px] flex-col items-start justify-start gap-2 self-stretch'>
              <div className='w-[292px] text-sm font-medium text-zinc-400'>
                Amount
              </div>
              <div className='inline-flex h-14 items-center justify-start gap-4 self-stretch rounded-xl bg-zinc-100 px-4 py-3'>
                <div className='shrink grow basis-0 text-lg font-medium text-zinc-400'>
                  from 1 USDT
                </div>
                <div className='h-[0px] w-6 origin-top-left rotate-90 border border-zinc-400'></div>
                <div className='text-right text-lg font-medium text-slate-900'>
                  USDT
                </div>
              </div>
              <div className='inline-flex items-start justify-start gap-1'>
                <div className='text-sm font-medium text-zinc-400'>
                  Available:
                </div>
                <div className='text-sm font-medium text-slate-900'>
                  120 USDT
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[0px] self-stretch border border-zinc-100'></div>
        <div className='flex h-[199px] flex-col items-start justify-start gap-12 self-stretch rounded-3xl bg-white px-6 py-[18px]'>
          <div className='flex h-[163px] flex-col items-start justify-start gap-4 self-stretch'>
            <div className='text-base font-semibold text-gray-800'>
              Recurring cycle
            </div>
            <div className='flex h-32 flex-col items-start justify-start gap-2 self-stretch'>
              <div className='w-[292px] text-sm font-medium text-zinc-400'>
                Purchase frequency
              </div>
              <div className='inline-flex items-start justify-start gap-2 self-stretch'>
                <div className='flex w-[82px] items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
                  <div className='text-lg font-medium text-gray-800'>
                    1 hour
                  </div>
                </div>
                <div className='flex w-[91px] items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
                  <div className='text-lg font-medium text-gray-800'>
                    Weekly
                  </div>
                </div>
                <div className='flex w-[91px] items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
                  <div className='text-lg font-medium text-gray-800'>
                    2 hours
                  </div>
                </div>
                <div className='flex w-[98px] items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
                  <div className='text-lg font-medium text-gray-800'>
                    Monthly
                  </div>
                </div>
                <div className='flex w-[91px] items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
                  <div className='text-lg font-medium text-gray-800'>
                    4 hours
                  </div>
                </div>
                <div className='flex w-[91px] items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
                  <div className='text-lg font-medium text-gray-800'>
                    8 hours
                  </div>
                </div>
                <div className='flex w-[102px] items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
                  <div className='text-lg font-medium text-gray-800'>
                    12 hours
                  </div>
                </div>
                <div className='flex w-[71px] items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
                  <div className='text-lg font-medium text-gray-800'>Daily</div>
                </div>
                <div className='flex w-28 items-center justify-center gap-4 rounded-xl bg-zinc-100 px-4 py-3'>
                  <div className='text-lg font-medium text-gray-800'>
                    Bi-weekly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='inline-flex w-[360px] flex-col items-start justify-center gap-4 rounded-3xl bg-white'>
        <div className='flex flex-col items-start justify-start gap-12 rounded-3xl bg-white px-6 pt-6'>
          <div className='text-2xl font-semibold text-gray-800'>
            Plan Summary
          </div>
        </div>
        <div className='h-[0px] self-stretch border border-zinc-100'></div>
        <div className='flex h-[143px] flex-col items-start justify-start gap-12 self-stretch rounded-3xl bg-white px-6'>
          <div className='flex h-[143px] flex-col items-start justify-start gap-3 self-stretch'>
            <div className='inline-flex items-start justify-start gap-4 self-stretch'>
              <div className='shrink grow basis-0 text-base font-medium tracking-tight text-zinc-400'>
                Chain
              </div>
              <div className='text-base font-medium tracking-tight text-gray-800'>
                Polygon
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-4 self-stretch'>
              <div className='shrink grow basis-0 text-base font-medium tracking-tight text-zinc-400'>
                Asset
              </div>
              <div className='text-base font-medium tracking-tight text-gray-800'>
                ETH
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-4 self-stretch'>
              <div className='shrink grow basis-0 text-base font-medium tracking-tight text-zinc-400'>
                Frequency
              </div>
              <div className='text-base font-medium tracking-tight text-gray-800'>
                4 hours
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-4 self-stretch'>
              <div className='shrink grow basis-0 text-base font-medium tracking-tight text-zinc-400'>
                Amount per period
              </div>
              <div className='text-base font-medium tracking-tight text-gray-800'>
                1 USDT
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-4 self-stretch'>
              <div className='shrink grow basis-0 text-base font-medium tracking-tight text-zinc-400'>
                Service fee (1%)
              </div>
              <div className='text-base font-medium tracking-tight text-gray-800'>
                0.01 USDT
              </div>
            </div>
          </div>
        </div>
        <div className='h-[0px] self-stretch border border-zinc-100'></div>
        <div className='flex h-[72px] flex-col items-center justify-center gap-2.5 self-stretch px-4 pb-4'>
          <div className='inline-flex h-14 items-center justify-center gap-2.5 self-stretch rounded-xl bg-blue-600 px-9 py-2.5 shadow shadow-inner'>
            <div className='text-xl font-semibold leading-normal text-white'>
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
