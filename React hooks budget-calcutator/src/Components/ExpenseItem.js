import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md'

const ExpenseItem = ({ expenses, onDeleteItem , onEditItem, edit}) => {
    const { id, charge, amount } = expenses;
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">{amount}</span>
            </div>
            <div>
                <button className="edit-btn" arial-label="edit button" onClick={() => onEditItem(id)}>
                    <MdEdit/>
                </button>
                <button className="clear-btn" arial-label="delete button" onClick={() => onDeleteItem(id)}>
                    <MdDelete/>
                </button>
            </div>
        </li>
    )
}
export default ExpenseItem;