import React, { useEffect, useState } from "react";
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
    const [categories, setCategories] = useState([]);
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/inventories/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Failed to fetch categories.', error);
            }
        };

        const fetchWarehouses = async () => {
            try {
                const response = await axios.get('/api/warehouses');
                setWarehouses(response.data);
            } catch (error) {
                console.error('Failed to fetch warehouses.', error);
            }
        };

        fetchCategories();
        fetchWarehouses();

    }, []);

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
        if (name === 'status' && value === 'Out of Stock') {
            setFormData({...formData, status: value, quantity: ''});
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    return (
        <>
            <Header />
            <main>
                <form className="add-item-form" onSubmit={handleSubmit}>
                    <h2 className="add-item-form__title">Add New Inventory Item</h2>
                    <div className="add-item-form__section">
                        <h3 className="add-item-form__section-title">Item Details</h3>
                        <div className="add-item-form__group">
                            <label className="add-item-form__label" htmlFor="itemName">Item Name</label>
                            <input 
                                type="text"
                                name="item_name"
                                placeholder="Item Name"
                                value={formData.item_name}
                                onChange={handleChange}
                                className={`add-item-form__input ${errors.item_name ? 'add-item-form__input--error' : ''}`}
                                />
                            {errors.item_name && <span className="add-item-form__error-message">{errors.item_name}</span>}
                        </div>
                        <div className="add-item-form__group">
                            <label className="add-item-form__label" htmlFor="description">Description</label>
                            <textarea 
                                name="description"
                                placeholder="Please enter a brief item description..."
                                value={formData.description}
                                onChange={handleChange}
                                className={`add-item-form__textarea ${errors.description ? 'add-item-form__textarea--error' : ''}`}
                                />
                            {errors.description && <span className="add-item-form__error-message">{errors.description}</span>}
                        </div>
                        <div className="add-item-form__group">
                            <label className="add-item-form__label" htmlFor="category">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className={`add-item-form__select ${errors.category ? 'add-item-form__select--error' : ''}`}
                                >
                                <option value="">Please select</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                ))}
                                </select>
                            {errors.category && <span className="add-item-form__error-message">{errors.category}</span>}
                        </div>
                    </div>
                    <div className="add-item-form__section">
                        <h3 className="add-item-form__section-title">Item Availability</h3>
                        <div className="add-item-form__group">
                            <label className="add-item-form__label" htmlFor="status">Status</label>
                            <div>

                            </div>
                            {errors.item_name && <span className="add-item-form__error-message">{errors.item_name}</span>}
                        </div>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    );
}

export default AddNewItemForm;
