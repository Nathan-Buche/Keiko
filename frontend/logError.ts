interface Details {
  file: string
  message: string
}
interface CustomError {
  code: number
  details: Details
}

function logError(error: CustomError) {
  console.log(`There was an error: code ${error.code} !!`)

  console.log(`File: ${error.details.file}`)
  console.log(`Error Message: ${error.details.message}`)
}

logError({
  code: 500,
  details: {
    file: "user.ts",
    message: "user is not defined",
  },
})
