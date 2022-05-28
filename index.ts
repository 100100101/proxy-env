const processEnv = process.env
export const proxyEnv = new Proxy(processEnv, {
    get: (target: typeof processEnv, prop: string) => {
        if (prop in target) {
            return target[prop]
        }
        throw new Error(`process.env not contain '${prop}'`)
    },
})
