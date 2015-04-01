/**
 *@author Colin Sheehan
 * 
 * This class sends POST requests from the forms 
 */

/**
 * This function sends loginPost info to the sever 
 */
function sendLoginPost() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var parameter = "username="+username+"&password="+password;
	
	var xmlhttp;
	if (window.XMLHttpRequest) {
  	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
  	}
	else{
 	// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		console.log(xmlhttp.responseText);
    		var response = JSON.parse(xmlhttp.responseText);
    		console.log(response);

    		if (response.message == "has logged in"){
    			swal("Welcome!!!", "You are now logged in!", "success");
    			closeModal();
    		}
   		}
	};
	
	xmlhttp.open("POST","http://localhost:8080/login",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(parameter);
}


function sendSignupPost() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var parameter = "username="+username+"&password="+password+"&email="+email+"&phone="+phone;
	
	var xmlhttp;
	if (window.XMLHttpRequest) {
  	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
  	}
	else{
 	// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		console.log(xmlhttp.responseText);
    		var response = JSON.parse(xmlhttp.responseText);
    		console.log(response);

    		if (response.message == "user created!"){
    			swal("User Created!!!", "Please Login!", "success");
    		}
   		}
	};
	
	xmlhttp.open("POST","http://localhost:8080/signup",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(parameter);
}


/**
 * This function sends Buy search info to the sever 
 */
function sendBuyInfo() {
	var title = document.getElementById("Title").value;
	var author = document.getElementById("Author").value;
	var isbn = document.getElementById("ISBN").value;
	var course = document.getElementById("Course").value;

	var parameter = "title="+title+"&author="+author+"&isbn="+isbn+"&courseNo="+course;
	
	var xmlhttp;
	if (window.XMLHttpRequest) {
  	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
  	}
	else{
 	// code for IE6, IE5
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		//document.getElementById("li_title").innerHTML=xmlhttp.responseText;
    		console.log(xmlhttp.responseText);
    		var response = JSON.parse(xmlhttp.responseText);
    		console.log(response);

    		arrayLength = response.textbook.length;


    		for (var i = 0; i < arrayLength; i++){

    			var container = $('#resultsOutline');

    			var unordered = document.createElement("UL");
    			unordered.className = "list-group";
	    		unordered.setAttribute("id", "results");
	    		container.append(unordered);


	    		var list = document.createElement("LI");
	    		list.className = "list-group-item";
	    		unordered.appendChild(list);

	    		var div = document.createElement("DIV");
	    		div.className = "list-group";
	    		list.appendChild(div);

	    		var link = document.createElement("A");
	    		link.setAttribute("id", "itemResults");
	    		link.className= "list-group-item";
	    		div.appendChild(link);

	    		var header = document.createElement("H4");
	    		header.className = "list-group-item-heading";
	    		header.setAttribute("id", "Title");
	    		header.innerHTML= "Title: " + response.textbook[i].title;

				var p1 = document.createElement("P");
				p1.className= "list-group-item-text";
				p1.setAttribute("id", "Author");
				p1.innerHTML= "Author: " + response.textbook[i].author;

				var p2 = document.createElement("P");
				p2.className= "list-group-item-text";
				p2.setAttribute("id", "Course");
				p2.innerHTML= "Course: " + response.textbook[i].course;

				var p3 = document.createElement("P");
				p3.className= "list-group-item-text";
				p3.setAttribute("id", "ISBN");
				p3.innerHTML= "ISBN: "+ response.textbook[i].isbn;

				var p4 = document.createElement("P");
				p4.className= "list-group-item-text";
				p4.setAttribute("id", "Price");
				p4.innerHTML= "Price: " + response.textbook[i].price;

				link.appendChild(header);
				link.appendChild(p1);
				link.appendChild(p2);
				link.appendChild(p3);
				link.appendChild(p4);
			}				

			

    		/**
    		document.getElementById("li_title").innerHTML= response.textbook[0].title;
    		document.getElementById("li_author").innerHTML= response.textbook[0].author;
    		//document.getElementById("lli_ISBN").innerHTML= "Null";
    		document.getElementById("li_Course").innerHTML= response.textbook[0].course;
    		document.getElementById("li_Price").innerHTML= response.textbook[0].price;

    		document.getElementById("li_title_2").innerHTML= response.textbook[1].title;
    		document.getElementById("li_author_2").innerHTML= response.textbook[1].author;
    		//document.getElementById("lli_ISBN_2").innerHTML= "Null";
    		document.getElementById("li_Course_2").innerHTML= response.textbook[1].course;
    		document.getElementById("li_Price_2").innerHTML= response.textbook[1].price;
    		*/
   		}
	};

	xmlhttp.open("POST","http://localhost:8080/book/search",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(parameter);
	//var response = JSON.parse(xmlhttp.responseText);
	//console.log(xmlhttp.responseText);

	//document.getElementById("li_title").innerHTML= xmlhttp.responseText;
}

/**
 * This function sends create Post info to the sever 
 */
function sendSellInfo() {
	var title = document.getElementById("Title").value;
	var author = document.getElementById("Author").value;
	var edition = document.getElementById("Edition").value;
	var publisher = document.getElementById("Publisher").value;
	var year = document.getElementById("Year").value;
	var isbn = document.getElementById("ISBN").value;
	var course = document.getElementById("Course").value;
	var department = document.getElementById("Department").value;
	var price = document.getElementById("Price").value;
	var email = document.getElementById("Email").value

	var parameter = "title="+title+"&author="+author+"&edition=" +edition+"&publisher="+publisher+
		"&year="+year+"&isbn="+isbn+"&courseNo="+course+"&department="+department+"&price="+price+"&email="+email;

		 
	
	var xmlhttp;
	
	if (window.XMLHttpRequest) {
  		// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
  	else{
  		// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200){
    		document.getElementById("createResponse").innerHTML=xmlhttp.responseText;
   		}
	};

	xmlhttp.open("POST","http://localhost:8080/book/create",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(parameter);
}