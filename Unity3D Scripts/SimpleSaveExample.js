#pragma strict

function OnGUI () {
	if (GUILayout.Button("Save")) {
		print ("Saving");
		var arr : Array = new Array();
		arr.Add(Time.time);
		arr.Add("user score here");
		arr.Add("other data");
		// etc.
		gameObject.GetComponent(SimpleSave).Save(arr);
	}
}