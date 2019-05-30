

export default class AnagramService{

    isAnagramOfPalindrome(anagram:string){

        let evenAnagram = anagram.length % 2 == 0;
        let hasUniqueLetter = false;

        for(let letter of anagram.split('')){

            var letterOcurrence = anagram.split(letter).length-1;
            
            if(letterOcurrence % 2 != 0){
                
                if(evenAnagram) return false;

                else if(letterOcurrence == 1){
                    
                    if(hasUniqueLetter ) return false;
                    
                    hasUniqueLetter = true;
                }
            }
        };

        return true;
    }


}

