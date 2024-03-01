export interface CategoryItem {
    title: string
    href: string
}

export interface ProjectItem {
    id: number
    title: string
    image: string
    href: string
    description: string
    category: CategoryItem
}