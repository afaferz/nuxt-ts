export function sleep(interval: number = 1000): Promise<unknown> {
    const promise = new Promise((resolve) => setTimeout(resolve, interval))
    return promise
}
