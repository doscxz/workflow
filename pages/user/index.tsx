import React, { FC } from 'react'

interface indexProps {
  className?: string
}

const index: FC<indexProps> = ({ className }) => {
  return (
    <div className={className}>
      index
    </div>
  )
}

export default index
