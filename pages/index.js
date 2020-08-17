import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Button,
  Grid,
  Divider,
  Flex,
  Wrap,
  Icon,
  Stack,
  chakra,
  Center
} from '@chakra-ui/core'

import theme from 'prism-react-renderer/themes/nightOwl'
import * as Chakra from '@chakra-ui/core'
import Container from '@/components/container'
import { Footer } from '@/components/footer'
import SEO from '@/components/seo'

import { AiFillThunderbolt } from 'react-icons/ai'
import { FaArrowRight, FaDiscord } from 'react-icons/fa'
import { IoMdMoon } from 'react-icons/io'
import { DiGithubBadge } from 'react-icons/di'
import { MdAccessibility, MdPalette, MdGrain } from 'react-icons/md'
import * as ReactMdIcons from 'react-icons/md'

import { chunk } from '@chakra-ui/utils'
import Header from '@/components/header'

const Feature = ({ title, icon, children, ...props }) => {
  return (
    <Box bg="white" rounded="12px" shadow="base" p="40px" {...props}>
      <Flex rounded="full" w="12" h="12" bg="teal.500" align="center" justify="center">
        <Icon fontSize="24px" color="white" as={icon} />
      </Flex>
      <Heading as="h5" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
        {title}
      </Heading>
      <Text fontSize="lg" opacity={0.7}>
        {children}
      </Text>
    </Box>
  )
}

const HomePage = () => {
  return (
    <>
      <SEO
        title="Chakra UI - A simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
        description="Simple, Modular and Accessible UI Components for your React Applications. Built with Styled System"
      />
      <Header />
      <Box mb={20}>
        <Box as="section" pt={40} pb={24}>
          <Container>
            <Box maxW="760px" mx="auto" textAlign="center">
              <chakra.h1
                fontSize={{ base: '2.25rem', md: '3rem', lg: '3.75rem' }}
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                Learn grammar
                <Box as="span" color="teal.500">
                  {' '}
                  with speed
                </Box>
              </chakra.h1>

              <Text opacity={0.7} fontSize={{ base: 'lg', lg: 'xl' }} mt="6">
                Grammarkup is a my personal blog to learn grammar
              </Text>

              <Stack
                mt="10"
                spacing="4"
                justify="center"
                direction={{ base: 'column', sm: 'row' }}
              >
                <NextLink href="/grammar/getting-started" passHref>
                  <Button
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    as="a"
                    size="lg"
                    colorScheme="teal"
                    rightIcon={<FaArrowRight fontSize="0.8em" />}
                  >
                    Get Started
                  </Button>
                </NextLink>
                <Button
                  as="a"
                  size="lg"
                  h="4rem"
                  px="40px"
                  fontSize="1.2rem"
                  href="https://github.com/miraklasiaf/grammarkup/"
                  target="__blank"
                  leftIcon={<DiGithubBadge size="1.5em" />}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Divider mt={16} />

        <Box as="section" bg="gray.50">
          <Container py="120px" maxW="1280px">
            <Box maxW="760px" mx="auto" textAlign="center" mb="56px">
              <chakra.h1
                fontWeight="bold"
                letterSpacing="tight"
                lineHeight="1.24"
                fontSize="2.75rem"
                mb="5"
              >
                An experience you'd expect from a design system.
              </chakra.h1>
              <chakra.p opacity={0.7} fontSize="lg">
                Opinionated and designed for daily use.
              </chakra.p>
            </Box>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
              gap={10}
              px={{ md: 12 }}
            >
              <Feature icon={MdAccessibility} title="Accessible">
                Chakra UI strictly follows WAI-ARIA standards for all components.
              </Feature>
              <Feature icon={MdPalette} title="Themeable">
                Customize any part of our components to match your design needs.
              </Feature>
              <Feature icon={MdGrain} title="Composable">
                Designed with composition in mind. Compose new components with ease.
              </Feature>
              <Feature icon={IoMdMoon} title="Light and Dark UI">
                Optimized for multiple color modes. Use light or dark, your choice.
              </Feature>
              <Feature icon={AiFillThunderbolt} title="Developer Experience">
                Guaranteed to boost your productivity when building your app or website.
              </Feature>
              <Feature icon={FaDiscord} title="Active Community">
                We're a team of active maintainer ready to help you whenver you need.
              </Feature>
            </Grid>
          </Container>
        </Box>

        <Divider />

        <Box bg="gray.50">
          <Container py="120px" maxW="800px" mx="auto" textAlign="center">
            <Flex direction="column" align="center">
              <Center rounded="full" w="100px" h="100px" bg="teal.400">
                Grammarkup
              </Center>
              <chakra.h1
                textAlign="center"
                fontWeight="bold"
                letterSpacing="tight"
                lineHeight="1.24"
                fontSize="2.75rem"
                mt="6"
                mb="6"
              >
                Get started with Chakra today.
              </chakra.h1>
              <Text mb="40px" fontSize="lg" opacity={0.7}>
                Chakra keeps everyone aligned and working without friction. Engineers and
                designers using the same language.
              </Text>
              <Button
                as="a"
                h="4rem"
                px="40px"
                fontSize="1.2rem"
                size="lg"
                colorScheme="teal"
                rightIcon={<FaArrowRight fontSize="0.8em" />}
              >
                Get Started
              </Button>
            </Flex>
          </Container>
        </Box>

        <Divider />

        <Footer />
      </Box>
    </>
  )
}

export default HomePage
