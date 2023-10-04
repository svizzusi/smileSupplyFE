import OrderFormDashBoard from "../components/OrderFormDashboard/OrderFormDashBoard";

const OrderFormPage = (productId, setProductId) => {
  return (
    <>
      <OrderFormDashBoard productId={productId} setProductId={setProductId} />
    </>
  )
};

export default OrderFormPage;

