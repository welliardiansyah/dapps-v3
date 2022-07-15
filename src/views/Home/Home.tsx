import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import TwitterCard from 'views/Home/components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/cub/neobit_banner.jpg');
  border-radius: 25px;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/cub/neobit_banner.jpg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  return (
    <Page>
      <Hero>
        {/* <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'NeoBit Protocol')}
        </Heading>
        <Text>{TranslateString(578, 'NeoBit Protocol on Binance Smart Chain.')}</Text> */}
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          {/* <LotteryCard /> */}
        </Cards>
        {/* <CTACards>
          <EarnAPRCard />
          <BridgeCard />
          <KingdomCard />
        </CTACards> */}
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
