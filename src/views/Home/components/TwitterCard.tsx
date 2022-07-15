import React from 'react'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(10003, 'Announcements')}
        </Heading>
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
