import React, { useEffect, useState } from "react";
import "./WarehouseList.scss";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
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
        {/* <div className="warehouse-item__warehouse">
          <div className="warehouse-item__info warehouse-item__info--warehouse">
            <h4 className="warehouse-item__label">WAREHOUSE </h4>
            <p>Manhattan</p>
          </div>

          <div className="warehouse-item__info warehouse-item__info--address">
            <h4 className="warehouse-item__label">ADDRESS</h4>
            <p>503 Broadway, New York, USA</p>
          </div>

          <div className="warehouse-item__info warehouse-item__info--contact">
            <h4 className="warehouse-item__label">CONTACT NAME</h4>
            <p>Parmin Aujla</p>
          </div>

          <div className="warehouse-item__info warehouse-item__info">
            <h4 className="warehouse-item__label">CONTACT INFORMATION</h4>
            <div className="warehouse-item__contact-details">
              <p className="warehouse-item__tel">+1 (629) 444-0129</p>
              <p className="warehouse-item__email">paujla@instock.com</p>
            </div>
          </div>

          <div class="warehouse-item__info warehouse-item__info--actions">
            <h4 className="warehouse-item__label">ACTIONS</h4>
            <img src={deleteIcon} alt="" className="warehouse-item__delete" />
            <img src={editIcon} alt="" className="warehouse-item__edit" />
          </div>
        </div> */}

        {warehouseList.map((warehouse) => {
          return <WarehouseItem key={warehouse.id} warehouse={warehouse} />
        } )}
      </div>
    </section>
  );
}

export default WarehouseList;
