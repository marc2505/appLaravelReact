// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import {CKEditor} from '@ckeditor/ckeditor5-react';
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

export default function CKeditor({ onChange, editorLoaded, name, value, placeholder }) {
    // const editorRef = useRef();
    // const { CKEditor, ClassicEditor } = editorRef.current || {};
    // useEffect(() => {
    // editorRef.current = {
    //      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, 
    //      ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
    //     };
    // }, []);
    return (
        <>
            {editorLoaded ? (
                <CKEditor
                    type=""
                    name={name}
                    // config={ {
                    //     plugins: [ Paragraph, Bold, Italic, Essentials ],
                    //     toolbar: [ 'bold', 'italic' ]
                    // } }
                    config={{ 
                        placeholder: placeholder
                     }}
                    // config={{
                    //     placeholder:'Entrer la description de la prestation',
                    //     // plugins: [
                    //     //     Alignment,
                    //     // ],
                    //     // alignment: {
                    //     //     options: ['left','right','center']
                    //     // },
                    //     // toolbar: {
                    //     //     items: [
                    //     //         'heading','|','bulletedList','numberedList','alignment','undo','redo'
                    //     //     ]
                    //     // },
                        
                    //     // toolbar: [
                    //     //     'heading','|','alignment:left','alignment:center','alignment:right','alignment:justify',
                    //     // ]
                    // }}
                    editor={Editor}
                    data={value}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        onChange(data);
                        console.log((editor.plugins.get( 'WordCount' ).wordCountContainer.innerText).split('Characters: ')[1])
                    }}
                />
            ) : (
                <div>Editor loading</div>
            )}
        </>
    )
}