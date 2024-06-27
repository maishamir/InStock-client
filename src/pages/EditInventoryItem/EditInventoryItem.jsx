import React, { useEffect, useState } from "react";
import axios from 'axios';
import './EditInventoryItem.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import { api_URL } from "../../utils/const";

const EditItemForm = ({ itemId, onUpdateItem }) => {
    const [formData, setFormData] = useState({
        warehouse_id: '',
        item_name: '',
        description: '',
        category: '',
        status: 'In Stock',
        quantity: ''
    });

    const [errors, setErrors] = useState({});
    const [categories, setCategories] = useState([]);
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${api_URL}/api/inventories/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error('Failed to fetch categories.', error);
            }
        };

        const fetchWarehouses = async () => {
            try {
                const response = await axios.get(`${api_URL}/api/warehouses`);
                setWarehouses(response.data);
            } catch (error) {
                console.error('Failed to fetch warehouses.', error);
            }
        };

        const fetchItemDetails = async () => {
            try {
                const response = await axios.get(`${api_URL}/api/inventories/${itemId}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Failed to fetch item details.', error);
            }
        };

        fetchCategories();
        fetchWarehouses();
        fetchItemDetails();

    }, [itemId]);

    const validateForm = () => {
        const newErrors = {};

        Object.keys(formData).forEach(key => {
            if (!formData[key] && key != 'quantity') {
                newErrors[key] = 'This field is required.';
            }
        });

        if (formData.status === 'In Stock' && !formData.quantity) {
            newErrors.quantity = 'Quantity is required when status is In stock.';
        } else if (formData.quantity && isNaN(formData.quantity)) {
            newErrors.quantity = 'Quantity must be a number.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.put(`${api_URL}/api/inventories/${itemId}`, formData);
            onUpdateItem(response.data);
        } catch (error) {
            console.error('Failed to update inventory item.', error);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'status' && value === 'Out of Stock') {
            setFormData({...formData, status: value, quantity: ''});
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    return (
       <main></main> 
    );
}

export default EditItemForm;
