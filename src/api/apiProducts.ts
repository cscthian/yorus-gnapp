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

export async function apiListProdsCategory(
  category: string, 
  name: string, 
  primordial:string) : Promise<Products[]> {
    try {
      const response = await fetch(
        BASE_DOMAIN_URL + 
        `tienda/productos-category/list/?category=${category}&primordial=${primordial}&name=${name}`)
      const data: ResponseProduct = await response.json()
      return data.results
    } catch (error) {
      console.log(error);
      return []
    }
  }