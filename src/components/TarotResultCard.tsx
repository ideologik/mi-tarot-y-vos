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
  22: "El Loco", // Igual que 0
};

function getCardImage(number: number): string {
  const mapping: Record<number, string> = {
    0: "330px-RWS_Tarot_00_Fool.jpg",
    1: "330px-RWS_Tarot_01_Magician.jpg",
    2: "330px-RWS_Tarot_02_High_Priestess.jpg",
    3: "330px-RWS_Tarot_03_Empress.jpg",
    4: "330px-RWS_Tarot_04_Emperor.jpg",
    5: "330px-RWS_Tarot_05_Hierophant.jpg",
    6: "330px-RWS_Tarot_06_Lovers.jpg",
    7: "330px-RWS_Tarot_07_Chariot.jpg",
    8: "330px-RWS_Tarot_08_Strength.jpg",
    9: "330px-RWS_Tarot_09_Hermit.jpg",
    10: "330px-RWS_Tarot_10_Wheel_of_Fortune.jpg",
    11: "330px-RWS_Tarot_11_Justice.jpg",
    12: "330px-RWS_Tarot_12_Hanged_Man.jpg",
    13: "330px-RWS_Tarot_13_Death.jpg",
    14: "330px-RWS_Tarot_14_Temperance.jpg",
    15: "330px-RWS_Tarot_15_Devil.jpg",
    16: "330px-RWS_Tarot_16_Tower.jpg",
    17: "330px-RWS_Tarot_17_Star.jpg",
    18: "330px-RWS_Tarot_18_Moon.jpg",
    19: "330px-RWS_Tarot_19_Sun.jpg",
    20: "330px-RWS_Tarot_20_Judgement.jpg",
    21: "RWS_Tarot_21_World.jpg",
    22: "330px-RWS_Tarot_00_Fool.jpg", // Igual a 0
  };

  return `/assets/cards/${mapping[number]}`;
}

interface ResultProps {
  number: number;
  title?: string;
}

export default function TarotResultCard({ number, title }: ResultProps) {
  const name = tarotNames[number];
  const image = getCardImage(number);

  return (
    <Box
      sx={{
        backgroundColor: "#f4e3c3",
        border: "2px solid #c2933f",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
        p: 2,
        my: 2,
        width: "95%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* Imagen de la carta */}
      <Box
        sx={{
          width: 160,
          height: 240,
          borderRadius: "6px",
          overflow: "hidden",
          border: "1px solid #c2933f",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Títulos */}
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
