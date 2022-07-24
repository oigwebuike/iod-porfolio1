import React from 'react'

const SVG = ({fill, a, className}) => {
  return (
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 512 512">

		<g fill={fill || 'black'} className={className}>
			<path ref={a} d="M193.771,318.229C214.336,319.381,235.285,320,256,320c123.285,0,256-20.032,256-64C512,114.837,397.163,0,256,0
				c-43.989,0-64,132.693-64,256C192,276.715,192.619,297.664,193.771,318.229z"/>
			<path ref={a} d="M172.181,316.8c-1.152-23.04-1.515-44.16-1.515-60.8c0-65.173,5.248-197.525,44.245-252.395
				C93.248,23.381,0,128.853,0,256C0,289.963,79.275,309.589,172.181,316.8z"/>
			<path ref={a} d="M195.2,339.819C202.389,432.725,222.016,512,256,512c127.147,0,232.619-93.269,252.395-214.912
				c-54.869,38.997-187.2,44.245-252.395,44.245C239.36,341.333,218.24,340.971,195.2,339.819z"/>
			<path ref={a} d="M3.605,297.088c17.579,108.224,103.061,193.707,211.285,211.285c-25.963-36.523-37.013-107.2-41.408-169.856
				C110.827,334.123,40.149,323.072,3.605,297.088z"/>
		</g>

</svg>
      )
}

export default SVG