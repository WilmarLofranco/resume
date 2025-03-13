import { useState } from "react";

function Education ({educationData, onDelete}) {
    const [formData, setFormData] = useState(educationData)
    const [modal, setModal] = useState(false);
    
    const handleModal = () => setModal(true);
    const handleCancel = () => setModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setModal(false);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleDelete = () => {
        onDelete(formData.id)
    }

    return (
        <div className="education-item">
            <div className="edu-description">
                <div>
                    <p><h3>{formData.school}</h3></p>
                    <p>{formData.schoolAddress}</p>
                </div>
                <div>
                    <p><h3>{formData.degree}</h3></p>
                    <p>{formData.startYear} - {formData.endYear}</p>
                </div>
            </div>
            <div className="edu-item-btn">
                <button onClick={handleModal}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>

            {modal && (
                <div className="modal-education">
                    <form onSubmit={handleSubmit}>
                        {Object.keys(formData).map((field) => 
                        field !== "id" ? (
                            <label>
                                <input
                                    type={field === "startYear" || field === "endYear" ? "number" : "text"}
                                    name={field}
                                    onChange={handleChange}
                                    placeholder={`Enter your ${field}`}
                                />
                            </label>
                        ) : null
                        )}
                        <div>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export { Education }