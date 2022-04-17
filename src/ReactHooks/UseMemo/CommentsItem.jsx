import React, {memo} from 'react'

function CommentsItem({ getLongestName }) {
  return (
      <p>
         {getLongestName}
      </p>
    
  )
}


export default memo(CommentsItem)