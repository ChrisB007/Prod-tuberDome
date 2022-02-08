import supabase from "../../utils/supabaseClient";

const auth = (req, res) => {
  supabase.auth.api.setAuthCookie(req, res);
};

export default auth;
