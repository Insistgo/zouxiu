import http from "../utils/http";

export const HomeData = (params)=>http("get","/api/index.php/Mobile/Index/getBanner",params)

