import React, { useEffect, useState } from "react";
import "./WarehouseList.scss";
import { api_URL } from "../../utils/const";

import WarehouseItem from "../../components/WarehouseItem/WarehouseItem";
import axios from "axios";
import PageTitleWithSearch from "../../components/PageTitleWithSearch/PageTitleWithSearch"

function WarehouseList() {

  const [warehouseList, setWarehouseList] = useState([])

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const { data } = await axios.get(`${api_URL}/api/warehouses`)
        console.log(data)
        setWarehouseList(data)
      } catch (e) {
        console.error("Could not fetch list of warehouses: ", err)
      }
    }
    fetchWarehouses()
  }, [])

  return (
    <section className="warehouse-list">
      <PageTitleWithSearch title="Warehouses" editLink="#" type="Warehouse" />
      <header className="warehouse-list__heading">
        <h4 className="warehouse-list__header-label">WAREHOUSE</h4>
        <h4 className="warehouse-list__header-label">ADDRESS</h4>
        <h4 className="warehouse-list__header-label">CONTACT NAME</h4>
        <h4 className="warehouse-list__header-label">CONTACT INFORMATION</h4>
      </header>

      {
        warehouseList.map(warehouse => {
          const { address, city, contact_email, contact_name, contact_phone, country, warehouse_name, id } = warehouse;

          return <WarehouseItem key={id} address={address} city={city} contact_email={contact_email} contact_name={contact_name} contact_phone={contact_phone} country={country} warehouse_name={warehouse_name} id={id} />
        })
        
      }
    </section>
  );
}

export default WarehouseList;
