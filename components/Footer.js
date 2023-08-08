import React from 'react';

import NextLink from 'next/link';

import { Flex, Link, IconButton, useColorMode, Stack, Divider } from '@chakra-ui/react';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

export const Footer = () => {

    const { colorMode } = useColorMode();
    
    const borderIcon = {
        light: 'gray.400',
        dark: 'gray.500'
    };

    const footerHoverBg = {
        light: 'gray.100',
        dark: 'gray.700',
    };

    //using NextLink for pages on site so that nprogress is called, otherwise to routeChange event
    return (
        <Flex align="center" mb={4} direction="column">
            <Divider mb={5} mt={3} w='50%' alignSelf="center" />
            <Stack direction="row" align="center">
                <NextLink href="/tutorial" title="tutorials">
                    <IconButton
                        aria-label="tutorials"
                        icon={<GiTeacher />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode], transform: `translateY(-4px)`, shadow: `xl` }}
                        transition='all 0.25s'
                        transitionTimingFunction='spring(1 100 10 10)'
                    />
                </NextLink>
                <NextLink href="/blog" title="blog">
                    <IconButton
                        aria-label="Blog"
                        icon={<FaBlog />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode], transform: `translateY(-4px)`, shadow: `xl` }}
                        transition='all 0.25s'
                        transitionTimingFunction='spring(1 100 10 10)'
                    />
                </NextLink>
                <NextLink href="/contact" title="contact">
                    <IconButton
                        aria-label="Contact Me"
                        icon={<MdConnectWithoutContact />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode], transform: `translateY(-4px)`, shadow: `xl` }}
                        transition='all 0.25s'
                        transitionTimingFunction='spring(1 100 10 10)'
                    />
                </NextLink>
                <Link href="https://github.com/abdulolagunju19" title="GitHub" isExternal>
                    <IconButton
                        aria-label="GitHub"
                        icon={<FiGithub />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode], transform: `translateY(-4px)`, shadow: `xl` }}
                        transition='all 0.25s'
                        transitionTimingFunction='spring(1 100 10 10)'
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/abdul-samad-olagunju-727877167/" title="Linkedin" isExternal>
                    <IconButton
                        aria-label="Linkedin"
                        icon={<FiLinkedin />}
                        size="lg"
                        color={borderIcon[colorMode]}
                        variant="ghost"
                        _hover={{ backgroundColor: footerHoverBg[colorMode], transform: `translateY(-4px)`, shadow: `xl` }}
                        transition='all 0.25s'
                        transitionTimingFunction='spring(1 100 10 10)'
                    />
                </Link>
            </Stack>
        </Flex>
    )
}
