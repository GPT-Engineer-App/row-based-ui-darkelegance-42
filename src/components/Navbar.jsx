// Navbar.jsx
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import LogoutButton from './LogoutButton';

// Coll comment

const Navbar = () => {
  return (
    <Box bg="gray.900" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Chatbot Results
        </Text>
        <LogoutButton />
      </Flex>
    </Box>
  );
};

export default Navbar;