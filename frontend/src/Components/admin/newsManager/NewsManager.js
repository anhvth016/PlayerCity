import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./newsManager.css";
import DisplayNews from "./DisplayNews";
import AdminLayout from "../../../Hoc/adminLayout/AdminLayout";
import { showErrorToast, showSuccessToast } from "../../ultils/tools";

const NewsManager = () => {
  const quillRef = useRef(null);
  const [editorData, setEditorData] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editorData);

    const news = {
      title,
      detail: {
        content: editorData,
      },
    };
    // GOI API DE LUU NEWS
    axios.post(`${process.env.REACT_APP_API_URL}/news`, news).then((res) => {
      console.log(res.data);
      showSuccessToast('Lưu thành công');
    }, err => showErrorToast('Lưu thất bại'));
  };

  useEffect(() => {}, []);

  function imageHandler() {
    var range = this.quill.getSelection();
    var value = prompt("What is the image URL");
    if (value) {
      this.quill.insertEmbed(range.index, "image", value, Quill.sources.USER);
    }
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
		<AdminLayout title="Tin tức thể thao">
			<div className="news_manager">
				<form onSubmit={handleSubmit}>
					{/* <input
        type="text"
        placeholder="Tiêu đề bài báo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}
					<TextField
						id="name"
						name="name"
						label="Tiêu đề bài báo"
						variant="filled"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>

					{/* <TextField
						id="name"
						name="name"
						variant="outlined"
						placeholder="Tiêu đề bài báo"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/> */}
					<div className="editor_container">
						<div className="content">Nội dung</div>
						<ReactQuill
							modules={modules}
							formats={formats}
							theme="snow"
							value={editorData}
							onChange={setEditorData}
							style={{ height: "100%" }}
						/>
						<Button
							type="submit"
							variant="contained"
							color="primary"
              style={{marginTop: '10px'}}
						>
							Lưu
						</Button>
					</div>
				</form>
			</div>
			{/* <DisplayNews /> */}
		</AdminLayout>
	);
};

export default NewsManager;
