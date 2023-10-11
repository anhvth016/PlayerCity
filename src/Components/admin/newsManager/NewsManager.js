import React, { useState, useEffect } from "react";
import axios from 'axios';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";

const NewsManager = () => {
	const [editorData, setEditorData] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(editorData);


		const news = {
			id: uuid(),
			content: editorData
		};
		// GOI API DE LUU NEWS
		axios.post(`http://localhost:8000/news`, news).then((res) => {
			console.log(res);
			console.log(res.data);
		});
	};

	useEffect(() => {}, []);

  ClassicEditor.create(document.querySelector("#editor"), {
		plugins: [Base64UploadAdapter /* ... */],
		toolbar: [
			/* ... */
		],
	})
		.then(/* ... */)
		.catch(/* ... */);

	return (
		<div style={{ paddingTop: "90px" }}>
			<h2>Using CKEditor&nbsp;5 build in React</h2>
			<form onSubmit={handleSubmit}>
        <div id="editor"></div>
				{/* <CKEditor
					editor={ClassicEditor}
					data={editorData}
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log("Editor is ready to use!", editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
						setEditorData(data);
					}}
					onBlur={(event, editor) => {
						console.log("Blur.", editor);
					}}
					onFocus={(event, editor) => {
						console.log("Focus.", editor);
					}}
				/> */}
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
};

export default NewsManager;
