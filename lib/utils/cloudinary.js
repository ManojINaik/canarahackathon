import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

export async function uploadFile(file) {
  try {
    console.log('Starting file upload to Cloudinary, file name:', file.name, 'size:', file.size);
    
    // Verify Cloudinary config is loaded properly
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      throw new Error('Cloudinary configuration is missing. Please check environment variables.');
    }
    
    // Convert file buffer to base64
    const fileBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(fileBuffer).toString('base64');
    const fileType = file.type.split('/')[1];
    const dataURI = `data:${file.type};base64,${base64}`;
    
    console.log('File prepared for upload, type:', file.type);
    
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: 'auto',
      folder: 'resumes', // Store all resumes in a dedicated folder
      use_filename: true,
      unique_filename: true,
    });
    
    console.log('File uploaded successfully to Cloudinary, URL:', result.secure_url);
    
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error('Error uploading file to Cloudinary:', error);
    
    // Provide more detailed error information
    if (error.http_code) {
      console.error('Cloudinary HTTP error code:', error.http_code);
    }
    
    if (error.message) {
      console.error('Error message:', error.message);
    }
    
    throw new Error(`Failed to upload file: ${error.message || 'Unknown error'}`);
  }
} 