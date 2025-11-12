import { PERMISSIONS, request, RESULTS } from "react-native-permissions";

export const requestCheck=()=>{
   request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((status) => {
   switch(status){
      case  RESULTS.DENIED:
         console.log('The permission has not been requested / is denied but requestable');
        return RESULTS.DENIED
      case RESULTS.GRANTED:
       console.log('The permission is granted');
       return RESULTS.GRANTED
      case RESULTS.LIMITED:
      console.log('The permission is granted but with limitations');
      return RESULTS.LIMITED
   }
});
}