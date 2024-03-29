feather.replace();

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        function initMap() {
    
            const uluru = {
                lat: -25.344,
                lng: 131.036
            };
           
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4,
                center: uluru,
            });
            
            const marker = new google.maps.Marker({
                position: uluru,
                map: map,
            });
        }