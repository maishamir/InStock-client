import PageTitleWithSearch from "../../components/PageTitleWithSearch/PageTitleWithSearch";
import sortIcon from "../../assets/images/icons/sort-24px.svg";
import "./InventoryList.scss"
import { useState, useEffect } from "react";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import axios from "axios";
import { api_URL } from "../../utils/const";


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
    <div className="inventory-list__grid">
      <div className="inventory-list__header">
        <h4 className="inventory-list__header-label">INVENTORY ITEM <img src={sortIcon} alt="" className="inventory-list__icon"/></h4>
        <h4 className="inventory-list__header-label">CATEGORY <img src={sortIcon} alt="" className="inventory-list__icon"/></h4>
        <h4 className="inventory-list__header-label">STATUS <img src={sortIcon} alt="" className="inventory-list__icon"/></h4>
        <h4 className="inventory-list__header-label">QTY <img src={sortIcon} alt="" className="inventory-list__icon"/></h4>
        <h4 className="inventory-list__header-label">WAREHOUSE <img src={sortIcon} alt="" className="inventory-list__icon"/></h4>
        <h4 className="inventory-list__header-label inventory-list__header-label--align">ACTIONS</h4>
      </div>
      {inventoryList.map((inventory) => {
        return <InventoryCard key={inventory.id} inventory={inventory} fetchInventory={fetchInventory} />
      })}
    </div>
  </section>;
}

export default InventoryList;

