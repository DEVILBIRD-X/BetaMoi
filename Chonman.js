// Chonman.js

// Lắng nghe sự kiện khi tất cả các phần tử HTML đã được tải
document.addEventListener('DOMContentLoaded', function() {

    // Lấy ra tất cả các nút level trong màn chơi World 1
    const levelButtons = document.querySelectorAll('.level-button');

    // Lặp qua từng nút và thêm sự kiện click
    levelButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Lấy ra level từ thuộc tính data-level của nút
            const level = button.getAttribute('data-level');
            
            // Xử lý logic khi nhấn nút (ví dụ: điều hướng đến màn chơi tương ứng)
            navigateToLevel(level);
        });
    });

    // Hàm xử lý điều hướng đến màn chơi tương ứng
    function navigateToLevel(level) {
        // Ví dụ: in ra console thông báo level được chọn
        console.log(`Chosen level: ${level}`);

        // Thực hiện các hành động cần thiết khi chọn màn chơi, ví dụ như chuyển hướng đến màn chơi thực tế
        // Thay đổi nội dung này tùy thuộc vào logic và cấu trúc của game của bạn
        // Ví dụ:
        // window.location.href = `level${level}.html`; // Chuyển hướng đến file level tương ứng
        // Hoặc
        // Gọi hàm khởi tạo màn chơi với level được chọn

        // Sau khi chọn level, bạn có thể thay đổi file CSS và JavaScript cho màn chơi tiếp theo
        updateGameFilesForLevel(level);
    }

    // Hàm cập nhật các file CSS và JavaScript cho màn chơi mới
    function updateGameFilesForLevel(level) {
        // Đường dẫn tới file CSS mới
        const newCSSFile = `TroChoiPhan${level}.css`;

        // Đường dẫn tới file JavaScript mới
        const newJSFile = `TroChoiPhan${level}.js`;

        // Lấy phần tử head của HTML
        const head = document.head;

        // Xóa các file CSS và JavaScript cũ nếu có
        removeOldFiles();

        // Tạo thẻ link cho file CSS mới
        const newCSSLink = document.createElement('link');
        newCSSLink.rel = 'stylesheet';
        newCSSLink.href = newCSSFile;

        // Thêm thẻ link vào head
        head.appendChild(newCSSLink);

        // Tạo thẻ script cho file JavaScript mới
        const newScript = document.createElement('script');
        newScript.src = newJSFile;

        // Thêm script vào cuối body để đảm bảo đã tải xong các phần tử HTML
        document.body.appendChild(newScript);
    }

    // Hàm xóa các file CSS và JavaScript cũ
    function removeOldFiles() {
        const oldCSS = document.querySelector('link[href*="TroChoiPhan"]');
        if (oldCSS) {
            oldCSS.remove();
        }

        const oldJS = document.querySelector('script[src*="TroChoiPhan"]');
        if (oldJS) {
            oldJS.remove();
        }
    }

});