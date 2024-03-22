// "use client" directive indicates this code will run only on the client-side
import { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // Import dynamic from 'next/dynamic' to dynamically import components

const DynamicEditor = dynamic(() => import("@/app/admin/components/Editor"), {
    ssr: false, // Disable server-side rendering for this component
});

const EditorWrapper = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div>
            {isClient && <DynamicEditor />}{" "}
            {/* Render the Editor component only on the client-side */}
        </div>
    );
};

export default EditorWrapper;
