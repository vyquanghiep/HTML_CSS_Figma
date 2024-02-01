
  $(document).ready(function () {
    var currentPage = 1;
    var maxPages = 4;

    showPage(currentPage);

    $('.pagination a').on('click', function (e) {
      e.preventDefault();

      var selectedPage;
      var direction = $(this).hasClass('a-left') ? -1 : 1;

      if ($(this).hasClass('a-left') && currentPage > 1) {
        selectedPage = currentPage - 1;
      } else if ($(this).hasClass('a-right') && currentPage < maxPages) {
        selectedPage = currentPage + 1;
      } else {
        return; // Không thực hiện gì cả nếu đã ở trang đầu hoặc trang cuối
      }

      showPage(selectedPage);
      currentPage = selectedPage;
    });

    function showPage(page) {
      $('#newsContainer .card-text-bg').text('Nội dung trang ' + page);
      $('.pagination a').removeClass('active');
      $('.pagination a').eq(page).addClass('active');
    }
  });
