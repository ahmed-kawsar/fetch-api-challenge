const Button = ({ reqType, setReqType, buttonText }) => {
  return (
    <button
      className={reqType === buttonText ? 'active' : null}
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  )
}

export default Button
