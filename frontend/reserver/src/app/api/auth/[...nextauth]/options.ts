import { NextAuthOptions, User } from "next-auth";
import { decode } from 'next-auth/jwt';
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentialns",
			credentials: {
				username: {
					label: "Username:",
					type: "text",
					placeholder: "Your username"
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "Your password"
				}
			},
			async authorize(credentials) {
				const options = {
					method: "POST",
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" }
				}

				try {
					const res = await fetch(`${process.env.DJANGO_URL}/api/token/`, options);
					
					const data = await res.json();
					if(data) return data;
				} catch (error) {
					console.log(error);
				}
				
				return null;
			}
		})
	]
}