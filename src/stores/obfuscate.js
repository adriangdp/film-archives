export const obfuscate = (data) =>{
    const obf = btoa(JSON.stringify(data))
    return obf
}
export const deobfuscate = (data) =>{
    try{
        return JSON.parse(atob(data))
    }
    catch{
        return null
    }
}