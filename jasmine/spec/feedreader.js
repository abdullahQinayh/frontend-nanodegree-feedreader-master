/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('each have defined non-empty URL', function() {
           for(var i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url.length).not.toBe(0);
            }
         });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('each have defined non-empty name', function() {
          // go through all the feed to check if the name in not empty
           for(var i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name.length).not.toBe(0);
            }
         });
    });

        /* Write a new test suite named "The menu" */
         describe('The menu', function() {
        it('menu element is hidden by default', function () {
            expect($('.menu-hidden').is(':visible')).toBe(true);
        });

        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu visible when clicked', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(false);
        });

        it('menu hidden when clicked', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(true);
        });
    });
   /* Write a new test suite named "Initial Entries" */
     describe('Initial Entries', function() {
       
      /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
         it('ensure the loadFeed and completes its work', function() {
           expect($('.feed .entry').length).not.toBeLessThan(1);
         });
    });
//-------------------------------------------------------------
    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var feed1, Feed2;

        beforeEach(function(done) {
            // save the old content
            feed1 = $('.feed').children().text();
            loadFeed(1, function() {
            Feed2 = $('.feed').children().text();
              done();
            });
        });
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         it('ensure the contant changed', function() {
           expect(Feed2).not.toBe(feed1);
         });
    });
}());
