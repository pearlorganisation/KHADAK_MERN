import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
// ----------------------------------------------------------------------------

const ReactTextEditor = ({ sendContent, onChange, existingTextEditorData }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(
    existingTextEditorData ? existingTextEditorData : ""
  );

  // editor value
  useEffect(() => {
    console.log("Jodit Editor Value: ", editor);
  }, [editor]);

  // content value
  useEffect(() => {
    if (content) {
      console.log("Jodit Editor Content: ", content);
      sendContent(content);
      onChange(content);
    }
  }, [content]);

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    </div>
  );
};

export default ReactTextEditor;
