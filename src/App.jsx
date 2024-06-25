import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import InventoryList from "./components/InventoryList/InventoryList";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehouseList />} />
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
          <Route path="/inventory/new" element={<AddInventoryItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
