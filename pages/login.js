export default function Login() {
  const login = async e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      }
    );

    const data = await res.json();
    localStorage.token = data.token;
    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={login}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" />
      <button>Login</button>
    </form>
  );
}
