import { Auth0Provider } from "@auth0/auth0-react";

const Auth0Wrapper = ({ children }) => {
  const domain = import.meta.env.VITE_DOMAIN_AUTH0;
  const clientId = import.meta.env.VITE_CLIENTID_AUTH0;
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin + "/admin",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0Wrapper;
