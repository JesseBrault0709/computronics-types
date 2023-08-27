/** @noSelf */
declare type DigitalReceiverBox = {
    getAspect(this: void, signalName: string): number
    getSignalNames(this: void): string[]
    getMostRestrictiveAspect(this: void): number
}

/** @noSelf */
declare type DigitalControllerBox = {
    setAspect(this: void, signalName: string, aspect: number): void
    getSignalNames(this: void): string[]
    setEveryAspect(this: void, aspect: number): void
}
