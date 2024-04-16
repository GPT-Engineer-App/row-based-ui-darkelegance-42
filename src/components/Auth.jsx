import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Center, Container } from "@chakra-ui/react";

const AuthComponent = ({ supabaseClient }) => {
  return (
    <Center h="100vh">
      <Container maxW="50vw">
        <Auth supabaseClient={supabaseClient} appearance={{ theme: { ...ThemeSupa, colors: { ...ThemeSupa.colors, primary: "red" } } }} providers={null} />
      </Container>
    </Center>
  );
};

export default AuthComponent;
