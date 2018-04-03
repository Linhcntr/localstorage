"use strict";
/*
 * MTD280 Online Multimedia
 * http://www.fh-ooe.at/mtd
 *
 * MTD280 Example
 *
 */

var mtd280 = mtd280 || {};

mtd280.module = (function($) {

    // private  
    let commentsData;	//chua du lieu textarea
	
	const STORAGE_KEY = "mtd280.storageExample-g1";
	let output;	
	let entry;
	let contentArr = [];

	function printData() {
		let i;
			
		output = "";
		for(i=0; i<commentsData.length; i++) {
			output += "<em>"+commentsData[i].date+"</em> -- " +
			          commentsData[i].contents + "<br>";
		}
		
		$("#comments").html(output);
	}
	
    function saveData() {
		let contentsTextArea;
		
		contentsTextArea = $("#contents");
		entry = {
			date: new Date().toLocaleString(),
			contents: contentsTextArea.val()
		}
		
		commentsData.push(entry);
		contentsTextArea.val("");
		
		localStorage.setItem(STORAGE_KEY, JSON.stringify(commentsData));
		
		printData();
		
	}
	
	function loadData() {
		let data;
		
		data = localStorage.getItem(STORAGE_KEY);
		
		if (data) {
			commentsData = JSON.parse(data);
		} else {
			commentsData = [];
		}
	}

	function clearData() {
	
		output = "";
		$("#comments").html(output);
		commentsData = [];
		localStorage.clear();
	}

	function deleteData(){
		
		
		commentsData.splice(0,1);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(commentsData));
		printData();
		// saveData();
		console.log( commentsData);
	
	}

  //------------------//    	
	function init() {
  //------------------//
		//commentsData = [];
		loadData();
		printData();

		
		$("#save").click(saveData);
		$("#clear").click(clearData);
		$("#delete").click(deleteData);

  
	};	

	$(document).ready(init);

    // public
    return {};
		
}($));
