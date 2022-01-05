const fs = require('fs')
/**
 * @param {String} path - csv file location
 * @returns {csv} result of parsed csv
*/
function parser(path) {
  const csv = String(fs.readFileSync(path))
  if(ErrorParserCheck(csv)) { 
    throw new Errot('invalid csv format')
  } else {	
    const parsed = csv.trim().split(',')
    return { csv: parsed, size: parsed.length } 
  }
}

// basic csv format checker
function ErrorParserCheck(target) {
  if(!target.includes(',')) return true
  else return false
}

module.exports=parser
