import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
    'https://mxygrlevnsfdgvukikht.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14eWdybGV2bnNmZGd2dWtpa2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNDk1NzQsImV4cCI6MjAzNzgyNTU3NH0.96kid-1bN3cHGci7qVJv9ta08PYjwty01zK7D-rVQbg'
)