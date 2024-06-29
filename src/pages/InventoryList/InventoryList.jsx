
import React from 'react';

function InventoryList(props) {
  return (
    <div>
       <PageTitleWithSearch
        title="Warehouses"
        addLink="/warehouse/new"
        type="Warehouse"
      />
  <div className="warehouse-list__grid">
        <div className="warehouse-list__header">
          <h4 className="warehouse-list__header-label">
            WAREHOUSE
            <img src={sortIcon} alt="" className="warehouse-list__icon" />
          </h4>
          <h4 className="warehouse-list__header-label">
            ADDRESS
            <img src={sortIcon} alt="" className="warehouse-list__icon" />
          </h4>
          <h4 className="warehouse-list__header-label">
            CONTACT NAME
            <img src={sortIcon} alt="" className="warehouse-list__icon" />
          </h4>
          <h4 className="warehouse-list__header-label">
            CONTACT INFORMATION
            <img src={sortIcon} alt="" className="warehouse-list__icon" />
          </h4>
          <h4 className="warehouse-list__header-label warehouse-list__header-label--align">
            ACTIONS
          </h4>
        </div>
        </div>
    </div>
  );
}

export default InventoryList;

