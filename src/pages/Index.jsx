import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Table, Thead, Tbody, Tr, Th, Td, useToast } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [workTimeData, setWorkTimeData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  const handleLogin = async () => {
    // Simulate API login
    try {
      // In real scenario, you would use fetch or axios to send a POST request to the backend.
      // But for this example, we are simulating a successful login without contacting the backend.
      const accessToken = "simulated_access_token";
      setIsLoggedIn(true);
      toast({
        title: "Logged in",
        description: "You have been successfully logged in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // After login, fetch work time data
      fetchWorkTimeData();
    } catch (error) {
      toast({
        title: "Login failed",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const fetchWorkTimeData = async () => {
    // In real scenario, you would use the accessToken for authorization in your request headers.
    // Since we are simulating, we'll just set dummy data.
    const dummyWorkTimeData = [
      // Dummy data structure based on API schema
      { user_id: "1", login: "john.doe", name: "John", surname: "Doe", work_time: 40, idle_time: 5, computer_activity: 35, department: "IT" },
      // Add more dummy data as needed
    ];
    setWorkTimeData(dummyWorkTimeData);
  };

  return (
    <Container maxW="container.md" py={10}>
      {!isLoggedIn ? (
        <Box boxShadow="lg" p={6} rounded="md" bg="white">
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" mb={6}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button leftIcon={<FaSignInAlt />} colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>User ID</Th>
              <Th>Login</Th>
              <Th>Name</Th>
              <Th>Surname</Th>
              <Th>Work Time</Th>
              <Th>Idle Time</Th>
              <Th>Computer Activity</Th>
              <Th>Department</Th>
            </Tr>
          </Thead>
          <Tbody>
            {workTimeData.map((data, index) => (
              <Tr key={index}>
                <Td>{data.user_id}</Td>
                <Td>{data.login}</Td>
                <Td>{data.name}</Td>
                <Td>{data.surname}</Td>
                <Td>{data.work_time}</Td>
                <Td>{data.idle_time}</Td>
                <Td>{data.computer_activity}</Td>
                <Td>{data.department}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Container>
  );
};

export default Index;
