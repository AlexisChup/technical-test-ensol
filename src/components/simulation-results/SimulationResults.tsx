import { useAppSelector } from "@ensol-test/app/hooks";
import { RootState } from "@ensol-test/app/store";
import { Space, Title, Box } from "@mantine/core";
import LoadingOverlayResults from "../loading-overlay-results/LoadingOverlayResults";
import CardResult from "./CardResult";

export default function SimulationResults() {
  const data = useAppSelector((state: RootState) => state.sizing.data);

  const { customerYearlyUsage, nbOfPanels, yearlyProd } = data;

  return (
    <Box>
      <Title order={2}>Résultats de la simulation</Title>
      <Box pos={"relative"}>
        <LoadingOverlayResults />
        <Space h="lg" />
        <CardResult
          text="Estimation votre consommation annuelle d'électricité :"
          value={customerYearlyUsage}
          unit="kWh"
          variant="grape"
        />
        <Space h="lg" />
        <CardResult
          text="Nombre optimale de panneaux à installer :"
          value={nbOfPanels}
          variant="indigo"
        />
        <Space h="lg" />
        <CardResult
          text="Estimation de la production annuelle d'électricité :"
          value={yearlyProd}
          unit="kWh"
          variant="indigo"
        />
      </Box>
    </Box>
  );
}
