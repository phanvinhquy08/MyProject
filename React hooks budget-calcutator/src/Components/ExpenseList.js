import React from 'react';
import { MdDelete } from 'react-icons/md'

import Item from './ExpenseItem';

const ExpenseList = ({ expenses, onClearAll, onDeleteItem, onEditItem, edit, idEdit }) => {
    expenses = edit ? expenses.filter(x => x.id === idEdit) : expenses;
    return (
        <>
            <ul className="list">
                {expenses.map(x => <Item
                    key={expenses.id}
                    expenses={x}
                    onDeleteItem={onDeleteItem}
                    onEditItem={onEditItem}
                />)}
            </ul>
            {expenses.length > 0 && (<button
                className='btn '
                onClick={onClearAll}
            >
                Clear
                <MdDelete className="btn-icon" />
            </button>)}
        </>
    )
}
export default ExpenseList;