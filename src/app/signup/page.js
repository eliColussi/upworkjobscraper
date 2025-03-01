'use client'

import Link from 'next/link';
import { signUp } from '../actions/auth';
import { useState } from 'react';

export default function Signup() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData) {
    setIsLoading(true);
    setError('');
    const result = await signUp(formData);
    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-6">Create Account</h2>
          <form className="space-y-4" action={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                name="email"
                type="email" 
                placeholder="your@email.com" 
                className="input input-bordered w-full" 
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                name="password"
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full" 
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input 
                name="confirmPassword"
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full" 
                required
              />
            </div>
            {error && (
              <div className="text-error text-sm text-center">{error}</div>
            )}
            <button 
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
          <div className="divider">OR</div>
          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
