import { ErrorLabel } from './ErrorLabel'

export const FormContainer = ({children, errorMessage=''}) => {
  return (
    <div>
        {children}
        {errorMessage !== '' && <ErrorLabel errorMessage={errorMessage}/>}
    </div>
  )
}
