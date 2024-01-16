export interface ServiceItem {
    icon: string
    title: string
    description: string
}

export interface Service {
    miniHead: string
    title: string
    description: string
    anotherDescription: string
    services: ServiceItem[]
}