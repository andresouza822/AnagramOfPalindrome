

export default class AnagramService{

    private isInvalidCharacters(characters:string):boolean{
        return characters.match(/[^a-z]+/g)?true:false;
    }

    isAnagramOfPalindrome(anagram:string):number{

        if(this.isInvalidCharacters(anagram)) return 0;

        let evenAnagram = anagram.length % 2 == 0;
        let hasUniqueLetter = false;

        for(let letter of anagram.split('')){

            let letterOcurrence = anagram.split(letter).length-1;
            
            if(letterOcurrence % 2 != 0){
                
                if(evenAnagram) return 0;

                else if(letterOcurrence == 1){
                    
                    if(hasUniqueLetter ) return 0;
                    
                    hasUniqueLetter = true;
                }
            }
        };

        return 1;
    }


}

