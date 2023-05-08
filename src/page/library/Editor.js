import React, { useMemo, useRef, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box } from '@mui/material';
import JoditEditor from 'jodit-react';
const Editor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    return (
        <Box sx={{ height: 'auto' }}>
            <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
            />
        </Box>
    )
}

export default Editor