import InventoryCard from "../InventoryCard/InventoryCard";
import sortIcon from "../../assets/images/icons/sort-24px.svg";

function Inventories({inventoryList, fetchFn}) {
  return (
    <>
      <div className="inventory-list__grid">
        <div className="inventory-list__header">
          <h4 className="inventory-list__header-label">
            INVENTORY ITEM{" "}
            <img src={sortIcon} alt="" className="inventory-list__icon" />
          </h4>
          <h4 className="inventory-list__header-label">
            CATEGORY{" "}
            <img src={sortIcon} alt="" className="inventory-list__icon" />
          </h4>
          <h4 className="inventory-list__header-label">
            STATUS{" "}
            <img src={sortIcon} alt="" className="inventory-list__icon" />
          </h4>
          <h4 className="inventory-list__header-label">
            QTY <img src={sortIcon} alt="" className="inventory-list__icon" />
          </h4>
          <h4 className="inventory-list__header-label">
            WAREHOUSE{" "}
            <img src={sortIcon} alt="" className="inventory-list__icon" />
          </h4>
          <h4 className="inventory-list__header-label inventory-list__header-label--align">
            ACTIONS
          </h4>
        </div>
        {inventoryList.map((inventory) => {
          return (
            <InventoryCard
              key={inventory.id}
              inventory={inventory}
              fetchInventory={fetchFn}
            />
          );
        })}
      </div>
    </>
  );
}

export default Inventories;
