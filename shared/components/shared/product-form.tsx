interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

const ProductForm: React.FC<Props> = ({ product, onSubmit: _onSubmit }) => {
  return <div>product-form</div>;
};

export { ProductForm };
