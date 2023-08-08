import React from 'react';

import { Text, Heading, useColorMode } from '@chakra-ui/react';

import Card from './Card';

const MainProjects = () => {
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
                My Projects
            </Heading>
            <Text color={colorSecondary[colorMode]} pb="5"> Take a look at my projects.</Text>
            <Card
                title="Proserus Dashboard"
                href="https://proserus.vercel.app/"
                src="/images/proserus.png"
                alt='Proserus'
                color={iconColor[colorMode]}
            >
                A responsive dashboard built using Chakra UI, Next.js, and MongoDB.
            </Card>
            <Card
                title="Neurodiscite"
                href="https://neuro-tools.vercel.app/"
                src="/images/neurodiscite.png"
                alt='Neurodiscite'
                color={iconColor[colorMode]}
            >
                A web app designed for neuroscience students.
            </Card>
            <Card
                title="Agropellis"
                href="https://github.com/abdulolagunju19/agrostore"
                src="/images/agropellis.png"
                alt='Agropellis'
                color={iconColor[colorMode]}
            >
                A farm inspired ecommerce site.
            </Card>
            <Card
                title="Neurocoin"
                href="https://blockchain-app.onrender.com/"
                src="/images/neurocoin.png"
                alt='Neurocoin'
                color={iconColor[colorMode]}
            >
                A blockchain web app built using Flask and MySQL.
            </Card>
            <Card
                title="MaskOff"
                href="https://abdulolagunju19-acne-detection-app-app-dd9pqy.streamlit.app/"
                src="/images/maskoff.jpg"
                alt='MaskOff'
                color={iconColor[colorMode]}
            >
                A skin detection app made using OpenCV and ML models.
            </Card>
        </>
    )
}

export default MainProjects;
