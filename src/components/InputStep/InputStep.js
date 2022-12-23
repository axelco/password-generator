

const InputStep = ({sentence, errors, onChange, onSubmit}) => {

    const hasErrors = () => {
        return errors.length > 0
    }

    const errorsList = errors.map((err) =>
        <li key={err}>{err}</li>
    );

    const errorMsg = hasErrors() &&
    <div className="invalid-feedback    ">
        <p className="mb-0">Please check the errors below to generate your password</p>
        <ul>
            {errorsList}
        </ul>
    </div>

    return (
        <form  onSubmit={onSubmit}>
            <div className="row">
                <div className="col-12">
                    <p className='fs-3'>Please hint a sentence to generate a password easy to remember</p>

                </div>
                <div className="col-12 mb-2 col-lg-8 mb-lg-0 col-xl-9">                
                    <input 
                        type="text" 
                        className={`form-control form-control-lg ${hasErrors() && 'is-invalid'}`}
                        value={sentence} 
                        onChange={onChange} 
                        />  
                     {errorMsg}
                </div>
                <div className="col-12 col-lg-4 col-xl-3">
                    <button
                        type="submit"
                        className="btn btn-lg btn-primary"
                        >Generate password</button>

                </div>

            </div>
         
        </form>
      
    );
  }
  
  export default InputStep;
  