import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "164932.pdf"); // Update with your actual file name

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  const fileStream = fs.createReadStream(filePath);

  res.setHeader("Content-Disposition", 'attachment; filename="164932.pdf"');
  res.setHeader("Content-Type", "application/pdf");

  fileStream.pipe(res);
}
