import { experiences } from '~/utils/experiences'

export const useSiteContent = () => {
  const navLinks = [
    { label: 'Packages', to: '/packages' },
    { label: 'Locations', to: '/locations' },
    { label: 'Keychain Station', to: '/keychain-station' },
    { label: 'About Us', to: '/about-us' }
  ]

  const packages = experiences

  const budgetOptions = ['$500 - $700', '$700 - $900', '$900 - $1100', '$1100 - $3000+']

  return {
    navLinks,
    packages,
    budgetOptions
  }
}
