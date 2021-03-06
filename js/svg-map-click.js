(function($) {
  $(document).ready(function() {
    var bootstrapButton = $.fn.button.noConflict();
    $.fn.bootstrapBtn = bootstrapButton;

    var allRegions = $("#Lands > *");

    allRegions.on("click", function() {
      var link = ($(this).attr('id'));
      var state;
      switch(true){

      case(link == "Land-Maine"):
        state = "Maine";
        $('.Fairfield').addClass('show');
        $('.ME').addClass('show');
        break;
      case(link == "Land-NH"):
        state = "New Hampshire";
        $('.Fairfield').addClass('show');
        $('.NH').addClass('show');
        break;
      case(link == "Land-Vt"):
        state = "Vermont";
        $('.Fairfield').addClass('show');
        $('.VT').addClass('show');
        break;
      case(link == "Land-NewYork"):
        state = "New York";
        $('.Fairfield').addClass('show');
        $('.NY').addClass('show');
        break;
      case(link == "Land-Mass"):
        state = "Massachusetts";
        $('.Fairfield').addClass('show');
        $('.MA').addClass('show');
        break;
      case(link == "Land-Conn"):
        state = "Connecticut";
        $('.Fairfield').addClass('show');
        $('.CT').addClass('show');
        break;
      case(link == "Land-Pennsylvania"):
        state = "Pennsylvania";
        $('.Fairfield').addClass('show');
        $('.PA').addClass('show');
        $('.Willow').addClass('show');
        break;
      case(link == "Land-RI"):
        state = "Rhode Island";
        $('.Fairfield').addClass('show');
        $('.RI').addClass('show');
        break;
      case(link == "Land-NewJersey"):
        state = "New Jersey";
        $('.Fairfield').addClass('show');
        $('.NJ').addClass('show');
        $('.Willow').addClass('show');
        break;
      case(link == "Land-Del"):
        state = "Delaware";
        $('.Fairfield').addClass('show');
        $('.DE').addClass('show');
        $('.Willow').addClass('show');
        break;
      case(link == "Land-Md"):
        state = "Maryland";
        $('.Fairfield').addClass('show');
        $('.MD').addClass('show');
        $('.Willow').addClass('show');
        break;
      case(link == "Land-WestVirginia"):
        state = "West Virginia";
        $('.Fairfield').addClass('show');
        $('.WV').addClass('show');
        break;
      case(link == "Land-Virginia_1_"):
        state = "Virginia";
        $('.Fairfield').addClass('show');
        $('.VA').addClass('show');
        $('.Willow').addClass('show');
        break;
      case(link == "Land-NorthCarolina_1_"):
        state = "North Carolina";
        $('.Rockford').addClass('show');
        $('.NC').addClass('show');
        break;
      case(link == "Land-SouthCarolina"):
        state = "South Carolina";
        $('.Rockford').addClass('show');
        $('.SC').addClass('show');
        break;
      case(link == "Land-Georgia"):
        state = "Georgia";
        $('.Rockford').addClass('show');
        $('.GA').addClass('show');
        break;
      case(link == "Land-Florida"):
        state = "Florida";
        $('.Rockford').addClass('show');
        $('.FL').addClass('show');
        $('.Chickasaw').addClass('show');
        break;
      case(link == "Land-Alabama"):
        state = "Alabama";
        $('.Rockford').addClass('show');
        $('.AL').addClass('show');
        $('.Chickasaw').addClass('show');
        $('.Birmingham').addClass('show');
        break;
      case(link == "Land-Mississippi"):
        state = "Mississippi";
        $('.Rockford').addClass('show');
        $('.MS').addClass('show');
        $('.Sherwoord').addClass('show');
        $('.Chickasaw').addClass('show');
        break;
      case(link == "Land-Tennessee"):
        state = "Tennessee";
        $('.Rockford').addClass('show');
        $('.Kingsport').addClass('show');
        $('.TN').addClass('show');
        $('.Sherwoord').addClass('show');
        $('.Birmingham').addClass('show');
        break;
      case(link == "Land-Kentucky"):
        state = "Kentucky";
        $('.Rockford').addClass('show');
        $('.KY').addClass('show');
        break;
      case(link == "Land-Ohio"):
        state = "Ohio";
        $('.Rockford').addClass('show');
        $('.OH').addClass('show');
        $('.Pontiac').addClass('show');
        break;
      case(link == "Land-Michigan_1_"):
        state = "Michigan";
        $('.Fairfield').addClass('show');
        $('.MI').addClass('show');
        $('.Pontiac').addClass('show');
        break;
      case(link == "Land-Indiana"):
        state = "Indiana";
        $('.Lomabard').addClass('show');
        $('.IN').addClass('show');
        $('.Pontiac').addClass('show');
        break;
      case(link == "Land-Illinois"):
        state = "Illinois";
        $('.Lombard').addClass('show');
        $('.IL').addClass('show');
        $('.Edmonds').addClass('show');
        break;
      case(link == "Land-Wisconsin"):
        state = "Wisconsin";
        $('.Fairfield').addClass('show');
        $('.Lomabard').addClass('show');
        $('.WI').addClass('show');
        break;
      case(link == "Land-Minnesota"):
        state = "Minnesota";
        $('.Fairfield').addClass('show');
        $('.MN').addClass('show');
        $('.Plymouth').addClass('show');
        break;
      case(link == "Land-Iowa"):
        state = "Iowa";
        $('.Marion').addClass('show');
        $('.IA').addClass('show');
        break;
      case(link == "Land-Missouri"):
        state = "Missouri";
        $('.Marion').addClass('show');
        $('.MO').addClass('show');
        break;
      case(link == "Land-Arkansas"):
        state = "Arkansas";
        $('.Rockford').addClass('show');
        $('.AR').addClass('show');
        $('.Sherwoord').addClass('show');
        break;
      case(link == "Land-Louisiana"):
        state = "Louisiana";
        $('.Rockford').addClass('show');
        $('.LA').addClass('show');
        $('.Sherwoord').addClass('show');
        break;
      case(link == "Land-Texas"):
        state = "Texas";
        $('.Corpus').addClass('show');
        $('.Odessa').addClass('show');
        $('.TX').addClass('show');
        $('.Richardson').addClass('show');
        break;
      case(link == "Land-Oklahoma"):
        state = "Oklahoma";
        $('.Rockford').addClass('show');
        $('.OK').addClass('show');
        $('.Overland').addClass('show');
        $('.Richardson').addClass('show');
        break;
      case(link == "Land-Kansas"):
        state = "Kansas";
        $('.Marion').addClass('show');
        $('.KS').addClass('show');
        $('.Overland').addClass('show');
        break;
      case(link == "Land-Nebraska"):
        state = "Nebraska";
        $('.Marion').addClass('show');
        $('.NE').addClass('show');
        break;
      case(link =="Land-SouthDakota"):
        state = "South Dakota";
        $('.Marion').addClass('show');
        $('.SD').addClass('show');
        $('.Plymouth').addClass('show');
        break;
      case(link == "Land-NorthDakota"):
        state = "North Dakota";
        $('.Marion').addClass('show');
        $('.ND').addClass('show');
        $('.Plymouth').addClass('show');
        break;
      case(link == "Land-Montana"):
        state = "Montana";
        $('.Longview').addClass('show');
        $('.MT').addClass('show');
        break;
      case(link == "Land-Wyoming"):
        state = "Wyoming";
        $('.Longview').addClass('show');
        $('.WY').addClass('show');
        $('.Littleton').addClass('show');
        break;
      case(link == "Land-Colorado"):
        state = "Colorado";
        $('.Longview').addClass('show');
        $('.CO').addClass('show');
        $('.Littleton').addClass('show');
        break;
      case(link == "Land-NewMexico"):
        state = "New Mexico";
        $('.Rockford').addClass('show');
        $('.NM').addClass('show');
        break;
      case(link == "Land-Arizona"):
        state = "Arizona";
        $('.Rockford').addClass('show');
        $('.AZ').addClass('show');
        break;
      case(link == "Land-Utah"):
        state = "Utah";
        $('.Longview').addClass('show');
        $('.UT').addClass('show');
        $('.Layton').addClass('show');
        break;
      case(link == "Land-Idaho"):
        state = "Idaho";
        $('.Longview').addClass('show');
        $('.ID').addClass('show');
        $('.Edmonds').addClass('show');
        break;
      case(link == "Land-Washington"):
        state = "Washington";
        $('.Longview').addClass('show');
        $('.WA').addClass('show');
        $('.Edmonds').addClass('show');
        break;
      case(link == "Land-Oregona"):
        state = "Oregon";
        $('.Longview').addClass('show');
        $('.OR').addClass('show');
        break;
      case(link == "Land-Nevada"):
        state = "Nevada";
        $('.Longview').addClass('show');
        $('.NV').addClass('show');
        $('.Layton').addClass('show');
        break;
      case(link == "Land-California"):
        state = "California";
        $('.Rockford').addClass('show');
        $('.CA').addClass('show');
        $('.Meadow').addClass('show');
        $('.National').addClass('show');
        break;
      case(link == "Land-Alaska"):
        state = "Alaska";
        $('.Longview').addClass('show');
        $('.AK').addClass('show');
        $('.Kenai').addClass('show');
        break;
      case(link == "Land-Hawaii"):
        state = "Hawaii";
        $('.Rockford').addClass('show');
        $('.HI').addClass('show');
        $('.Meadow').addClass('show');
        break;
      }

      allRegions.removeClass("on");
      $(this).addClass("on");
      $('body').addClass("noscroll");
      $('.location-pop-up').dialog({
        open: function(event, ui) {
          $('.ui-dialog-titlebar-close').removeClass("ui-button-icon-primary ui-icon ui-icon-closethick").html('<span class="close-dialog">x</span>');
          $('.ui-dialog-title').addClass('h2').addClass('text-center');
        },
        width: "70%",
        height: '600',
        modal: true,
        title: "Regional sales & contact Details for "+ state,
        draggable: false,
        resizable: false,
        close: function() {},
      });
      $('.location-pop-up').on("dialogclose", function() {
        allRegions.removeClass("on");
        $('body').removeClass("noscroll");


        switch(true){

          case(link == "Land-Maine"):
            state = "Maine";
            $('.Fairfield').removeClass('show');
            $('.ME').removeClass('show');
            break;
          case(link == "Land-NH"):
            state = "New Hampshire";
            $('.Fairfield').removeClass('show');
            $('.NH').removeClass('show');
            break;
          case(link == "Land-Vt"):
            state = "Vermont";
            $('.Fairfield').removeClass('show');
            $('.VT').removeClass('show');
            break;
          case(link == "Land-NewYork"):
            state = "New York";
            $('.Fairfield').removeClass('show');
            $('.NY').removeClass('show');
            break;
          case(link == "Land-Mass"):
            state = "Massachusetts";
            $('.Fairfield').removeClass('show');
            $('.MA').removeClass('show');
            break;
          case(link == "Land-Conn"):
            state = "Connecticut";
            $('.Fairfield').removeClass('show');
            $('.CT').removeClass('show');
            break;
          case(link == "Land-Pennsylvania"):
            state = "Pennsylvania";
            $('.Fairfield').removeClass('show');
            $('.PA').removeClass('show');
            $('.Willow').removeClass('show');
            break;
          case(link == "Land-RI"):
            state = "Rhode Island";
            $('.Fairfield').removeClass('show');
            $('.RI').removeClass('show');
            break;
          case(link == "Land-NewJersey"):
            state = "New Jersey";
            $('.Fairfield').removeClass('show');
            $('.NJ').removeClass('show');
            $('.Willow').removeClass('show');
            break;
          case(link == "Land-Del"):
            state = "Delaware";
            $('.Fairfield').removeClass('show');
            $('.DE').removeClass('show');
            $('.Willow').removeClass('show');
            break;
          case(link == "Land-Md"):
            state = "Maryland";
            $('.Fairfield').removeClass('show');
            $('.MD').removeClass('show');
            $('.Willow').removeClass('show');
            break;
          case(link == "Land-WestVirginia"):
            state = "West Virginia";
            $('.Fairfield').removeClass('show');
            $('.WV').removeClass('show');
            break;
          case(link == "Land-Virginia_1_"):
            state = "Virginia";
            $('.Fairfield').removeClass('show');
            $('.VA').removeClass('show');
            $('.Willow').removeClass('show');
            break;
          case(link == "Land-NorthCarolina_1_"):
            state = "North Carolina";
            $('.Rockford').removeClass('show');
            $('.NC').removeClass('show');
            break;
          case(link == "Land-SouthCarolina"):
            state = "South Carolina";
            $('.Rockford').removeClass('show');
            $('.SC').removeClass('show');
            break;
          case(link == "Land-Georgia"):
            state = "Georgia";
            $('.Rockford').removeClass('show');
            $('.GA').removeClass('show');
            break;
          case(link == "Land-Florida"):
            state = "Florida";
            $('.Rockford').removeClass('show');
            $('.FL').removeClass('show');
            $('.Chickasaw').removeClass('show');
            break;
          case(link == "Land-Alabama"):
            state = "Alabama";
            $('.Rockford').removeClass('show');
            $('.AL').removeClass('show');
            $('.Chickasaw').removeClass('show');
            $('.Birmingham').removeClass('show');
            break;
          case(link == "Land-Mississippi"):
            state = "Mississippi";
            $('.Rockford').removeClass('show');
            $('.MS').removeClass('show');
            $('.Sherwoord').removeClass('show');
            $('.Chickasaw').removeClass('show');
            break;
          case(link == "Land-Tennessee"):
            state = "Tennessee";
            $('.Rockford').removeClass('show');
            $('.Kingsport').removeClass('show');
            $('.TN').removeClass('show');
            $('.Sherwoord').removeClass('show');
            $('.Birmingham').removeClass('show');
            break;
          case(link == "Land-Kentucky"):
            state = "Kentucky";
            $('.Rockford').removeClass('show');
            $('.KY').removeClass('show');
            break;
          case(link == "Land-Ohio"):
            state = "Ohio";
            $('.Rockford').removeClass('show');
            $('.OH').removeClass('show');
            $('.Pontiac').removeClass('show');
            break;
          case(link == "Land-Michigan_1_"):
            state = "Michigan";
            $('.Fairfield').removeClass('show');
            $('.MI').removeClass('show');
            $('.Pontiac').removeClass('show');
            break;
          case(link == "Land-Indiana"):
            state = "Indiana";
            $('.Lomabard').removeClass('show');
            $('.IN').removeClass('show');
            $('.Pontiac').removeClass('show');
            break;
          case(link == "Land-Illinois"):
            state = "Illinois";
            $('.Lomabard').removeClass('show');
            $('.IL').removeClass('show');
            $('.Edmonds').removeClass('show');
            break;
          case(link == "Land-Wisconsin"):
            state = "Wisconsin";
            $('.Fairfield').removeClass('show');
            $('.Lomabard').removeClass('show');
            $('.WI').removeClass('show');
            break;
          case(link == "Land-Minnesota"):
            state = "Minnesota";
            $('.Fairfield').removeClass('show');
            $('.MN').removeClass('show');
            $('.Plymouth').removeClass('show');
            break;
          case(link == "Land-Iowa"):
            state = "Iowa";
            $('.Marion').removeClass('show');
            $('.IA').removeClass('show');
            break;
          case(link == "Land-Missouri"):
            state = "Missouri";
            $('.Marion').removeClass('show');
            $('.MO').removeClass('show');
            break;
          case(link == "Land-Arkansas"):
            state = "Arkansas";
            $('.Rockford').removeClass('show');
            $('.AR').removeClass('show');
            $('.Sherwoord').removeClass('show');
            break;
          case(link == "Land-Louisiana"):
            state = "Louisiana";
            $('.Rockford').removeClass('show');
            $('.LA').removeClass('show');
            $('.Sherwoord').removeClass('show');
            break;
          case(link == "Land-Texas"):
            state = "Texas";
            $('.Corpus').removeClass('show');
            $('.Odessa').removeClass('show');
            $('.TX').removeClass('show');
            $('.Richardson').removeClass('show');
            break;
          case(link == "Land-Oklahoma"):
            state = "Oklahoma";
            $('.Rockford').removeClass('show');
            $('.OK').removeClass('show');
            $('.Overland').removeClass('show');
            $('.Richardson').removeClass('show');
            break;
          case(link == "Land-Kansas"):
            state = "Kansas";
            $('.Marion').removeClass('show');
            $('.KS').removeClass('show');
            $('.Overland').removeClass('show');
            break;
          case(link == "Land-Nebraska"):
            state = "Nebraska";
            $('.Marion').removeClass('show');
            $('.NE').removeClass('show');
            break;
          case(link =="Land-SouthDakota"):
            state = "South Dakota";
            $('.Marion').removeClass('show');
            $('.SD').removeClass('show');
            $('.Plymouth').removeClass('show');
            break;
          case(link == "Land-NorthDakota"):
            state = "North Dakota";
            $('.Marion').removeClass('show');
            $('.ND').removeClass('show');
            $('.Plymouth').removeClass('show');
            break;
          case(link == "Land-Montana"):
            state = "Montana";
            $('.Longview').removeClass('show');
            $('.MT').removeClass('show');
            break;
          case(link == "Land-Wyoming"):
            state = "Wyoming";
            $('.Longview').removeClass('show');
            $('.WY').removeClass('show');
            $('.Littleton').removeClass('show');
            break;
          case(link == "Land-Colorado"):
            state = "Colorado";
            $('.Longview').removeClass('show');
            $('.CO').removeClass('show');
            $('.Littleton').removeClass('show');
            break;
          case(link == "Land-NewMexico"):
            state = "New Mexico";
            $('.Rockford').removeClass('show');
            $('.NM').removeClass('show');
            break;
          case(link == "Land-Arizona"):
            state = "Arizona";
            $('.Rockford').removeClass('show');
            $('.AZ').removeClass('show');
            break;
          case(link == "Land-Utah"):
            state = "Utah";
            $('.Longview').removeClass('show');
            $('.UT').removeClass('show');
            $('.Layton').removeClass('show');
            break;
          case(link == "Land-Idaho"):
            state = "Idaho";
            $('.Longview').removeClass('show');
            $('.ID').removeClass('show');
            $('.Edmonds').removeClass('show');
            break;
          case(link == "Land-Washington"):
            state = "Washington";
            $('.Longview').removeClass('show');
            $('.WA').removeClass('show');
            $('.Edmonds').removeClass('show');
            break;
          case(link == "Land-Oregona"):
            state = "Oregon";
            $('.Longview').removeClass('show');
            $('.OR').removeClass('show');
            break;
          case(link == "Land-Nevada"):
            state = "Nevada";
            $('.Longview').removeClass('show');
            $('.NV').removeClass('show');
            $('.Layton').removeClass('show');
            break;
          case(link == "Land-California"):
            state = "California";
            $('.Rockford').removeClass('show');
            $('.CA').removeClass('show');
            $('.Meadow').removeClass('show');
            $('.National').removeClass('show');
            break;
          case(link == "Land-Alaska"):
            state = "Alaska";
            $('.Longview').removeClass('show');
            $('.AK').removeClass('show');
            $('.Kenai').removeClass('show');
            break;
          case(link == "Land-Hawaii"):
            state = "Hawaii";
            $('.Rockford').removeClass('show');
            $('.HI').removeClass('show');
            $('.Meadow').removeClass('show');
            break;
          }
        });
    });
  });
})(jQuery);
