const getEnv = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue

    if (value === undefined) {
        throw new Error(`Missing environment variable ${key}`)
    }

    return value
}

export const NODE_ENV = getEnv("NODE_ENV", "development")
export const PORT = getEnv("PORT", "3456")
export const APP_ORIGIN = getEnv("APP_ORIGIN")
