$(document).ready(function(){
  var count_basis = 0;//基準(0.01s)
  var count_centi_sec = 0;//0.01sの位
  var count_deci_sec = 0; //0.1sの位
  var count_sec = 0;//1sの位
  var count_deca_sec = 0;//10sの位
  var count_min = 0;//1minの位
  var count_deca_min = 0;//10minの位
  function countUp(){
    count_basis = count_basis + 1;
    count_centi_sec = count_centi_sec + 1;
    $(".centi-seconds").text(count_centi_sec);
    if (count_centi_sec == 9){
      count_centi_sec = -1;
    }
    if (count_basis % 10 == 0){
      count_deci_sec = count_deci_sec + 1;
      $(".deci-seconds").text(count_deci_sec)
    }
    if (count_deci_sec == 9){
      count_deci_sec = -1;
    }
    if (count_basis % 100 == 0){
      count_sec = count_sec + 1;
      $(".seconds").text(count_sec);
    }
    if (count_sec == 9){
      count_sec = -1;
    }
    if (count_basis % 1000 == 0){
      count_deca_sec = count_deca_sec + 1;
      $(".deca-seconds").text(count_deca_sec);
    }
    if (count_deca_sec == 5){
      count_deca_sec = -1;
    }
    if (count_basis % 6000 == 0){
      count_min = count_min + 1;
      $(".minutes").text(count_min);
    }
    if (count_min == 9){
      count_min = -1;
    }
    if (count_basis % 60000 == 0){
      count_deca_min = count_deca_min + 1;
      $(".deca-minutes").text(count_deca_min);
    }
  }
  
  var setInterval_countup = "Global"
  
  $(".button_start").click(function(){//スタート時の処理
    setInterval_countup = setInterval(countUp,10);
  });
  
  $(".button_stop").click(function(){
    clearInterval(setInterval_countup);
  });
  
  $(".button_reset").click(function(){
    clearInterval(setInterval_countup);
    count_basis = 0;//基準(0.01s)
    count_centi_sec = 0;//0.01sの位
    count_deci_sec = 0; //0.1sの位
    count_sec = 0;//1sの位
    count_deca_sec = 0;//10sの位
    count_min = 0;//1minの位
    count_deca_min = 0;//10minの位
    $(".centi-seconds, .deci-seconds, .seconds, .deca-seconds, .minutes, .deca-minutes").text(count_basis)
  });
});
