import React from 'react';

import { Text, Heading, useColorMode } from '@chakra-ui/react';

import Card from './Card';

const TechStack = () => {
    const { colorMode } = useColorMode();

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
    };

    return (
        <>
            <Heading as="h3" size="lg" pt="8" pb="8">
                Tech Stack
            </Heading>
            <Text color={colorSecondary[colorMode]} pb="5">The technology I use to develop my applications.</Text>
            <Card
                title="Vercel"
                href="https://vercel.com/"
                src="/images/vercel_icon.jpeg"
                alt='Vercel Logo'
                color={iconColor[colorMode]}
            >
                Vercel is what I use to deploy my websites.
            </Card>
            <Card
                title="Next.js"
                href="https://nextjs.org/"
                src="/images/nextjs_icon.png"
                alt='Next.js Logo'
                color={iconColor[colorMode]}
            >
                Next.js is a react framework I use to build my websites.
            </Card>
            <Card
                title="React"
                href="https://reactjs.org/"
                src="/images/react_icon.png"
                alt='React Logo'
                color={iconColor[colorMode]}
            >
                React is a powerful javascript framework I use to build my websites.
            </Card>
            <Card
                title="VS Code"
                href="https://code.visualstudio.com/"
                src="/images/vscode.png"
                alt='VS Code Logo'
                color={iconColor[colorMode]}
            >
                My Code Editor that allows me to build my applications.
            </Card>
            <Card
                title="Chakra UI"
                href="https://chakra-ui.com/"
                src="/images/chakra_icon.png"
                alt='React Logo'
                color={iconColor[colorMode]}
            >
                A simple component library that makes my styling easy.
            </Card>
        </>
    )
}

export default TechStack;
