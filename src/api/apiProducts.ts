// api/tienda/productos/lista/
import type { Products, ResponseProduct } from "./typeModels";
import { BASE_DOMAIN_URL } from "./baseApi";

export async function apiListCatalogoProducts(page=1) {
  try {
    const response = await fetch(BASE_DOMAIN_URL + `tienda/productos/lista/?page=${page}`)
    const data: ResponseProduct = await response.json();
    if (data.results) {
      return data.results 
    } else {
      return []
    }
  } catch (error) {
    return []
  }
}