
class SentenceMaker{

    constructor(sentence){
        this.sentence = sentence
    }
    
    generatePassword(){

        const sentenceArray = this.sentence.split(' ').filter(e => e !== "")    

        // TODO
            // Check if in each array item there a set of letters 
            // combined with symbols or letter
            // If so, we split this sentence too
            // This is avoid user having to add space each time
                // exemple : "test!"" becomes "t!"" and not just "t"

        // Now for each word found we get 1st letter
        // Unless it's a number. If isNaN we set all walues input
        let pw = ''
        sentenceArray.forEach(e => {
            if( isNaN(parseFloat(e)))
                pw += e.charAt(0)
            else 
                pw += e        
        })        

        return pw
    }

}

export default SentenceMaker