import React, { useEffect, useState } from "react";
import "./WarehouseList.scss";
import { api_URL } from "../../utils/const";
import axios from "axios";
import PageTitleWithSearch from "../../components/PageTitleWithSearch/PageTitleWithSearch";
import WarehouseItem from "../../components/WarehouseItem/WarehouseItem";
import sortIcon from "../../assets/images/icons/sort-24px.svg";

function WarehouseList() {
  const [warehouseList, setWarehouseList] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const { data } = await axios.get(`${api_URL}/api/warehouses`);
        console.log(data);
        setWarehouseList(data);
      } catch (e) {
        console.error("Could not fetch list of warehouses: ", err);
      }
    };
    fetchWarehouses();
  }, []);

  return (
    <section className="warehouse-list">
      <PageTitleWithSearch title="Warehouses" editLink="#" type="Warehouse" />
      <div className="warehouse-item">
        <div className="warehouse-item__header">
          <h4 className="warehouse-item__header-label">
            WAREHOUSE
              <img src={sortIcon} alt="" className="warehouse-item__icon" />
          </h4>
          <h4 className="warehouse-item__header-label">
            ADDRESS
              <img src={sortIcon} alt="" className="warehouse-item__icon" />
          </h4>
          <h4 className="warehouse-item__header-label">
            CONTACT NAME
              <img src={sortIcon} alt="" className="warehouse-item__icon" />
          </h4>
          <h4 className="warehouse-item__header-label">
            CONTACT INFORMATION
              <img src={sortIcon} alt="" className="warehouse-item__icon" />
          </h4>
          <h4 className="warehouse-item__header-label warehouse-item__header-label--align">ACTIONS</h4>
        </div>

        {warehouseList.map((warehouse) => {
          return <WarehouseItem key={warehouse.id} warehouse={warehouse} />
        } )}
      </div>
    </section>
  );
}

export default WarehouseList;
