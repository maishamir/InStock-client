import React from 'react';
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import { Link } from 'react-router-dom';
import arrow from "../../assets/images/icons/chevron_right-24px.svg";
import "./WarehouseItem.scss";

function WarehouseItem({ warehouse }) {
  return (
    <div className="warehouse-item">
      <div className="warehouse-item__info warehouse-item__info--warehouse">
        <h4 className="warehouse-item__label">WAREHOUSE</h4>
        <Link to={`/warehouse/${warehouse.id}`}>
          <p className="warehouse-item__warehouse-name">
            {warehouse.warehouse_name}
            <img src={arrow} alt="" className="warehouse-item__icon" />
          </p>
        </Link>
      </div>

      <div className="warehouse-item__info warehouse-item__info--address">
        <h4 className="warehouse-item__label">ADDRESS</h4>
        <p>{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
      </div>

      <div className="warehouse-item__info warehouse-item__info--contact">
        <h4 className="warehouse-item__label">CONTACT NAME</h4>
        <p>{warehouse.contact_name}</p>
      </div>

      <div className="warehouse-item__info warehouse-item__info--contact-info">
        <h4 className="warehouse-item__label">CONTACT INFORMATION</h4>
        <div className="warehouse-item__contact-details">
          <p className="warehouse-item__tel">{warehouse.contact_phone}</p>
          <p className="warehouse-item__email">{warehouse.contact_email}</p>
        </div>
      </div>

      <div className="warehouse-item__info warehouse-item__info--actions">
        <h4 className="warehouse-item__label">ACTIONS</h4>
        <img src={deleteIcon} alt="" className="warehouse-item__delete" />
        <img src={editIcon} alt="" className="warehouse-item__edit" />
      </div>
    </div>
  );
}

export default WarehouseItem;
