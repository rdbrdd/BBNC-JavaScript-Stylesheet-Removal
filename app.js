< script >
    // removes BBNC stylesheets from the page
    $("link[href*='stylesheet']").prop('disabled', true);
    $("link[href*='stylesheet']").remove();
< /script>
