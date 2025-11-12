import { PERMISSIONS, RESULTS,check, request } from 'react-native-permissions'
import { requestCheck } from './requestPremissions';


export const handleCameraPermission=async ()=>{
    const status=await check(PERMISSIONS.IOS.PHOTO_LIBRARY)
    switch (status) {
    case RESULTS.UNAVAILABLE:
       console.log('This feature is not available (on this device / in this context)');
       return RESULTS.UNAVAILABLE
    case RESULTS.DENIED:
      console.log('The permission has not been requested / is denied but requestable');
       return requestCheck()
    case RESULTS.BLOCKED:
       console.log('The permission is denied and not requestable');
       return RESULTS.BLOCKED
    case RESULTS.GRANTED:
       console.log('The permission is granted');
       return RESULTS.GRANTED
    case RESULTS.LIMITED:
      console.log('The permission is granted but with limitations');
      return RESULTS.LIMITED
  }
     }


