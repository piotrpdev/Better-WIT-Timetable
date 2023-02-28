import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

export default function SubjectList({
  subjects,
  checkedSubjects,
  setCheckedSubjects
}) {
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      if (!checkedSubjects.includes(event.target.value)) {
        setCheckedSubjects((prevState) => [...prevState, event.target.value]);
      }
    } else {
      setCheckedSubjects((prevState) =>
        prevState.filter((day) => day !== event.target.value)
      );
    }
  };

  return (
    <div className="subjectListContainer">
      <div>
        <Accordion>
          <Accordion.Item eventKey="0"></Accordion.Item>
          <Accordion.Header>Show Modules</Accordion.Header>
          <Accordion.Body>
            <div className="subjectList">
              {subjects.map((subject) => (
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={`${subject}`}
                    id={`${subject}`}
                    onChange={handleCheckboxChange}
                  />
                  <label class="form-check-label" for={`${subject}`}>
                    {subject.substring(subject.indexOf(" ") + 1)}
                  </label>
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion>
      </div>
    </div>
  );
}
