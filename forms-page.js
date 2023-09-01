$(document).ready(function () {
  function setItems() {
    $(".tr-item").each(function (itemIndex) {
      let cmsItem = $(this);
      let itemCategory = cmsItem.find(".tr-category").text();
      let itemSubCategory = cmsItem.find(".tr-subcategory").text();

      $(".tr-subcategory-item").each(function (subgroupIndex) {
        let subgroupCategory = $(this).find(".tr-subcategory-title").text();
        if (subgroupCategory === itemSubCategory) {
          cmsItem.appendTo($(this).find(".tr-subcategory-files"));
        }
      });

      $(".tr-contain").each(function (groupIndex) {
        let groupCategory = $(this).find(".tr-title").text();
        if (groupCategory === itemCategory && itemSubCategory === "") {
          cmsItem.appendTo($(this).find(".tr-list"));
        }
      });
    });
  }

  function setDropdowns() {
    $(".tr-subcategory-dropdown").each(function (subIndex) {
      let subItem = $(this);
      let parentCategory = subItem.find(".tr-parent-category").text();

      $(".tr-contain").each(function (subdropdownIndex) {
        let groupCategory = $(this).find(".tr-title").text();
        if (groupCategory === parentCategory) {
          subItem.appendTo($(this).find(".tr-subcategory-contain"));
        }
      });
    });
  }

  setInterval(function () {
    setItems(); // Call every 3 seconds
    setDropdowns();
  }, 1000);
});
</script>

<script> 

$('.tr-title').each(function(){
var s = $(this).text();
$('.category_select').append('<option value="'+s+'">'+s+'</option>');
})

</script>

<script>
document.getElementById("accordion_search_bar").value = window.location.search.slice(13);

var search = document.getElementById( 'accordion_search_bar' ),
    accordions = document.querySelectorAll( '.parent-category, .card, .card-body, .card-header, .card-body>.card>.card-header' );



// Apply search
search.addEventListener( 'input', function() {
    var searchText = search.value.toLowerCase();
    Array.prototype.forEach.call( accordions, function( accordion ) {
        if ( accordion.innerText.toLowerCase().indexOf( searchText ) >= 0 ) {
            accordion.style.display = 'block';
            accordion.classList.add("active");
        }
        else {
            accordion.style.display = 'none';
        }
    } );
} );
