
abstract class Zone {
  protected displayName: string = ''
  protected offset: string = ''

  getDisplayName(): string {
    return this.displayName
  }
  getOffset(): string {
    return this.offset
  }
}

class ZoneUsEastern extends Zone {
  constructor() {
    super()
    this.offset = '10'
    this.displayName = 'US_EASTERN'
  }
}

class ZoneUsCentral extends Zone {
  constructor() {
    super()
    this.offset = '8'
    this.displayName = 'US_CENTRAL'
  }
}

class ZoneUsMountain extends Zone {
  constructor() {
    super()
    this.offset = '7'
    this.displayName = 'US_MOUNTAIN'
  }
}

class ZoneUsPacific extends Zone {
  constructor() {
    super()
    this.offset = '4'
    this.displayName = 'US_PACIFIC'
  }
}

class Zonefactory {
  createZone(zoneId: string): Zone {
    if (zoneId === 'PACIFIC') return new ZoneUsPacific()
    if (zoneId === 'MOUNTAIN') return new ZoneUsMountain()
    if (zoneId === 'CENTRAL') return new ZoneUsCentral()
    if (zoneId === 'EASTERN') return new ZoneUsEastern()
    throw new Error('Unsupported zone')
  }
}

export abstract class Calender {
  protected zone: Zone  = new ZoneUsEastern()
  abstract createCalender(): Calender
  print(): void {
    const calender = this.createCalender()
    console.log(calender.zone.getDisplayName())
  }
}

export class PacificCalender extends Calender {
  createCalender(): Calender {
    this.zone = new Zonefactory().createZone('PACIFIC')
    return this
  }
}

export class MountainCalender extends Calender {
  createCalender(): Calender {
    this.zone = new Zonefactory().createZone('MOUNTAIN')
    return this
  }
}

