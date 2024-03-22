"use client";

import { useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { modules, formats } from "./EditorToolbar";
import AdminProductContext from "../store/contexts/AdminProductContext";
import { SetFormProduct } from "../store/acttions/adminPrdActions";

export const Editor = () => {
    const { state, dispatch } = useContext(AdminProductContext);

    const { dataFormNewPrd: description } = state;

    const handlerGetInput = (content, delta, source, editor) => {
        dispatch(SetFormProduct({ description: content }));
    };
    return (
        <div className="text-editor">
            <QuillToolbar />
            <ReactQuill
                theme="snow"
                name="description"
                value={description.description}
                onChange={(e) => handlerGetInput(e)}
                placeholder={"Nội dung sản phẩm..."}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};

export default Editor;
