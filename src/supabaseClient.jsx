import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mjkmlqgoiqxklczsekkz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qa21scWdvaXF4a2xjenNla2t6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMjM5NDAsImV4cCI6MjA2MDc5OTk0MH0.66Tc5I8vHmRaWLM6uzI51LTXCMJ7RaeKAaBjo2um1a8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
