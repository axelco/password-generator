import {  useState } from 'react';
import InputStep from './components/InputStep/InputStep';
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

    <div>
        <p>password : {password}</p>
        <p>Original sentence : {sentence}</p>
        <button 
          onClick={reset} 
          className="btn btn-primary" 
          >Generate new password</button>        
    </div>

    : 

    <InputStep 
      sentence={sentence}
      errors={errors}
      onChange={handleInputChange}  
      onSubmit={handleSubmit}  
      />    

    return (
      <div className="container py-5">      
        {view}
      </div>
    );
}

export default App;
