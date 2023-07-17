
class SentenceMaker{

    constructor(sentence){
        this.sentence = sentence
    }

    spaceSpliter(){
        // We begin to create array by splitting all spaces in the sentence
        let sentenceArray = this.sentence.split(' ').filter(e => e !== "")

        // Now we check for speical characters inside each item 
        // If a symbol is at first place or last place of the item
        // We will split the symbol to be considered as a word in the pw generator
        // The original word will be also renamed without the symbol
        sentenceArray.forEach(e => {

            let match = e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);

            if(match !== null && e.length > 1){
                let symbol = match[0]
                let wordWithoutSymbol = e.replace(symbol, '')
                let currentIndex = sentenceArray.indexOf(e)

                // We handle the case when symbol is at last position
                if(match.index + 1 === e.length){
                    sentenceArray.splice(currentIndex+1, 0, symbol);
                    sentenceArray.splice(currentIndex, 1, wordWithoutSymbol)
                }
                // We handle the case when symbol is at first position
                if(match.index === 0){
                    sentenceArray.splice(currentIndex, 1, wordWithoutSymbol)
                    sentenceArray.splice(currentIndex, 0, symbol);
                    
                }
            }      
        })    
        
        console.log(sentenceArray)
        return sentenceArray
    }
    
    generatePassword(){

        const sentenceArray = this.spaceSpliter()    
        let pw = ''
        sentenceArray.forEach(e => {
            
            if( isNaN(parseFloat(e))){
                
                pw += e.charAt(0)
            }

            else 
                pw += e        
        })        

        return pw
    }

}

export default SentenceMaker