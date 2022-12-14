import { 
  Box, 
  Button, 
  ColorScheme, 
  ColorSchemeProvider, 
  Container, 
  Group, 
  MantineProvider, 
  Paper, 
  SegmentedControl, 
  Text, 
  TextInput, 
  Title 
} from "@mantine/core";
import { IconRegistered } from "@tabler/icons";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { DataProps } from "../@types";
import { ButtonTheme, Table } from "../components";

function App() {
  const [pack1, setPack1] = useState<string>("unit");
  const [arrayTable, setArrayTable] = useState<DataProps[]>([]);
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const { register, handleSubmit, reset } = useForm<DataProps>({
    defaultValues: {
      name: "",
    }
  });

  const handleFormSubmit = useCallback(
    (data: DataProps) => {
      setArrayTable((prev) => [...prev, data]);
      reset();
    },
    [reset]
  );

  const resetResults = () => setArrayTable([]);

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
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <TextInput
                placeholder="Nome da cerveja"
                label="Qual a cerveja?"
                withAsterisk
                radius="md"
                style={{ width: "100%" }}
              />

              <SegmentedControl
                value={pack1}
                onChange={setPack1}
                data={[
                  { label: "Unidade", value: "unit" },
                  { label: "Pack", value: "pack" },
                ]}
                color="yellow"
                radius={8}
                transitionDuration={500}
                transitionTimingFunction="linear"
                style={{ border: "1px solid gray", width: "100%" }}
              />

              {pack1 === "pack" && (
                <TextInput
                  placeholder="Quantas unidades do pack?"
                  label="Quantas unidades do pack?"
                  {...register("amount", {
                    valueAsNumber: true,
                    min: 1,
                  })}
                  radius="md"
                  style={ { width: "100%" } }
                />
              )}

                <TextInput
                  placeholder="Qual o valor?"
                  label="Qual o valor?"
                  withAsterisk
                  {...register("price", {
                    valueAsNumber: true,
                    required: true,
                    min: 1,
                  })}
                  step={0.01}
                  radius="md"
                  style={{ width: "100%" }}
                />

                <TextInput
                  placeholder="Mls"
                  label="Quantas Mls da unidade?"
                  withAsterisk
                  {...register("mls", {
                    valueAsNumber: true,
                    required: true,
                    min: 1,
                  })}
                  radius="md"
                  style={{ width: "100%" }}
                />

                <TextInput
                  placeholder="%"
                  label="Desconto?"
                  {...register("desc", {
                    valueAsNumber: true,
                    min: 0,
                    max: 100,
                  })}
                  radius="md"
                  style={{ width: "100%" }}
                />

                <Group grow style={{ width: "100%" }}>
                  <Button
                    variant="filled"
                    color="yellow"
                    type="submit"
                    radius="md"
                    size="md"
                  >
                    Calcular
                  </Button>
                  <Button
                    variant="outline"
                    color="yellow"
                    radius="md"
                    onClick={() => reset()}
                    size="md"
                  >
                    Apagar
                  </Button>
                </Group>
            </Paper>
            <Button
              my="20px"
              variant="light"
              color="yellow"
              radius="md"
              size="md"
              onClick={resetResults}
            >
              Resetar Resultados
            </Button>
            <Table data={arrayTable} setArrayTable={setArrayTable} />
          </Container>
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App;