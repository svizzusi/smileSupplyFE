import ExistingProductsDashboard from "../components/ExistingProductsDashboard/ExistingProductsDashboard";


const ExistingProductsPage = ({productId, setProductId}) => {
  return (
    <>
      <ExistingProductsDashboard productId={productId} setProductId={setProductId} />
    </>
  )
};

export default ExistingProductsPage;
