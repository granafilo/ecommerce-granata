import type { ReactNode } from "react"

type CTAProps = {
    classStyle: string,
    children: ReactNode,
    onClick: () => void
}

const MainCTA = (Props: CTAProps) => {
    return (
        <button className={Props.classStyle} onClick={Props.onClick}>
            {Props.children}
        </button>
    )
}

export default MainCTA