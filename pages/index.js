import NextLink from 'next/link'
import { Box, Heading, Text, Button, Divider, Stack } from '@chakra-ui/core'
import Container from '@/components/container'
import Header from '@/components/header'
import { Footer } from '@/components/footer'
import SEO from '@/components/seo'

import { FaArrowRight } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'

const HomePage = () => {
  return (
    <>
      <SEO title="Grammarkup - A Web for learning grammar" />
      <Header />
      <Box mb={4}>
        <Box as="section" pt={40} pb={20}>
          <Container>
            <Box maxW="760px" mx="auto" textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: '2.25rem', md: '3rem', lg: '3.75rem' }}
                letterSpacing="tight"
                fontWeight="bold"
                mb={4}
                lineHeight="1.2"
              >
                Learn grammar
                <Box as="span" color="teal.500">
                  {' '}
                  with speed
                </Box>
              </Heading>

              <Text opacity={0.7} fontSize={{ base: 'lg', lg: 'xl' }} mt={6}>
                Grammarkup is a web for learn grammar
              </Text>

              <Stack mt={10} spacing={4} justify="center" direction={['column', 'row']}>
                <NextLink href="/grammar/getting-started" passHref>
                  <Button
                    as="a"
                    h={12}
                    px={8}
                    fontSize="xl"
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
                  h={12}
                  px={8}
                  fontSize="xl"
                  href="https://github.com/miraklasiaf/grammarkup"
                  target="__blank"
                  leftIcon={<DiGithubBadge size="1.5em" />}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Divider />

        <Footer />
      </Box>
    </>
  )
}

export default HomePage
