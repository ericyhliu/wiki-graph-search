"use strict";$(document).ready(function(){"undefined"==typeof savedCourses||0===savedCourses.length?$("#empty-open-course").css("display","block"):$("#open-course-container").css("display","block");var e=function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date(e);return t[a.getMonth()]+" "+a.getDate()+", "+a.getFullYear()};!function(t){var a=$("#open-courses-list");savedCourses.forEach(function(t){var o=$(document.createElement("div")).addClass("col-md-4").appendTo(a),n=$(document.createElement("div")).addClass("card-container").attr("data-id",t.id).appendTo(o),d=$(document.createElement("div")).appendTo(n),r=($(document.createElement("span")).addClass("course-card-title").attr("data-id",t.id).attr("unselectable","on").attr("onselectstart","return false").attr("onmousedown","return false").text(t.title).appendTo(d),$(document.createElement("div")).addClass("course-card-desc").text("Date Created: "+e(t.id)).appendTo(n),$(document.createElement("div")).appendTo(n));$(document.createElement("canvas")).attr("id",t.id).css("height","8em").appendTo(r)})}(),function(e){var t=[];savedCourses.forEach(function(e){var a=$("#"+e.id)[0].getContext("2d"),o={labels:["Completed","Not Completed"],datasets:[{data:[e.completedNumSections,e.totalNumSections-e.completedNumSections],backgroundColor:["rgba(50, 205, 50, 0.2)","rgba(126, 126, 126, 0.2)"],borderColor:["rgba(50, 205, 50, 1)","rgba(126, 126, 126, 1)"],borderWidth:1}]};t.push({graph:e.id,context:a,data:o,type:"doughnut"})}),t.forEach(function(e){e.graph=new Chart(e.context,{type:e.type,data:e.data,options:{legend:{display:!0,position:"left"},responsive:!0,maintainAspectRatio:!1}})})}(),$(".course-card-title").click(function(e){console.log($(e.target).attr("data-id"))})});