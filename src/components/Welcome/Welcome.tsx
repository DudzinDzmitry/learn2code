import { Title, Text } from "@mantine/core";

export function Welcome() {
  return (
    <>
      <Title ta="center" mt={100}>
        Welcome to Learn2Code
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This repo contains a course project for "Javascript Development" course
        at BSU taught by Sergey Sivchenko. The main idea is to implement a web
        app, which helps anybody aspiring to "learn2code".
      </Text>
    </>
  );
}
