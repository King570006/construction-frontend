import ClockButton from "../components/ClockButton";

export default function Dashboard() {
  return (
    <div>
      <h1>Active Project</h1>
      <ClockButton projectId={1} />
    </div>
  );
}
