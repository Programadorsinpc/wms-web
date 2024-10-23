const Sidebar = () => {
  return (
    <aside className="w-64 h-screen pt-12 fixed bg-gray-800 text-white flex-shrink-0">
      {/* <div className="p-4">
        <h2 className="text-lg font-bold">WMS Navigation</h2>
      </div> */}
      <nav className="mt-2">
        <ul>
          <li className="p-2 hover:bg-gray-700">Dashboard</li>
          <li className="p-2 hover:bg-gray-700">Inventory</li>
          <li className="p-2 hover:bg-gray-700">Orders</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
