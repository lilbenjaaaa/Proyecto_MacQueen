function getConductores(done) {

    const results = fetch("https://api.openf1.org/v1/drivers");

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });

};

getConductores(data => {
    console.log(data);
    data.results.forEach(Conductores => {
        
        const article = document.createRange().createContextualFragment(/*html*/
            <article>

            <div class="image-container">
                <img src="${Conductores.headshot_url" alt="Conductores"></img>
            </div>

            <h2>${Conductores.name}</h2>
            <h2>${Conductores.last_name}</h2>
            

        </article>
        );

        const main = document.querySelector("main");

        main.append(article);

    });

});

/** 
https://api.openf1.org/v1/drivers
https://openf1.org/#drivers
https://www.youtube.com/watch?v=rfOrTHC6utU

*/