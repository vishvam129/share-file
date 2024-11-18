import File from "../models/file.js";

export const uploadImage = async (req, res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try {
        const file = await File.create(fileObj);
        res.status(200).json({ path: `http://localhost:3000/file/${file._id}` });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getImage = async (req, res) => {
    try {
        const file=await File.findById(req.params.fileId);
        file.downloadCount++;
        await file.save();
        res.download(file.path, file.name);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}