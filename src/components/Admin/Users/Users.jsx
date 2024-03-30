import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import { MdDelete } from 'react-icons/md';

const Users = () => {
  const users = [
    {
      _id: 'dqiudgqidqug',
      name: 'Sourav Dey',
      role: 'admin',
      subscription: {
        status: 'active',
      },
      email: 'souravdeybca053@gmail.com',
    },
    {
      _id: 'dqiuddwdwgqidqug',
      name: 'Satabdi Dey',
      role: 'user',
      subscription: {
        status: 'active',
      },
      email: 'satabdideybca053@gmail.com',
    },
    {
      _id: 'dqiuwdeqwrdgqidqug',
      name: 'Tapati Dey',
      role: 'admin',
      subscription: {
        status: 'active',
      },
      email: 'stapatideybca053@gmail.com',
    },
  ];

  const updateHandler = userId => {
    console.log(userId);
  };
  const deleteButtonHandler = userId => {
    console.log(userId);
  };
  return (
    <Grid
      //   css={{
      //     cursor: `url(${cursor}), default`,
      //   }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box padding={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my={'16'}
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'striped'} size={'lg'}>
            <TableCaption>All Available Users in tha DATBASE</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(item => (
                <Row
                  updateHandler={updateHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        #{item.subscription.status === 'active' ? 'Active' : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => updateHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            Change Role
          </Button>
          <Button onClick={() => updateHandler(item._id)} color={'purple.600'}>
            <MdDelete />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
