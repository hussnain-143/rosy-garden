import cate from "../../../src/json/item.json";

const Sidebar = ({ setCat, cat }) => {
  const categories = [...new Set(cate.map((i) => i.category))];

  return (
    <div className="bg-white border sticky top-31 border-gray-200 rounded-xl shadow-sm p-5 flex flex-col gap-3">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>

      {/* All category button */}
      <button
        onClick={() => setCat("all")}
        className={`text-left px-3 py-2 rounded-md transition cursor-pointer ${
          cat === "all"
            ? "text-red-custom bg-gray-100 font-semibold"
            : "text-gray-700 hover:text-green-600 hover:bg-gray-100"
        }`}
      >
        All
      </button>

      {/* Dynamic categories */}
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => setCat(c)}
          className={`text-left px-3 py-2 rounded-md transition cursor-pointer ${
            cat === c
              ? "text-red-custom bg-gray-100 font-semibold"
              : "text-gray-700 hover:text-green-600 hover:bg-gray-100"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
