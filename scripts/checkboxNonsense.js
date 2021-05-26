function loadCheckboxFunctions(){
  $('#rev-choice').dblclick(function(){
    var val = countCheckedinDiv('#rev-choice')
    val > 1 ? bool = false : bool = true;
    $('#rev-choice').find(':checkbox').each(function(){
      jQuery(this).prop("checked", bool);
    });
  });
  $('#rev-0').dblclick(function(){
    setTimeout(function(){
      $('#rev-ctep').prop("checked", true);
    }, 50);
  });
  $('#rev-1').dblclick(function(){
    setTimeout(function(){
      $('#rev-dcp').prop("checked", true);
    }, 50);
  });
  $('#rev-2').dblclick(function(){
    setTimeout(function(){
      $('#rev-roth').prop("checked", true);
    }, 50);
  });

  $('#year-choice0').dblclick(function(){
    var val = countCheckedinDiv('#year-choice0')
    val > 1 ? bool = false : bool = true;
    $('#year-choice0').find(':checkbox').each(function(){
      jQuery(this).prop("checked", bool);
    });
  });
  $('#year-0').dblclick(function(){
    setTimeout(function(){
      $('#year2015').prop("checked", true);
    }, 50);
  });
  $('#year-1').dblclick(function(){
    setTimeout(function(){
      $('#year2016').prop("checked", true);
    }, 50);
  });
  $('#year-2').dblclick(function(){
    setTimeout(function(){
      $('#year2017').prop("checked", true);
    }, 50);
  });
  $('#year-3').dblclick(function(){
    setTimeout(function(){
      $('#year2018').prop("checked", true);
    }, 50);
  });
  $('#year-4').dblclick(function(){
    setTimeout(function(){
      $('#year2019').prop("checked", true);
    }, 50);
  });
  $('#year-5').dblclick(function(){
    setTimeout(function(){
      $('#year2020').prop("checked", true);
    }, 50);
  });

  $('#study-type').dblclick(function(){
    var val = countCheckedinDiv('#study-type')
    val > 1 ? bool = false : bool = true;
    $('#study-type').find(':checkbox').each(function(){
      jQuery(this).prop("checked", bool);
    });
  });
  $('#st-1').dblclick(function(){
    setTimeout(function(){
      $('#type-1').prop("checked", true);
    }, 50);
  });
  $('#st-12').dblclick(function(){
    setTimeout(function(){
      $('#type-12').prop("checked", true);
    }, 50);
  });
  $('#st-2').dblclick(function(){
    setTimeout(function(){
      $('#type-2').prop("checked", true);
    }, 50);
  });
  $('#st-23').dblclick(function(){
    setTimeout(function(){
      $('#type-23').prop("checked", true);
    }, 50);
  });
  $('#st-3').dblclick(function(){
    setTimeout(function(){
      $('#type-3').prop("checked", true);
    }, 50);
  });
  $('#st-oth').dblclick(function(){
    setTimeout(function(){
      $('#type-other').prop("checked", true);
    }, 50);
  });
  $('#st-pil').dblclick(function(){
    setTimeout(function(){
      $('#type-pilot').prop("checked", true);
    }, 50);
  });

  $('#admin-choice').dblclick(function(){
    var val = countCheckedinDiv('#admin-choice')
    val > 1 ? bool = false : bool = true;
    $('#admin-choice').find(':checkbox').each(function(){
      jQuery(this).prop("checked", bool);
    });
  });
  $('#admin-0').dblclick(function(){
    setTimeout(function(){
      $('#type-ccd').prop("checked", true);
    }, 50);
  });
  $('#admin-1').dblclick(function(){
    setTimeout(function(){
      $('#type-breast').prop("checked", true);
    }, 50);
  });
  $('#admin-2').dblclick(function(){
    setTimeout(function(){
      $('#type-gi').prop("checked", true);
    }, 50);
  });
  $('#admin-3').dblclick(function(){
    setTimeout(function(){
      $('#type-sxqol').prop("checked", true);
    }, 50);
  });
  $('#admin-4').dblclick(function(){
    setTimeout(function(){
      $('#type-erlytx').prop("checked", true);
    }, 50);
  });
  $('#admin-5').dblclick(function(){
    setTimeout(function(){
      $('#type-lung').prop("checked", true);
    }, 50);
  });
  $('#admin-6').dblclick(function(){
    setTimeout(function(){
      $('#type-melan').prop("checked", true);
    }, 50);
  });
  $('#admin-7').dblclick(function(){
    setTimeout(function(){
      $('#type-peolc').prop("checked", true);
    }, 50);
  });
  $('#admin-8').dblclick(function(){
    setTimeout(function(){
      $('#type-mmyel').prop("checked", true);
    }, 50);
  });
  $('#admin-9').dblclick(function(){
    setTimeout(function(){
      $('#type-gu').prop("checked", true);
    }, 50);
  });
  $('#admin-10').dblclick(function(){
    setTimeout(function(){
      $('#type-prev').prop("checked", true);
    }, 50);
  });
  $('#admin-11').dblclick(function(){
    setTimeout(function(){
      $('#type-leuk').prop("checked", true);
    }, 50);
  });
  $('#admin-12').dblclick(function(){
    setTimeout(function(){
      $('#type-lymph').prop("checked", true);
    }, 50);
  });
  $('#admin-13').dblclick(function(){
    setTimeout(function(){
      $('#type-surv').prop("checked", true);
    }, 50);
  });
}

function countCheckedinDiv(div_name){
  var i = 0;
  $(div_name).find(':checkbox').each(function(){
    if (jQuery(this).prop("checked") == true) i++;
  });
  return i
}
function setAllDataCheckboxes(){
  $('#data-select').find(':checkbox').each(function(){
    jQuery(this).prop("checked", true);
  });
  $('#data-select2').find(':checkbox').each(function(){
    jQuery(this).prop("checked", true);
  });
  $('#min-age')[0].value = 0;
  $('#max-age')[0].value = 120;
}

function minAgeCheck(object){
  if (object.value > 85){
    window.alert("Minimum age cannot exceed 85");
    object.value = 0;
  } else {
    update()
  }
}
function maxAgeCheck(object){
  if (object.value < 12){
    window.alert("Maximum age must exceed 12");
    object.value = 120;
  } else {
    update()
  }
}
