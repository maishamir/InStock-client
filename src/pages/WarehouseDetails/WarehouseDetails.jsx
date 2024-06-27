import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { api_URL } from "../../utils/const";
import "./WarehouseDetails.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
// cut for delete model
import Modal from "react-modal";
import closeIcon from "../../assets/images/icons/close-24px.svg";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

function WarehouseDetails() {
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState(null);
  // move for delete model
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    //whatever happens goes here
  }

  function closeModal() {
    setIsOpen(false);
  }
  // end cut

  useEffect(() => {
    if (warehouseId) {
      const fetchWarehouseDetails = async () => {
        try {
          const response = await axios.get(
            `${api_URL}/api/warehouses/${warehouseId}`
          );
          setWarehouse(response.data);
        } catch (error) {
          console.error("Failure fetching warehouse details", error);
        }
      };
      fetchWarehouseDetails();
    }
  }, [warehouseId]);

  if (!warehouse) {
    return <p>Getting warehouse information</p>;
  }

  const {
    warehouse_id,
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouse;

  return (
    <main className="warehouse-details">
      <PageTitle
        title={warehouse_name}
        backLink="/"
        showEdit={true}
        editLink={`/warehouse/${warehouse_id}`}
      />
      <article className="warehouse-details__card">
        <div className="warehouse-details__address">
          <h4>WAREHOUSE ADDRESS:</h4>
          <p className="warehouse-details__text">
            {address}, <br className="warehouse-details__break" />
            {city}, {country}
          </p>
        </div>
        <div className="warehouse-details__contact-container">
          <div className="warehouse-details__contact warehouse-details__contact-name">
            <h4>CONTACT NAME:</h4>
            <p className="warehouse-details__text">
              {contact_name}
              <br />
              {contact_position}
            </p>
          </div>
          <div className="warehouse-details__contact">
            <h4>CONTACT INFORMATION:</h4>
            <p className="warehouse-details__text">
              {contact_phone}
              <br />
              {contact_email}
            </p>
          </div>
        </div>
      </article>
      {/* cut for modal */}
      <div className="delete">
        <button onClick={openModal}>Replace with delete icon</button>
        <Modal
          className="delete__modal"
          overlayClassName="delete__overlay"
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Delete Modal"
        >
          <button className="delete__close-icon" onClick={closeModal}>
            <img className="delete__icon" src={closeIcon} alt="close icon" />
          </button>
          <div className="delete__content">
            <div className="delete__text">
              <h1 className="delete__header">
                Delete {warehouse_name} Warehouse?
              </h1>
              <p className="delete__text">
                Please confirm that you’d like to delete the {warehouse_name}{" "}
                from the list of warehouses. You won’t be able to undo this
                action.
              </p>
            </div>
            <div className="delete__buttons">
              <SecondaryButton buttonText="Cancel" onClick={closeModal} />
              <DeleteButton buttonText="Delete" />
            </div>
          </div>
        </Modal>
      </div>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae id quos
        asperiores labore blanditiis ducimus earum! Reprehenderit omnis,
        voluptas facere rem recusandae officia, ab dolor odit enim explicabo
        eveniet similique? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Obcaecati, vero. Fugit vitae itaque accusamus eveniet animi, rem,
        inventore deleniti natus veniam atque voluptatem, id consequatur
        aspernatur totam! Sit, similique quasi. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Qui accusamus eaque commodi nesciunt
        ratione perspiciatis quasi non itaque delectus dolores consequatur amet,
        repellendus nam suscipit sunt. Rem ratione inventore nulla? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Maiores, dolore! Nam,
        voluptas possimus in est et deserunt ratione commodi sint sit aut autem
        cupiditate non, consectetur nisi distinctio facilis nobis! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Nihil dicta est quis
        quaerat quae eos, ut fugit nobis ipsa, esse ab perferendis, consectetur
        pariatur omnis voluptates autem incidunt adipisci necessitatibus! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio in
        magnam voluptate fugiat quae ea vitae numquam voluptatum alias. Labore
        optio omnis eius quasi illum alias id consequuntur a.
      </span>
      {/* end cut */}
    </main>
  );
}

export default WarehouseDetails;
