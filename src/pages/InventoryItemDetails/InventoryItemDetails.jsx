import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { api_URL } from "../../utils/const";
import "./InventoryItemDetails.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import StatusTag from "../../components/StatusTag/StatusTag";

function InventoryItemDetails() {
  const { inventoryItemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (inventoryItemId) {
      const fetchItemDetails = async () => {
        try {
          const response = await axios.get(
            `${api_URL}/api/inventories/${inventoryItemId}`
          );
          setItem(response.data);
        } catch (error) {
          console.error("Failure fetching item details", error);
        }
      };
      fetchItemDetails();
    }
  }, [inventoryItemId]);

  if (!item) {
    return <p>Getting item details</p>;
  }

  const {
    id,
    warehouse_name,
    item_name,
    description,
    category,
    status,
    quantity,
  } = item;

  // const inStockClassName = "inventory-item__in-stock";
  // const outOfStockClassName = "inventory-item__out-of-stock";

  return (
    <main className="inventory-item">
      <PageTitle
        title={item_name}
        backLink="/inventory"
        showEdit={true}
        editLink={`/inventory/${id}/edit`}
      />
      <article className="inventory-item__card">
        <div className="inventory-item__container-1">
          <div className="inventory-item__detail">
            <h4>ITEM DESCRIPTION:</h4>
            <p className="inventory-item__text">{description}</p>
          </div>
          <div className="inventory-item__detail">
            <h4>CATEGORY:</h4>
            <p className="inventory-item__text">{category}</p>
          </div>
        </div>
        <div className="inventory-item__container-2">
          <div className="inventory-item__container-top">
            <div className="inventory-item__detail inventory-item__top">
              <h4>STATUS:</h4>
              <StatusTag status={status} extraClass="inventory-item__text" />
              {/* <p
                className={
                  status === "In Stock" ? inStockClassName : outOfStockClassName
                }
              >
                {status}
              </p> */}
            </div>
            <div className="inventory-item__detail inventory-item__top">
              <h4>QUANTITY:</h4>
              <p className="inventory-item__text">{quantity}</p>
            </div>
          </div>
          <div className="inventory-item__detail">
            <h4>WAREHOUSE:</h4>
            <p className="inventory-item__text">{warehouse_name}</p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default InventoryItemDetails;
