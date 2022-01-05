import fs from 'fs'

function ErrorParserCheck(target: string): boolean {
 if(!target.includes(',')) { 
    return true
  } else { 
    return false
  }
}

/**
 * @param {String} path - csv file location
 * @returns {csv} the parsed csv result
*/
export default function(path: string): object {
  const csv = String(fs.readFileSync(path))
  if(ErrorParserCheck(csv)) {
    throw new Error('invalid csv format')
  } else {
    const parsed = csv.trim().split(',')
    return { csv: parsed , size: parsed.length }
  }
}




