import TextField from "../../components/TextField/TextField";
import returnIcon from '../../assets/images/icons/arrow_back-24px.svg';

function AddWarehouse() {
  return <main>
<div>
  <img src={returnIcon} alt="This is a return icon" />
  <h2> Warehouse Details</h2>
</div>

<div>
  <h2>Warehouse Details</h2>
  <TextField name="Warehouse Name" placeholder="Warehouse Name"/>
  <TextField name="Street Address" placeholder="Street Address"/>
  <TextField name="City" placeholder="City"/>
  <TextField name="Country" placeholder="Country"/>
</div>

<div>
  <h3>Contact Details</h3>
  <TextField name="Contact Name" placeholder="Contact Name"/>
  <TextField name="Position" placeholder="Position"/>
  <TextField name="Phone Number" placeholder="Email"/>
</div>


  </main>;
}

export default AddWarehouse;
