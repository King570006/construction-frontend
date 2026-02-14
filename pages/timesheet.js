import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function Timesheet() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api("/api/clock/logs").then(setLogs);
  }, []);

  return (
    <div>
      <h1>Timesheet</h1>
      {logs.map(l => (
        <div key={l.id}>
          {l.clock_in} → {l.clock_out}
        </div>
      ))}
    </div>
  );
}