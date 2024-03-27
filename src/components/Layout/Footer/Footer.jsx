import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaYoutube, FaInstagramSquare, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size={'sm'}
            children="@Sourav Dey"
            color={'yellow.400'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a href="https://youtube.com/" target="blank">
            <FaYoutube />
          </a>
          <a href="https://instragram.com/" target="blank">
            <FaInstagramSquare />
          </a>
          <a href="https://github.com/" target="blank">
            <FaGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
