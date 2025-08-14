
const CartTotal = () => {
  return (
    <div className="w-full sm:w-[60%] lg:w-[50%] border-2 border-gray-400 mt-4 sm:mt-0">
      
      <div className="border-b-2 border-gray-400 p-3">
        <h3 className="font-medium text-gray-700 text-lg">Cart Totals</h3>
      </div>

      <div className="flex justify-between items-center px-4 py-2 border-b-2 border-gray-300">
        <p className="text-gray-700 font-medium">Subtotal</p>
        <p>$166.00</p>
      </div>

      <div className="flex justify-between items-center px-4 py-2 border-b-2 border-gray-300">
        <p className="text-gray-700 font-medium">Total</p>
        <p>$166.00</p>
      </div>

      <div className="px-4 py-4">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition-all duration-300">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
