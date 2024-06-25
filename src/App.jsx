<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
>>>>>>> 69bf1a72155a70e0526d3a35b611bd8c4dce4cb0
import Header from "./components/Header/Header";

function App() {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<WarehouseList />} />
          <Route
            path="/warehouse/:warehouseId"
            element={<WarehouseDetails />}
          />
          <Route
            path="/warehouse/:warehouseId/edit"
            element={<EditWarehouse />}
          />
          <Route path="/warehouse/new" element={<AddWarehouse />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route
            path="/inventory/:inventoryItemId"
            element={<InventoryItemDetails />}
          />
          <Route
            path="/inventory/:inventoryItemId/edit"
            element={<InventoryItemDetails />}
          />
          <Route path="/inventory/new" element={<AddWarehouse />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
=======
      <Header />
>>>>>>> 69bf1a72155a70e0526d3a35b611bd8c4dce4cb0
    </>
  );
}

export default App;
