import { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { es } from "date-fns/locale";

import { calculateTarotNumbers } from "./utils/tarotCalculator";
import ResultView from "./components/ResultView";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [result, setResult] = useState<null | {
    regente: number;
    desafio: number;
    ciclo: number;
  }>(null);
  const [edad, setEdad] = useState<number | null>(null);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("es-AR");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      {showIntro ? (
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#f4e3c3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "min(90vw, 56vh)", // proporción 3:5
              aspectRatio: "3 / 5",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/assets/mitarot2.jpg"
              alt="Carta Introductoria"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Botón escalable en base al tamaño de la carta */}
            <Button
              variant="contained"
              onClick={() => setShowIntro(false)}
              sx={{
                position: "absolute",
                bottom: "15%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "70%", // 🔥 relativo al ancho de la carta
                height: "6vh", // 🔥 relativo al alto del viewport
                fontSize: "2.2vh", // 🔥 escala del texto proporcional
                backgroundColor: "#c2933f",
                color: "#1e1e1e",
                fontWeight: "bold",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                "&:hover": {
                  backgroundColor: "#a5782c",
                },
              }}
            >
              ¡Vamos!
            </Button>
          </Box>
        </Box>
      ) : (
        <Container
          maxWidth="xs"
          sx={{
            backgroundColor: "#f4e3c3",
            border: "2px solid #c2933f",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            px: 3,
            py: 4,
            height: "96vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "center",
            overflow: "hidden",
            mt: "2vh",
            mb: "2vh",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#2e1b0e" }}>
            Mi Tarot y Vos
          </Typography>

          <DatePicker
            label="Fecha de nacimiento"
            value={birthDate}
            onChange={(newValue) => {
              if (newValue) {
                setBirthDate(newValue);

                const today = new Date();
                let years = today.getFullYear() - newValue.getFullYear();
                const m = today.getMonth() - newValue.getMonth();
                if (
                  m < 0 ||
                  (m === 0 && today.getDate() < newValue.getDate())
                ) {
                  years--;
                }
                setEdad(years);

                // Calculamos directamente las cartas al elegir fecha
                const res = calculateTarotNumbers(newValue);
                setResult(res);
              } else {
                setBirthDate(null);
                setEdad(null);
                setResult(null);
              }
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                sx: { my: 2 },
                variant: "outlined",
              },
            }}
          />

          {birthDate && (
            <Typography variant="body2" sx={{ mb: 1 }}>
              Fecha elegida: {formatDate(birthDate)}
            </Typography>
          )}

          {edad !== null && (
            <Typography variant="body2" sx={{ mb: 2 }}>
              Edad: {edad}
            </Typography>
          )}

          {result && (
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                width: "100%",
                mt: 2,
              }}
            >
              <ResultView {...result} />
            </Box>
          )}
        </Container>
      )}
    </LocalizationProvider>
  );
}

export default App;
