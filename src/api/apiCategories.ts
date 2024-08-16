// api/tienda/categorias/lista/
//
import type { Categorys } from "./typeModels";
import { BASE_DOMAIN_URL } from "./baseApi";

export async function apiListCategories():Promise<Categorys[]> {
  const response = await fetch(BASE_DOMAIN_URL + 'tienda/categorias/lista/')
  const data: Categorys[] = await response.json()
  return data
}