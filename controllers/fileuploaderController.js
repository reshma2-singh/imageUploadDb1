import  SingleFile from '../models/singlefile.js'
const singleFileUpload = async(req,res,next)=>{
    try{
        const file = new SingleFile({
            title:req.body.title,
            cat: req.body.cat,
        fileName:req.file.originalname,
         filePath:req.file.path,
       fileType:req.file.mimetype,
      fileSize:fileSizeFormatter(req.file.size,2)
});
await file.save();

console.log(file)
res.status(201).send('File uploaded successfully')
    }catch(err){
res.status(400).send(err.message)
    }
    
}
const getallSingleFiles = async (req, res, next) => {
    try {
        const files = await SingleFile.find()
        res.status(200).send(files)

    } catch (err) {
        console.log(err)
        res.status(400).send(error.message)
    }
}
const getProductById = async (req, res, next) => {
    try {
        const product = await SingleFile.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            results: product.length,
            data: product
        })

    } catch (err) {
        res.status(500).json({
            status: 'failure',
            message: err?.message
        })
    }
}
const updateProduct = async(req,res)=>{
    try{
        const file = await SingleFile.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        })
        res.status(200).json({
            status:"success",
            results:file.length,
            data:file
        })

    }catch(err){
        res.status(500).json({
            status:'failure',
            message:err?.message
        })
    }
}
const deleteProduct = async (req, res) => {
    try {
        const product = await SingleFile.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
           
            data: product
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
           
            status: 'failure',
            message: err?.message
        })
    }
}
const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}
export { singleFileUpload, getallSingleFiles, deleteProduct, getProductById, updateProduct }