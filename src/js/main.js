$(".dropdown-item").click((e)=>{
	let id = e.currentTarget.id;
  	console.log("id: " + e.currentTarget.innerHTML);

    $("#Dropdown").innerHTML = e.currentTarget.innerHTML;
})