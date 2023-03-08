import { Spinner, Box, Text } from '@chakra-ui/react';

type LoadingProps = {
  text: string;
};

const Loading = ({ text }: LoadingProps) => {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      textAlign='center'
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text>{text}</Text>
    </Box>
  );
};

export default Loading;
