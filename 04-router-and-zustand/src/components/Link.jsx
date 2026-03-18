import { useRouter } from "../components/Hooks/useRouter"

export function Link ({ href, children, ...restOfProps }) {
    const { navigateTo } = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        navigateTo(href)
    }

    return (
        <a href={href} {...restOfProps} onClick={handleClick}>
            {children}
        </a>
    )
}