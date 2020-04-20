var processT = new Array(
	                  new Array( 0, 1, 2, 3,  0,  7, -680876936),    //  1
                    new Array( 3, 0, 1, 2,  1, 12, -389564586),    //  2
                    new Array( 2, 3, 0, 1,  2, 17,  606105819),    //  3
                    new Array( 1, 2, 3, 0,  3, 22, -1044525330),   //  4
                    new Array( 0, 1, 2, 3,  4,  7, -176418897),    //  5
                    new Array( 3, 0, 1, 2,  5, 12,  1200080426),   //  6
                    new Array( 2, 3, 0, 1,  6, 17, -1473231341),   //  7
                    new Array( 1, 2, 3, 0,  7, 22, -45705983), 	   //  8
                    new Array( 0, 1, 2, 3,  8,  7,  1770035416),   //  9
                    new Array( 3, 0, 1, 2,  9, 12, -1958414417),   // 10
                    new Array( 2, 3, 0, 1, 10, 17, -42063),    		 // 11
                    new Array( 1, 2, 3, 0, 11, 22, -1990404162),   // 12
                    new Array( 0, 1, 2, 3, 12,  7,  1804603682),   // 13
                    new Array( 3, 0, 1, 2, 13, 12, -40341101),     // 14
                    new Array( 2, 3, 0, 1, 14, 17, -1502002290),   // 15
                    new Array( 1, 2, 3, 0, 15, 22,  1236535329),   // 16
                    new Array( 0, 1, 2, 3,  1,  5, -165796510),    // 17
                    new Array( 3, 0, 1, 2,  6,  9, -1069501632),   // 18
                    new Array( 2, 3, 0, 1, 11, 14,  643717713),    // 19
                    new Array( 1, 2, 3, 0,  0, 20, -373897302),    // 20
                    new Array( 0, 1, 2, 3,  5,  5, -701558691),    // 21
                    new Array( 3, 0, 1, 2, 10,  9,  38016083),     // 22
                    new Array( 2, 3, 0, 1, 15, 14, -660478335),    // 23
                    new Array( 1, 2, 3, 0,  4, 20, -405537848),    // 24
                    new Array( 0, 1, 2, 3,  9,  5,  568446438),    // 25
                    new Array( 3, 0, 1, 2, 14,  9, -1019803690),   // 26
                    new Array( 2, 3, 0, 1,  3, 14, -187363961),    // 27
                    new Array( 1, 2, 3, 0,  8, 20,  1163531501),   // 28
                    new Array( 0, 1, 2, 3, 13,  5, -1444681467),   // 29
                    new Array( 3, 0, 1, 2,  2,  9, -51403784),     // 30
                    new Array( 2, 3, 0, 1,  7, 14,  1735328473),   // 31
                    new Array( 1, 2, 3, 0, 12, 20, -1926607734),   // 32
                    new Array( 0, 1, 2, 3,  5,  4, -378558),    	 // 33
                    new Array( 3, 0, 1, 2,  8, 11, -2022574463),   // 34
                    new Array( 2, 3, 0, 1, 11, 16,  1839030562),   // 35
                    new Array( 1, 2, 3, 0, 14, 23, -35309556),     // 36
                    new Array( 0, 1, 2, 3,  1,  4, -1530992060),   // 37
                    new Array( 3, 0, 1, 2,  4, 11,  1272893353),   // 38
                    new Array( 2, 3, 0, 1,  7, 16, -155497632),    // 39
                    new Array( 1, 2, 3, 0, 10, 23, -1094730640),   // 40
                    new Array( 0, 1, 2, 3, 13,  4,  681279174),    // 41
                    new Array( 3, 0, 1, 2,  0, 11, -358537222),    // 42
                    new Array( 2, 3, 0, 1,  3, 16, -722521979),    // 43
                    new Array( 1, 2, 3, 0,  6, 23,  76029189),     // 44
                    new Array( 0, 1, 2, 3,  9,  4, -640364487),    // 45
                    new Array( 3, 0, 1, 2, 12, 11, -421815835),    // 46
                    new Array( 2, 3, 0, 1, 15, 16,  530742520),    // 47
                    new Array( 1, 2, 3, 0,  2, 23, -995338651),    // 48
                    new Array( 0, 1, 2, 3,  0,  6, -198630844),    // 49
                    new Array( 3, 0, 1, 2,  7, 10,  1126891415),   // 50
                    new Array( 2, 3, 0, 1, 14, 15, -1416354905),   // 51
                    new Array( 1, 2, 3, 0,  5, 21, -57434055),   	 // 52
                    new Array( 0, 1, 2, 3, 12,  6,  1700485571),   // 53
                    new Array( 3, 0, 1, 2,  3, 10, -1894986606),   // 54
                    new Array( 2, 3, 0, 1, 10, 15, -1051523),    	 // 55
                    new Array( 1, 2, 3, 0,  1, 21, -2054922799),   // 56
                    new Array( 0, 1, 2, 3,  8,  6,  1873313359),   // 57
                    new Array( 3, 0, 1, 2, 15, 10, -30611744),     // 58
                    new Array( 2, 3, 0, 1,  6, 15, -1560198380),   // 59
                    new Array( 1, 2, 3, 0, 13, 21,  1309151649),   // 60
                    new Array( 0, 1, 2, 3,  4,  6, -145523070),    // 61
                    new Array( 3, 0, 1, 2, 11, 10, -1120210379),   // 62
                    new Array( 2, 3, 0, 1,  2, 15,  718787259),    // 63
                    new Array( 1, 2, 3, 0,  9, 21, -343485551)	   // 64
            );

function and32(x, y)
{
  var datalow = (x & 0xFFFF) + (y & 0xFFFF);
  var datahigh = (x >> 16) + (y >> 16) + (datalow >> 16);
  return (datahigh << 16) | (datalow & 0xFFFF);
}

function rolbit(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

function MD5_marshal(b32) {
    return  String.fromCharCode(b32 & 0xff) +
            String.fromCharCode((b32 >>> 8) & 0xff) +
            String.fromCharCode((b32 >>> 16) & 0xff) +
            String.fromCharCode((b32 >>> 24) & 0xff);
}

function FUNC_F(x, y, z) {
    return (x & y) | (~x & z);
}

function FUNC_G(x, y, z) {
    return (x & z) | (y & ~z);
}

function FUNC_H(x, y, z) {
    return x ^ y ^ z;
}

function FUNC_I(x, y, z) {
    return y ^ (x | ~z);
}


function MD5_Process(x, s, f,index,cnt) {
  var a, b, c, d;
  var kk, ss, ii;
  var t, u;
  a =  processT[index][0];
  b =  processT[index][1];
  c =  processT[index][2];
  d =  processT[index][3];
  kk = processT[index][4];
  ss = processT[index][5];
  u = f(s[b], s[c], s[d]);
  s[a]= and32(rolbit(and32(and32(s[a], u), and32(x[cnt+kk], processT[index][6])), ss), s[b]);
}

function CheckChar(str)
{
    flg = str.match(/^([0-9]|[A-Z]|[a-z]|[-_])*$/);
    if(flg  == null)
    {
        return (1);
    }
    return (0);
}

function CheckCharAdmingroup(str)
{
    flg = str.match(/^([0-9]|[A-Z]|[a-z]|[-_]|[\ ])*$/);
    if(flg  == null)
    {
        return (1);
    }
    return (0);
}

var roletable=
"\"/\\[ ]:;|=,+*?<>@";

var admingrouptable=
"/\\[]:;|=,+*?<>\"";

function CheckCharExtend(str)
{
    var i;
   	for(i=0;i<str.length;i++){
		if(roletable.indexOf(str.charAt(i))>=0){
    		return (1);
    	}
    }
    return CheckKanji(str);
}

function CheckAdminGroup(str)
{
    var i;
    var len=0;
    str = Trim(str);
   	for(i=0;i<str.length;i++){
		if(admingrouptable.indexOf(str.charAt(i))>=0){
    		return (1);
    	}
    	len++;
    }
    
    if(len==0) {
    	return 1;
    }
	
    if(len==1) {
    	if(str.indexOf(".")==0) {
    		return 1;
    	}
    	if(str.indexOf(" ")==0) {
    		return 1;
    	}
    } else {
    	if(str.lastIndexOf(".")==(len-1)) {
    		return 1;
    	}
    }

    if(len>64){
    	return (1);
    }
    
    return 0;
}

function Trim(str)
{
	var substr = str;
	for(var i=0;i<substr.length;i++){
    	if(substr.charAt(i).charCodeAt()!=32 &&
		   substr.charAt(i).charCodeAt()!=12288) {
			substr = substr.substring(i, str.length);
			break;
		}
    }
    for(var j=substr.length-1;j>=0;j--){
		if(substr.charAt(j).charCodeAt()==32){
			substr = substr.substring(0, j);
		} else if(substr.charAt(j).charCodeAt()==12288){
			substr = substr.substring(0, j);
		} else {
			break;
		}
    }
    return substr;
}

function CheckNum(str)
{
    flg = str.match(/^([0-9])*$/);
    if(flg  == null)
    {
        return (1);
    }
    return (0);
}

function CheckKanji(str)
{
    var ch,i,len;
    for(i=0,len=0;i<str.length;i++){
        ch=str.charCodeAt(i);
        if(ch == 0x0009){
            return (1);
        }
        if((ch <= 0x009F) && ((ch <= 0x001F) || (ch >= 0x007F))){
            return (1);
        }
        len++;
    }
	if(len>32){
		return (1);
	}
    return (0);
}

var mailtable=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789"+
        "@`!#$%&'()*:+;[{,<| -=]} >^~/?_."+
        "\"\\";

var cardtable=
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789"+
        "@`!#$%&'()*:+;[{,<| -=]} >^~/?_."+
        "\"\\"+
        "\r\n";

var passtable="€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ";

function CheckMail(str)
{
	var i;
   	for(i=0;i<str.length;i++){
		if(mailtable.indexOf(str.charAt(i))>=0){
    		continue;
    	}else{
            return (1);
    	}
    }
    return (0);
}

function CheckPassWord(str)
{
	
	var i;
   	for(i=0;i<str.length;i++){
		if(mailtable.indexOf(str.charAt(i))>=0 || passtable.indexOf(str.charAt(i))>=0){
    		continue;
    	}else{
    		var re = new RegExp("^[\u00A1-\u00FF]+$");
    		if(re.exec(str.charAt(i))){
    			continue;
    		}
            return (1);
    	}
    }
    return (0);
}

function CheckCard(str)
{
	var i;
   	for(i=0;i<str.length;i++){
		if(cardtable.indexOf(str.charAt(i))>=0){
    		continue;
    	}else{
            return (1);
    	}
    }
    return (0);
}

function CheckCardLen(str)
{
   b = str.split("\r\n");
   for(cnt=0;cnt < b.length;cnt++)
   {
		 if(b[cnt].length > 8)
     {
       return (1);
     }
   }
   return(0);
}

function setDefaultValue(str1,str2)
{
	for (i=0;i<str1.length;i++) {
		if(str1[i].value == str2)
		{
        	str1[i].checked = true;
      
        }
	}
}
function setDefaultSelectValue(str1,str2)
{
    for (i=0;i<str1.length;i++) {
		if(str1[i].value == str2)
		{
		 str1.selectedIndex = i;
        }
	}
}
function strparam(obj)
{
	var str = "";
	for(var i = 0;i<obj.length;i++)
	{
	  str = str + obj.options[i].text+",";
	}
	return str;
}
function setToday(str) {

     myD = new Date();
     myYear    = myD.getYear();
     myYear4   = (myYear < 2000) ? myYear+1900 : myYear;
     myMonth   = setFormat(myD.getMonth() + 1);
     myDate    = setFormat(myD.getDate());
     myHours   = setFormat(myD.getHours());
     myMinutes = setFormat(myD.getMinutes());
     mySeconds = setFormat(myD.getSeconds());
	 if(str == "0")
	 {
       today = myYear4 + "/" + myMonth +"/" + myDate + "&nbsp;" + myHours + ":"+myMinutes+":"+mySeconds;
     }else if(str == "1"){
       today = myDate + "/" + myMonth +"/" + myYear4 + "&nbsp;" + myHours + ":"+myMinutes+":"+mySeconds;
     }else if(str == "2"){
        today = myMonth + "/" + myDate +"/" + myYear4 + "&nbsp;" + myHours + ":"+myMinutes+":"+mySeconds;
     }
     document.getElementById("accessday").innerHTML = today;
}
function setFormat(obj)
{
	if(obj < 10)
	{
		obj = "0"+ obj;
	}
	return obj;
}
function checkCapitalLetter(data)
{
	value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(i = 0 ; i < data.length ; i++) {
		if(value.indexOf(data.charAt(i)) >= 0) {
			return true;
		}
	}
	return false;
}

function checkSmallLetter(data)
{
	value = "abcdefghijklmnopqrstuvwxyz";
	for(i = 0 ; i < data.length ; i++) {
		if(value.indexOf(data.charAt(i)) >= 0) {
			return true;
		}
	}
	return false;
}

function checkNumber(data)
{
	value = "1234567890";
	for(i = 0 ; i < data.length ; i++) {
		if(value.indexOf(data.charAt(i)) >= 0) {
			return true;
		}
	}
	return false;
}

function checkSymbol(data)
{
	value = "!\"#$%&'()=~|-^\\@[;:]./,`{+*}<>?_";
	for(i = 0 ; i < data.length ; i++) {
		if(value.indexOf(data.charAt(i)) >= 0) {
			return true;
		}
	}
	return false;
}

function checkThreeString(data)
{
	for(i = 2 ; i < data.length ; i++) {
		var str = data.charAt(i-2);
		var str2 = data.charAt(i-1);
		if(str == data.charAt(i) && str2 == data.charAt(i)) {
			return false;
		}
	}
	return true;
}

function reload_device()
{
	window.location.reload();
}

function toPortalPage()
{
	document.sdl.portal.value="on";
	document.sdl.submit();
}
function validateLdapServerName(data)
{
	var errID = null;
	
	if(data == null || data.length == 0) {
		errID = "ID_WARNING_SERVERNAME";
	} else {
		if ("localhost" == data) {
			errID = "ID_WARNING__INV_SERVERNAME2";
		} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
			errID = "ID_WARNING__INV_SERVERNAME3";
		} else if (data.length > 24 || !checkASCIIString(data)) {
			errID = "ID_WARNING__INV_SERVERNAME";
		}
	}
	return errID;
}
function validateLdapHost(data)
{
	var errID = null;
	
	if(data == null || data.length == 0) {
		errID = "ID_WARNING_HOSTNAME";
	} else {
		if ("localhost" == data) {
			errID = "ID_WARNING__INV_HOSTNAME2_LOCALHOST";
		} else if ("127.0.0.1" == data) {
			errID = "ID_WARNING__INV_HOSTNAME2_127";
		} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
			errID = "ID_WARNING__INV_HOSTNAME3";
		} else if (data.length > 48 || !checkASCIIString(data)) {
			errID = "ID_WARNING__INV_HOSTNAME";
		}
	}
	return errID;
}
function validateLdapSecoundaryHost(data)
{
	var errID = null;
	
	if(data != null && data.length != 0) {
		if ("localhost" == data) {
			errID = "ID_WARNING__INV_SECOUNDARY_HOSTNAME2_LOCALHOST";
		} else if ("127.0.0.1" == data) {
			errID = "ID_WARNING__INV_SECOUNDARY_HOSTNAME2_127";
		} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
			errID = "ID_WARNING__INV_SECOUNDARY_HOSTNAME3";
		} else if (data.length > 48 || !checkASCIIString(data)) {
			errID = "ID_WARNING__INV_SECOUNDARY_HOSTNAME";
		}
	}
	return errID;
}
function validateLdapPort(data)
{
	var errID = null;
	if(data == null || data.length == 0) {
		errID = "ID_WARNING_PORT";
	} else {
		if (!checkNumber(data)) {
			errID = "ID_WARNING_INV_PORT";
		} else if (data < 1 || data > 65535) {
			errID = "ID_WARNING_INV_PORT";
		}
	}
	return errID;
}

function validateLdapSecoundaryPort(data1,data2)
{
	var errID = null;
	if(data1 != null && data1.length > 0){
		if(data2 == null || data2.length == 0) {
			errID = "ID_WARNING_PORT";
		}
	}
	if(data2 != null && data2.length > 0) {
		if (!checkNumber(data2)) {
			errID = "ID_WARNING_INV_PORT";
		} else if (data2 < 1 || data2 > 65535) {
			errID = "ID_WARNING_INV_PORT";
		}
	}
	return errID;
}


function validateComment(data)
{
	var errID = null;
	if (!checkCtrlChar(data)) {
		errID = "ID_WARNING_INV_COMMENT2";
	} else if(data.length > 64) {
		errID = "ID_WARNING_INV_COMMENT";
	}
	return errID;
}

function validateAdminID(data)
{
	var errID = null;
	if(data == null || data.length == 0) {
		errID = "ID_WARNING_ADMIN_ID";
	} else if (data.indexOf("*")!=-1 || !checkCtrlChar(data)) {
		errID = "ID_WARNING_INV_ADMIN_ID2";
	} else if(data.length > 128 || !checkInvalidString(data)) {
		errID = "ID_WARNING_INV_ADMIN_ID";
	}
	return errID;
}
function validateAdminPWD(data)
{
	var errID = null;
	if(data == null || data.length == 0) {
		errID = "ID_WARNING_ADMIN_PASSWORD";
	} else if (!checkCtrlChar(data)) {
		errID = "ID_WARNING_INV_ADMIN_PASSWORD2";
	} else if(data.length > 24 || !checkInvalidString(data)) {
		errID = "ID_WARNING_INV_ADMIN_PASSWORD";
	}
	return errID;
}

function validateMatchAttribute(data)
{
	var errID = null;
	if (!checkInvalidChar(data) || data.indexOf(' ') != -1 || !checkCtrlChar(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_USER2";
	} else if (!checkInvalidString(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_USER";
	} else if (!checkAttributeNameStringNull(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_USER";
	}
	return errID;
}
function validateSearchBase(data)
{
	var errID = null;
	if (data == null) {
		errID = "ID_WARNING_INV_SERACH_BASE";
	} else if (!checkCtrlChar(data)) {
		errID = "ID_WARNING_INV_SERACH_BASE2";
	} else if (data.length > 128 || !checkInvalidString(data)) {
		errID = "ID_WARNING_INV_SERACH_BASE";
	}
	return errID;
}
function validateCardIdAttribute(data)
{
	var errID = null;
	if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_CARDID2";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_CARDID2";
	} else if (!checkAttributeNameStringNull(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_CARDID";
	}
	return errID;
}
function validateValidetyAttribute(data)
{
	var errID = null;
	if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_VALIDITY2";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_VALIDITY2";
	} else if (!checkAttributeNameStringNull(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_VALIDITY";
	}
	return errID;
}
function validatePinCodeAttribute(data)
{
	var errID = null;
	if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_PINCODE2";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_PINCODE2";
	} else if (!checkAttributeNameStringNull(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_PINCODE";
	}
	return errID;
}
function validateLoginAttribute(data)
{
	var errID = null;
	if (data == null || data.length == 0) {
		errID = "ID_WARNING_ATTRIBUTE_FOR_LOGINNAME";
	} else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_LOGINNAME2";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_LOGINNAME2";
	} else if (!checkAttributeNameString(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_LOGINNAME";
	}
	return errID;
}
function validateMailAttribute(data)
{
	var errID = null;
	if (data == null || data.length == 0) {
		errID = "ID_WARNING_ATTRIBUTE_FOR_MAIL";
	} else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_MAIL2";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_MAIL2";
	} else if (!checkAttributeNameString(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_FOR_MAIL";
	}
	return errID;
}
function validateCNAttribute(data)
{
	var errID = null;
	if (data == null || data.length == 0) {
		errID = "ID_WARNING_ATTRIBUTE_FOR_DISPLAYNAME";
	} else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_DISPLAYNAME2";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_ATTRIBUTE_DISPLAYNAME2";
	} else if (!checkAttributeNameString(data)) {
		errID = "ID_WARNING_INV_ATTRIBUTE_DISPLAYNAME";
	}
	return errID;
}
function validateDCValue(data)
{
	var errID = null;
	if (data == null || data.length == 0) {
		errID = "ID_WARNING_INV_DC_ATTRIBUTE3";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_DC_ATTRIBUTE2";
	} else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_DC_ATTRIBUTE2";
	} else if (data.length !=0 && !checkLDAPAttribute(data)) {
		errID = "ID_WARNING_INV_DC_ATTRIBUTE";
	}
	return errID;
}
function validateDCAttribute(data)
{
	var errID = null;
	if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_DCATTRIBUTE_ATTRIBUTE2";
	} else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_DCATTRIBUTE_ATTRIBUTE2";
	} else if (data.length != 0 && !checkLDAPAttribute(data)) {
		errID = "ID_WARNING_INV_DCATTRIBUTE_ATTRIBUTE";
	}
	return errID;
}

function checkCtrlChar(data)
{
	var ch = null;
    for (var i = 0 ; i < data.length ; i++) {
    	ch = data.charCodeAt(i);
    	if ((ch >= 0x00 && ch < 0x20) || ch == 0x7f) {
        	return false;
        }
    }
    return true;
}
function checkASCIIString(data)
{
	var ch = null;
	for(var i = 0 ; i < data.length ; i++) {
		ch = data.charCodeAt(i);
    	if (ch <= 0x20 || ch > 0x7e) {
    		return false;
    	}
    }
    return true;
}
function checkInvalidString(data)
{
	var ch = null;
	for(var i = 0 ; i < data.length ; i++) {
		ch = data.charCodeAt(i);
    	if (ch < 0x20 || ch > 0x7e) {
    		return false;
    	}
    }
    return true;
}
var attributeTable = "\\/:*?|<>[];,=+@\"&";
function checkInvalidChar(data)
{
	for(var i = 0; i < data.length; i++){
		var ch = data.charAt(i);
    	if (attributeTable.indexOf(ch) != -1) {
    		return false
    	}
	}
	return true;
}
function checkAttributeNameStringNull(data)
{
	if (data.length > 64) {
		return false;
	}
	for (var i = 0; i < data.length; i++) {
		var ch = data.charCodeAt(i);
    	if (ch < 0x20 || ch > 0x7e) {
    		return false;
    	}
	}
	if (!checkInvalidChar(data)) {
		return false;
	}
	return true;
}
function checkAttributeNameString(data)
{
	if (data == null || data.length ==0) {
		return false;
	}
	if (data.length > 64) {
		return false;
	}
	for (var i = 0; i < data.length; i++) {
		var ch = data.charCodeAt(i);
    	if (ch < 0x20 || ch > 0x7e) {
    		return false;
    	}
	}
	if (!checkInvalidChar(data)) {
		return false;
	}
	return true;
}
var ldaptable = "\\/:*?|<>[];,=+@\"&";
function checkLDAPAttribute(data)
{
	if (data == null || data.length == 0) {
		return false;
	}
	if (data.length > 64) {
		return false;
	}
	for (var i = 0; i < data.length; i++) {
		var ch = data.charCodeAt(i);
    	if (ch < 0x20 || ch > 0x7e) {
    		return false;
    	}
	}
	if (ldaptable.indexOf(data) >= 0) {
    		return false;
    }
    return true;
}

function utf8_to_ISO (str_data) {
    var tmp_arr = [],
        i = 0,
        ac = 0,
        c1 = 0,
        c2 = 0,
        c3 = 0;
 
    str_data += '';
 
    while (i < str_data.length) {
        c1 = str_data.charCodeAt(i);
        if (c1 < 128) {
            tmp_arr[ac++] = String.fromCharCode(c1);
            i++;
        } else if (c1 > 191 && c1 < 224) {
            c2 = str_data.charCodeAt(i + 1);
            tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
            i += 2;
        } else {
            c2 = str_data.charCodeAt(i + 1);
            c3 = str_data.charCodeAt(i + 2);
            tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }
 
    return tmp_arr.join('');
}

function utf16_to_utf16LE (str_data) {
    var tmp_arr = [];
    var ac = 0;
    for (var i=0; i<str_data.length; i++) {
        var c1 = str_data.charCodeAt(i);
        tmp_arr[ac++] = String.fromCharCode((c1 & 0xff));
        tmp_arr[ac++] = String.fromCharCode((c1 & 0xff00) >> 8);
    }
    return tmp_arr.join('');
}

function hexhash(data_in, code){

	var data;

	if(code == "SDL"){
		/* SDL�n�b�V�� */
		data = utf8_to_ISO(data_in);
	}else if(code == "NLS"){
		/* NLS�n�b�V�� */
		data = utf16_to_utf16LE(data_in);
	}else{
		/* �ǂ���ł��Ȃ��Ƃ��͎b��I��SDL */
		data = utf8_to_ISO(data_in);
	}
	
  	var abcd, x, s, back;
  	var cnt,i, j, k,l;
  	var tmp;
		var c;
		var md5hash;
		var md5hexhash;

  	s = new Array(1732584193, -271733879, -1732584194, 271733878);

    len = (((data.length + 8) >> 6) + 1)*16;
    x = new Array(len);
    for(i = 0; i < len; i++){
         x[i] = 0;
    }
    for(i = 0; i < data.length; i++){
        x[i >> 2] |= data.charCodeAt(i) << ((i % 4) * 8);
    }
    x[i >> 2] |= 0x80 << ((i % 4) * 8);
    x[len - 2] = data.length * 8;
  	back    = new Array(4);

	for(cnt = 0; cnt < x.length; cnt += 16)
  	{
		for(j=0;j<4;j++){
			back[j]=s[j];
		}
        /*Round1*/
        for(j = 0; j < 16; j++) {
            MD5_Process(x, s,  FUNC_F,j,cnt);
        }
        /*Round2*/
        for(j = 16; j < 32; j++) {
            MD5_Process(x, s,  FUNC_G,j,cnt);
        }

        /*Round3*/
        for(j = 32; j < 48; j++) {
            MD5_Process(x, s,  FUNC_H,j,cnt);
        }
        /*Round4*/
        for(j = 48; j < 64; j++) {
            MD5_Process(x, s,  FUNC_I,j,cnt);
        }
	    for(l = 0; l < 4; l++) {
		    s[l] = and32(s[l], back[l]);
    	}
	}

	md5hash= MD5_marshal(s[0]) +
    	MD5_marshal(s[1]) +
        MD5_marshal(s[2]) +
        MD5_marshal(s[3]);

    md5hexhash = "";
    for(i = 0; i < 16; i++) {
        c = md5hash.charCodeAt(i);
        md5hexhash += "0123456789abcdef".charAt((c>>4) & 0xf);
        md5hexhash += "0123456789abcdef".charAt(c & 0xf);
    }
    return md5hexhash;
}

function toUserMngPage()
{
	document.sdl.portal.value="user";
	document.sdl.submit();
}

function menu(data)
{
	document.menu.menu.value = data;
	document.menu.submit();
}

var adtable = "\\/:*?|<>[];,=+@\"&";
function checkADAttribute(data)
{
	if (data == null || data.length == 0) {
		return false;
	}
	for (var i = 0; i < data.length; i++) {
		var ch = data.charCodeAt(i);
    	if (ch < 0x20 || ch > 0x7e) {
    		return false;
    	}
	}
	if (adtable.indexOf(data) >= 0) {
    		return false;
    }
    return true;
}
function checkADValueLength(data, size)
{
	if (data == null || data.length == 0) {
		return true;
	}
	if (data.length > size) {
		return false;
	}
	if (ldaptable.indexOf(data) >= 0) {
    		return false;
    }
    return true;
}

function checkADValueLengthNull(data, size)
{
	if (data == null || data.length == 0) {
		return false;
	}
	if (data.length > size) {
		return false;
	}
	if (ldaptable.indexOf(data) >= 0) {
    		return false;
    }
    return true;
}

var adDomainTable = "-._";
function checkADDomainNameCtrlChar(data)
{
	var cs = null;
    for (var i = 0 ; i < data.length ; i++) {
    	cs = data.charCodeAt(i);
    	if (((cs >= 0x30) && (cs <= 0x39))
                || ((cs >= 0x41) && (cs <= 0x5a))
                || ((cs >= 0x61) && (cs <= 0x7a))) {
            ret = true;
        }else {
    		if (adDomainTable.indexOf(cs) == -1) {
    			ret = false;
    		}
        }
    }
    return ret;
}
function validateADDomainNameValue(data)
{
	var errID = null;
	if (data == null || data.length == 0) {
		errID = "ID_WARNING_AD_DOMAINNAME";
	}else if (!checkADValueLengthNull(data, 64)) {
		errID = "ID_WARNING_AD_INV_DOMAINNAME";
	} else if (!checkADDomainNameCtrlChar(data)) {
		errID = "ID_WARNING_AD_INV_DOMAINNAME";
	}
	return errID;
}

function validateADNetBIOSNameValue(data)
{
	var errID = null;
	if (!checkCtrlChar(data)) {
		errID = "ID_WARNING_AD_INV_NETBIOSNAME";
	} else if (!checkADValueLength(data, 15)) {
		errID = "ID_WARNING_AD_INV_NETBIOSNAME";
	}
	return errID;
}

var adHostTable = "-_";
function checkADHostNameCtrlChar(data)
{
	var ch = null;
	var ret = true;
    for (var i = 0 ; i < data.length ; i++) {
    	cs = data.charCodeAt(i);
    	if (((cs >= 0x30) && (cs <= 0x39))
                || ((cs >= 0x41) && (cs <= 0x5a))
                || ((cs >= 0x61) && (cs <= 0x7a))) {
            ret = true;
        }else {
        	var c = data.charAt(i);
        	//�L���`�F�b�N
    		if (adHostTable.indexOf(c) == -1) {
    			ret = false;
    			break;
    		}
        }
    }
    return ret;
}
function validatePrimaryHost(data)
{
	var errID = null;
	if(data == null || data.length == 0) {
		errID = "ID_WARNING_AD_PRIMARYHOST";
	} else {
		//���p�p��/�g�p�\�L���`�F�b�N
		if (!checkADHostNameCtrlChar(data)) {
			errID = "ID_WARNING_AD_INV_PRIMARYHOST";
		} else if (data.length > 64 || !checkASCIIString(data)) {
			errID = "ID_WARNING_AD_INV_PRIMARYHOST";
		}
	}
	return errID;
}
function validateSecoundaryHost(data)
{
	var errID = null;
	if (!checkADHostNameCtrlChar(data)) {
		errID = "ID_WARNING_AD_INV_SECOUNDARYHOST";
	} else if (data.length > 64 || !checkASCIIString(data)) {
		errID = "ID_WARNING_AD_INV_SECOUNDARYHOST";
	}
	return errID;
}
var adAttriTable = "-";
function checkADAttriCtrlChar(data)
{
	var cs = null;
    for (var i = 0 ; i < data.length ; i++) {
    	cs = data.charCodeAt(i);
    	if (((cs >= 0x30) && (cs <= 0x39))
                || ((cs >= 0x41) && (cs <= 0x5a))
                || ((cs >= 0x61) && (cs <= 0x7a))) {
            ret = true;
        }else {
    		if (adDomainTable.indexOf(cs) == -1) {
    			ret = false;
    		}
        }
    }
    return ret;
}
function validateADUserNameValue(data)
{
	var errID = null;
	if (data == null || data.length == 0) {
		errID = "ID_WARNING_AD_USER_NAME";
	} else if (!checkADAttriCtrlChar(data)) {
		errID = "ID_WARNING_INV_USER_NAME";
	} else if (!checkADValueLengthNull(data, 20)) {
		errID = "ID_WARNING_INV_USER_NAME";
	}
	return errID;
}
function validateADUserPWD(data)
{
	var errID = null;
	if(data.length > 127) {
		errID = "ID_WARNING_INV_AD_PASSWORD";
	}
	return errID;
}

function validateADCardId(data)
{
	var errID = null;
	if (data.length > 64) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_CARDID";
	}else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_CARDID";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_CARDID";
	} else if (!checkAttributeNameStringNull(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_CARDID";
	}
	return errID;
}

function validateADCardIdValidity(data)
{
	var errID = null;
	if (data.length > 64) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_VALIDITY";
	}else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_VALIDITY";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_VALIDITY";
	} else if (!checkAttributeNameStringNull(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_VALIDITY";
	}
	return errID;
}
function validateADPinCode(data)
{
	var errID = null;
	if (data.length > 64) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_PINCODE";
	}else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_PINCODE";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_PINCODE";
	} else if (!checkAttributeNameStringNull(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_PINCODE";
	}
	return errID;
}

function validateADLoginNameValue(data)
{
	var errID = null;
	if (data == null || data.length == 0) {
		errID = "ID_WARNING_AD_ATTRIBUTE_FOR_LOGIN_NAME";
	} else if (!checkADValueLength(data, 64)) {
		errID = "ID_WARNING_AD_ATTRIBUTE_FOR_LOGIN_NAME";
	}else  if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_AD_ATTRIBUTE_FOR_LOGIN_NAME";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_AD_ATTRIBUTE_FOR_LOGIN_NAME";
	} else if (!checkAttributeNameString(data)) {
		errID = "ID_WARNING_AD_ATTRIBUTE_FOR_LOGIN_NAME";
	}
	return errID;
}
function validateADCnValue(data)
{
	var errID = null;
	if (data.length > 64) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_DISPLAYNAME";
	}else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_DISPLAYNAME";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_DISPLAYNAME";
	} else if (!checkAttributeNameStringNull(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_DISPLAYNAME";
	}
	return errID;
}
function validateADMailValue(data)
{
	var errID = null;
	if (data.length > 64) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_MAIL";
	}else if (!checkInvalidChar(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_MAIL";
	} else if (!checkCtrlChar(data) || data.indexOf(' ') != -1) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_MAIL";
	} else if (!checkAttributeNameStringNull(data)) {
		errID = "ID_WARNING_INV_AD_ATTRIBUTE_FOR_MAIL";
	}
	return errID;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

function distinguishBrowse() {
	if(navigator.userAgent.indexOf("MSIE 6") != -1
		|| navigator.userAgent.indexOf("MSIE 7") != -1){
		return "className";
	} else {
		return "class";
	}
}
function doEncrypt(input,pubkey){
	var crypt = new JSEncrypt();
	crypt.setPublicKey(pubkey);
	var crypted = "";
	var byteA = null;
	if (input) {
    	crypted = crypt.encrypt(input);
    	byteA = b64tohex(crypted)
    	while(byteA.length != 512){
    		console.error("crypted date length != 512");
    		crypted = crypt.encrypt(input);
    		byteA = b64tohex(crypted)
    	}
	}
	return crypted;
}

var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
function int2char(n) { return BI_RM.charAt(n); }
var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad="=";
function b64tohex(s) {
	  var ret = ""
	  var i;
	  var k = 0;
	  var slop;
	  for(i = 0; i < s.length; ++i) {
	    if(s.charAt(i) == b64pad) break;
	    v = b64map.indexOf(s.charAt(i));
	    if(v < 0) continue;
	    if(k == 0) {
	      ret += int2char(v >> 2);
	      slop = v & 3;
	      k = 1;
	    }
	    else if(k == 1) {
	      ret += int2char((slop << 2) | (v >> 4));
	      slop = v & 0xf;
	      k = 2;
	    }
	    else if(k == 2) {
	      ret += int2char(slop);
	      ret += int2char(v >> 2);
	      slop = v & 3;
	      k = 3;
	    }
	    else {
	      ret += int2char((slop << 2) | (v >> 4));
	      ret += int2char(v & 0xf);
	      k = 0;
	    }
	  }
	  if(k == 1)
	    ret += int2char(slop << 2);
	  return ret;
}

function exeKeyDown() {
    var event = window.event;

    if (event.keyCode == 9) {
		return true;
    } else {
		return false;
    }
}

