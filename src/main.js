import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HungryBear} from './fuzzy-wuzzy.js';

$(document).ready(function() {
  // event.preventDefault();
  $('#feed').click(function(ev) {
    ev.preventDefault();
    FuzzyWuzzy.feed();

      // FuzzyWuzzy.toggleDiv('#fuzzywuzzy_eating')
      $('#fuzzywuzzy_eating').slideToggle(1250);
      $('#fuzzywuzzy_eating').slideToggle();

  })
  $('#play').click(function(ev) {
    ev.preventDefault();
    FuzzyWuzzy.play();
    $('#fuzzywuzzy_ballin').slideToggle(1250);
    $('#fuzzywuzzy_ballin').slideToggle();


  })
  $('#sleep').click(function(ev) {
    ev.preventDefault();
    FuzzyWuzzy.sleep();
    $('#fuzzywuzzy_sleeping').slideToggle(1250);
    $('#fuzzywuzzy_sleeping').slideToggle();

  })

  let FuzzyWuzzy = new HungryBear();
  FuzzyWuzzy.setHunger();
  FuzzyWuzzy.setMood();
  FuzzyWuzzy.setSleep();
  let intervals = setInterval(function() {
    $('#hungerStatus').text((FuzzyWuzzy.foodLevel).toString());
    $('#moodStatus').text((FuzzyWuzzy.moodLevel).toString());
    $('#sleepStatus').text((FuzzyWuzzy.sleepLevel).toString());
    }, 500);



  setInterval(function(){
    if(FuzzyWuzzy.didYouGetEaten() === true){
      $('#fuzzywuzzy_chilling').hide();
      $('#revenant').show();
      clearInterval(intervals);
      }
    }, 250);


  // $('#actions').click(function(ev) {
    // $("#feed").click(function(ev){
    //     ev.preventDefault();
    //     var that = this;
    //     var text = $(this).html();
    //     $(this).html("saved");
    //     setTimeout(function(){
    //         //fade back
    //         $(that).html(text);
    //     }, 1000);
    //  });
  });

// });
