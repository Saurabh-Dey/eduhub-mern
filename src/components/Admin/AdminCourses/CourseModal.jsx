import {
  Box,
  Button,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { MdDelete } from 'react-icons/md';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  courseTitle,
  lectures = [],
}) => {
  return (
    <Modal isOpen={isOpen} size={'full'}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={'16'}>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my="5">
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
              </Box>
              <Heading children="Lectures" size={'lg'} />

              <VideoCard
                title="React Intro"
                description="This is a Intro lecture where you will know the basics of React"
                num={1}
                lectureId="gdiqfdglectureIdqrfqh"
                courseId={id}
                deleteButtonHandler={deleteButtonHandler}
              />
            </Box>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      padding={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text>{description}</Text>
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <MdDelete />
      </Button>
    </Stack>
  );
}
