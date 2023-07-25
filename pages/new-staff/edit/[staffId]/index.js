import Edit from "@/components/staffs/edit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
function EditStaff() {
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
  return <Edit staff={data} />;
}
export default EditStaff;
