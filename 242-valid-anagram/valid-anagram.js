/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) 
{
    newS = s.split('').sort();
    newT = t.split('').sort();

    console.log(newS)
    console.log(newT)

    let truthValue = false;
    let arrLength = 0;

    for(let i = 0; i < newS.length; i++)
    {
        if(newS.length === newT.length && newS[i] === newT[i])
        {
            arrLength++;
            if(arrLength === newS.length)
            {
                return true;
            }
        }
    }

    return false;

};