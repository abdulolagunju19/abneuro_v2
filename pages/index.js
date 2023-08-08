import Head from 'next/head';
import Image from 'next/image';

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
} from '@chakra-ui/react';

import "animate.css";
import Typewriter from 'typewriter-effect';
import { NextSeo } from 'next-seo';

import Container from '../components/Container';
import TechStack from '@/components/TechStack';
import Articles from '@/components/Articles';
import MainProjects from '@/components/MainProjects';

import waveStyle from '../styles/wave.module.css';

export default function Index() {

  const url = 'https://abneuro.vercel.app/';
  const title = 'Home Page – Abdul-Samad Olagunju';
  const description = 'The Personal Website of Abdul-Samad Olagunju.';

  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  };

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
      <Head>
        <title>Home - Abdul-Samad Olagunju</title>
      </Head>
      <Container>
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
            <Heading className="animate__animated animate__flipInY animate__delay-1s" mb={2}>Hi, I'm Abdul-Samad Olagunju<span className={waveStyle.wave}>👋</span></Heading>
            <br />
            <Flex direction='row'>
              <Text fontSize={['lg', '2xl']}>I am&nbsp;</Text>
              <Text
                as='span'
                fontSize={['lg', '2xl']}
                variant='primary'
                fontWeight='semibold'
                _hover={{ fontWeight: 'bold' }}
              >
                <Typewriter
                  options={{
                    delay: 50,
                    skipAddStyles: true,
                    loop: true,
                    deleteSpeed: 20,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString('learning about data science.')
                      .pauseFor(2000)
                      .deleteChars(28)
                      .typeString('interested in machine learning.')
                      .pauseFor(2000)
                      .deleteChars(31)
                      .typeString('learning Next.js and React.')
                      .pauseFor(2000)
                      .deleteChars(31)
                      .start();
                  }}
                />
              </Text>
            </Flex>
            <br />
            <Text color={colorSecondary[colorMode]}> I'm a Neuroscience student at the University of Alberta. This is my personal website, where I write about statistics, neuroscience, and display my projects. I created this website because I believe that complicated ideas should be understandable to the general public. I want to share everything that I have learned, and I hope that it helps you. </Text>
            <br />
            <Text color={colorSecondary[colorMode]}> I want to thank Benjamin Carlson for his personal website tutorial, it helped me get my feet off the ground in web development. His Website:{' '}
              <Link href='https://www.benjamincarlson.io/' isExternal>
                benjamincarlson.io 
              </Link> 
            </Text>
            <br />
            <div>
            <Image
              src="/images/indexpic.gif"
              alt="Photo"
              width={900}
              height={900}
              priority
              className="next-image"
            />
          </div>
          <MainProjects />
          <TechStack />
          <Articles />
          </Flex>
        </Stack>
      </Container>
    </>
  )
}