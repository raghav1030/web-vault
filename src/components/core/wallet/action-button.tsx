import React from 'react'

type ActionButtonProps = {
    icon: any,
    label: string
    }
const ActionButton = ({icon, label}: ActionButtonProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <div className='w-10 h-10 rounded-full p-4 bg-zinc-700'>

        {icon}
        </div>

        <p className='text-sm '>{label}</p>
    </div>
  )
}

export default ActionButton