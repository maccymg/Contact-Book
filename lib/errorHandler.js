export const notFound = 'notFound'
export const validationError = 'ValidationError'
export const castError = 'CastError'

export default function errorHandler(err, _req, res, next) {
  console.log('🤖 An Error Happened', err.name, err.message)

  if (err.name === validationError) {
    const customErrors = {}

    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }

    return res.status(422).json({
      message: 'Form Validation Errors',
      errors: customErrors,
    })
  }

  if (err.name === castError || err.message === notFound) {
    return res.status(404).json({ message: 'Not Found ' })
  }

  res.sendStatus(500)
  next(err)
}