type ButtonProps = {
  label: string
  onClick?: () => void
}

export const Button = ({ label, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className='inline-flex  h-14 items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-9 py-2.5  shadow-inner hover:bg-blue-700'
  >
    <p className='text-xl font-semibold leading-normal text-white'>{label}</p>
  </button>
)
