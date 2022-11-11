jQuery(function($) {
    
    (function() {
        $('.video-link').magnificPopup({
            type: 'iframe'
        });
    }());
    (function() {
        $('.showcase-icons.popup a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }());
    $('.rating-bar').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function() {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).off('inview');
        }
    });
    (function() {
        $('.category-dropdown').on('click', '.category-change a', function(ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.category-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });
    }());
    (function() {
        var map;
        map = new GMaps({
            el: '#gmap',
            lat: 47.0712247,
            lng: 2.3989918,
            scrollwheel: false,
            zoom: 8,
            zoomControl: true,
            panControl: false,
            streetViewControl: true,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        var image = 'images/map-icon.png';
        map.addMarker({
            lat: 47.0712247,
            lng: 2.3989918,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf',
        });
        var styles = [{
            "featureType": "road",
            "stylers": [{
                "color": "#979797"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "color": "#aaaaaa"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "color": "#e2e2e2"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#000000"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "color": "#b9b9b9"
            }]
        }, {
            "elementType": "labels.text",
            "stylers": [{
                "saturation": 1
            }, {
                "weight": 0.1
            }, {
                "color": "#101010"
            }]
        }];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });
        map.setStyle("map_style");
    }());
});