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

  const handleClick = () => {
    if (!birthDate) return;
    const res = calculateTarotNumbers(birthDate);
    setResult(res);
  };

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
            backgroundColor: "#f4e3c3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setShowIntro(false)}
        >
          <img
            src="/assets/mi-tarot-y-vos.png"
            alt="Carta Introductoria"
            style={{
              height: "90%",
              borderRadius: "12px",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
            }}
          />
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

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c2933f",
              color: "#1e1e1e",
              fontWeight: "bold",
              mb: 2,
              "&:hover": {
                backgroundColor: "#a5782c",
              },
            }}
            onClick={handleClick}
          >
            Calcular cartas
          </Button>

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
