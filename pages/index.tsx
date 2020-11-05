import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import { Box, Text, Button, chakra, Flex } from '@chakra-ui/core'
import { Container, SEO } from '@/components/ui'
import { Header } from '@/components/core'

const Blobs = dynamic(() => import('@/components/ui/Blobs'), { ssr: false })

const ArrowRight = (props) => (
  <Box as="svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </Box>
)

const HomePage = () => {
  return (
    <>
      <SEO
        title="Grammarkup - A Web for learning grammar"
        description="A Web for learning grammar"
      />
      <Box
        sx={{
          zIndex: -1,
          position: 'fixed',
          '@media print': { display: 'none' }
        }}
      >
        <Blobs />
      </Box>

      <Header />

      <Box mb={20}>
        <Box
          as="section"
          pt={{ base: '10rem', md: '12rem' }}
          pb={{ base: '0', md: '6rem' }}
        >
          <Container>
            <Box maxW="760px" mx="auto" textAlign="center">
              <chakra.h1
                fontSize={{ base: '2.25rem', sm: '3rem', lg: '3.75rem' }}
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

              <Text opacity={0.7} fontSize={{ base: 'lg', lg: 'xl' }} mt={6}>
                Grammarkup is a web for learn grammar
              </Text>

              <Flex justify="center" mt={8}>
                <NextLink href="/beginner/getting-started" passHref>
                  <Button
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    as="a"
                    size="lg"
                    colorScheme="teal"
                    rightIcon={<ArrowRight fontSize="0.8em" w={5} />}
                  >
                    Get Started
                  </Button>
                </NextLink>
              </Flex>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default HomePage
