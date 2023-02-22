import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class WisiwigCat extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     editorState: EditorState.createWithContent(
  //       ContentState.createFromBlockArray(
  //         convertFromHTML(props.description)
  //       )
  //     )
  //   }
  // }
  
  state = {
    editorState: EditorState.createEmpty(),
  }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }
  
    render() {
        const {editorState} = this.state 

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
            onEditorStateChange={this.onEditorStateChange}
        />

        <textarea disabled id='wisiwig' style={{ width:'100%' }} value={
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }></textarea>
        </>
    )
  }
}
