const CartRow = ({ img, title, price, quantity,remove}) => {

  return (
    <div className="border-b-2 border-gray-500 p-4 text-sm sm:grid sm:grid-cols-5 sm:gap-4 sm:text-base">
      <div className="flex sm:justify-start justify-between items-center mb-2 sm:mb-0">
        <span className="sm:hidden font-medium text-gray-600">Remove</span>
        <button onClick={remove} className="text-gray-500 text-xl">✖</button>
      </div>

      <div className="flex  sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-2 sm:mb-0">
        <span className="sm:hidden font-medium text-gray-600 w-full text-left">Product</span>
        <div className="flex items-center gap-1">
          
          <img
            src={img}
            alt={title}
            className="w-16 h-16 object-cover rounded"
          />
          <p className="hidden text-red-500 text-xs font-medium sm:block">{title}</p>
        </div>
      </div>

      <div className="flex justify-between sm:block mb-2 sm:mb-0">
        <span className="sm:hidden font-medium text-gray-600">Price</span>
        <span className="pl-1">${price.toFixed(2)}</span>
      </div>

      <div className="flex justify-between sm:block mb-2 sm:mb-0">
        <span className="sm:hidden font-medium text-gray-600">Quantity</span>
        <input
          type="number"
          min="1"
          defaultValue={quantity}
          className="w-10 border rounded px-2 py-1 text-center"
        />
      </div>

      <div className="flex justify-between sm:block">
        <span className="sm:hidden font-medium text-gray-600">Subtotal</span>
        <span className="font-semibold">
          ${(price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartRow;
