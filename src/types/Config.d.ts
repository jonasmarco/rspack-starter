export interface EnvConfig {
  path: string;
  baseUrl: string;
  endpoint?: string;
  secret?: string;
}

export interface AppConfig extends EnvConfig {
  env: string;
  host: string;
  port: number;
  cookieName: string;
}

export interface TargetEnvConfig {
  [key: string]: EnvConfig;
}
