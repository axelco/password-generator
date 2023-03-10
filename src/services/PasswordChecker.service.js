
class PasswordChecker{

    constructor(pw){
        this.pw = pw
        this.minLength = 10
        this.errors = []
    }

    checkErrors(){
        if(!this.hasMinLength())
            this.errors.push(`Please type at least ${this.minLength} words in your sentence`)

        if(!this.hasNumbers()){
            this.errors.push('Please provide at least one number')
        }

        if(!this.hasSymbols()){
            this.errors.push('Please provide at least one symbol in your sentence')
        }      
        
        if(!this.hasUppercase())
            this.errors.push('Please provide at least one uppercase letter')
        
        if(!this.hasLowercase())
            this.errors.push('Please provide at least one lowercase letter')
                    
    }

    isValid(){
        return this.errors.length === 0
    }
    
    hasMinLength(){
        return this.pw.length >= this.minLength
    }

    hasNumbers(){
        // eslint-disable-next-line
        return /^(?=.*?[0-9])/.test(this.pw)
    }

    hasSymbols(){
        // eslint-disable-next-line
        return /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(this.pw)
    }

    hasUppercase(){
        // eslint-disable-next-line
        return /^(?=.*?[A-Z])/.test(this.pw)
    }

    hasLowercase(){
        // eslint-disable-next-line
        return /^(?=.*?[a-z])/.test(this.pw)     
    }
    

}

export default PasswordChecker