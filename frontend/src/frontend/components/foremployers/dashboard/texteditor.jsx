import React from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const TextEditor = () => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        // editor={ClassicEditor}
        // data={editorData} // Bind data from state to CKEditor
        // onChange={handleEditorChange}
      />
    </div>
  )
}

export default TextEditor
