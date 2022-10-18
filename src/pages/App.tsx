import { Box, ColorScheme, ColorSchemeProvider, Container, MantineProvider, Paper, Text, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { DataProps } from "../@types";
import { ButtonTheme } from "../components";

function App() {
  const [pack1, setPack1] = useState<string>("unit");
  const [arrayTable, setArrayTable] = useState<DataProps[]>([]);
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");



  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme((prev) => value || (prev === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Box
          p="20px"
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "320px"
            }}
          >
            <Title style={{ textAlign: "center", color: "#352F29"}}>
              Preço/Litro
            </Title>
            <Text style={{ textAlign: "center", color: "#352F29" }}>
              Calcule de forma facil e rapida o preço do litro de cerveja
            </Text>
            <ButtonTheme />
            <Paper
              component="form"
              shadow="x1"
              p="10px"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "320px",
                gap: "10px",
              }}
            >
              <TextInput
                placeholder="Nome da cerveja"
                label="Qual a cerveja"
                withAsterisk
                radius="md"
                style={{ width: "100%" }}
              />
            </Paper>
          </Container>
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App;