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
                A web app designed for neuroscience students. Built with Next.js and Supabase.
            </Card>
            <Card
                title="Agropellis"
                href="https://github.com/abdulolagunju19/agropellis"
                src="/images/agropellis.png"
                alt='Agropellis'
                color={iconColor[colorMode]}
            >
                A farm inspired ecommerce site. Built with Next.js, Zustand, and Stripe.
            </Card>
            <Card
                title="Neurocoin"
                href="https://github.com/abdulolagunju19/blockchain-app"
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
                A skin detection app made using OpenCV and ML models. Built with Streamlit.
            </Card>
            <Card
                title="PUF"
                href="https://www.prairieurbanfarm.ca/"
                src="/images/puf.jpg"
                alt='PUF'
                color={iconColor[colorMode]}
            >
                Developed a website for Prairie Urban Farm, a community food system in the University of Alberta's South Campus.
            </Card>
            <Card
                title="WILTB"
                href="https://whattobe.vercel.app/"
                src="/images/wiltb.jpg"
                alt='WILTB'
                color={iconColor[colorMode]}
            >
                Interviewed professors to help students learn about different professions. Built with Next.js.
            </Card>
        </>
    )
}

export default MainProjects;
