import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { CircularProgress } from "@material-ui/core";

class ImageUploader extends Component {
	state = {
		name: "",
		isUploading: false,
		fileURl: "",
	};

	handleUploadStart = () => {
		this.setState({
			isUploading: true,
		});
	};

	handleUploadError = (e) => {
		console.log(e);
		this.setState({
			isUploading: false,
		});
	};

	handleUploadSuccess = (filename) => {
		console.log(filename);
		this.setState({
			name: filename,
			isUploading: false,
		});
		firebase
			.storage()
			.ref(this.props.dir)
			.child(filename)
			.getDownloadURL()
			.then((url) => {
				this.setState({ fileURl: url });
			});

    this.props.filename(filename)
	};

	render() {
		console.log(this.state.fileURl);
		return (
			<div>
				{!this.state.fileURl ? (
					<div>
						<FileUploader
							accept="image/*"
							name="image"
							randomizeFilename
							storageRef={firebase.storage().ref(this.props.dir)}
							onUploadStart={this.handleUploadStart}
							onUploadError={this.handleUploadError}
							onUploadSuccess={this.handleUploadSuccess}
						/>
					</div>
				) : null}

				{this.state.isUploading ? (
					<div
						className="progress"
						style={{ textAlign: "center", margin: "30px, 0" }}
					>
						<CircularProgress style={{ color: "#98c6e9" }} thickness={7} />
					</div>
				) : null}

				{this.state.fileURl ? (
					<div className="image_upload_container">
						<img style={{ width: "100%" }} src={this.state.fileURl} alt={this.state.name}/>
            <div className="remove" onClick={() => console.log('remove')}> Xoá</div>
					</div>
				) : null}
			</div>
		);
	}
}
export default ImageUploader;
