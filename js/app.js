$(document).ready(function() {
  
$("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();

    // add new item as last element in the list (at the bottom)
    $('.shopping-list').append(
      '<li>' +
        '<span class="shopping-item">' + $("#shopping-list-entry").val() + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
    );

    $("#shopping-list-entry").val("")

  });
  
  // remove shopping list item
  $('ul').on('click', '.shopping-item-delete', function(event) {
    //$(this).parent().remove(); <-- only removes shopping item controls
    $(this).closest("li").remove();
  });

  // logic for checking/unchecking items
  $('ul').on('click', '.shopping-item-toggle', function(event){

    // toggle item selected
    $(this).closest("li").find(".shopping-item").toggleClass(
          "shopping-item__checked");
  });

});