
import React, { useState } from "react";

import "./TextAreaDeleteButton.css";

const TextAreaButton = () => {
    const [text, setText] = useState("");

    return (
        <div class="container">
            <button onClick={() => setText("")}> &#x2715; </button>
            <textarea value={text} onChange={(e) => setText(e.target.value)}>{text}</textarea>
        </div>
    )
}

export default TextAreaButton;