import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://rmjnamqvwlrzupbvfoob.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtam5hbXF2d2xyenVwYnZmb29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MjY1MjIsImV4cCI6MjAyODUwMjUyMn0.C9YqcP-IYyaD-Iiwn_4rzJWNhFadfvJQAnF1cN73n9U"


// Create a single supabase client for interacting with your database
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)