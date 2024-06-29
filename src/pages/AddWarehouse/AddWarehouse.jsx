import TextField from "../../components/TextField/TextField";
import { useState } from "react";
import { api_URL } from "../../utils/const";
import axios from "axios";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import "./AddWarehouse.scss";
import classNames from "classnames";
import PageTitle from "../../components/PageTitle/PageTitle";

function AddWarehouse() {
  const [values, setValues] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      warehouse_name,
      address,
      city,
      country,
      contact_name,
      contact_position,
      contact_phone,
      contact_email,
    } = values;

    if (
      !warehouse_name ||
      !address ||
      !city ||
      !country ||
      !contact_name ||
      !contact_position ||
      contact_phone.length !== 10 ||
      !contact_email.includes("@")
    ) {
      setError({
        warehouse_name: !warehouse_name,
        address: !address,
        city: !city,
        country: !country,
        contact_name: !contact_name,
        contact_position: !contact_position,
        contact_phone: contact_phone.length !== 10,
        contact_email: !contact_email.includes("@"),
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/warehouses",
        values
      );
      setSuccess(true);
      console.log("New warehouse created:", response.data);
    } catch (error) {
      setError("Failed to create new warehouse");
      console.error(error);
    }
  };

  return (
    <main className="add-warehouse">
      <div>
        <PageTitle title="Add New Warehouse" />
      </div>

      <form className="add-warehouse__form" onSubmit={handleSubmit}>
        <div className="add-warehouse__container">
          <div
            className={classNames("add-warehouse__card", "form-group", {
              error: error.warehouse_name,
            })}
          >
            <h2 className="add-warehouse__title">Warehouse Details</h2>
            <TextField
              label="Warehouse Name"
              name="warehouse_name"
              placeholder="Warehouse Name"
              value={values.warehouse_name}
              onChange={handleInputChange}
            />
            {error.warehouse_name && (
              <span>Please provide a valid warehouse name</span>
            )}
            <TextField
              label="Street Address"
              name="address"
              placeholder="Street Address"
              value={values.address}
              onChange={handleInputChange}
            />
            {error.address && <span>Please provide a valid address</span>}
            <TextField
              label="City"
              name="city"
              placeholder="City"
              value={values.city}
              onChange={handleInputChange}
            />
            {error.city && <span>Please provide a valid city</span>}
            <TextField
              label="Country"
              name="country"
              placeholder="Country"
              value={values.country}
              onChange={handleInputChange}
            />
            {error.country && <span>Please provide a valid country</span>}
          </div>
          <div className="add-warehouse__divider-line"> </div>
          <div className="add-warehouse__card">
            <h2 className="add-warehouse__title">Contact Details</h2>

            <TextField
              label="Contact Name"
              name="contact_name"
              placeholder="Contact Name"
              value={values.contact_name}
              onChange={handleInputChange}
            />
            {error.contact_name && (
              <span>Please provide a valid contact name</span>
            )}
            <TextField
              label="Position"
              name="contact_position"
              placeholder="Position"
              value={values.contact_position}
              onChange={handleInputChange}
            />
            {error.contact_position && (
              <span>Please provide a valid contact position</span>
            )}
            <TextField
              label="Phone Number"
              name="contact_phone"
              placeholder="Phone Number"
              value={values.contact_phone}
              onChange={handleInputChange}
            />
            {error.contact_phone && (
              <span>Please provide a valid phone number</span>
            )}
            <TextField
              label="Email"
              name="contact_email"
              placeholder="Email"
              value={values.contact_email}
              onChange={handleInputChange}
            />
            {error.contact_email && <span>Please provide a valid email</span>}
          </div>
        </div>

        <div className="add-warehouse__buttons">
        <SecondaryButton buttonText = "Cancel"/>
        <PrimaryButton  type="submit" buttonText = "Add Warehouse"  />
        {success && <p>Warehouse added successfully!</p>}
        </div>
      
      </form>
    </main>
  );
}

export default AddWarehouse;
