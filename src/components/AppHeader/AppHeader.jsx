import React from 'react'
import { Wrapper } from './AppHeader.styles'
import { useSelector } from 'react-redux'

function AppHeader() {
  const result = useSelector((state) => {
    return state.calculator
  })



  return <Wrapper>
    
    <span>
      Shopping
    </span>
    <span>
      {result}  
    </span>
  </Wrapper>
}

export default AppHeader
