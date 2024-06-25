import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehouseList from "./pages/WarehouseList/WarehouseList";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import InventoryList from "./pages/InventoryList/InventoryList";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <WarehouseDetails />
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
