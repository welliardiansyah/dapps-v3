import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'NeoBit Protocol',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by NeoBit), NFTs, and more, on a platform you can trust.',
  image: '../../../public/logo.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | NeoBit',
  },
  '/competition': {
    title: 'Trading Battle | NeoBit',
  },
  '/prediction': {
    title: 'Prediction | NeoBit',
  },
  '/farms': {
    title: 'Farms | NeoBit',
  },
  '/pools': {
    title: 'Pools | NeoBit',
  },
  '/lottery': {
    title: 'Lottery | NeoBit',
  },
  '/collectibles': {
    title: 'Collectibles | NeoBit',
  },
  '/ido': {
    title: 'Initial DEX Offering | NeoBit',
  },
  '/teams': {
    title: 'Leaderboard | NeoBit',
  },
  '/profile/tasks': {
    title: 'Task Center | NeoBit',
  },
  '/profile': {
    title: 'Your Profile | NeoBit',
  },
}
