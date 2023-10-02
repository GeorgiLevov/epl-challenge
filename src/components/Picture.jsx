import { motion } from "framer-motion"
import styled from "styled-components"

/* eslint-disable react/prop-types */
const Picture = ({source1x,source2x,source3x,alt='image',className}) => {

	const threeWays = typeof source3x !== "undefined"
	const twoWays = typeof source2x !== "undefined" && typeof source3x === "undefined"

if (threeWays) {
	return (
			<StyledImg className={className}
			alt={alt}
			src={source1x}
			srcSet={`${source1x} 1x, ${source2x} 2x, ${source3x} 3x`}
			/>
	)
}
else if (twoWays) {
	return (
			<StyledImg className={className}
			alt={alt}
			src={source1x}
			srcSet={`${source1x} 1x, ${source2x} 2x, ${source2x} 3x`}
			/>
	)
}
else {
	return (
			<StyledImg className={className} alt={alt} src={source1x} />
	)
}

}

export default Picture


const StyledImg = styled(motion.img)`
  margin: 0 auto;
`