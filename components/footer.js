import { Box, Icon, Text, Stack, Link, chakra } from '@chakra-ui/core'
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

const IndonesiaFlag = (props) => (
  <chakra.svg
    display="inline-block"
    borderWidth="1px"
    mx={3}
    h={4}
    w="auto"
    viewBox="0 0 3 2"
    {...props}
  >
    <rect fill="#FFF" width="3" height="2" />
    <rect fill="#CE1126" width="3" height="1" />
  </chakra.svg>
)

export const Footer = () => (
  <Box as="footer" mt={12} textAlign="center">
    <Text fontSize="sm">
      <span>
        Proudly made in
        <IndonesiaFlag />
      </span>
      <span>Faisal Karim</span>
    </Text>
    <Stack mt={4} direction="row" spacing={3} justify="center">
      {links.map((link) => (
        <FooterLink key={link.url} href={link.url} icon={link.icon} />
      ))}
    </Stack>
  </Box>
)

export default Footer
