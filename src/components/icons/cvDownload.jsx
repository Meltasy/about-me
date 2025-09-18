import useLanguage from '../../hooks/useLanguage'

const CVDownload = ({ width = 50, height = 50 }) => {
  const { trans } = useLanguage()

  return (
    <a
      href={trans('footer.CVName')}
      download="MelissaVialaneixCV.pdf"
      aria-label={trans('footer.CV')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="rgb(255, 134, 74)"
        viewBox="4 2 16 20"
        role="img"
        aria-labelledby="CVTitle"
        focusable="true"
      >
        <title id="CVTitle">CV</title>
        <path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z" />
      </svg>
    </a>
  )
}

export default CVDownload