// Load config from .env
import 'dotenv/config';

// Load config variables
export const CONFIG = {
    TOMTOM_API_KEY: process.env.TOMTOM_API_KEY as string
}

// Validate config
if (typeof CONFIG.TOMTOM_API_KEY !== "string") {
    throw new Error("Invalid environment variable: TOMTOM_API_KEY");
}

// The logic in this file will only be run the first time it is imported
// Due to Node.JS dependency behaviour, subsequent imports of this file will 
// use a cached value. `.env` will not be read more than once per session