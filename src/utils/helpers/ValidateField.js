// eslint-disable-next-line import/no-anonymous-default-export
export default (key, touched,  errors) => {

        if (touched[key]) {
            if (errors[key]) {
              return "error";
            } else {
              return "success";
            }
          } else {
            return "";
          }
    
    
  };
  