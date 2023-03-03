import { TGet, TProxyEnv } from '../types'

const get: TGet = (target, prop) => {
    const targetProp = process.env[prop]
    // if (prop in target) {}
    if (!targetProp) throw new Error(`process.env not contain '${prop}'`)

    if (targetProp === 'true') {
        return true
    } else if (targetProp === 'false') {
        return false
    }
    const targetPropConvertedToString = targetProp.toString()
    const targetPropConvertedToFloat = parseFloat(targetPropConvertedToString)
    const targetPropConvertedToFloatString =
        targetPropConvertedToFloat.toString()

    if (
        targetPropConvertedToFloat &&
        targetPropConvertedToString.length ===
            targetPropConvertedToFloatString.length
    ) {
        return targetPropConvertedToFloat
    }

    const targetPropConvertedToInt = parseInt(targetPropConvertedToString)
    const targetPropConvertedToIntString = targetPropConvertedToInt.toString()

    if (
        // targetPropConvertedToInt ??
        (targetPropConvertedToInt || targetPropConvertedToInt === 0) &&
        targetPropConvertedToString.length ===
            targetPropConvertedToIntString.length
    ) {
        return targetPropConvertedToInt
    }
    return targetProp
}

const proxyEnv: TProxyEnv = new Proxy<any>(process.env, {
    get,
})
export default proxyEnv
