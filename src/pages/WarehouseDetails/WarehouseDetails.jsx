import PageTitle from "../../components/PageTitle/PageTitle";
import PageTitleWithSearch from "../../components/PageTitleWithSearch/PageTitleWithSearch";
import "./WarehouseDetails.scss";

function WarehouseDetails({
  warehouse_name,
  address,
  contact_name,
  contact_position,
  contact_phone,
  contact_email,
}) {
  return (
    <main className="warehouse-details">
      <PageTitleWithSearch title="Seattle" />
      <article className="warehouse-details__card">
        <div className="warehouse-details__address">
          <h4>WAREHOUSE ADDRESS:</h4>
          <p>{address}</p>
        </div>
        <div className="warehouse-details__contact-container">
          <div className="warehouse-details__contact">
            <h4>CONTACT NAME:</h4>
            <p>{contact_name}</p>
            <p>{contact_position}</p>
          </div>
          <div className="warehouse-details__contact">
            <h4>CONTACT INFORMATION:</h4>
            <p>{contact_phone}</p>
            <p>{contact_email}</p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default WarehouseDetails;
