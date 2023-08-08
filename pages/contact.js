import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  VStack,
  Box,
  Button
} from '@chakra-ui/react';

import "animate.css";
import { NextSeo } from 'next-seo';

import Container from '../components/Container';
import { Subscribe } from '../components/Subscribe';

const url = 'https://abneuro.vercel.app/contact';
const title = 'Contact Me – Abdul-Samad Olagunju';
const description = 'Contact Me if you have any Further Questions.';

export default function ContactMe() {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const router = useRouter();

  return (
    <>
      <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            url,
            title,
            description
          }}
        />
      <Container>
        <Head>
          <title>Want to connect further?</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            className="animate__animated animate__fadeInLeft"
          >
            <Heading mb={2}>Want to connect further?</Heading>
            <Subscribe/>
          </Flex>
        </Stack> 
        <VStack spacing="15px" p="4">
          <Button
          variant="solid"
          size="lg"
          fontSize="20px"
          onClick={() => router.push('mailto:olagunju@ualberta.ca')}
          >
            Get in touch!
          </Button>
          <br />
          <VStack>
            <Text color={colorSecondary[colorMode]} fontSize="2xl" fontWeight="semibold">Click the picture below!</Text>
            <Text color={colorSecondary[colorMode]} fontSize="2xl" fontWeight="semibold">&darr;</Text>
            <Box borderRadius="lg" overflow="hidden" p={5} h ="650">
              <iframe width="300%" height="640px" src="https://preview.p5js.org/abdulolagunju19/embed/PYvsqEjBM"></iframe>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </>
  )
}

