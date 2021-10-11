import multer from 'multer'
import path from 'path'
import crytpo from 'crypto'

export const multerConfig = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      const hash = crytpo.randomBytes(6).toString('hex')
      const filename = `${hash}-${file.originalname}`

      callback(null, filename)
    },
  }),
}
