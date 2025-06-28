import fs from 'fs/promises';


//resposify
export const responsify = (res, code, message = null, results = {}) => {
    if (results) {
      //To enable Postman api client read access_token from this http response
      res.status(code).send({ code, msg: message, data: results, access_token: results.access_token })
    } else {
      res.status(code).send({ code, msg: message, data: results });
    }
  }


 export const uploadBase64File = async (pathWithName, base64String) => {
    try {
      let base64File = base64String.split(';base64,').pop();
      await fs.writeFile(pathWithName, base64File, { encoding: 'base64' });
      return { uploaded: true, err: null }
    } catch (err) {
      return { uploaded: false, err: err }
    }
  }


  
  export default {
    responsify,
    uploadBase64File
  }