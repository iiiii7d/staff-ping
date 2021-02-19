module.exports = {
    log: (module, message) => {
        console.log(`[${module.name}] ${message}`)
    },
    error: (module, message) => {
        console.log(`[ERROR] [${module.name}] ${message}`)
    }
} 