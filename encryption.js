/*An English text needs to be encrypted using the following encryption scheme:
characters are written into a grid, whose rows and columns have the following constraints:
for a text with n charachters (spaces removed)
Floor(sqrt(n))<= row<=column<= Ceil(sqrt(n))
with rows*columns>= n
The encoded message is obtained by displaying the characters in a column, inserting a space, and then 
displaying the next column and inserting a space, and so on. For example:
sentence=ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots
grid:
ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots
the encoded message for the above grid is:
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/
function encryption(s) {
    var n=s.length;
    var sq=Math.floor(Math.sqrt(n));
    var floor=sq;
    var ceil=(sq*sq)==n?sq:sq+1;
    var grid=s.match(new RegExp('.{1,' + ceil + '}', 'g'))
    var encrypted=[];
    var f=grid.length;
    for (var i=0;i<ceil;i++){
        console.log(grid)
        var s="";
        console.log(f,ceil);
        for (var j=0;j<f;j++){
            if (grid[j][i]) s+=grid[j][i];
        };
        encrypted.push(s);
    }
    return (encrypted.join(' '))

}