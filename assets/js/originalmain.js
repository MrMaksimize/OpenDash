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
    });

    /**
     * Create a new Viewpicker instance to be rendered inside of an
     * element with the id "viewpicker".
     */
    /*var viewpicker = new gapi.analytics.ext.Viewpicker({
      container: 'viewpicker'
    }).execute();*/

    /**
     * Create a new DataChart instance with the given query parameters
     * and Google chart options. It will be rendered inside an element
     * with the id "datachert".
     */
    var dataChart = new gapi.analytics.googleCharts.DataChart({
      query: {
        'metrics': 'ga:sessions',
        'dimensions': 'ga:date',
        'start-date': '7daysAgo',
        'end-date': 'yesterday'
      },
      chart: {
        container: 'datachart',
        type: 'LINE',
        options: {
          width: '100%'
        }
      }
    });

    /**
     * Register a handler to run whenever the user changes the view.
     * The handler will update the dataChart instance as well as change
     * its chart title to reflect the newly selected view.
     */
    /*viewpicker.on('change', function(data) {
      dataChart.set({query: data}).execute();
      this.container.parentNode.querySelector('.Chart-title')
          .innerHTML = data.propertyName + ' (' + data.viewName + ')';
    });*/

    var queryData = {
      accountName: "MrMaksimize.com",
      propertyName: "MrMaksimize.com",
      viewName: "MrMaksimize.com",
      ids: "ga:59122748"
    }
    dataChart.set({query: queryData}).execute();
  });
});
