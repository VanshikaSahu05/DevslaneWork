const Sorting = ({ SortData }) => {
  return (
    <div className="md:text-right h-full">
      <select
        onChange={SortData}
        className="border-1 border-gray-400 bg-gray-100 px-5 py-1 outline-0 w-full"
        id="dropDown"
      >
        <option value="Default Sort">Default Sort</option>
        <option value="Sort by title">Sort by title</option>
        <option value="Sort by Price:low to high">
          Sort by Price:low to high
        </option>
        <option value="Sort by Price:high to low">
          Sort by Price:high to low
        </option>
      </select>
    </div>
  );
};

export default Sorting;
