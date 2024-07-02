import React from 'react'
import WarehouseInventoryCard from '../WarehouseInventoryCard/WarehouseInventoryCard';
import sortIcon from "../../assets/images/icons/sort-24px.svg";
import '../WarehouseInventoryList/WarehouseInventoryList.scss'

function WarehouseInventoryList({inventoryList, warehouse, fetchWarehouseInventory }) {
    
  

  return (
    <section className="warehouse-inventory-list">
    <div className="warehouse-inventory-list__grid">
        <div className="warehouse-inventory-list__header">
          <h4 className="warehouse-inventory-list__header-label">
            INVENTORY ITEM{" "}
            <img src={sortIcon} alt="" className="warehouse-inventory-list__icon" />
          </h4>
          <h4 className="warehouse-inventory-list__header-label">
            CATEGORY{" "}
            <img src={sortIcon} alt="" className="warehouse-inventory-list__icon" />
          </h4>
          <h4 className="warehouse-inventory-list__header-label">
            STATUS{" "}
            <img src={sortIcon} alt="" className="warehouse-inventory-list__icon" />
          </h4>
          <h4 className="warehouse-inventory-list__header-label">
            QUANTITY <img src={sortIcon} alt="" className="warehouse-inventory-list__icon" />
          </h4>
          <h4 className="warehouse-inventory-list__header-label warehouse-inventory-list__header-label--align">
            ACTIONS
          </h4>
        </div>
        {inventoryList.map((inventory) => {
          return (
            <WarehouseInventoryCard
              key={inventory.id}
              inventory={inventory}
              fetchWarehouseInventory={fetchWarehouseInventory}
              warehouse = {warehouse}
            />
          );
        })}
      </div>
  </section>
  )
}

export default WarehouseInventoryList