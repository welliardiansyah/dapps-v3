import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange (Under Construction)',
        href: '#',
      },
      {
        label: 'Liquidity (Under Construction)',
        href: '#',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/dens',
  // },
  // {
  //   label: 'Bridge',
  //   icon: 'NftIcon',
  //   href: "#",
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'GitHub',
        href: '#',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0b4D95fd2F9b6B1d2d3F0d65990597EE483264B1',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/neobit/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/neobit',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x0b4D95fd2F9b6B1d2d3F0d65990597EE483264B1',
      },
    ],
  },
  {
    label: 'Whitepaper',
    icon: 'TicketIcon',
    href: '#',
  },
  {
    label: 'Roadmap',
    icon: 'MoreIcon',
    href: '#',
  },
]

export default config
