#pragma strict
var url : String; // The full url of the save.php file
var secretKey : String; // The secret key to match in your save.php file

function Save (arr : Array) {
	if (!secretKey || !url) {
		print ("You must provide a secret key and url to continue!");
		return;
	}
    var form : WWWForm = new WWWForm();
    var t = Time.time;
    form.AddField("time", ""+t);
    var hash : String = Md5Sum(secretKey+t);
    form.AddField("hash", hash);
    for(var i = 0; i < arr.length; i++) {
    	form.AddField("form_"+i, "" + arr[i]);
    }
	var w = WWW(url, form);
    yield w;
    if (w.error != null) {
        print(w.error);
    } else {
        print(w.text);
    }
}

static function Md5Sum(strToEncrypt: String)
{
	var encoding = System.Text.UTF8Encoding();
	var bytes = encoding.GetBytes(strToEncrypt);
 
	// encrypt bytes
	var md5 = System.Security.Cryptography.MD5CryptoServiceProvider();
	var hashBytes:byte[] = md5.ComputeHash(bytes);
 
	// Convert the encrypted bytes back to a string (base 16)
	var hashString = "";
 
	for (var i = 0; i < hashBytes.Length; i++)
	{
		hashString += System.Convert.ToString(hashBytes[i], 16).PadLeft(2, "0"[0]);
	}
 
	return hashString.PadLeft(32, "0"[0]);
}