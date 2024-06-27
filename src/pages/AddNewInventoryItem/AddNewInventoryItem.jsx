import React, { useEffect, useState } from "react";
import axios from 'axios';
import './AddNewInventoryItem.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import { api_URL } from "../../utils/const";
import DividerLine from "../../components/DividerLine/DividerLine";

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
                const response = await axios.get(`${api_URL}/api/inventories/categories`);
                console.log(response.data);
                setCategories(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Failed to fetch categories.', error);
                setCategories([]);
            }
        };

        const fetchWarehouses = async () => {
            try {
                const response = await axios.get(`${api_URL}/api/warehouses`);
                console.log(response.data);
                setWarehouses(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Failed to fetch warehouses.', error);
                setWarehouses([]);
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
        <main>
            <form className="add-item-form" onSubmit={handleSubmit}>
                <PageTitle className="add-item-form__title" title="Add New Inventory Item"/>
                <section className="add-item-form__container--top">
                <div className="add-item-form__section">
                    <h3 className="add-item-form__section-title">Item Details</h3>
                    <div className="add-item-form__group">
                        <label className="add-item-form__label" htmlFor="item_name">Item Name</label>
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
                            <option className="add-item-form__select--placeholder" value="">Please select</option>
                            {categories.map(category => (
                                <option key={category} value={category.name}>{category.name}</option>
                            ))}
                        </select>
                        {errors.category && <span className="add-item-form__error-message">{errors.category}</span>}
                    </div>
                </div>
                </section>
                <DividerLine />
                <section className="add-item-form__container">
                <div className="add-item-form__section">
                    <h3 className="add-item-form__section-title">Item Availability</h3>
                    <div className="add-item-form__group">
                        <label className="add-item-form__label" htmlFor="status">Status</label>
                        <div className="add-item-form__radio-group">
                            <label 
                                className={`add-item-form__radio-label ${formData.status === 'In Stock' ? 'add-item-form__radio-label--active' : ''}`}
                                htmlFor="radio"
                            >
                                <input 
                                    type="radio"
                                    name="status"
                                    value="In Stock"
                                    checked={formData.status === 'In Stock'}
                                    onChange={handleChange}
                                    className="add-item-form__radio-input"
                                />
                                In stock
                            </label>
                            <label 
                                className={`add-item-form__radio-label ${formData.status === 'Out of Stock' ? 'add-item-form__radio-label--active' : ''}`}
                                htmlFor="radio"
                            >
                                <input 
                                    type="radio"
                                    name="status"
                                    value="Out of Stock"
                                    checked={formData.status === 'Out of Stock'}
                                    onChange={handleChange}
                                    className="add-item-form__radio-input"
                                />
                                Out of stock
                            </label>
                        </div>
                        {errors.status && <span className="add-item-form__error-message">{errors.status}</span>}
                    </div>
                    {formData.status === 'In Stock' && (
                        <div className="add-item-form__group">
                            <label className="add-item-form__label" htmlFor="quantity">Quantity</label>
                            <input 
                                type="text"
                                name="quantity"
                                placeholder="0"
                                value={formData.quantity}
                                onChange={handleChange}
                                className={`add-item-form__input ${errors.quantity ? 'add-item-form__input--error' : ''}`}
                            />
                            {errors.quantity && <span className="add-item-form__error-message">{errors.quantity}</span>}
                        </div>
                    )}
                    <div className="add-item-form__group">
                        <label className="add-item-form__label" htmlFor="warehouse_id">Warehouse</label>
                        <select
                            name="warehouse"
                            value={formData.warehouse_id}
                            onChange={handleChange}
                            className={`add-item-form__select ${errors.warehouse_id ? 'add-item-form__select--error' : ''}`}
                            >
                            <option value="">Please select</option>
                            {warehouses.map(warehouse => (
                                <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                            ))}
                        </select>
                        {errors.warehouse_id && <span className="add-item-form__error-message">{errors.warehouse_id}</span>}
                    </div>
                </div>
                <div className="add-item-form__actions">
                    <button type="button" className="add-item-form__button add-item-form__button--cancel">Cancel</button>
                    <button type="submit" className="add-item-form__button add-item-form__button--submit">+ Add Item</button>
                </div>
                </section>
            </form>
        </main>
    );
}

export default AddNewItemForm;
