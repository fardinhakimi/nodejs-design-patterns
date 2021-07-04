

import { BasicCamera, PlusCamera, ShareSocialMedia, PhoneCamera, ShareByEmail } from './phone'


const basicCamera: PhoneCamera = new BasicCamera()
basicCamera.setShareBehavior(new ShareByEmail())
basicCamera.take()
basicCamera.edit()
basicCamera.save()
basicCamera.performShare()

// Plus camera 
console.log(' ************************************ ')

const plusComera: PhoneCamera = new PlusCamera()
plusComera.setShareBehavior(new ShareSocialMedia())
plusComera.take()
plusComera.edit()
plusComera.save()
plusComera.performShare()