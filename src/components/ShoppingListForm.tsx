import React from "react";

function ShoppingListForm(): JSX.Element {
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("SUMMITTED!!!)")
    }
    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="product Name"/>
        <button type="submit">Add Item</button>
    </form>
    );
}

export default ShoppingListForm;