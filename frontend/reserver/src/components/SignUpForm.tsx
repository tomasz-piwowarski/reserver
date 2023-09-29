interface SignUpInterface {
  handleSubmit: (formData: FormData) => void
}

export default function SignUp ({ handleSubmit }: SignUpInterface): JSX.Element {
  return (
		<form action={handleSubmit}>
			<div>
				<label htmlFor="username">Username</label>
				<input type="text" placeholder="Your username" name="username" />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="text" placeholder="Your password" name="password" />
			</div>
			<div>
				<button>Submit</button>
			</div>
	</form>
  )
}
