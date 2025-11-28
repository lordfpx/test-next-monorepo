type RouteOverrides = {
  mainUrl?: string;
  publicUrl?: string;
  clientUrl?: string;
  storybookUrl?: string;
};

export type Routes = {
  main: string;
  public: string;
  client: string;
  storybook: string;
};

const envStorybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL;
const envMainUrl = process.env.NEXT_PUBLIC_MAIN_URL;
const envPublicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL;
const envClientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
const isDev = process.env.NODE_ENV !== "production";

export function getRoutes(overrides: RouteOverrides = {}): Routes {
  // En production, on laisse Next appliquer automatiquement le basePath sur les liens <Link>.
  // En dev, on continue de pointer vers les apps dédiées si elles tournent sur leurs ports.
  const defaultMainUrl = isDev ? "http://localhost:3000/" : "/";
  const defaultPublicUrl = isDev ? "http://localhost:3001/" : "/public";
  const defaultClientUrl = isDev ? "http://localhost:3002/" : "/client";
  const defaultStorybookUrl = isDev ? "http://localhost:6007/" : "/storybook";

  const mainUrl = overrides.mainUrl ?? envMainUrl ?? defaultMainUrl;
  const publicUrl = overrides.publicUrl ?? envPublicUrl ?? defaultPublicUrl;
  const clientUrl = overrides.clientUrl ?? envClientUrl ?? defaultClientUrl;
  const storybookUrl = overrides.storybookUrl ?? envStorybookUrl ?? defaultStorybookUrl;

  return {
    main: mainUrl,
    public: publicUrl,
    client: clientUrl,
    storybook: storybookUrl
  };
}
