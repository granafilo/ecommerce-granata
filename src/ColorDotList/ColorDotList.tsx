import ColorDot from "../components/ColorDot"
import type { TypeVariant } from "../type"

type ColorDotListProps = {
    variants: TypeVariant[]
}

const ColorDotList = (props: ColorDotListProps) => {
    return <>
        {props.variants.map((variant: TypeVariant) => {
            return <ColorDot key={variant.colorId} color={variant.colorCode}/>
        })
        }
    </>
}

export default ColorDotList