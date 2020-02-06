import formidable from "formidable"

/**
 * middleware to handle input formdata from post, put, delete
 */
export default (req, res, next) => {
  const form = new formidable.IncomingForm({
    encoding: "utf-8",
    multiples: true
  })
  return form.parse(req, (err, fields, files) => {
    if (err) throw err
    Object.assign(req, { fields, files })
    return next()
  })
}
