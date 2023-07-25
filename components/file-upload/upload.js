import { Container, Grid } from "@mui/material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";

function FileUpload() {
    const router = useRouter();
    const [selectedFile, setFile] = useState(null);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    async function submitHandler(event) {
        if (!selectedFile) return;
        try {
            event.preventDefault();
            const formData = new FormData();
            formData.append("file", selectedFile, selectedFile.name);
            
            await axios.post(
                "http://127.0.0.1:3001/files-uploads/single", 
                formData,
                {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                }
            );
            router.push('list-file');

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Container
        maxWidth="md"
        sx={{
            bgcolor: "white",
            p: 5,
            border: "1px solid grey",
            borderRadius: "0.5rem",
        }}
        >
        <form onSubmit={submitHandler} action='form'>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <input
                    type="file"

                    // To select multiple files
                    //multiple="multiple"
                    onChange={(e) => handleFileChange(e)}
                />
            </Grid>
            <Grid item xs={12} align="left">
                <Button
                type="submit"
                variant="outlined"
                startIcon={<BookmarksIcon />}
                >
                Submit
                </Button>
            </Grid>
            </Grid>
        </form>
        </Container>
    );
}

export default FileUpload;
