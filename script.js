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
    let commentsData;	
	
	const STORAGE_KEY = "mtd280.storageExample-g1";

	function printData() {
		let output,
		    i;
			
		output = "";
		for(i=0; i<commentsData.length; i++) {
			output += "<em>"+commentsData[i].date+"</em> -- " +
			          commentsData[i].contents + "<br>";
		}
		
		$("#comments").html(output);
	}
	
    function saveData() {
		let contentsTextArea,
		    entry;
		
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
	
	
		localStorage.clear();
	
	}

	

  //------------------//    	
	function init() {
  //------------------//
		//commentsData = [];
		loadData();
		printData();
		clearData();

		
		$("#save").click(saveData);
		$("#clear").click(clearData);

  
	};	

	$(document).ready(init);

    // public
    return {};
		
}($));
