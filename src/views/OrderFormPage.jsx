import OrderFormDashBoard from "../components/OrderFormDashboard/OrderFormDashBoard";

const OrderFormPage = ({productId, setProductId, order, setOrder, toast}) => {

  return (
    <>
      <OrderFormDashBoard productId={productId} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast}/>
    </>
  )
};

export default OrderFormPage;

