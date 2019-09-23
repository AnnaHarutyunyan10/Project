import React, { Component } from 'react';
import ErrorBoundary from '.././errorBoundary/errorBoundary';

class FileBase64 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        files: [],
        };
    } 
    
    handleChange(e) {
        let files = e.target.files; // get the files
        let allFiles = []; // Process each file
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let reader = new FileReader(); // Make new FileReader
            reader.readAsDataURL(file); // Convert the file to base64 text
            reader.onload = () => { // on reader load somthing...
                let fileInfo = { // Make a fileInfo Object
                    name: file.name,
                    type: file.type,
                    size: Math.round(file.size / 1000) + ' kB',
                    base64: reader.result,
                    file: file,
                };
                allFiles.push(fileInfo); // Push it to the state
                if (allFiles.length === files.length) { // If all files have been proceed
                    if (this.props.multiple) this.props.onDone(allFiles); // Apply Callback function
                    else this.props.onDone(allFiles[0]);
                } // if
            } // reader.onload

        } // for
    } // handleChange

    render() {
        return (
            <ErrorBoundary>
                <input
                    type="file"
                    onChange={ this.handleChange.bind(this) }
                    multiple={ this.props.multiple } 
                    className="form-control-file border mb-2 rounded py-1"
                />
            </ErrorBoundary>
        );
    }
}

FileBase64.defaultProps = {
    multiple: false,
};

export default FileBase64;