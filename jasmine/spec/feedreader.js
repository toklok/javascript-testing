/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('Make sure URL is defined and URL is not empty', function () {
            allFeeds.forEach(function (object) {
                expect(object).toBeDefined();
                expect(object.url.length).toBeGreaterThan(1);
                expect(object.url).not.toBeNull();


                /* DONE: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a URL defined
                 * and that the URL is not empty.
                 */

            });
        });


        it('Makes sure name is defined and is not empty', function () {
            allFeeds.forEach(function (obj) {
                expect(obj).toBeDefined();
                expect(obj.name).not.toBeNull();
                expect(obj.name.length).toBeGreaterThan(1);

                /* DONE: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a name defined
                 * and that the name is not empty.
                 */
            });
        });
    });


    /* DONE: Write a new test suite named "The menu" */
    describe('The menu', function () {

        it('The menu changes', function () {

            expect($('body')).toHaveClass('menu-hidden');

            expect($('body')).toExist('menu-hidden');

            //Want to make sure it begins with this ID, I don't change the ID, it's just a placemarker for myself.

            expect($('body')).toHaveId('hiddenDefault');

            //Because when the page is loaded the class .menu-hidden is active by default, which is hidden.


            /* DONE: Write a test that ensures the menu element is
             * hidden by default. You'll have to analyze the HTML and
             * the CSS to determine how we're performing the
             * hiding/showing of the menu element.
             */


        });


        /* DONE: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('describe the visibility when menu icon is clicked once', function () {


            var spyEvent = spyOnEvent('.menu-icon-link', 'click');

            $('.menu-icon-link').click();

            expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).toHaveBeenTriggered();

            //Check to see if the class .menu-hidden is not active.

            expect($('body')).toHaveClass('');
            // reset spy events
            spyEvent.reset();
            expect('click').not.toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).not.toHaveBeenTriggered();


        });

        it('describe the visibility when menu icon is clicked again', function () {


            var spyEvent = spyOnEvent('.menu-icon-link', 'click');

            $('.menu-icon-link').click();

            expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).toHaveBeenTriggered();

            //This is where we check if the class .menu-hidden is active, which is obviously when the menu is hidden
            expect($('body')).toHaveClass('menu-hidden');
            // reset spy events
            spyEvent.reset();
            expect('click').not.toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).not.toHaveBeenTriggered();


        });

    });

    /* DONE: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        /* DONE: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        it('have at least one entry within the .feed container', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(1);
            done();
        });
    });

    describe('New Feed Selection', function () {

        var postTitle,
            headerText,
            notPostTitle,
            notHeaderText;

        // Sanity check to compare string values.

        beforeEach(function (done) {
            loadFeed(0, function () {
                postTitle = $('.feed .entry h2').text();
                // console.log(postTitle);
                headerText = $('h1.header-title').text();
                //console.log(headerText);
                loadFeed(1, function () {
                    //  notPostTitle = $('.feed .entry h2').text();
                    //  notHeaderText = $('h1.header-title').text();
                    //  console.log(notPostTitle);
                    //  console.log(notHeaderText);
                    done();
                });
            });
        });

        it('compares the second h2 to the first h2 and they should not be equal', function (done) {
            expect($('.feed .entry h2').text()).not.toBe(postTitle);
            done();
        });

        it('compares the second header title to not equal the first header-title', function (done) {
            expect($('h1.header-title').text()).not.toBe(headerText);
            done();
        });
    });
    /* DONE: Write a new test suite named "New Feed Selection"

     /* DONE:  Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());
