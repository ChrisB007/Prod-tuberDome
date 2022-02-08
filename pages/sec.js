import supabase from "../utils/supabaseClient";

import { Auth, Button, Typography } from "@supabase/ui";

const { Text } = Typography;

// Create a single supabase client for interacting with your database

const Container = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        {console.log(user)}
        <Text>Signed in: {user.email}</Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

export default function Home() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth providers={["twitch", "google"]} supabaseClient={supabase} />
      </Container>
    </Auth.UserContextProvider>
  );
}
