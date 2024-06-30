import PageTitleWithSearch from "../../components/PageTitleWithSearch/PageTitleWithSearch";
import "./InventoryList.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import { api_URL } from "../../utils/const";
import Inventories from "../../components/Inventories/Inventories";


function InventoryList() {

  const [inventoryList, setInventoryList] = useState([]);

  const fetchInventory = async () => {
    try {
      const { data } = await axios.get(`${api_URL}/api/inventories`);
      setInventoryList(data);
    } catch (e) {
      console.error("Could not fetch list of inventories: ", e);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);
  return <section className="inventory-list">
    <PageTitleWithSearch title="Inventory" addLink="/inventory/new" type="Item" />
    <Inventories inventoryList={inventoryList} fetchfn={fetchInventory} />
  </section>;
}

export default InventoryList;

