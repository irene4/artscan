import React, { Component } from 'react'
import { Icon, Button, Form } from 'semantic-ui-react'

export default class ImportButton extends Component<any, any> {

  constructor(props: any) {
    super(props)
    this.uploadSingleFile = this.uploadSingleFile.bind(this)
  }

  fileInputRef: React.RefObject<HTMLInputElement> = React.createRef();

  uploadSingleFile(e: any) {
    e.preventDefault();
    const url = URL.createObjectURL(e.target.files[0])
    this.props.updateImage(url);
  }

  render() {
    return (
        <div className="form-group">
            <input ref={this.fileInputRef} type="file" className="form-control" style={{ display: "none"}} onChange={this.uploadSingleFile} />
            <Button className="ui btn" color='yellow' onClick={(e) => { this.fileInputRef.current !== null ? this.fileInputRef.current.click() : console.log("error")}}>
              <Icon name='folder open' />
              Import a photo
            </Button>
        </div>
    )
  }
}


// function handle() {
//   console.log("clicked!!!!");
// }

// const ImportButton = () => {
//   return (
//       <div>
//         <Button color='yellow' onClick={ handle }><Icon name='folder open' />
//           Import a photo
//         </Button>
//       </div>
//       )
//   }

//export default ImportButton
