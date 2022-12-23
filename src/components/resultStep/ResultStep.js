const ResultStep = ({sentence, password, onClickReset}) => {

    return (
        <div>
            <div >
                <h2 className='display-5'>Votre mot de passe : </h2>
                <input
                    type='test'
                    className='form-control form-control-lg '
                    disabled
                    value={password} 
                    />

            </div>
            <div className='my-2 my-lg-4'>
                <h3 className='display-6'>Your original catch phrase</h3>
                <p className='fs-2'>{sentence}</p>
            </div>
            

            <button 
            onClick={onClickReset} 
            className="btn btn-primary btn-lg" 
            >Generate new password</button>        
        </div>
      
    );
  }
  
  export default ResultStep;
  