import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar,
    Box
} from '@chakra-ui/react';

import { parseISO, format } from 'date-fns';
import { NextSeo } from 'next-seo';

import Container from '../components/Container';

//layout of a specific post
export default function PostLayout({ frontMatter, children }) {
    const { colorMode } = useColorMode();

    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    };
    
    const [width, setWidth] = useState(1);

    const handleScroll = () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        setWidth(scrollPercentRounded);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    });

    return (
        <>
            <NextSeo
                title={frontMatter.title}
                description={frontMatter.summary}
                openGraph={{
                    title: frontMatter.title,
                    site_name: 'Abdul-Samad Olagunju',
                    description: frontMatter.summary,
                }}
            />
            <Box h={1} as="div" bgGradient="linear(to-b, blue.200, blue.500)" position="sticky" top={0} zIndex={100} w={`${width}%`}></Box>
            <Container>
                <Head>
                    <title>{frontMatter.title}</title>
                </Head>
                <Stack
                    as="article"
                    spacing={0}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    w="100%"
                    px={2}
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        w="100%"
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            {frontMatter.title}
                        </Heading>
                        <Flex
                            justify="space-between"
                            align={['initial', 'center']}
                            direction={['column', 'row']}
                            mt={2}
                            w="100%"
                            mb={4}
                        >
                            <Flex align="center">
                                <Avatar
                                    size="xs"
                                    name="AbdulSamad Olagunju"
                                    src="../images/portrait.jpeg"
                                    mr={2}
                                />
                                <Text fontSize="sm" color={textColor[colorMode]}>
                                    {frontMatter.by}
                                    {'AbdulSamad Olagunju / '}
                                    {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                                </Text>
                            </Flex>
                            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                               {frontMatter.readingTime} 
                            </Text>
                        </Flex>
                    </Flex>
                    {children}
                </Stack>
            </Container>
        </>
    )
}
