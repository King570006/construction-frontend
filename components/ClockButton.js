export default function ClockButton({ projectId }) {
  const clockIn = () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      await fetch("http://localhost:4000/api/clock/in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
          projectId,
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        })
      });
      alert("Clocked in");
    });
  };

  return (
    <button onClick={clockIn} style={{ padding: 20, fontSize: 18 }}>
      Clock In
    </button>
  );
}
