import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Box } from '@mui/material';
import JoditEditor from 'jodit-react';
import audio from '../../KhongTheSay-HIEUTHUHAI-9293024.mp3'
import Test1 from './Test1';
import { useNavigate } from 'react-router-dom';
const Editor = () => {
    const editor = useRef(null);
    const navigate = useNavigate()
    const [content, setContent] = useState('');
    const config = {
        uploader: {
            insertImageAsBase64URI: true,
            filebrowser: true,

        },
        extensions: ['jpg', 'png', 'gif', 'jpeg', 'wav', 'mp3'],
        removeButtons: ['source', 'fullsize', 'about', 'outdent', 'indent', 'video', 'print', 'table', 'fontsize', 'superscript', 'subscript', 'file', 'cut', 'selectall'],
        placeholder: 'Writing here...',
    };
    const handleBlur = (newContent) => {
        setContent(newContent);

    };
    function handleInsertAudio() {
        const audioElement = `<audio controls src="${audio}"></audio>`;
        const audioElement1 = `<p>Sang</p>`;
        editor.current?.editor?.insertHTML(audioElement1);
    }
    return (
        <Box sx={{ height: 'auto' }}>
            <JoditEditor
                ref={editor}
                value={content}
                onBlur={handleBlur}
                config={config}
            // onChange={handleChange}  
            />
            {/* <Test1 data={content} /> */}
            <button onClick={handleInsertAudio}>Insert Audio</button>
            {/* <audio controls src={audio}></audio> */}
        </Box>
    )
}

export default Editor