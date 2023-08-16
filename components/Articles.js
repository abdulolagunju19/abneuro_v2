import React from 'react';

import { OrderedList, ListItem, Link, Heading, useColorMode } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Articles = () => {
    const { colorMode } = useColorMode();

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    return (
        <>
            <Heading as="h5" size="lg" pt="8" pb="8">
                Here are some articles to get you started:
            </Heading>
            <OrderedList spacing={3}>
                <ListItem fontSize="16px" color={colorSecondary[colorMode]}>
                <Link color={colorSecondary[colorMode]} fontSize="16px" href='/tutorial/webdev' isExternal>
                    Next.js Web Development <ExternalLinkIcon mx='5px' />
                </Link>
                </ListItem>
                <ListItem fontSize="16px" color={colorSecondary[colorMode]}>
                <Link color={colorSecondary[colorMode]} fontSize="16px" href='/blog/cerebellum' isExternal>
                    Cerebellum <ExternalLinkIcon mx='5px' />
                </Link>
                </ListItem>
                <ListItem fontSize="16px" color={colorSecondary[colorMode]}>
                <Link color={colorSecondary[colorMode]} fontSize="16px" href='/blog/eating' isExternal>
                    Eating Disorders <ExternalLinkIcon mx='5px' />
                </Link>
                </ListItem>
                <ListItem fontSize="16px" color={colorSecondary[colorMode]}>
                <Link color={colorSecondary[colorMode]} fontSize="16px" href='/blog/Thutmose' isExternal>
                    Thutmose III <ExternalLinkIcon mx='5px' />
                </Link>
                </ListItem>
                <ListItem fontSize="16px" color={colorSecondary[colorMode]}>
                <Link color={colorSecondary[colorMode]} fontSize="16px" href='/tutorial/KaggleData' isExternal>
                    Python- An analysis of a dataset from Kaggle <ExternalLinkIcon mx='5px' />
                </Link>
                </ListItem>
            </OrderedList>
        </>
    )
}

export default Articles;
