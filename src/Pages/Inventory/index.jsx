import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataStock } from "../../Data/MockData";
import { useTheme } from "@mui/material";
import Header from "../../Components/Header";

const Inventory = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "sku", headerName: "SKU", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 0.5 },
    {
      field: "category",
      headerName: "Category",
      renderCell: ({ row: { category } }) => {
        return (
          <Box
            width="605"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              category === "Electronics"
                ? colours.primary[600]
                : colours.primary[700]
            }
            borderRadius="4px"
          >
            <Typography color={colours.grey[100]} sx={{ ml: "5px" }}>
              {category}
            </Typography>
          </Box>
        );
      },
    },
    { field: "description", headerName: "Description", flex: 0.5 },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "unitPrice", headerName: "Unit Price" },
  ];

  return (
    <Box m="20px">
      <Header title="INVENTORY" />
      <Box
        m="40px 0 0 0"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colours.primary[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colours.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colours.primary[300],
            borderTop: "none",
          },
          "& .MuiCheckBox-root": {
            color: `${colours.primary[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colours.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataStock}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Inventory;
