//ordre decroisant
var aTrierNombres = [5, 42, 0, -42, 21, 51, 6, 3, 2, 1];
//ordre alphbetique en ignorant les le fait que ce soit majuscule ou minuscule
var aTrierLettres = ['i', 'Z', 'e', 'z', 'A', 'b', 'c', 'a'];
//ordre alphabetique
var aTrierMots = ["roger", "rien", "piano", "moe", "margarita", "promo", "aaa", "aax", "a", "aaax", "nya"];
/*
    ton code ici normalement tu dois pouvoire faire une seule fonction de trie 
    pour tous les tableau si tu fait une fonction pour comparer deux element
*/

function tri(a, b) {
    return (a > b) ? 1 : -1;
}

for (var i = 0; i < aTrierLettres.length; i++) {
    aTrierLettres[i] = aTrierLettres[i].toLowerCase()
}


aTrierNombres = mysort(aTrierNombres);
aTrierMots.sort(tri);
aTrierLettres.sort(tri);

console.log(aTrierNombres);
console.log(aTrierLettres);
console.log(aTrierMots);


function mysort(tableau) {
    var Trier = []
    var max = getmax(tableau);

    trier.push(max);
}

function getmax(tableau) {
    var maximum = Number.MIN_VALUE;

    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] > maximum) {
            maximum = tableau[i];
        }
    }

    return maximum;


}

//stocker la valeur max dans un tableau vide (trier) et le push dedans. Puis recommencer la boucle sans maximum

// dans mysort suprimer la valeur max de tableau, puis relancer la même choses.
//combien de fois aumaximum va  t on avoir besoin de relacer getmax pour avoir un tableau complet? (la fonction doit calculer, soit en valeur numérique, soit en test)
// TANT QUE (WHILE)
//Reflechir au minimum de nb de boucle a appliquer
//retourner le tableau une fois trier (mysort)














/*
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@88@O@88COOOOOOOOOOoccoccccoocC88OOCO@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8OO@@8O8888888888888Oocoo:cooccoCCCCCC8@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@88O8@OO888888888888888888@C:coccocoCCCCCO@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@OOOOOOOOOooCOOO8888888888888888888@8@@CococcOCCOCC@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@OocccococcO8888888888@888888888OO88888@8occo8OCCCO8@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@CcocccccO@8888888888O8O8O8888888CCO88O8OC8OoCOO8OC@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@OcococC@@88888888888O88OO8888OO8OooO8O8OO8OO8OCCO@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8ooco888888888O8@88OCO8OC88888CO8Coo8OO8O8OOCCCOO88@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@OcC8888O8@@@8O8O888CCOCO88888OCOCooOCO8OCCO8OC8@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8@8@@@@@8@888OC8OO888COCO8CoCCOOOOooCOoOOO8OOCCCCOO8@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8CoO@@@8C8OOO8oOO8@8O8OC8OO88OO8@8CooCoooCO8OOOCO@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8CC@888CO8oO8OO8O@@@8OO88OO:  :.cCoooocCOOOOOOOOCO8@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@88COO8O8CC8CoCCo8OO@@8@@8OCOccccCOCooooCOO8OCCOOOOCCCO@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8@8@O888OoO8oo8C8@8O@@@@@@@@@Coo88ooCOOCOOOOOCoCOCCOOCO8@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@OOOOOCoOOoC8: :CO@@@@@@@@@@@@OCO8OOOOOOOO8oCOCoC8@OC8@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8O8OCCooooocc8coc8@@@@@@@@8@@OO8OOOOOOOOOOCoCCCCC@@OO@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@OC8OCooooooC8@@@8@@@@@@@@@@@OO8OOOCOOOOOCOCOCOCCO@8O@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@CO@8OCCocoooO@@@@@@@@@@@@@@OOOOOOCOOOCCOCCOOC88O@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8@@@OOOOCoooO8@@@@@@@@@@@8COC8CCCCCCCOCCO8O8@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@OOOCO8@OCccooCCO8@@CoCOCcOCOOCCCCCC8@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8@O@@@@@@@c8@co.  .coccooCOCCOOC88O@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@88@@@@@@@@c8Occo:  :Oo::OCCCCOC@@@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8@@@@@@@@@@c8c8@CcC8Ooc:::O8O@@@@@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@88@@@@@@@@@@8ooO@@@@c.o8888oCCO8@@@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@O@@@@@@@@@@@8CcC@@@@@@@88@O88co@8O8@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8@@@@@@@@@CC88oo8@@@8OO88@@8@@CO@CCC@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@oCOCOOCO@CC8@8OCCCCc....:C88@@@8OooC8@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@OoccC8@@@@@@@@@@@@@@@@@@@O..:.  :coCC8@OOo......... :oCO88OOCCCO8@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@ocoococo8@8@@@@@@@@@@@@@@@@c....... :8OOOO........ . . C88O8C...:CCO@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@CcccoccoOOCCCCO8@@@@@@@@@@@@8:........COOCo......        :OC8OOc . :CCCO@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@8ccococoOOCCCCCCO@@@@@@@@@@@@@C:...... oOcc.               cOOOOOo    .CCCC8@@@@@@@@.            
.@@@@@@@@@@@@@@@@@OcoooocC8CCCCOCO@@@@@@@@@@@@@@8O8OOCocccCOC.  .             c8O8@Oo     oOOCC8@@@@@@@.            
.@@@@@@@@@@@@@@@@Cocccoo8CCCCCCO@@@@@@@@@@@@@@@@88C@@@OCCCCCOC.               c8888Oc    .OCCCC@@@@@@@@.            
.@@@@@@@@@@@@@@@OccocoC@CCCCCC8@@@@@@@@@@@@@@@@@888@@@8CCCCCCOC              ..::OC..   .CCCO88@@@@@@@@.            
.@@@@@@@@@@@@@@@oococo@CCCCCO@@@@@@@@@@@@@@@@@@8@@@@@@8CCCCCCC@O            .          cCCC@@@88@@@88@@.            
.@@@@@@@@@@@@@@8cooocOCCOCCO@@@@@@@@@@@@@@@@@@8@@@@@@8OCCCCCC88.   .  ........  ... .cOCCO@88@O888CCO8@.            
.@@@@@@@@@@@@@@8ooocoOCCCCC@@@@@@@@@@@@@@@@@@O@O@@@@8CCCCCCCC8O.cCC8@@@@@@@@@@88Oc .oOCCO@O@@CO@OCCCCC@.            
.@@@@@@@@@@@@@@@ococoOOCCCO@@@@@@@@@@@@@@@@@8@@@@@@OCOCCCCCCCO8@8OO88@@@@@@@@@@@@@@cCC8@@@@@OCOOOCCCOCO:            
.@@@@@@@@@@@@@@@CccocCCCCCO@@@@@@@@@@@@@@@@88@@@@@OOOoCCCCC@@@8OO888@@@@@@@@@88OO8@88O8@@@@8CCCOOCCCCC@:            
.@@@@@@@@@@@@@@@8ccoccCCCCC@@@@@@@@@@@@@@@8@@@@@8OCCCCCCoC@@@@8O@@O88@OO@@@@@@@@@88COC@@@@8CCCCCCCCO@O8.            
.@@@@@@@@@@@@@@@@CccocoOCOC8@@@@@@@@@@@@@8@@@@@@COOCO8@8O@8@@8C@@@O88@OO@@8O888@@@OoOOOOOCCCCCCCCCO@@@@.            
.@@@@@@@@@@@@@@@@@ococcoCCCC@@@@@@@@@@@@88@@@8@@88@@8@@@@@@@@O@@@@88@8OO8@@@@COOOOoCCCCCCCCCCCCC8@@@@@@.            
.@@@@@@@@@@@@@@@@@@c:ooccoOCC@@@@@@@@@@8OCc.:OOOOOO@@@@88@8@8@@88@O88@C@@8@8C@@@@8@COCCCCCCOO8@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@C.ccoccCCC8@@@@Oo...... .COO@@@@@@O8@O@@@@@@8@O8@@8CCOC8@@O@8@CCCCCO8@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@c.:ccccCCo:...: .....O@@@8@@@@@C@@O@@@@@@@O@OO@@@@@@@@@oO8@OCCCC8@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@c.c:............  O@@8OO8@@@C@@O@@@@@@@88@Oo8@@@@@@OCO@88oCCCO@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@O..........    ..  o8@@@@8C@@O8@8@@@@@@O@8CC8@@@OCCC@88CCCCC8@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@o..........  ..... o@88@@@OC@@88@O@@@@@8@O@@OCCOCCCCO@@8CoCCCC@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@o :....... .......... o@8OOOC8@8O@O@@@@@@8@O@@@OCOOCO@@@O8CCoCCC@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@C ... ...:.  .......... o8@@@OO@@O@O@@8O@@88@C@@@@OCO@@@@O@OoCOCCCC@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@88O8Oo@8@8::::  ......... O@8@@8O@8OC@@@88@@8@@C8@@@@@@@8@O8@OCCOCCCCC8@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@OocC:  .:CC@8OC:.......  c@@8@@8CO@@@888@@O@@OO@@@@@@@@@O@8OOO8CCOOOCCCO@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@OC:    cO8OOOCC@O.....  oC888@CC@@@@O@8@@O@@8C8@@@@88@C@@O88CO8COCCCCO@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@8Oo. :8OOOOOOCo8O..   C@C8@OC8@@@O88O@@O@@@OO@@@O8@@O@@C@OCO@8CCCCO@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@8CCoOOOOOOO8OCCCc     C@@o8@@@@C@O8@8O@@@OC@@O8@@OO@@C@8COCOCCCCO@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@CO8OOOOOO8OOOOOo  c88CO@@@@OO@O8@8O@@@8COC8@@@O8@@O@8C88CCCC8@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@8COOOOOOOO8OOOCC8..O8o8@@@@CO@C8@OO@@@8CC@@@@8O8@@O@8OOCCCCC8@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@O@@@@@@@8OOOOOCOO::C@OC@@OC8@C8@8C@@@@C@@@@88C888o8@OCCOCC@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@O@@@@@@@@@@8OO8O@O. oC8@8Co8@C88OO8@@O@@@@8OOC8@@OCOOCCCO@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@8@@@@@@@@@@@@8OOOCO.:o@@COCOCC@@CC88CO88C8@@8CO@@8OCCCCCO@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@8@@@@@@@@@@@@@@8OOO8o :ooCOCCO@OCO@8C@@8O8@C8OCC:.OCCCCCO@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@O@@@@@@@@@@@@@@@@OOOOOo.     CCcOOO:O@@8oC@C:.   .CCCCCO@@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@O@@@@@@@@@@@@@@@@@@O8OCCOO:. . .  .           .:o@8CCCCO@@@@@@@@@@@@@@@@@@@.            
.@@@@@@@@@@@@@@@@@@@@@@@@@@@O@@@@@@@@@@@@@@@@@@@8OOCCOOCCO8OCO8OOooC8OO8C8o@OCCCCCCCC8@@@@@@@@@@@@@@@@@.    */