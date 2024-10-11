
//defining the Unicode Letters
var alfmd = new Array("ﺁ", "ﺁ", "ﺂ", "ﺂ");
var alfhz = new Array("ﺃ", "ﺃ", "ﺄ", "ﺄ");
var wowhz = new Array("ﺅ", "ﺅ", "ﺆ", "ﺆ");
var alfxr = new Array("ﺇ", "ﺇ", "ﺈ", "ﺈ");
var hamzk = new Array("ﺉ", "ﺋ", "ﺌ", "ﺊ");
var alfff = new Array("ﺍ", "ﺍ", "ﺎ", "ﺎ");
var baaaa = new Array("ﺏ", "ﺑ", "ﺒ", "ﺐ");
var tamrb = new Array("ﺓ", "ﺓ", "ﺔ", "ﺔ");
var taaaa = new Array("ﺕ", "ﺗ", "ﺘ", "ﺖ");
var thaaa = new Array("ﺙ", "ﺛ", "ﺜ", "ﺚ");
var geeem = new Array("ﺝ", "ﺟ", "ﺠ", "ﺞ");
var haaaa = new Array("ﺡ", "ﺣ", "ﺤ", "ﺢ");
var khaaa = new Array("ﺥ", "ﺧ", "ﺨ", "ﺦ");
var daaal = new Array("ﺩ", "ﺩ", "ﺪ", "ﺪ");
var thaal = new Array("ﺫ", "ﺫ", "ﺬ", "ﺬ");
var raaaa = new Array("ﺭ", "ﺭ", "ﺮ", "ﺮ");
var zaaai = new Array("ﺯ", "ﺯ", "ﺰ", "ﺰ");
var seeen = new Array("ﺱ", "ﺳ", "ﺴ", "ﺲ");
var sheen = new Array("ﺵ", "ﺷ", "ﺸ", "ﺶ");
var saaad = new Array("ﺹ", "ﺻ", "ﺼ", "ﺺ");
var daaad = new Array("ﺽ", "ﺿ", "ﻀ", "ﺾ");
var taaah = new Array("ﻁ", "ﻃ", "ﻄ", "ﻂ");
var daaah = new Array("ﻅ", "ﻇ", "ﻈ", "ﻆ");
var aayen = new Array("ﻉ", "ﻋ", "ﻌ", "ﻊ");
var gayen = new Array("ﻍ", "ﻏ", "ﻐ", "ﻎ");
var faaaa = new Array("ﻑ", "ﻓ", "ﻔ", "ﻒ");
var qaaaf = new Array("ﻕ", "ﻗ", "ﻘ", "ﻖ");
var kaaaf = new Array("ﻙ", "ﻛ", "ﻜ", "ﻚ");
var laaam = new Array("ﻝ", "ﻟ", "ﻠ", "ﻞ");
var meeem = new Array("ﻡ", "ﻣ", "ﻤ", "ﻢ");
var nooon = new Array("ﻥ", "ﻧ", "ﻨ", "ﻦ");
var hhhhh = new Array("ﻩ", "ﻫ", "ﻬ", "ﻪ");
var wowww = new Array("ﻭ", "ﻭ", "ﻮ", "ﻮ");
var yaamd = new Array("ﻯ", "ﻯ", "ﻰ", "ﻰ");
var yaaaa = new Array("ﻱ", "ﻳ", "ﻴ", "ﻲ");
var laamd = new Array("ﻵ", "ﻵ", "ﻶ", "ﻶ");
var laahz = new Array("ﻷ", "ﻷ", "ﻸ", "ﻸ");
var laaxr = new Array("ﻹ", "ﻹ", "ﻺ", "ﻺ");
var laaaa = new Array("ﻻ", "ﻻ", "ﻼ", "ﻼ");
//defining variables
var defLang = "arabic";	//set default language:	[arabic, english]
var y = "";				//initialize global vars
var old = "";
var tstr = "";
var chaine_traitee = "";
var unicode = "ﺁﺁﺂﺂﺃﺃﺄﺄﺅﺅﺆﺆﺇﺇﺈﺈﺉﺋﺌﺊﺍﺍﺎﺎﺏﺑﺒﺐﺓﺓﺔﺔﺕﺗﺘﺖﺙﺛﺜﺚﺝﺟﺠﺞﺡﺣﺤﺢﺥﺧﺨﺦﺩﺩﺪﺪﺫﺫﺬﺬﺭﺭﺮﺮﺯﺯﺰﺰﺱﺳﺴﺲﺵﺷﺸﺶﺹﺻﺼﺺﺽﺿﻀﺾﻁﻃﻄﻂﻅﻇﻈﻆﻉﻋﻌﻊﻍﻏﻐﻎﻑﻓﻔﻒﻕﻗﻘﻖﻙﻛﻜﻚﻝﻟﻠﻞﻡﻣﻤﻢﻥﻧﻨﻦﻩﻫﻬﻪﻭﻭﻮﻮﻯﻯﻰﻰﻱﻳﻴﻲﻵﻵﻶﻶﻷﻷﻸﻸﻹﻹﻺﻺﻻﻻﻼﻼ";	//defining arabic unicode chars
var left = "ـئظشسيبلتنمكطضصثقفغعهخحج";					//defining letters that can connect from the left
var right = "ـئؤرلالآىآةوزظشسيبللأاأتنمكطضصثقفغعهخحجدذلإإ";	//defining letters that can connect from the right
var arabic = "ًٌٍَُِّْْئءؤرلاىةوزظشسيبلاتنمكطضصثقفغعهخحجدذْلآآلأأـلإإ.،؟ ";	//defining all arabic letters + harakat + symbols
var harakat = "ًٌٍَُِّْْ";			//defining the harakat 
var sym = "ًٌٍَُِّـ.،؟ @#$%^&*-+|\/=~(){}ْ,";		//defining other symbols
var g;
function ProcessInput(chaine) {						//the processing function
	chaine_traitee = "";
	x = chaine.split("");
	len = x.length;
	for (g = 0; g < len; g++) {		//process each letter, submit it to tests and then add it to the output string
		b = a = 1;				//ignoring the harakat
		while (harakat.indexOf(x[g - b]) >= 0)
			b = b + 1;
		while (harakat.indexOf(x[g + a]) >= 0)
			a = a + 1;
		if (g == 0) {	//determine the position of each letter
			if (right.indexOf(x[a]) >= 0)
				pos = 1;
			else
				pos = 0;
		}
		else if (g == (len - 1)) {
			if (left.indexOf(x[len - b - 1]) >= 0)
				pos = 3;
			else
				pos = 0;
		}
		else {
			if ((left.indexOf(x[(g - b)]) >= 0) && (right.indexOf(x[(g + a)]) >= 0))
				pos = 2;
			else if ((left.indexOf(x[(g - b)]) < 0) && (right.indexOf(x[(g + a)]) < 0))
				pos = 0;
			else if ((left.indexOf(x[(g - b)]) < 0) && (right.indexOf(x[(g + a)]) >= 0))
				pos = 1;
			else if ((left.indexOf(x[(g - b)]) >= 0) && (right.indexOf(x[(g + a)]) < 0))
				pos = 3;
		}
		if (x[g] == "\n")			//if this char is a new line, go to add new line function
			addChar("\n");
		else if (x[g] == "\r")	//if this char is carriage return, skip it.
		{ }
		else if (x[g] == "{")		//dealing with parenthesis
			addChar("}");
		else if (x[g] == "}")
			addChar("{");
		else if (x[g] == "(")
			addChar(")");
		else if (x[g] == ")")
			addChar("(");
		else if (x[g] == "ء")
			addChar("ﺀ");
		else if (x[g] == "آ")		//dealing with letters, output each letter with its right position
			addChar(alfmd[pos]);
		else if (x[g] == "أ")
			addChar(alfhz[pos]);
		else if (x[g] == "ؤ")
			addChar(wowhz[pos]);
		else if (x[g] == "إ")
			addChar(alfxr[pos]);
		else if (x[g] == "ئ")
			addChar(hamzk[pos]);
		else if (x[g] == "ا")
			addChar(alfff[pos]);
		else if (x[g] == "ب")
			addChar(baaaa[pos]);
		else if (x[g] == "ة")
			addChar(tamrb[pos]);
		else if (x[g] == "ت")
			addChar(taaaa[pos]);
		else if (x[g] == "ث")
			addChar(thaaa[pos]);
		else if (x[g] == "ج")
			addChar(geeem[pos]);
		else if (x[g] == "ح")
			addChar(haaaa[pos]);
		else if (x[g] == "خ")
			addChar(khaaa[pos]);
		else if (x[g] == "د")
			addChar(daaal[pos]);
		else if (x[g] == "ذ")
			addChar(thaal[pos]);
		else if (x[g] == "ر")
			addChar(raaaa[pos]);
		else if (x[g] == "ز")
			addChar(zaaai[pos]);
		else if (x[g] == "س")
			addChar(seeen[pos]);
		else if (x[g] == "ش")
			addChar(sheen[pos]);
		else if (x[g] == "ص")
			addChar(saaad[pos]);
		else if (x[g] == "ض")
			addChar(daaad[pos]);
		else if (x[g] == "ط")
			addChar(taaah[pos]);
		else if (x[g] == "ظ")
			addChar(daaah[pos]);
		else if (x[g] == "ع")
			addChar(aayen[pos]);
		else if (x[g] == "غ")
			addChar(gayen[pos]);
		else if (x[g] == "ف")
			addChar(faaaa[pos]);
		else if (x[g] == "ق")
			addChar(qaaaf[pos]);
		else if (x[g] == "ك")
			addChar(kaaaf[pos]);
		else if (x[g] == "ل") {
			g = g + 1;						//dealing with la combination
			if (x[g] == "ا")
				addChar(laaaa[pos]);
			else if (x[g] == "أ")
				addChar(laahz[pos]);
			else if (x[g] == "إ")
				addChar(laaxr[pos]);
			else if (x[g] == "آ")
				addChar(laamd[pos]);
			else {
				g = g - 1;
				addChar(laaam[pos]);
			}
		}
		else if (x[g] == "م")
			addChar(meeem[pos]);
		else if (x[g] == "ن")
			addChar(nooon[pos]);
		else if (x[g] == "ه")
			addChar(hhhhh[pos]);
		else if (x[g] == "و")
			addChar(wowww[pos]);
		else if (x[g] == "ى")
			addChar(yaamd[pos]);
		else if (x[g] == "ي")
			addChar(yaaaa[pos]);
		else if (x[g] == "لآ")
			addChar(laamd[pos]);
		else if (x[g] == "لأ")
			addChar(laahz[pos]);
		else if (x[g] == "لإ")
			addChar(laaxr[pos]);
		else if (x[g] == "لا")
			addChar(laaaa[pos]);
		else if (x[g] == " ")
			addChar(" ");
		else if (sym.indexOf(x[g]) >= 0)		//if the char is a symbol, add it
			addChar(x[g]);
		else if (unicode.indexOf(x[g]) >= 0)	//if the char is an arabic reversed letter, reverse it back!
			addChar(x[g]);
		else	//if the char is none of the above, then treat it as Latin text (dont reverse)
			addChar(x[g], g);
	}
	return chaine_traitee;
}
function correction_retour(chaine) {
	//correction des retours à ligne
	tab = chaine.split("\n");		//division sur les retoure à la ligne pour remise en form
	tab.reverse();
	chaine = "";
	for (i = 0; i < tab.length; i++)
		if (i != tab.length - 1)
			chaine = chaine + tab[i] + '\n';
		else
			chaine = chaine + tab[i];
	return chaine;
}
function Traitement() {
	chaine = document.getElementById("textarea").value;
	chaine = ProcessInput(chaine);
	chaine = correction_retour(chaine);
	chaine = correction_Latin(chaine);
	document.getElementById("textarea").value = chaine;
}
function correction_Latin(chaine) {
	x = chaine.split("");
	x.reverse();
	i_debut = -1;
	i_fin = x.length;
	for (i = 0; i < x.length; i++) {		//teste sur tous les caracteres
		if (arabic.indexOf(x[i]) < 0 && unicode.indexOf(x[i]) < 0 && x[i] != undefined) {		//caracteres latins ou chiffres
			if (i_debut == -1)
				i_debut = i;
			if (i == x.length - 1) {
				i_fin = i;
				lon = i_fin - i_debut;
				if (lon >= 1) {
					tab_a = x.slice(0, i_debut);
					tab_b = x.slice(i_debut, i_fin + 1);
					tab_b.reverse();
					tab_c = x.slice(i_fin + 1, x.length);
					x = tab_a.concat(tab_b, tab_c);
					i_debut = -1;
					i_fin = x.length - 1;
				}
			}
		}
		else {										//un caracteres arabe
			if (i_debut != -1) {
				i_fin = i - 1;						//un caractere arabe a ete trouve apres des caracteres latins
				lon = i_fin - i_debut;
				if (lon == 0) {						//un seul caractere latin isolé reste tel quel
				}
				if (lon >= 1) {						//plusieur caracteres latin formant un mot (reinversion)
					if (i_debut == 0) {
						tab_a = x.slice(0, i_fin + 1);
						tab_a.reverse();
						tab_b = x.slice(i_fin + 1, x.length);
						x = tab_a.concat(tab_b);
					}
					else {
						tab_a = x.slice(0, i_debut);
						tab_b = x.slice(i_debut, i_fin + 1);
						tab_b.reverse();
						tab_c = x.slice(i_fin + 1, x.length);
						x = tab_a.concat(tab_b, tab_c);
					}
				}
				i_debut = -1;
				i_fin = x.length - 1;
			}
		}
	}
	x = x.reverse();
	chaine = x.join("");
	return chaine;
}
function addChar(chr) {			//add arabic chars (reverse)
	chaine_traitee = chr + chaine_traitee;
	h_tmp_i = 0;
	cmp = 0;
}


//let testText = "جواد حسن";let resultOutput = ProcessInput(testText);console.log(resultOutput);