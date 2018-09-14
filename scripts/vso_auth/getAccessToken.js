/**
 * Created by abmitra on 10/3/2015.
 */
(function(window){
    var urlParams;
    var secret = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im9PdmN6NU1fN3AtSGpJS2xGWHo5M3VfVjBabyJ9.eyJjaWQiOiJmZDU0NDgyNi0wMjU3LTQ3ZmYtOWVmYS0wMjBiNmFlZmExYTUiLCJjc2kiOiJiYWI0Y2I2NC02MTNlLTQ3NzAtOGFiYS02MTU3Zjk3OTk1ZjQiLCJuYW1laWQiOiJiZjJmMjU4YS03OWVjLTRlZjUtYjZiMS0wZDAxMjBhY2U3ZGQiLCJpc3MiOiJhcHAudnNzcHMudmlzdWFsc3R1ZGlvLmNvbSIsImF1ZCI6ImFwcC52c3Nwcy52aXN1YWxzdHVkaW8uY29tIiwibmJmIjoxNDQzODEwODY5LCJleHAiOjE2MDE0OTA4Njl9.ICNzdlYo_geG7F8BTtZ1_BxRyDyCeFSzi2YkJ_XdHRRljUPcrv3m9F8DIwEQ02SMMrx-cx__oD8F2_ZG-ZoouFprYF1vIVu9InpM4iJYEQYSCPaAx8PwLBGQi5w02mWZp60LABA93lL9g245igasMWkDOyNPATolM7q88yK3vffytgQqnxAMxMV-3EyfQwav2GlLKcbBeScFx86YsBSQ0h3ggKOcigTYSqvtnBafHojASgjZVyo9csKcdy7nQQkj-c3Pj6m4PdVY_eb5Era4eZndIx6t0mY-Q7hidpwDaEN0EY_h08WipLq2yenImXNu6Otq--25AB49XxvMKcwZ9A";
    (window.onpopstate = function () {
        var match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
    })();
    var code = urlParams["code"];
    var grant_type =  "urn:ietf:params:oauth:grant-type:jwt-bearer";
    debugger;
    if(urlParams["refresh"]){
        grant_type =  "refresh_token"
    }

    var url = "https://app.vssps.visualstudio.com/oauth2/token" +
        "?client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer" +
        "&client_assertion="+ secret +
        "&grant_type=" + grant_type +
        "&assertion=" + code +
        "&redirect_uri=https://abhikmitra.github.io/loggedin"
    var postData =
        "client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion=" +
        secret +
        "&grant_type=" + grant_type +
            "&assertion=" +
        code +
        "&redirect_uri=https://abhikmitra.github.io/loggedin";
    $.ajax({
        method: "POST",
        url: "https://app.vssps.visualstudio.com/oauth2/token",
        data: postData,
        contentType: 'application/x-www-form-urlencoded',
        error:function(){
            window.location =
                "https://abhikmitra.github.io/error"
        },
        success:function(data){
            // window.location =
            // "https://abhikmitra.github.io/token_received?access_token="
            // + data["access_token"]
            // + "&expires_in="+data["expires_in"] + "&refresh_token=" +data["refresh_token"];
            debugger;
            getTeams(data["access_token"]);
        }
    })
    function getTeams(accessToken){
        $.ajax({
            method: "GET",
            url: "https://olsapps.visualstudio.com/defaultConnection/Groupies/_apis/build/builds?api-version=2.0",
            contentType: 'application/x-www-form-urlencoded',
            headers:{
                Authorization: "Bearer " + accessToken
            },
            error:function(error){
                console.log(error)
            },
            success:function(data){
                console.log(data)

            }
        });
    }
}(window));
