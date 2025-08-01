const HeadingRow = () => {
  return (
    <div className="hidden sm:grid grid-cols-5 gap-4 px-4 py-3 border-b-2 border-gray-500 font-semibold text-gray-700 text-sm sm:text-base">
      <span>Remove</span>
      <span>Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Subtotal</span>
    </div>
  );
};

export default HeadingRow;
