const dotenv = require('dotenv');
dotenv.config();

const { createClient } = require('@supabase/supabase-js');

// Creates connection to supabase db
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
