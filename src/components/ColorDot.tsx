type TypeColorDotProps = {
    color: string
}

const ColorDot = (ColorDotProps: TypeColorDotProps) => {
    const styles = { backgroundColor: ColorDotProps.color}
    return <>
        <span className="colored-circle" style={styles}/>
    </>
}

export default ColorDot