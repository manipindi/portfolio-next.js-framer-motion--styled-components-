import Image from 'next/image'
import React from 'react'
import Icon from 'assets/intro/page-icon.svg'
import styled from 'styled-components'

const StyledDiv = styled.div`
    /* border: 1px solid red;s */
`

export default function Navbar() {
  return (
    <StyledDiv>
        <Image src={Icon} alt='icon-logo'/>
    </StyledDiv>
  )
}
