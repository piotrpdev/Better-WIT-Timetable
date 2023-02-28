import { useState } from "react";
import DayEntries from "./components/DayEntries";
import DayList from "./components/DayList";
import SubjectList from "./components/SubjectList";
import "./styles.css";

// https://gist.github.com/piotrpdev/26a84b878b6de2ebbb4f78bbc1ae467c
import _timetableData from "./timetable.json";
import getSubjectsFromData from "./utils/getSubjectsFromData";
const timetableData = JSON.parse(_timetableData);

export default function App() {
  const [day, setDay] = useState("Monday");
  const [subjects] = useState(getSubjectsFromData(timetableData));
  const [checkedSubjects, setCheckedSubjects] = useState([]);

  return (
    <div className="App">
      <h1 className="mt-3 mb-4">WIT Timetable</h1>
      <DayList currentDay={day} setDay={setDay} />
      <SubjectList
        subjects={subjects}
        checkedSubjects={checkedSubjects}
        setCheckedSubjects={setCheckedSubjects}
      />
      <DayEntries
        dayTimetableData={timetableData[day].filter(
          (_entry) =>
            !checkedSubjects.includes(_entry["Subject Code and Title"])
        )}
      />
    </div>
  );
}
