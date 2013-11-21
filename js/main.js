
function ProductVal()
{
	var enquiry_type = document.getElementById('enquiry_type');
	if(enquiry_type.selectedIndex == 2)
	{
		var fieldset= document.getElementById('product_info');
		var fieldtags= ['input', 'textarea', 'select'];
		
		for (var i=0; i<=fieldtags.length; i++) {
			var fields= fieldset.getElementsByTagName(fieldtags[i]);
			for (var fieldi= fields.length; fieldi-->0;) {
				fields[fieldi].setAttribute("required","required");
			}
		}
	
	}else{

		var fieldset= document.getElementById('product_info');
		var fieldtags= ['input', 'textarea', 'select'];
		
		for (var i=0; i<=fieldtags.length; i++) {
			var fields= fieldset.getElementsByTagName(fieldtags[i]);
			for (var fieldi= fields.length; fieldi-->0;) {
				fields[fieldi].removeAttribute("required");
			}
		}
	}
}