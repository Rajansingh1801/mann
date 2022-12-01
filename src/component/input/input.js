import React from "react";

function Inputfield({ name, placeholder, type, value, required, onChange }) {
    return (
        <div>
            <div className="form-group">
                <input type={type} name={name} placeholder={placeholder} value={value} required={required} onChange={onChange} />
            </div>
        </div>
    );
}

export default Inputfield;
