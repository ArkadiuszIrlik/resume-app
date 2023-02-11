import './../styles/PageNavButton.css'

export default function PageNavButton({className, children, onClick}) {

  return (
    <button type='button' className={'page-nav-button ' + className}
    onClick={onClick}
    >
    {children}
    </button>    
    )
}