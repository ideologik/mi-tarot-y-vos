import { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";

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

const tarotDescriptions: Record<number, string> = {
  0: "Nuevos comienzos, libertad y espontaneidad.",
  1: "Poder de manifestación, habilidad y concentración.",
  2: "Intuición, misterio y conocimiento oculto.",
  3: "Fertilidad, creatividad y abundancia.",
  4: "Autoridad, estructura y estabilidad.",
  5: "Sabiduría espiritual, tradición y enseñanza.",
  6: "Decisiones importantes, relaciones y armonía.",
  7: "Victoria, determinación y control.",
  8: "Equilibrio, verdad y responsabilidad.",
  9: "Introspección, sabiduría y búsqueda interior.",
  10: "Cambios, ciclos y destino.",
  11: "Coraje, paciencia y control interno.",
  12: "Sacrificio, pausa y nueva perspectiva.",
  13: "Transformación, finales y nuevos comienzos.",
  14: "Moderación, equilibrio y armonía.",
  15: "Ataduras, tentaciones y materialismo.",
  16: "Ruptura, revelación y cambio abrupto.",
  17: "Esperanza, inspiración y serenidad.",
  18: "Ilusiones, intuición y subconsciente.",
  19: "Éxito, vitalidad y alegría.",
  20: "Evaluación, renacimiento y llamado interior.",
  21: "Completitud, realización y éxito.",
  22: "Nuevos comienzos, libertad y espontaneidad.", // Igual que 0
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
  const description = tarotDescriptions[number];
  const image = getCardImage(number);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        onClick={handleOpen}
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
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f0d8aa",
          },
        }}
      >
        {/* Imagen */}
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

        {/* Título */}
        <Box
          sx={{
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

      {/* Popup Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "#f4e3c3",
            border: "2px solid #c2933f",
            borderRadius: "12px",
            p: 4,
            mx: "auto",
            my: "20vh",
            width: "80%",
            maxWidth: 400,
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: "#2e1b0e" }}>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#2e1b0e" }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
