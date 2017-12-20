let topBars = ['Brotherhood of Thieves', 'The Monkey Farm Cafe', 'Fat Angel'];

// Render data in console
function renderCitiesInConsole(cities) {
    for (let key in cities){
        let city = cities[key];
        console.log(city['name']);
    }
}

// Render Bars in this city
function renderBarsInConsole(cities, cityName) {

    for(let key in cities[cityName]['bars']){
        let bar = cities[cityName]['bars'][key];

        // console.log(key);
        console.log(bar['name']);
    }
}

// Render content from city, bar
function renderContentInConsole(cities, cityName, barName) {

    for(let key in cities[cityName]['bars'][barName]['content']){
        let content = cities[cityName]['bars'][barName]['content'][key];
        console.log(content);
    }
}

/*
PAGE 1
 */

function renderPage1InHTML(cities){
    let bodyContent = $('.content');
    bodyContent.empty();

    bodyContent
        .css('background', 'url("img/Background Page 1.jpg") no-repeat')
        .css('background-size', 'cover');

    let header = $('<header>').addClass('page1-header');

    header.append('<nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
        '        <a class="navbar-brand" href="#"><i class="fa fa-info-circle fa-lg" aria-hidden="true"></i></a>\n' +
        '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '            <span class="navbar-toggler-icon"></span>\n' +
        '        </button>\n' +
        '\n' +
        '        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
        '            <ul class="navbar-nav mr-auto">\n' +
        '\n' +
        '            </ul>\n' +
        '\n' +
        '            <button class="btn btn-primary my-2 my-sm-0 mr-2">Sign up</button>\n' +
        '            <button class="btn btn-secondary my-2 my-sm-0">Log in</button>\n' +
        '\n' +
        '        </div>\n' +
        '    </nav>');

    bodyContent.append(header);

    let main = $('<main>').addClass('page1-main');
    bodyContent.append(main);

    let mapsection = $('<section>');
    main.append(mapsection);

    mapsection.append('<h1>Bulgarian bars</h1>');

    let figure = $('<figure>');
    mapsection.append(figure);

    for (let key in cities){
        let city = cities[key];
        let cityNameHere = city['name'].toLowerCase();
        // Clear spaces
        cityNameHere = cityNameHere.replace(/\s/g, '');

        figure.append('<img id="' + cityNameHere + '" class="crown-map-bulgaria" ' +
            'src="img/crown.png" alt="crown">');
    }


    figure.append('<img class="map-bulgaria" src="img/bulgarian%20map.png" alt="Map of Bulgaria">');

    let topBarSection = $('<section>');
    main.append(topBarSection);
    topBarSection.append('<h2 class="top-3-header">Top 3 bars this week</h2>')
        .append('<div class="top-3-headers">' +
                '<h3>#1</h3>' +
                '<h3>#2</h3>' +
                '<h3>#3</h3>' +
            '</div>');

    let top3Div = $('<div>').addClass('top-3');
    topBarSection.append(top3Div);

    for(let barIndex in topBars){
        for(let key in cities){
            let city = cities[key];
            for(let anotherKey in cities[city['name']]['bars']){
                let bar = city['bars'][anotherKey];
                if (bar['name'] === topBars[barIndex]){
                    let appendTop3Bar = $('<div>').addClass('bar');
                    let indexForClass = parseInt(barIndex) + 1;
                    let picDiv = $('<div>').addClass('pic' + indexForClass);
                    picDiv
                        .css('background', 'url("img/' + city['name'] + '/' + bar['name'] + '/outside.jpg") no-repeat')
                        .css('background-size', 'cover');
                    appendTop3Bar.append(picDiv);
                    picDiv.append('<h2 class="page1-barname">' + bar['name'] + '</h2>');
                    picDiv.append('<p class="text">' + bar['learnmore'] + '</p>');

                    top3Div.append(picDiv);
                }
            }
        }
    }

    let footer = $('<footer>').addClass('page1-footer');
    bodyContent.append(footer);
    let firstSection = $('<section>');
    firstSection.append($('<h2>Contacts</h2>\n' +
        '        <div>\n' +
        '            <ul>\n' +
        '                <li>mob: 123-456-789</li>\n' +
        '                <li>email: adventure@island.team</li>\n' +
        '            </ul>\n' +
        '            <ul>\n' +
        '                We are:\n' +
        '                <li>Daniel Kolev</li>\n' +
        '                <li>Martin Yanev</li>\n' +
        '                <li>Zdravko Atanasov</li>\n' +
        '                <li>Mariya Ruskova</li>\n' +
        '            </ul>\n' +
        '        </div>'));
    footer.append(firstSection);
    let secondSection = $('<section>');
    secondSection.append('<h2>let\'s get in touch</h2>\n' +
        '        <div>\n' +
        '            <div class="facebook"><a href="#"></a></div>\n' +
        '            <div class="linkedin"><a href="#"></a></div>\n' +
        '            <div class="youtube"><a href="#"></a></div>\n' +
        '            <div class="twitter"><a href="#"></a></div>\n' +
        '        </div>');
    footer.append(secondSection);
    let copyright = $('<div class="copyright">Copyright &copy; 2017</div>');
    footer.append(copyright);

    $('.page1-barname').click(function (e) {
        e.preventDefault();

        let foundedCityName = '';
        for(let key in cities){
            let city = cities[key];
            for(let anotherKey in cities[city['name']]['bars']){
                let bar = city['bars'][anotherKey];
                if (bar['name'] === $(this).text()){

                    foundedCityName = city['name'];
                }
            }
        }
        getCitiesAndCityBar(foundedCityName, $(this).text())
    });

    $('.crown-map-bulgaria').click(function (e) {
        e.preventDefault();

        let idName = $(this).get(0).id;
        idName = capitalizeFirstLetter(idName);

        if (idName === "Starazagora"){
            idName = "Stara Zagora";
        }

        getCitiesAndCity(idName);
    })

}

/*
END PAGE 1
 */

/*
PAGE 2
 */

function renderPage2InHTML(cities, cityName) {
    let bodyContent = $('.content');
    bodyContent.empty();

    bodyContent
        .css('background', 'url("img/Background Page 2.jpg") no-repeat')
        .css('background-size', 'cover');

    let heading = $('<h1 class="text-center page2-heading"><span>' + cityName + '</span></h1>')
        .css('color', 'white')
        .css('padding-top', '50px')
        .css('-webkit-text-stroke', '1px black');
    bodyContent.append(heading);

    let header = $('<header>');
    header.append('<button class="back" type="button">Back to First Page</button>');
    header.append('<button class="next" type="button">Next City</button>');

    bodyContent.append(header);

    // Create main part
    let main = $('<main>');
    bodyContent.append(main);
    let section = $('<section>').addClass('page2-section');
    main.append(section);

    for(let key in cities[cityName]['bars']){
        let bar = cities[cityName]['bars'][key];

        let article = $('<article>');
        let articleNameDiv = $('<div>').addClass('name');
        articleNameDiv.append('<h2>' + bar['name'] + '</h2>');

        let crowns = $('<div>').addClass('crowns');
        for (let i = 1; i <= bar['crowns']; i++){
            crowns.append('<img class="crown" src="img/crown.png" alt="crown">');
        }
        articleNameDiv.append(crowns);
        article.append(articleNameDiv);
        section.append(article);

        let articleInfoDiv = $('<div>').addClass('info');
        articleInfoDiv.append('<img class="bar-photo" src="img/' + cityName + '/' + bar['name'] + '/outside.jpg" alt="Outside of the bar">');

        articleInfoDiv.append('<button class="btn btn-primary selected-bar">learn more</button>');

        let contentUl = $('<ul>');
        for (let anotherKey in cities[cityName]['bars'][bar['name']]['content']){
            let content = cities[cityName]['bars'][bar['name']]['content'][anotherKey];

            contentUl.append('<li>' + content + '</li>');
        }

        articleInfoDiv.append(contentUl);
        article.append(articleInfoDiv);
    }

    let footer = $('<footer>');
    footer.append('<div class="copyright">Copyright &copy; 2017</div>');

    bodyContent.append(footer);

    /*$('.back').click(function (e) {
        e.preventDefault();

        let lastCity;
        let count = 0;
        for (let key in cities){
            let city = cities[key];
            if(city['name'] !== cityName){
                lastCity = city['name'];
                count++;
            } else {
                // If the city is firs city and we need to go from last city
                if (count === 0){
                    let lastCityInArray;
                    for (let anotherKey in cities){
                        let anotherCity = cities[anotherKey];
                        lastCityInArray = anotherCity['name'];
                    }
                    getCitiesAndCity(lastCityInArray)
                    // renderPage2InHTML(cities, lastCityInArray);
                } else {
                    getCitiesAndCity(lastCity);
                    // renderPage2InHTML(cities, lastCity);
                }
            }
        }
    });*/


    $('.next').click(function (e) {
        e.preventDefault();

        let foundCity = false;

        for(let key in cities){
            let city = cities[key];

            let lastCityInArray;
            for (let anotherKey in cities){
                let anotherCity = cities[anotherKey];
                lastCityInArray = anotherCity['name'];
            }

            if (lastCityInArray === cityName){
                for (let anotherKey in cities){
                    let anotherCity = cities[anotherKey];
                    getCitiesAndCity(anotherCity['name'])
                    // renderPage2InHTML(cities, anotherCity['name']);
                    break;
                }
            } else {
                if (foundCity) {
                    getCitiesAndCity(city['name']);
                    // renderPage2InHTML(cities, city['name']);
                    break;
                }

                if (city['name'] === cityName){
                    foundCity = true;
                }
            }
        }
    });

    $('.back').click(function (e) {
        e.preventDefault();

        getCities();
    });

    $('.selected-bar').click(function (e) {
        e.preventDefault();

        getCitiesAndCityBar(cityName, $(this).parent().parent().find('.name').find('h2').text());
        // renderPage3InHTML(cities, cityName, $(this).parent().parent().find('.name').find('h2').text());
    })
}

/*
END PAGE 2
 */


/*
PAGE 3
 */

function renderPage3InHTML(cities, cityName, barName) {
    let bodyContent = $('.content');
    bodyContent.empty();
    bodyContent
        .css('background', 'url("img/Background Page 3.jpg") no-repeat')
        .css('background-size', 'cover');

    let heading = $('<h1 class="text-center page3-heading"><span>' + barName + '</span></h1>')
        .css('color', 'white')
        .css('padding-top', '50px');
    bodyContent.append(heading);

    let mapContainer = $('<div>').addClass('map-container');

    for(let key in cities[cityName]['bars']){
        let bar = cities[cityName]['bars'][key];

        // HERE
        if(bar['name'] === barName){
            let map1 = $('<div>').addClass('map').addClass('map-1');
            let imgOutside = $('<img src="img/' + cityName + '/' + bar['name'] +
                '/outside-gallery.jpg" alt="Bar ' + barName + ' image">');
            let map2 = $('<div>').addClass('map').addClass('map-2');
            let imgInside = $('<img src="img/' + cityName + '/' + bar['name'] +
                '/inside-gallery.jpg" alt="Bar ' + barName + ' image">');
            let map3 = $('<div>').addClass('map').addClass('map-3');
            let imgScreen = $('<img src="img/' + cityName + '/' + bar['name'] +
                '/screen-gallery.jpg" alt="Bar ' + barName + ' image">');
            let map4 = $('<div>').addClass('map').addClass('map-4');
            let imgPool = $('<img src="img/' + cityName + '/' + bar['name'] +
                '/pool-gallery.jpg" alt="Bar ' + barName + ' image">');

            map1.append(imgOutside);
            map2.append(imgInside);
            map3.append(imgScreen);
            map4.append(imgPool);

            mapContainer.append(map1).append(map2).append(map3).append(map4);

            bodyContent.append(mapContainer);
            let galleryCard = $('<div>');
            galleryCard.addClass('container').addClass('gallery-card');
            bodyContent.append(galleryCard);

            let card = $('<div>').addClass('card');
            let cardHeader = $('<div>').addClass('card-header').append('<h2>' + barName + '</h2>');
            card.append(cardHeader);

            let cardBody = $('<div>').addClass('card-body');
            cardBody.append('<h4 class="card-title">More info about: ' + barName + '</h4>');
            cardBody.append('<p class="card-text">' + cities[cityName]['bars'][barName]['learnmore'] + '</p>');
            cardBody.append('<img src="img/' + cityName + '/' + barName + '/location map.png" alt="location map" width="200px">');
            cardBody.append('<a href="#" class="btn btn-primary float-right">Contact</a>');

            card.append(cardBody);
            galleryCard.append(card);
        }
    }

    $('.page3-heading').click(function (e) {
        e.preventDefault();

        getCities()
        // renderPage1InHTML(cities);
    });
}

// END PAGE 3

/*
Getting info from database
 */

function getCities() {
    let host = 'https://bulgarian-bars-2a762.firebaseio.com/.json';

    $.ajax(host, {
        method: 'GET',
        success: function (response) {
            renderPage1InHTML(response);
        }
    })
}

function getCitiesAndCity(city) {
    let host = 'https://bulgarian-bars-2a762.firebaseio.com/.json';

    $.ajax(host, {
        method: 'GET',
        success: function (response) {
            renderPage2InHTML(response, city);
        }
    })
}

function getCitiesAndCityBar(city, bar) {
    let host = 'https://bulgarian-bars-2a762.firebaseio.com/.json';

    $.ajax(host, {
        method: 'GET',
        success: function (response) {
            renderPage3InHTML(response, city, bar);
        }
    })
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Test Page 1
// renderPage1InHTML(citiesarray);

// Test Page 2
//renderPage2InHTML(citiesarray, 'Sofia');

// Test Page 3
// renderPage3InHTML(citiesarray, 'Sofia', 'Smog Cutter');

// Start Page
getCities();