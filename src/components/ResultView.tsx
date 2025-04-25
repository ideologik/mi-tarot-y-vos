import { Box, Typography } from "@mui/material";

const tarotNames: Record<number, string> = {
  0: "El Loco",
  1: "El Mago",
  2: "La Papisa",
  3: "La Emperatriz",
  4: "El Emperador",
  5: "El Papa",
  6: "Los Enamorados",
  7: "El Carro",
  8: "La Justicia",
  9: "El Ermitaño",
  10: "La Rueda de la Fortuna",
  11: "La Fuerza",
  12: "El Colgado",
  13: "La Muerte",
  14: "La Templanza",
  15: "El Diablo",
  16: "La Torre",
  17: "La Estrella",
  18: "La Luna",
  19: "El Sol",
  20: "El Juicio",
  21: "El Mundo",
  22: "El Loco",
};

interface ResultProps {
  regente: number;
  desafio: number;
  ciclo: number;
}

function TarotResultCard({
  number,
  title,
}: {
  number: number;
  title?: string;
}) {
  const name = tarotNames[number];

  return (
    <Box
      sx={{
        backgroundColor: "#f4e3c3",
        border: "2px solid #c2933f",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
        p: 2,
        my: 2,
        width: "100%",
        maxWidth: 320,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* Columna de la imagen */}
      <Box
        sx={{
          width: 60,
          height: 90,
          borderRadius: "6px",
          overflow: "hidden",
          border: "1px solid #c2933f",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src="/assets/mi-tarot-y-vos.png"
          alt="Carta decorativa"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Columna de texto */}
      <Box
        sx={{
          backgroundColor: "#f4e3c3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "70%",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", color: "#2e1b0e", fontSize: "1rem" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#2e1b0e", fontWeight: "bold", mt: 0.5 }}
        >
          {number} - {name}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ResultView({ regente, desafio, ciclo }: ResultProps) {
  return (
    <Box
      sx={{
        mt: 2,
        width: "95%",
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
