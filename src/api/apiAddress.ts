import axios from "axios";

export const apiGetProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://vapi.vnappmob.com/api/province/",
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetDistricts = (provinceId : number|undefined) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`,
      });
      console.log(response)
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });


  export const apiGetWards = (districtId : number|undefined) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://vapi.vnappmob.com/api/province/ward/${districtId}`,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });