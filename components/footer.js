import { Box, Icon, Stack, Link } from '@chakra-ui/core'
import { IoLogoTwitter } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { DiGithubBadge } from 'react-icons/di'

const FooterLink = ({ icon, href }) => (
  <Link display="inline-block" href={href} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
)

const links = [
  {
    icon: IoLogoTwitter,
    url: 'https://twitter.com/miraklasiaf'
  },
  {
    icon: DiGithubBadge,
    url: 'https://github.com/miraklasiaf'
  },
  {
    icon: MdEmail,
    url: 'mailto:faisalkarim96@gmail.com'
  }
]

export const Footer = () => (
  <Box as="footer" mt={12} textAlign="center">
    <Stack mt={4} direction="row" spacing={3} justify="center">
      {links.map((link) => (
        <FooterLink key={link.url} href={link.url} icon={link.icon} />
      ))}
    </Stack>
  </Box>
)

export default Footer
