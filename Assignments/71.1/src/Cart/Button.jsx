const CartButtons = ({onUpdateCart}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-4 gap-3 sm:gap-0">
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <input
          type="text"
          placeholder="Coupon code"
          className="border px-3 py-2 rounded w-full sm:w-48"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          APPLY COUPON
        </button>
      </div>

      <button
      onClick={onUpdateCart}
        className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-600  mt-2 sm:mt-0"
      >
        UPDATE CART
      </button>
    </div>
  );
};

export default CartButtons;
