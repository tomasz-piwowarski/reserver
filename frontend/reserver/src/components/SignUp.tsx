'use client'

import { useState } from 'react'
import { redirect } from 'next/navigation'
import SignUpForm from './SignUpForm'

export default function SignUp (): JSX.Element {
  const [loading, setLoading] = useState(false)

  async function handleSubmit (formData: FormData): Promise<void> {
    setLoading(true)

    const options = {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    }

    try {
      await fetch(`${process.env.DJANGO_URL}/user/register/`, options)

      redirect('/api/auth/signin')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
		<>{loading ? <div>XD</div> : <SignUpForm handleSubmit={handleSubmit} />}</>
  )
}
