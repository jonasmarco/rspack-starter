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
  type: string;
  node: string;
  cookieName: string;
}

export interface TargetEnvConfig {
  [key: string]: EnvConfig;
}
