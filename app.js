// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const userRoutes= require("./routes/userRoutes");
// const uploadImageRoutes = require("./routes/uploadImageRoutes");
// const homePageRoutes = require("./routes/homePageRoutes");
// const likeRoutes = require("./routes/likesRoutes");
// const messageRoutes = require("./routes/messagesRoutes");
// const reportRoutes = require("./routes/reportRoutes");
// // const { dbConnect, sequelize } = require("./config/connection");

// dotenv.config();

// const app = express();

// const PORT = process.env.PORT ||8000; 

// //Middlewares
// app.use(cors());
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// // dbConnect();

// app.use("/user", userRoutes);
// // app.use("/images", uploadImageRoutes)
// // app.use("/home", homePageRoutes)
// // app.use("/likes", likeRoutes)
// // app.use("/chat", messageRoutes)
// // app.use("/report", reportRoutes)


// //Server
// app.listen(PORT, ()=> console.log(`server started at PORT: ${PORT}`));



// const crypto = require('crypto');

// function generateKey(key, salt) {
//     const generatedKey = crypto.createHash('sha256').update(salt + key + salt).digest();  
//     console.log('Generated Key (hex):', generatedKey.toString('hex'));  
//     console.log('Key length (bytes):', generatedKey.length);  
//     return generatedKey;
// }

// function encrypt(data, key, salt) {
//     const algorithm = 'aes-256-ecb'; 
//     const encryptionKey = generateKey(key, salt); 
//     const cipher = crypto.createCipheriv(algorithm, encryptionKey, null); 
//     let encrypted = cipher.update(data, 'utf8', 'base64'); 
//     encrypted += cipher.final('base64'); 
//     console.log('Encrypted Data (base64):', encrypted);  // Log encrypted data
//     return encrypted;
// }

// function decrypt(data, key, salt) {
//     const algorithm = 'aes-256-ecb'; 
//     const encryptionKey = generateKey(key, salt); 
//     const decipher = crypto.createDecipheriv(algorithm, encryptionKey, null); 

//     try {
//         let decrypted = decipher.update(data, 'base64', 'utf8'); 
//         decrypted += decipher.final('utf8'); 
//         console.log('Decrypted Data:', decrypted);  // Log decrypted data
//         return decrypted;
//     } catch (error) {
//         console.error("Decryption error:", error.message);
//         throw error;
//     }
// }

// // Example usage
// const data = '0sLt+smHrXgWDje9BqqaIskrnrOSpJYSFPPPYYORbvo='; // Encrypted data from PHP
// const salt = '9623d62ad842c0be0ac56b87822e3f7a';
// const key = '5f5f1bc41cd11cef8261cece914167b1ff72040464be21e64b49c3d7092e2bf24b83499cdbb54338ff1b11d56d00205feebf314ba09617c8af93dbc24b3837ec';

// try {
//     const decryptedData = decrypt(data, key, salt);
//     console.log('Decrypted Data:', decryptedData);

//     const encryptedData = encrypt(decryptedData, key, salt);
//     console.log('Re-encrypted Data:', encryptedData);
// } catch (error) {
//     console.error('Error during decryption/encryption:', error);
// }


// const crypto = require('crypto');

// // Helper function to generate the key
// function generateKey(key, salt) {
//     const generatedKey = crypto.createHash('sha256').update(salt + key + salt).digest();  // Generate 32-byte key
//     console.log('Key (hex):', generatedKey.toString('hex'));  // Output the key in hexadecimal format
//     console.log('Key length (bytes):', generatedKey.length);  // Check the key length in bytes
//     return generatedKey;
// }

// // Example usage
// const salt = '9623d62ad842c0be0ac56b87822e3f7a';
// const key = '5f5f1bc41cd11cef8261cece914167b1ff72040464be21e64b49c3d7092e2bf24b83499cdbb54338ff1b11d56d00205feebf314ba09617c8af93dbc24b3837ec';

// const generatedKey = generateKey(key, salt); 
// console.log(generatedKey); // This will output the key and its length




// const crypto = require('crypto');

// function generateKey(key, salt) {
//     return crypto.createHash('sha256').update(salt + key + salt).digest();
// }

// function encrypt(data, key, salt) {
//     const algorithm = 'aes-256-ecb';
//     const encryptionKey = generateKey(key, salt);
//     const cipher = crypto.createCipheriv(algorithm, encryptionKey, null);
//     let encrypted = cipher.update(data, 'utf8', 'base64');
//     encrypted += cipher.final('base64');
//     console.log('Encrypted Data (base64):', encrypted);
//     return encrypted;
// }

// function decrypt(data, key, salt) {
//     const algorithm = 'aes-256-ecb';
//     const encryptionKey = generateKey(key, salt);
//     const decipher = crypto.createDecipheriv(algorithm, encryptionKey, null);

//     try {
//         let decrypted = decipher.update(data, 'base64', 'utf8');
//         decrypted += decipher.final('utf8');
//         console.log('Decrypted Data:', decrypted);
//         return decrypted;
//     } catch (error) {
//         console.error("Decryption error:", error.message);
//         throw error;
//     }
// }

// // Example usage
// const salt = '9623d62ad842c0be0ac56b87822e3f7a';
// const key = '5f5f1bc41cd11cef8261cece914167b1ff72040464be21e64b49c3d7092e2bf24b83499cdbb54338ff1b11d56d00205feebf314ba09617c8af93dbc24b3837ec';

// // Replace this with the actual encrypted data from PHP
// const encryptedDataFromPHP = 'YOUR_ENCRYPTED_DATA_HERE';

// try {
//     console.log('Encrypted Data from PHP:', encryptedDataFromPHP); // Log the encrypted data
//     const decryptedData = decrypt(encryptedDataFromPHP, key, salt);
//     console.log('Decrypted Data:', decryptedData);
    
//     // Optional: Test encryption back to check if it matches original
//     const reEncryptedData = encrypt(decryptedData, key, salt);
//     console.log('Re-encrypted Data:', reEncryptedData);
// } catch (error) {
//     console.error('Error during decryption/encryption:', error);
// }





// const crypto = require('crypto');

// function generateKey(key, salt) {
//     return crypto.createHash('sha256').update(salt + key + salt).digest();  
// }

// function decrypt(data, key, salt) {
//     const algorithm = 'aes-256-ecb'; 
//     const encryptionKey = generateKey(key, salt); 
//     const decipher = crypto.createDecipheriv(algorithm, encryptionKey, null); // IV should be null for ECB mode 

//     try {
//         let decrypted = decipher.update(data, 'base64', 'utf8'); // Ensure data is in base64 format
//         decrypted += decipher.final('utf8'); 
//         console.log('Decrypted Data:', decrypted);  
//         return decrypted;
//     } catch (error) {
//         console.error("Decryption error:", error.message);
//         throw error;
//     }
// }

// // Example usage
// const salt = '9623d62ad842c0be0ac56b87822e3f7a';
// const key = '5f5f1bc41cd11cef8261cece914167b1ff72040464be21e64b49c3d7092e2bf24b83499cdbb54338ff1b11d56d00205feebf314ba09617c8af93dbc24b3837ec';
// const encryptedDataFromPHP = '0sLt+smHrXgWDje9BqqaIskrnrOSpJYSFPPPYYORbvo='; // Replace with actual encrypted data

// console.log('Encrypted Data from PHP:', encryptedDataFromPHP); 

// try {
//     const decryptedData = decrypt(encryptedDataFromPHP, key, salt);
//     console.log('Decrypted Data:', decryptedData);
// } catch (error) {
//     console.error('Error during decryption:', error);
// }




// const crypto = require('crypto');

function encrypt(data, key, salt) {
    // Generate a key using SHA-256
    const hashedKey = crypto.createHash('sha256').update(salt + key + salt).digest('base64').substr(0, 32);
    
    // Generate an initialization vector (IV) for AES-256-CBC
    const iv = crypto.randomBytes(16);  // 16 bytes IV for AES

    // Encrypt data using AES-256-CBC
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(hashedKey, 'utf-8'), iv);
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    // Return the encrypted data along with the IV, both encoded in base64
    return `${encrypted}::${iv.toString('base64')}`;
}

// const encryptedData = encrypt(data, key, salt);
// console.log(encryptedData);


const crypto = require('crypto');

// Function to generate a key using SHA-256
function generateKey(key, salt) {
    return crypto.createHash('sha256').update(salt + key + salt).digest().slice(0, 32);
}

// Function to decrypt data using AES-256-ECB
function decryptPhpEncryptedData(encryptedData, key, salt) {
    const hashedKey = generateKey(key, salt);
    const decipher = crypto.createDecipheriv('aes-256-ecb', hashedKey, null);
    decipher.setAutoPadding(false); // Disable auto-padding

    // Decode the encrypted data from base64
    const encryptedBuffer = Buffer.from(encryptedData, 'base64');

    // Decrypt the data
    let decrypted;
    try {
        decrypted = decipher.update(encryptedBuffer);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
    } catch (error) {
        throw new Error('Decryption failed: ' + error.message);
    }

    // Remove padding manually (if necessary)
    const paddingLength = decrypted[decrypted.length - 1];
    if (paddingLength > 0 && paddingLength <= 16) {
        decrypted = decrypted.slice(0, decrypted.length - paddingLength);
    }

    return decrypted.toString('utf8');
}

// Example usage with your encrypted data, key, and salt
const encryptedData = '0sLt+smHrXgWDje9BqqaIskrnrOSpJYSFPPPYYORbvo=';
const salt = '9623d62ad842c0be0ac56b87822e3f7a';
const key = '5f5f1bc41cd11cef8261cece914167b1ff72040464be21e64b49c3d7092e2bf24b83499cdbb54338ff1b11d56d00205feebf314ba09617c8af93dbc24b3837ec';

try {
    const decryptedData = decryptPhpEncryptedData(encryptedData, key, salt);
    console.log('Decrypted Data:', decryptedData);
} catch (err) {
    console.error('Error during decryption:', err.message);
}

