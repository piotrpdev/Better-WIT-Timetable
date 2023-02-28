import Button from "react-bootstrap/Button";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function DayList({ currentDay, setDay }) {
  return (
      {days.map((day) => (
          <Button
            variant={`${currentDay === day ? "primary" : "outline-primary"}`}
            onClick={() => setDay(day)}
          >
            {day}
          </Button>
      ))}
  );
}
