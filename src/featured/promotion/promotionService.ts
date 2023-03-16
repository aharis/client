import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { IPromotion } from '../../utils/interfaces';

//Add new promotion
const addPromotion = async (promotionData: IPromotion) => {
  const response = await axios.post(`${API_URL}/new-promotion`, promotionData);
  return response.data;
};

const promotionService = {
  addPromotion,
};

export default promotionService;
