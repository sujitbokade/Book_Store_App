import axios from 'axios';

export const myAxiosGetRequest = async () => {
  const res = await axios({
    method: 'get',
    url: 'http://192.168.1.5:4003/book',
  });
  return res;
};

export const myAxiosPostRequest = async (
  name,
  phoneNo,
  pinCode,
  locality,
  address,
  city,
  landmark,
) => {
  const res = await axios({
    method: 'post',
    url: 'http://192.168.1.5:4003/customer',
    data: {
      name: name,
      phoneNo: phoneNo,
      pinCode: pinCode,
      locality: locality,
      address: address,
      city: city,
      landmark: landmark,
    },
  });
  return res;
};

export const myAxiosGetCustomerRequest = async () => {
  const res = await axios({
    method: 'get',
    url: 'http://10.0.2.2:4003/customer',
  });
  return res;
};
