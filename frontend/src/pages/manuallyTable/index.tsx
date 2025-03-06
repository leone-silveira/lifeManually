import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import Relogio from "../../components/clock";

const columns = [
  { field: "opcao", headerName: "Opção", width: 150 },
  { field: "alimento", headerName: "Alimento", width: 200 },
  { field: "quantidade", headerName: "Quantidade", width: 130 },
  { field: "caloria", headerName: "Caloria", width: 130 },
  { field: "proteina", headerName: "Proteína", width: 130 },
  { field: "carboidrato", headerName: "Carboidrato", width: 130 },
  { field: "gordura", headerName: "Gordura", width: 130 },
  { field: "fibra", headerName: "Fibra", width: 130 },
];

const rows = [
  { id: 1, opcao: "PT1", alimento: "Banana", quantidade: "80g", caloria: 71.2, proteina: 1.04, carboidrato: 17.6, gordura: 0.24, fibra: 2.08 },
  { id: 2, opcao: "PT1", alimento: "Maçã", quantidade: "70g", caloria: 36.4, proteina: 0.21, carboidrato: 9.66, gordura: 0.14, fibra: 1.4 },
  { id: 3, opcao: "PT1", alimento: "Aveia", quantidade: "10g", caloria: 38, proteina: 1.4, carboidrato: 6.6, gordura: 0.8, fibra: 1.1 },
  { id: 4, opcao: "C1", alimento: "Pão integral", quantidade: "2 fatias", caloria: 140, proteina: 8, carboidrato: 28, gordura: 3, fibra: 6 },
  { id: 5, opcao: "C1", alimento: "Queijo mussarela", quantidade: "30g", caloria: 87, proteina: 6.6, carboidrato: 1, gordura: 7, fibra: 0 },
  { id: 6, opcao: "C1", alimento: "Ovo", quantidade: "2 und", caloria: 143, proteina: 13, carboidrato: 1.1, gordura: 9.5, fibra: 0 },
  { id: 7, opcao: "A1", alimento: "Frango", quantidade: "110g", caloria: 181.5, proteina: 34.1, carboidrato: 0, gordura: 3.96, fibra: 0 },
  { id: 8, opcao: "A1", alimento: "Arroz integral", quantidade: "40g", caloria: 44.4, proteina: 1.04, carboidrato: 10.32, gordura: 0.36, fibra: 1.08 },
  { id: 9, opcao: "A1", alimento: "Feijão Carioca", quantidade: "80g", caloria: 60.8, proteina: 3.6, carboidrato: 11.52, gordura: 0.4, fibra: 5.12 },
  { id: 10, opcao: "A1", alimento: "Alface", quantidade: "50g", caloria: 7, proteina: 0.6, carboidrato: 1.3, gordura: 0.1, fibra: 0.9 },
  { id: 11, opcao: "M1", alimento: "Pão integral", quantidade: "2 fatias", caloria: 140, proteina: 8, carboidrato: 28, gordura: 3, fibra: 6 },
  { id: 12, opcao: "M1", alimento: "Whey Protein", quantidade: "30g", caloria: 109, proteina: 24, carboidrato: 2.1, gordura: 1.2, fibra: 0 },
  { id: 13, opcao: "M1", alimento: "Queijo mussarela", quantidade: "30g", caloria: 87, proteina: 6.6, carboidrato: 1, gordura: 7, fibra: 0 },
  { id: 14, opcao: "M1", alimento: "Ovo", quantidade: "2 und", caloria: 143, proteina: 13, carboidrato: 1.1, gordura: 9.5, fibra: 0 },
  { id: 15, opcao: "J1", alimento: "Melancia", quantidade: "100g", caloria: 30, proteina: 0.6, carboidrato: 7.6, gordura: 0.2, fibra: 0.4 },
  { id: 16, opcao: "J1", alimento: "Chia", quantidade: "10g", caloria: 49, proteina: 1.6, carboidrato: 4.2, gordura: 3.1, fibra: 3.4 },
  { id: 17, opcao: "J1", alimento: "Iogurte natural", quantidade: "150g", caloria: 105, proteina: 5.85, carboidrato: 6.75, gordura: 6, fibra: 0 },
];

const FoodTable = () => {
  return (
    <Box sx={{ height: 500, width: "100%", padding: 3 }}>
      <Relogio />
      <Typography variant="h5" gutterBottom>
        Plano Alimentar
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
};

export default FoodTable;