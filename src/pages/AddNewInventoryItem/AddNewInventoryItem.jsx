import React, { useState } from "react";
import axios from 'axios';
import './AddNewInventoryItem.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AddNewItemForm = ({ onAddItem }) => {
    const [formData, setFormData] = useState({
        warehouse_id: '',
        item_name: '',
        description: '',
        category: '',
        status: 'In Stock',
        quantity: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        Object.keys(formData).forEach(key => {
            if (!formData[key] && key != 'quantity') {
                newErrors[key] = 'This field is required.';
            }
        });

        if (formData.status === 'In Stock' && !formData.quantity) {
            newErrors.quantity = 'Quantity is required when status is In Stock.';
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
            const response = await axios.post('/api/inventories', formData);
            onAddItem(response.data);
            setFormData({
                warehouse_id: '',
                item_name: '',
                description: '',
                category: '',
                status: 'In Stock',
                quantity: ''
            });
        } catch (error) {
            console.error('Failed to add inventory item.', error);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <>
         <Header />
         <main>
         <form className="add-item-form" onSubmit={handleSubmit}>
            <h2 className="add-item-form__title">Add New Inventory Item</h2>
        </form>
         </main>
         <Footer />
        </>
    );
}

export default AddNewItemForm;
