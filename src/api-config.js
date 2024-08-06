let backendHost; //백엔드 호스트 주소 결정d

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost") {
  backendHost = "http://localhost:8080";
}else {
  backendHost = "http://todo-backend-test-env.eba-5iqykwjm.ap-northeast-2.elasticbeanstalk.com";
}

export const API_BASE_URL = `${backendHost}`;