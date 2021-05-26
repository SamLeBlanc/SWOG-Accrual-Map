function getSexList(){
  var sexList = [];
  if ($('#sex-m').is(':checked')){
    sexList.push('Male')
  }
  if ($('#sex-f').is(':checked')){
    sexList.push('Female')
  }
  return sexList
}
function getAdminList(){
  var adminList = [];
  if ($('#type-ccd').is(':checked')){
    adminList.push('CCD')
  }if ($('#type-breast').is(':checked')){
    adminList.push('BREAST')
  }if ($('#type-gi').is(':checked')){
    adminList.push('GI')
  }if ($('#type-sxqol').is(':checked')){
    adminList.push('SXQOL')
  }if ($('#type-erlytx').is(':checked')){
    adminList.push('ERLYTX')
  }if ($('#type-lung').is(':checked')){
    adminList.push('LUNG')
  }if ($('#type-melan').is(':checked')){
    adminList.push('MELAN')
  }if ($('#type-peolc').is(':checked')){
    adminList.push('PEOLC')
  }if ($('#type-mmyel').is(':checked')){
    adminList.push('MMYEL')
  }if ($('#type-gu').is(':checked')){
    adminList.push('GU')
  }if ($('#type-prev').is(':checked')){
    adminList.push('PREV')
  }if ($('#type-leuk').is(':checked')){
    adminList.push('LEUK')
  }if ($('#type-lymph').is(':checked')){
    adminList.push('LYMPH')
  }if ($('#type-surv').is(':checked')){
    adminList.push('SURV')
  }
  return adminList
}
function getYearList(){
  var yearList = [];
  for(i = 2015; i < 2021; i++){
    if ($('#year'+i.toString()).is(':checked')){
      yearList.push(i)
    }
  }
  return yearList
}
function getRevagencyList(){
  var revList = [];
  if ($('#rev-ctep').is(':checked')){
    revList.push('CTEP')
  }
  if ($('#rev-dcp').is(':checked')){
    revList.push('DCP')
  }
  if ($('#rev-roth').is(':checked')){
    revList.push('Other')
  }
  return revList
}
function getStudyTypeList(){
  var typeList = [];
  if ($('#type-1').is(':checked')){
    typeList.push('I')
  }
  if ($('#type-12').is(':checked')){
    typeList.push('I-II')
  }
  if ($('#type-2').is(':checked')){
    typeList.push('II')
  }
  if ($('#type-23').is(':checked')){
    typeList.push('II-III')
  }
  if ($('#type-3').is(':checked')){
    typeList.push('III')
  }
  if ($('#type-other').is(':checked')){
    typeList.push('OTHER')
  }
  if ($('#type-pilot').is(':checked')){
    typeList.push('PILOT')
  }
  return typeList
}
