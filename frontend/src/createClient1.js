import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
    'https://dihtnyjteixpzgdpmnjy.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaHRueWp0ZWl4cHpnZHBtbmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMjEyNjgsImV4cCI6MjAzODU5NzI2OH0.xpwyRtrw_OwSBUiRfPV1PBnkp4x-xk8TRTMQ4Da2aec')