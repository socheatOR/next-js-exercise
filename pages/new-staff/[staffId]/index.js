import Show from "@/components/staffs/show";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function ShowStaff() {
  const [data, setData] = useState([]);
  const router = useRouter();
  async function fetchData(staffId) {
    try {
      const response = await axios.get(
        "http://127.0.0.1:3001/staffs/" + staffId
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData(router.query.staffId);
  }, []);
  return <Show staff={data} />;
}

export default ShowStaff;
