import { Inter } from "next/font/google";
import ListStaff from "@/components/staffs";
import axios from "axios";
import { useState, useEffect } from "react";
import "../node_modules/noty/lib/themes/bootstrap-v4.css";  
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://127.0.0.1:3001/staffs");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(staffId) {
    const response = await axios.delete(
      "http://127.0.0.1:3001/staffs/" + staffId
    );
    alert(response.data.msg);
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <ListStaff listStaff={data} onDelete={handleDelete} />;
}
