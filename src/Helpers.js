export const ApiRequest = (params, method = "GET") => {
  
    // let url = "http://merenfrtest:8081/rest/index.php";
    let url = "rest/index.php";
    const options = { method };
    const user = JSON.parse(JSON.parse(localStorage.getItem("user")));
    if (user) {
 
        if(!params){
            params = {}
        }
        params.token = user.token;
    }
    if (params) {
      if (method === "GET") {
        params.token = encodeURIComponent(params.token);
        url +=
          "?" +
          Object.keys(params)
            .map((key) => key + "=" + params[key])
            .join("&");
      } else {
        options.body = JSON.stringify(params);
      }
    }
    return fetch(url, options);
  };
  