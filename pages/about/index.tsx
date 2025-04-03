import React, { FC } from 'react'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

interface indexProps {
  className?: string
}
const index: FC<indexProps> = ({ className }) => {
  return (
    <div className={className}>
      <TipsAndUpdatesIcon />
    </div>
  )
}

export default index