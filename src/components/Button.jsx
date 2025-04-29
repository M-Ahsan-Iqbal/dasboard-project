

function Button({onClick, children, variant="filled", className}){
  const baseStyle = "h-[48px] px-2 rounded-[56px] text-base cursor-pointer leading-[24px] font-medium border border-primary text-base font-medium";
  const variantStyles = {
    filled: 'bg-primary w-[161px] text-white',
    outlined: 'border border-primary w-[200px] text-[#575757]',
  }
    return(
        <>
          <button className={`${baseStyle} ${variantStyles[variant]} ${className}`} onClick={onClick}>
            {children}
          </button>
        </>
    )
}

export default Button;