import style from './UserProfileProducts.module.css'

const UserProfileProductsHeader = () => {
  return (
    <thead>
      <tr>
        <td>#</td>
        <td>Product Name</td>
        <td>Product ID</td>
        <td>Product Price</td>
        <td>Product Quantity</td>
        <td>Order Frequency</td>
        <td>Edit Order</td>
        <td>Delete Order</td>
        <td>Add to Order</td>
      </tr>
    </thead>
  )
};

export default UserProfileProductsHeader;
