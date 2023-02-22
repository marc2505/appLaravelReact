import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../node_modules/draft-js/dist/Draft.css"

export default class Wisiwig extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    
  }


  

  onEditorStateChange = (editorState) => {
    this.setState({
        editorState,
    })
}
  
    render() {
      
        const {editorState} = this.state 
        // this.props.setTextValue(
        //   draftToHtml(convertToRaw(editorState.getCurrentContent()))
        // );
        // this.props.setTextValue(
        //   draftToHtml(convertToRaw(editorState.getCurrentContent()))
        // );
        // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))

    return (
        <>
      <Editor
            // defaultEditorState={this.state.editorState}
            placeholder='Entrer la description de la prestation' 
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange.bind(this)}
        />

        <textarea disabled id='wisiwig' style={{ width:'100%' }} value={
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }></textarea>
        </>
    )
  }
}
