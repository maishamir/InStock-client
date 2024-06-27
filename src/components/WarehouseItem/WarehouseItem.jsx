import React from "react";
import "./WarehouseItem.scss";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/chevron_right-24px.svg";

function WarehouseItem({
  address,
  city,
  contact_email,
  contact_name,
  contact_phone,
  country,
  warehouse_name,
  id
}) {

  console.log(id)

  return (
    <article className="warehouse-item">
      <div className="warehouse-item__content">
        <div className="warehouse-item__left">
          <div className="warehouse-item__info">
            <h4 className="warehouse-item__label">WAREHOUSE</h4>
            <Link className="warehouse-item__link" to={`/warehouse/${id}`}>
              <p className="warehouse-item__value warehouse-item__name">{warehouse_name}</p>
              <img src={arrow} alt="" />
            </Link>
          </div>
          <div className="warehouse-item__info">
            <h4 className="warehouse-item__label">ADDRESS</h4>
            <p className="warehouse-item__value">
              {address}, {city}, {country}
            </p>
          </div>
        </div>
        <div className="warehouse-item__right">
          <div className="warehouse-item__info">
            <h4 className="warehouse-item__label">CONTACT NAME</h4>
            <p className="warehouse-item__value">{contact_name}</p>
          </div>
          <div className="warehouse-item__info">
            <h4 className="warehouse-item__label">CONTACT INFORMATION</h4>
            <div className="warehouse-item__contact-info">
              <p className="warehouse-item__value warehouse-item__tel">
                {contact_phone}
              </p>
              <p className="warehouse-item__value warehouse-item__email">
                {contact_email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="warehouse-item__actions">
        <img src={deleteIcon} alt="" />
        <img src={editIcon} alt="" />
      </div>
    </article>
  );
}

export default WarehouseItem;
