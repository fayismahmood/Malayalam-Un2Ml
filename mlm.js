
var content; 

$(document).ready(function () {
    content = $("#mm").html();
    aa()
})

var x = 0;

	function aa() {
		var ak=new Array(
"അ", "ആ", "ഇ", "ഈ", "ഉ", "ഊ", "ഋ", "എ", "ഏ", "ഐ", "ഒ", "ഓ", "ഔ", "ക", "ഖ", "ഗ", "ഘ", "ങ", "ച", "ഛ", "ജ", "ഝ", "ഞ", "ട", "ഠ", "ഡ", "ഢ", "ണ", "ത", "ഥ", "ദ", "ധ", "ന", "പ", "ഫ", "ബ", "ഭ", "മ", "യ", "ര", "റ", "ല", "ള", "ഴ", "വ", "ശ", "ഷ", "സ", "ഹ","ാ", "ി", "ീ", "ു", "ൂ", "ൃ","്", "ം", "ഃ");


		var na = String.fromCharCode(92);
		var akML = new Array("A", "B", "C", "Cu", "D", "Du", "E", "F", "G", "sF", "H", "Hm", "Hu", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", na,String.fromCharCode(93), "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "v", "w", "x")

		
		var koot = new Array("ക്ക","ക്ല","ക്ഷ","ഗ്ഗ","ഗ്ല","ങ്ക","ങ്ങ","ച്ച","ഞ്ച","ഞ്ഞ","ട്ട","ണ്‍","ണ്ട","ണ്ണ","ത്ത","ത്ഥ","ദ്ദ","ദ്ധ","ന്‍","ന്ത","ന്ദ","ന്ന","ന്മ","പ്പ","പ്ല","ബ്ബ","ബ്ല","മ്പ","മ്മ","മ്ല","യ്യ","ര്‍","റ്റ","ല്‍","ല്ല","ള്‍","ള്ള","വ്വ","ശ്ശ","ശ്ശ","സ്ല","സ്സ","ഹ്ല","സ്റ്റ","ഡ്ഡ","ക്ട","ബ്ധ","ബ്ദ","ച്ഛ","ഹ്മ","ഹ്ന","ന്ധ","ത്സ","ജ്ജ","ണ്മ","സ്ഥ","ന്ഥ","ജ്ഞ","ത്ഭ","ഗ്മ","ശ്ച","ണ്ഡ","ത്മ","ക്ത","ഗ്ന","ന്റ","ഷ്ട","റ്റ","ന്മ", "്യ", "്വ");
		var kootML = new Array("¡", "¢", "£", "¤", "¥", "¦", "§", "¨", "©", "ª", "«", "¬", "­", "®", "¯", "°", "±", "²", "³", "´", "µ", "¶", "·", "¸", "¹", "º", "»", "¼", "½", "¾", "¿", "À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "È", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "×", "Ø", "Ù", "Ú", "Û", "Ü", "Ý", "Þ", "ß", "à", "á", "â", "ã", "ã", "ä", "y", "z", "{");
 
		var chin = new Array("െ", "േ","ൈ", "്ര");
		var chinML = new Array("s", 	"t",   	 "ss",	 	"{");

		var chin1 = new Array("ോ", "ൊ");
        var chinML1 = new Array("t","s")
		

		for (x = 0; x < koot.length;) {

		    content = content.replace(koot[x], kootML[x]);
		    if (content.match(koot[x])) { continue } else { x++ }
		    $("#fou").html(content);
		}


		for (x = 0; x < chin.length;) {
		    var pos_h = content.match(chin[x]);
		    var pos = content.indexOf(pos_h);
		    var data=content.charAt(pos - 1);


		    content = content.replace(data + chin[x], chinML[x] + data);
		    if (content.match(chin[x])) { continue } else { x++ }
		    $("#fou").html(content);
		}
		for (x = 0; x < chin1.length;) {
		    var pos_h1 = content.match(chin1[x]);
		    var pos1 = content.indexOf(pos_h1);
		    var data1 = content.charAt(pos1 - 1);


		    content = content.replace(data1 + chin1[x], chinML1[x] + data1+"m");
		    if (content.match(chin1[x])) { continue } else { x++ }
		    $("#fou").html(content);
		}
        
		




		    for (x = 0; x < ak.length;) {

		        content = content.replace(ak[x], akML[x]);
		        if (content.match(ak[x])) { continue } else { x++ }
		        $("#fou").html(content);
		    }
	
		


		}
		
	
	

	
	