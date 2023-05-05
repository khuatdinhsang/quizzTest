import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { Box } from "@mui/material";

const Test = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <Box sx={{ width: "600px", color: "red" }}>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
    </Box>
  );
};
export default Test;
