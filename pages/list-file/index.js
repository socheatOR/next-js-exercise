import ListFileUpload from "@/components/file-upload";
import { useEffect, useState } from "react";
import axios from "axios";
function ListFile() {
    const [data, setData] = useState([]);
    async function fetchData() {
        try {
          const response = await axios.get("http://127.0.0.1:3001/files-uploads/list-file");
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    async function handleDownload(id) {
      const response = await axios.get(
        "http://127.0.0.1:3001/files-uploads/fetch-file/" + id
      );

      const linkSource = `data:application/pdf;base64,${response.data}`;
      const downloadLink = document.createElement("a");
      const fileName = "file.pdf";

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
    return (
      <div>
        <ListFileUpload listFile={data} onDownload={handleDownload} />
      </div>
       
    );
}
export default ListFile;