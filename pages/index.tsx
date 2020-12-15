import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import { Box, Text, Button, chakra, Stack, useColorModeValue } from '@chakra-ui/react'
import { Container } from '@/components/ui'
import { SEO, Header } from '@/components/common'
import { ArrowRight } from '@/components/icons'

const Blobs = dynamic(() => import('@/components/ui/Blobs'), { ssr: false })

const HomePage = () => {
  return (
    <>
      <SEO title="Grammarkup" description="Belajar grammar bahasa inggris dengan mudah" />

      <Box position="fixed" zIndex="-1">
        <Blobs />
      </Box>

      <Header />

      <Box>
        <Box as="section" pt={{ base: '10rem', md: '12rem' }} pb={{ base: '0', md: '6rem' }}>
          <Container>
            <Box maxW="760px" mx="auto" textAlign="center">
              <chakra.h1
                fontSize={{ base: '2.25rem', sm: '3rem', lg: '3.75rem' }}
                letterSpacing="tight"
                fontWeight="bold"
                mb="16px"
                lineHeight="1.2"
              >
                Belajar grammar Bahasa Inggris
                <Box as="span" color={useColorModeValue('teal.500', 'teal.300')}>
                  {' '}
                  dengan mudah
                </Box>
              </chakra.h1>

              <Text opacity={0.7} fontSize={{ base: 'lg', lg: 'xl' }} mt={6}>
                Grammarkup adalah tempat untuk belajar grammar Bahasa Inggris
              </Text>

              <Stack mt="10" spacing="4" justify="center" direction={{ base: 'column', sm: 'row' }}>
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
                    Mulai Belajar
                  </Button>
                </NextLink>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default HomePage
