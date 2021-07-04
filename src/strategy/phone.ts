
interface ShareBehaviour {
  share(): void
}

export class ShareByEmail implements ShareBehaviour {
  share(): void {
    console.log(' Sharing by email ... ')
  }
}

export class ShareByText implements ShareBehaviour {
  share(): void {
    console.log(' Sharing by text ...')
  }
}

export class ShareSocialMedia implements ShareBehaviour {
  share(): void {
    console.log(' Sharing to Social Media ... ')
  }
}

export abstract class PhoneCamera {

  protected shareBehavior: ShareBehaviour = new ShareByText()

  abstract edit(): void

  setShareBehavior(shareBehavior: ShareBehaviour) {
    this.shareBehavior = shareBehavior
  }

  performShare() {
    this.shareBehavior.share()
  }

  take() {
    console.log(' Taking a photo')
  }
  
  save() {
    console.log(' Saving a photo')
  }
}

export class BasicCamera extends PhoneCamera {
  edit() {
    console.log(' Editing photo in basic mode')
  }
}

export class PlusCamera extends PhoneCamera {
  edit() {
   console.log(' Editing photo in plus mode')
  }
}