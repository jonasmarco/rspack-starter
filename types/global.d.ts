declare global {
  interface EnvConfig {
    path: string;
    baseUrl: string;
    endpoint?: string;
    secret?: string;
  }

  interface AppConfig extends EnvConfig {
    env: string;
    cookieName: string;
    port: number;
  }

  interface TargetEnvConfig {
    [key: string]: EnvConfig;
  }
}

export {};
