import { Box } from "@mui/material";
import TarotResultCard from "./TarotResultCard";

interface ResultProps {
  regente: number;
  desafio: number;
  ciclo: number;
}

export default function ResultView({ regente, desafio, ciclo }: ResultProps) {
  return (
    <Box
      sx={{
        mt: 0,
        ml: 2,
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TarotResultCard number={regente} title="Carta Regente" />
      <TarotResultCard number={desafio} title="Carta Desafío" />
      <TarotResultCard number={ciclo} title="Carta del Ciclo" />
    </Box>
  );
}
