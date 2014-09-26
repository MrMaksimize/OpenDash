$(function() {
  gapi.analytics.ready(function() {
    /**
     * Authorize this user.
     */
    gapi.analytics.auth.authorize({
      container: 'auth',
      clientid: $('body').data('ga-client_id')
    });

    /**
     * Add a callback to add the `is-authorized` class to the body
     * as soon as authorization is successful. This is used to help
     * style components.
     */
    gapi.analytics.auth.on('success', function() {
      $('html').addClass('is-authorized');

      /**
       * Create a new DataChart instance with the given query parameters
       * and Google chart options. It will be rendered inside an element
       * with the id "datachert".
       */
      /*var dataChart = new gapi.analytics.googleCharts.DataChart({
        query: {
          'metrics': 'ga:sessions',
          'dimensions': 'ga:date',
          'start-date': '7daysAgo',
          'end-date': 'yesterday',
          'ids': "ga:59122748"
        },
        chart: {
          container: 'datachart',
          type: 'COLUMN',
          options: {
            title: 'Users Over The Past 7 Days',
            width: '100%'
          }
        }
      });*/
      //dataChart.execute();
    });


    var panels = {};

    $('.panel').each(function(index, element) {
      console.log(element);
      console.log(index);

      var dataChart = new gapi.analytics.googleCharts.DataChart({
        query: {
          'metrics': 'ga:sessions',
          'dimensions': 'ga:date',
          'start-date': '7daysAgo',
          'end-date': 'yesterday',
          'ids': "ga:59122748"
        },
        chart: {
          container: element,
          type: 'COLUMN',
          options: {
            title: 'Users Over The Past 7 Days',
            width: '100%'
          }
        }
      }).execute();
    }); // AuthReady.
  }); //gapi Ready.
}); // docReady.
