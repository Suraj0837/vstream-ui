import React from "react";
import { Link } from "react-router-dom";
import { BarChart, ClipboardList } from "lucide-react";
const AdminPage = () => {
  return (
    <div className="pt-24 max-w-6xl mx-auto">
      <h1 className="text-2xl">Admin Page</h1>
      <div className="pt-4 flex gap-4">
        <Link
          to="/admin/graph"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          <BarChart />
          Go to Graph Page
        </Link>
        <Link
          to="/admin/audit"
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          <ClipboardList />
          Go to Audit Page
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;