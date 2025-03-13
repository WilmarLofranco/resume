import { useState } from "react";
import { Education } from "./Education.jsx";

export default function EducationList () {
    const [educationList, setEducationList] = useState([
        {
            id: 1,
            school: "Bukidnon State University",
            degree: "Bacheclor of Science in Information Technology",
            schoolAddress: "Malaybalay City, Bukidnon",
            startYear: 2009,
            endYear: 2013,
        }
    ])

    const addEducation = () => {
        setEducationList([
            ...educationList,
            {
                id: Date.now(),
                school: "",
                degree: "",
                schoolAddress: "",
                startYear: "",
                endYear: "",
            }
        ])
    }

    const deleteEducation = (id) => {
        setEducationList((prev) => prev.filter((edu) => edu.id !== id))
    }

    return (
        <div className="education">
          <h2>Education</h2>
          <button onClick={addEducation}>Add</button>
          {educationList.map((edu) => (
            <Education key={edu.id} educationData={edu} onDelete={deleteEducation} />
          ))}
        </div>
      );
}

