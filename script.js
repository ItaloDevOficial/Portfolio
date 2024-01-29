let menu = document.querySelector('#menu-btn');
        let header = document.querySelector('.header');

        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            header.classList.toggle('active');
        }

        window.onscroll = () => {
            menu.classList.remove('fa-times');
            header.classList.remove('active');
        }

        let themeToggler = document.querySelector('#theme-toggler');

        themeToggler.onclick = () => {
            themeToggler.classList.toggle('fa-sun');
            if (themeToggler.classList.contains('fa-sun')) {
                document.body.classList.add('active');
            } else {
                document.body.classList.remove('active');
            }
        }

var uri = window.location.toString();
        if (uri.indexOf("%3D", "%3D") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("%3D"));
            window.history.replaceState({}, document.title, clean_uri);
        }
        var uri = window.location.toString();
        if (uri.indexOf("%3D%3D", "%3D%3D") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
            window.history.replaceState({}, document.title, clean_uri);
        }
        var uri = window.location.toString();
        if (uri.indexOf("&m=1", "&m=1") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
            window.history.replaceState({}, document.title, clean_uri);
        }
        var uri = window.location.toString();
        if (uri.indexOf("?m=1", "?m=1") > 0) {
            var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
            window.history.replaceState({}, document.title, clean_uri);
        }
        //]]>