import TextField from "../../components/TextField/TextField";
import {  useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton"
import './AddWarehouse.scss'
import PageTitle from "../../components/PageTitle/PageTitle";


function AddWarehouse() {

  const intialValues = {
    warehouse_name : "",
      address : "",
      city : "",
      country : "",
      contact_name : "",
      contact_position : "",
      contact_phone : "",
      contact_email : "",
  };
  const [values, setValues] = useState(intialValues);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await axios.post("/api/warehouses", {
        title: values.title,
        description: values.description,
      });
      setValues({ title: "", description: "" });

     
  

      await fetchVideos();

      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  }
  return <main className="add-warehouse">
<div>
 <PageTitle title = "Add New Warehouse" />
</div>

<article className="add-warehouse__container">
<div className="add-warehouse__card ">
  <h2 className="add-warehouse__title">Warehouse Details</h2>
  <TextField name="Warehouse Name" placeholder="Warehouse Name"/>
  <TextField name="Street Address" placeholder="Street Address"/>
  <TextField name="City" placeholder="City"/>
  <TextField name="Country" placeholder="Country"/>
</div>
<div className = "add-warehouse__divider-line">  </div> 

<div className="add-warehouse__card ">
  <h2 className="add-warehouse__title">Contact Details</h2>
  <TextField name="Contact Name" placeholder="Contact Name"/>
  <TextField name="Position" placeholder="Position"/>
  <TextField name="Phone Number" placeholder="Phone Number"/>
  <TextField name="Email" placeholder="Email"/>

</div>

</article>

<div className="add-warehouse__buttons">

  <SecondaryButton buttonText = "Cancel" />
  <PrimaryButton buttonText = "+ Add Warehouse" />
</div>

  </main>;
}

export default AddWarehouse;
