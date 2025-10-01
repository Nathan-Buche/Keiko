interface Details {
  file: string
  message: string
}
interface CustomError {
  code: number
  details: Details
}

function logError(error: CustomError) {
  console.error(`There was an error: code ${error.code} !!`)

  console.error(`File: ${error.details.file}`)
  console.error(`Error Message: ${error.details.message}`)
}

logError({
  code: 500,
  details: {
    file: "user.ts",
    message: "user is not defined",
  },
})
