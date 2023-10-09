interface SignUpProps {
  handleSubmit: (formData: FormData) => void;
}

export default async function SignUp({
  handleSubmit,
}: SignUpProps): Promise<JSX.Element> {
  return (
    <form action={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Your username"
          name="username"
          id="username"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Your password"
          name="password"
          id="password"
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
