import {  useState } from 'react';
import InputStep from './components/InputStep/InputStep';
import ResultStep from './components/resultStep/ResultStep';
import SentenceMaker from './services/SentenceMaker.service';
import PasswordChecker from './services/PasswordChecker.service';

const App = () => {  

  const [sentence , setSentence] = useState('')
  const [password, setPassword] = useState('')
  const [viewResult, setViewResult] = useState(false)
  const [errors, setErrors] = useState([])

  // Feature to bind the change in the input field
  const handleInputChange = (e) => {
    setSentence(e.target.value)
  }

  // Submit feature that checks everything
  const handleSubmit = (e) => {

    e.preventDefault()

    // We call SentenceMaker to generate password based on sentence input
    const sentenceMaker = new SentenceMaker(sentence)
    const pwGenerated = sentenceMaker.generatePassword()

    // We use password checker to check validty of generated password
    const pwChecker = new PasswordChecker(pwGenerated)
    pwChecker.checkErrors()

    if(pwChecker.isValid()){
      setPassword(pwGenerated)
      setViewResult(true)    
    }else{
      setViewResult(false)    
      setErrors(pwChecker.errors)
    }
      
 
  }

  // Reset feature to set evrything to default
  const reset = () => {
    setSentence("")
    setPassword("")
    setErrors([])
    setViewResult(false)
  }


  // We set different view depending on valid state
  // If password is valid we show result
  // Elese we show InPutStep
  const view = viewResult ? 
    <ResultStep
      sentence={sentence}
      password={password}
      onClickReset={reset}
      />
    : 
    <InputStep 
      sentence={sentence}
      errors={errors}
      onChange={handleInputChange}  
      onSubmit={handleSubmit}  
      />    

    return (
      <>
      <header id="site-header" className=' py-2'>
        <div className="container text-center">
          <p className='fs-2'>🔐</p>
          <h1 className="display-4 mb-0">Password generator</h1>

        </div>        
      </header>
      <div className="container py-2 py-lg-3">      
        <div className='card p-2 p-lg-4 py-lg-5'>
          {view}
        </div>
        
      </div>    
      <footer id="site-footer py-2" >
        <div className='container text-center'>
          Made with ❤ by Alexandre Rozec
        </div>
        
      </footer>  
      </>

    );
}

export default App;
