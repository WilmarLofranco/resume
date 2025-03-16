import { useState } from "react";

export default function ExperienceList () {
    const [experienceList, setExperienceList] = useState([
        {
            id: 1,
            jobTitle: "Data Analyst",
            company: "Mt. Kitanglad Agri-Ventures Inc.",
            address: "Lantapan, Bukidnon",
            startYear: 2013,
            endYear: 2017,
            roles: ["Lorem ipsum dolor sit amet consectetur adipisicing elit.",]
        }
    ])

    const addExperience = () => {
        setExperienceList([
            ...experienceList,
            {
                id: Date.now(),
                jobTitle: "",
                company: "",
                address: "",
                startYear: "",
                endYear: "",
                roles: [""]
            }
        ])
    }

    const deleteExperience = (id) => {
        setExperienceList((prev) => prev.filter((exp) => exp.id !== id))
    }

    return (
        <div className="experience">
          <h2>Experience</h2>
          <button onClick={addExperience}>Add</button>
          {experienceList.map((exp) => (
            <Experience key={exp.id} experienceData={exp} onDelete={deleteExperience} />
          ))}
        </div>
      );
}


function Experience ({experienceData, onDelete}) {
    const [formData, setFormData] = useState(experienceData)
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

    const getInputType = (field) => {
        if (field === "startYear" || field === "endYear") return "number";
        if (field === "roles") return "textarea";
        return "text";
      };

    const handleAddRole = () => {
        setFormData((prev) => ({
            ...prev, roles: [...prev.roles, ""],
        }))
    }

    const handleRemoveRole = (index) => {
        setFormData((prev) => ({
            ...prev,
            roles: prev.roles.filter((_, i) => i !== index)
        }));
    };

    return (
        <div className="experience-item">
            <div className="exp-description">
                <div>
                    <p><h3>{formData.jobTitle}</h3></p>
                    <p>{formData.address}</p>
                </div>
                <div>
                    <p><h3>{formData.company}</h3></p>
                    <p>{formData.startYear} - {formData.endYear}</p>
                </div>
            </div>
            <div>
                {formData.roles.map((role, index) => <li key={index}>{role}</li>)}
            </div>
            <div className="exp-item-btn">
                <button onClick={handleModal}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>

            {modal && (
                <div className="modal-experience">
                    <form onSubmit={handleSubmit}>
                        {Object.keys(formData).map((field) => 
                        field !== "id" && field !== "roles" ? (
                            <label key={field}>
                                <input
                                    type={getInputType(field)}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    placeholder={`Enter your ${field}`}
                                />
                            </label>
                        ) : null
                        )}

                        <div>
                            <h4>Roles</h4>
                            {formData.roles.map((role, index) => (
                                <div key={index} style={{ display: "flex", gap: "5px" }}>
                                    <textarea
                                        cols={40}
                                        value={role}
                                        onChange={(e) => {
                                            const updatedRoles = [...formData.roles];
                                            updatedRoles[index] = e.target.value;
                                            setFormData((prev) => ({ ...prev, roles: updatedRoles }));
                                        }}
                                        placeholder={`Role ${index + 1}`}
                                    />
                                    <button type="button" onClick={() => handleRemoveRole(index)}>Remove</button>
                                </div>
                            ))}
                            <button type="button" onClick={handleAddRole}>Add Role</button>
                        </div>

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
