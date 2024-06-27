import TextField from "../../components/TextField/TextField";
import returnIcon from '../../assets/images/icons/arrow_back-24px.svg';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton"
import './AddWarehouse.scss'
import PageTitle from "../../components/PageTitle/PageTitle";
import DividerLine from "../../components/DividerLine/DividerLine";

function AddWarehouse() {
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
<DividerLine />

<div className="add-warehouse__card ">
  <h2 className="add-warehouse__title">Contact Details</h2>
  <TextField name="Contact Name" placeholder="Contact Name"/>
  <TextField name="Position" placeholder="Position"/>
  <TextField name="Phone Number" placeholder="Email"/>
</div>

</article>

<div className="add-warehouse__buttons">

  <SecondaryButton buttonText = "Cancel" />
  <PrimaryButton buttonText = "+ Add Warehouse" />
</div>

  </main>;
}

export default AddWarehouse;
