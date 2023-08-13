import { cn } from '@/lib/utils'

type ButtonProps = {
  label: string
  onClick?: () => void
  className?: string
}

export const Button = ({ label, className, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      'flex  h-14 items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-9 py-2.5  shadow-inner hover:bg-blue-700',
      className
    )}
  >
    <p className='text-xl font-semibold leading-normal text-white'>{label}</p>
  </button>
)
