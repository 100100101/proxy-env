const processEnv = process.env
export const proxyEnv = new Proxy(processEnv, {
    get: (target: typeof processEnv, prop: string) => {
        const targetProp = target[prop]
        // if (prop in target) {}
        if(!targetProp) throw new Error(`process.env not contain '${prop}'`)

        if(targetProp === 'true') {
            return true
        } else if(targetProp === 'false') {
            return false
        }
        return targetProp
    },
})
