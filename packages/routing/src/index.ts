type RouteOverrides = {
  basePath?: string;
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

const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const envStorybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL;
const envMainUrl = process.env.NEXT_PUBLIC_MAIN_URL;
const envPublicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL;
const envClientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
const isDev = process.env.NODE_ENV !== "production";

const normalizeBasePath = (value?: string) => {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";
  const withSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withSlash.endsWith("/") ? withSlash.slice(0, -1) : withSlash;
};

const withBasePath = (basePath: string) => {
  const safeBase = normalizeBasePath(basePath);
  return (path: string) => {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${safeBase}${normalizedPath}`;
  };
};

export function getRoutes(overrides: RouteOverrides = {}): Routes {
  const basePath = normalizeBasePath(overrides.basePath ?? envBasePath);
  const prefix = withBasePath(basePath);

  const defaultMainUrl = basePath || !isDev ? prefix("/") : "http://localhost:3000/";
  const defaultPublicUrl = basePath || !isDev ? prefix("/public") : "http://localhost:3001/";
  const defaultClientUrl = basePath || !isDev ? prefix("/client") : "http://localhost:3002/";
  const defaultStorybookUrl = basePath || !isDev ? prefix("/storybook") : "http://localhost:6007/";

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
