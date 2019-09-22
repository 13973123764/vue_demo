import ajax from "./ajax"

export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

export const reqFoodTypes = () => ajax('/index_category')

export const reqShopList = ({longitude, latitude}) => ajax('/shops', {longitude, latitude})




