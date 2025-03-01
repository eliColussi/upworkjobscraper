'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from '../actions/auth'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [jobs, setJobs] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function getUser() {
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error || !user) {
        router.replace('/login')
      } else {
        setUser(user)
      }
      setLoading(false)
    }

    getUser()
  }, [router])

  const handleSearch = async (e) => {
    e.preventDefault()
    setIsSearching(true)
    try {
      const response = await fetch(`/api/scrape?query=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      setJobs(data.items || [])
    } catch (error) {
      console.error('Error searching jobs:', error)
      // You might want to show an error message to the user here
    } finally {
      setIsSearching(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white rounded-2xl p-6 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <form action={signOut}>
            <button type="submit" className="btn btn-outline btn-primary">
              Sign Out
            </button>
          </form>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Find Upwork Jobs</h2>
          <form onSubmit={handleSearch} className="flex gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g., Full Stack Developer, UI Designer"
              className="input input-bordered flex-grow"
              required
            />
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={isSearching}
            >
              {isSearching ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Searching...
                </>
              ) : (
                'Search Jobs'
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Job Results</h2>
          {jobs.length > 0 ? (
            <div className="grid gap-6">
              {jobs.map((job, index) => (
                <div key={index} className="card bg-base-100 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="card-body">
                    <h3 className="card-title text-lg font-medium">{job.title}</h3>
                    <p className="text-gray-600">{job.description}</p>
                    <div className="flex gap-4 mt-4">
                      <div className="badge badge-outline">{job.budget}</div>
                      <div className="badge badge-outline">{job.category}</div>
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <a 
                        href={job.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-sm"
                      >
                        View Job
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              {isSearching ? (
                <p>Searching for jobs...</p>
              ) : (
                <p>Search for jobs to see results here</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
