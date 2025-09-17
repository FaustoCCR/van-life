import { useState, useEffect, useCallback } from 'react'
/**
 * Custom hook to fetch data from an API endpoint.
 * @param {string} url
 * @param {RequestInit} options
 * @returns { {data: any, loading: boolean, error: Error | null, refetch: function} }
 */
export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(
    async abortController => {
      setLoading(true)
      try {
        const response = await fetch(url, {
          ...options,
          signal: abortController.signal,
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    [url],
  )

  useEffect(() => {
    const abortController = new AbortController()
    fetchData(abortController)

    return () => {
      abortController.abort()
    }
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}
