import { useRef, useEffect } from 'react'

const InputStep = ({sentence, errors, onChange, onSubmit}) => {

    const inputReference = useRef(null);

    useEffect(() => {
        inputReference.current.focus();
    }, [])    

    const hasErrors = () => {
        return errors.length > 0
    }

    const errorsList = errors.map((err) =>
        <li key={err}>{err}</li>
    );

    const errorMsg = hasErrors() &&
    <div className="invalid-feedback    ">
        <p className="mb-1">Check the errors to be abel to generate a strong password</p>
        
        <ul>
            {errorsList}
        </ul>
    </div>

    return (
        <>
            <h2 
                className='display-6 mb-3'
                >Generate a strong password based on a catch phrase
            </h2> 
            <p className='fs-4'>
                First of all you need to enter a sentence.<br/>
                Once you have it, just click on generate password 👍

            </p>
            <form  onSubmit={onSubmit} className="mt-2">
                <p>
                    Make sure to have 1 digit, 
                    1 uppercase, 1 symbol, 
                    1 lowercase and to have at least 10 words before validating
                </p>                    
                <div className="row">
                    <div className="col-12 mb-2 col-lg-8 mb-lg-0 col-xl-9">                                           
                        <input 
                            ref={inputReference}
                            type="text" 
                            className={`form-control form-control-lg ${hasErrors() && 'is-invalid'}`}
                            value={sentence} 
                            onChange={onChange} 
                            />  
                        {errorMsg}
                    </div>
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="d-grid gap-2">
                            <button
                                    type="submit"
                                    className="btn btn-lg btn-primary"
                                    >Generate password</button>              
                        </div>                    


                    </div>

                </div>
            
            </form>       
        </>

      
    );
  }
  
  export default InputStep;
  