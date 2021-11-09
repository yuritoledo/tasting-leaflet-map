import axios from 'axios'
import { Feature, MapView } from '../interfaces'

const baseURL = 'http://127.0.0.1:5000/'
const netLumeApi = axios.create({
  baseURL,
})

type GetMapViewResponse = Promise<Feature[] | null>

export const getMapViewService = async (): GetMapViewResponse => {
  try {
    const response = await netLumeApi.get<MapView>('/mapview')
    return response.data.features
  } catch (error) {
    return null
  }
}
