const createClient = require("@supabase/supabase-js").createClient;
const dotenv = require("dotenv");
dotenv.config();
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

async function testConnection() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.log("Error:", error);
  } else {
    console.log("✅ Supabase connected successfully");
    console.log(data);
  }
}

testConnection();
