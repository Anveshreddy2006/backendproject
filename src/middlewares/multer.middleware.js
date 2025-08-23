import multer from "multer";
import path from "path";

// ✅ Use diskStorage to save files locally
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public/uploads"));
  },
  filename: function (req, file, cb) {
    // unique filename: timestamp-originalname
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// ✅ Multer middleware
export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // max 5MB
});
