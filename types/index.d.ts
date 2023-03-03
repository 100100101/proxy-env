export type TEnvValue = boolean | number | string
export type TGet = (target: typeof process.env, prop: string) => TEnvValue
export type TProxyEnv = {
    [key: string]: TEnvValue
}
