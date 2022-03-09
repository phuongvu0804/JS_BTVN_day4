/* Bài 1: 
  input: 
+Lương 1 ngày
+Số ngày làm
  Process:
+khai báo các biến: lương 1 ngày, số ngày làm, tổng lương
+Với giá trị lương 1 ngày, taọ ô input với value = lương 1 ngày, đặt attribute = readonly. Gán giá trị cho biến salaryPerDay với 
value của input có id daySalary.
+Tạo công thức tính lương như sau: lương = lương 1 ngày * số ngày làm
+Tại thời điểm btn Tính được click, giá trị số ngày làm + lương 1 ngày sẽ được lấy, công thức tính tổng lương được tính
và tổng lương được in tại phần Footer
  Output:
+Tổng lương
+Tổng lương được in tại footer */
document.getElementById('salaryCalculateBtn').onclick = function() {
    var salaryPerDay = document.getElementById('daySalary').value;
    var numberWorkingDay = document.getElementById('workingDay').value;
    var totalSalary = salaryPerDay * numberWorkingDay;
  
    var noti_salary = '<div class = "alert alert-success"> Tổng tiền lương là: ' + totalSalary + ' đồng </div>'
    document.querySelector('.salary-footer').innerHTML = noti_salary;
}

/* Bài 2: 
  input: 
+ 5 số thực
  Process:
+Lắng nghe sự kiện onclick của button Tính, tại thời điểm click: sẽ
    +Lưu lại giá trị các input: số thực 1, số thực 2, số thực 3, số thực 4, số thực 5, và lưu lại giá trị
    vào các biến: realNumber 1 -> 5. Nhân các giá trị này với 1 để chuyển đổi kiểu dữ liệu
    +Tạo biến trung bình 5 số thực là averageValue = tổng 5 số thực / 5
    +Tạo biến thông báo kết quả
    +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer đã được code sẵn tại file html 
    => thông báo kết quả được hiển thị khi click
  Output:
+Trung bình 5 số thực 
+Kết quả được xuất ra*/
// var realNumber1;
// var realNumber2;
// var realNumber3;
// var realNumber4;
// var realNumber5;
// var averageOfRealNumbers = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
// alert(averageOfRealNumbers);

document.querySelector('.average-cal-btn').onclick = function() {
    var realNumber1 = document.getElementById('realNumber1').value * 1;
    var realNumber2 = document.getElementById('realNumber2').value * 1;
    var realNumber3 = document.getElementById('realNumber3').value * 1;
    var realNumber4 = document.getElementById('realNumber4').value * 1;
    var realNumber5 = document.getElementById('realNumber5').value * 1;
    console.log(typeof realNumber1)
    var averageValue = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
    var noti_average = '<div class = "alert alert-success"> Giá trị trung bình của 5 số thực là: ' + averageValue + '</div>'
    document.querySelector('.average-cal-footer').innerHTML = noti_average
}

/* Bài 3: 
  input: 
+2 chiều dài của HCN 
+chiều rộng của HCN
  Process:
+Lắng nghe sự kiện onclick của button Tính diện tích, tại thời điểm click: sẽ
    +Lưu lại giá trị các input:  chiều dài của HCN , chiều rộng của HCN và lưu lại giá trị
    vào các biến: length, width. Nhân các giá trị này với 1 để chuyển đổi kiểu dữ liệu
    +Tạo biến tính diện tích HCN như sau: area = chiều dài * chiều rộng
    +Tạo biến thông báo kết quả diện tích
    +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer đã được code sẵn tại file html 
    => thông báo kết quả được hiển thị khi click

+Lắng nghe sự kiện onclick của button Tính chu vi, tại thời điểm click: sẽ
    +Lưu lại giá trị các input:  chiều dài của HCN , chiều rộng của HCN và lưu lại giá trị
    vào các biến: length, width. Nhân các giá trị này với 1 để chuyển đổi kiểu dữ liệu
    +Tạo biến tính chu vi HCN như sau: perimeter = (length + width) * 2;
    Tạo biến thông báo kết quả chu vi
    +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer đã được code sẵn tại file html 
    => thông báo kết quả được hiển thị khi click

  Output:
+Diện tích, chu vi của HCN
+Kết quả được xuất ra*/

document.querySelector('.area-cal-btn').onclick = function() {
    var length = document.getElementById('rectangle-length').value * 1;
    var width = document.getElementById('rectangle-width').value * 1;
    var area = length * width;
    var noti_area = '<div class = "alert alert-success">Diện tích hình chữ nhật là: ' + area + ' m</div>'
    document.querySelector('.rectangle-footer').innerHTML = noti_area;
}

document.querySelector('.perimeter-cal-btn').onclick = function() {
    var length = document.getElementById('rectangle-length').value * 1;
    var width = document.getElementById('rectangle-width').value * 1;
    var perimeter = (length + width) * 2;
    var noti_perimeter = '<div class = "alert alert-success">Chu vi hình chữ nhật là: ' + perimeter + ' m</div>'
    document.querySelector('.rectangle-footer').innerHTML = noti_perimeter;
}

/* Bài 5: 
  input: 
+1 số có 2 chữ số
  Process:
+Lắng nghe sự kiện onclick của button Tính diện tích, tại thời điểm click: sẽ
    +Lưu lại giá trị input: số vào biến: number 
    +Kiểm tra số có phải là số có 2 chữ số hay không bằng if + phương thức length cho đối tượng number+ 
    toán tử so sánh bằng 
    +Để chuyển đổi kiểu dữ liệu:
        +Nhân giá trị của number với 1
    +Nếu number là số có 2 chữ số: 
        +Tạo biến tính hàng đơn vị của số như sau: unit = Math.floor(number % 10)
        +Tạo biến tính hàng chục của số như sau: ten = Math.fllor(number % 100 / 10)
        +Tạo biến tính tổng của 2 ký số như sau: sum = ten + unit
        +Tạo biến thông báo kết quả
        +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer đã được code sẵn tại file html 
        => thông báo kết quả được hiển thị khi click
    +Nếu number ko là số có 2 chữ số: 
        +Tạo biến thông báo không hợp lệ
        +Sử dụng innerHTML đề chèn phần thông báo kết quả vào div.footer đã được code sẵn tại file html 
        => thông báo kết quả được hiển thị khi click
  Output:
+Tổng 2 ký số của số được nhập
+Kết quả được xuất ra*/

document.querySelector('.digit-cal-btn').onclick = function() {
    var number = document.getElementById('number-2-digits').value;
    console.log(typeof number)
    if (number.length == 2) {
        number *= 1;
        var unit = Math.floor(number % 10);
        var ten = Math.floor(number % 100 / 10);
        var sum = ten + unit;
        var noti_sum = '<div class = "alert alert-success">Tổng 2 ký số là: ' + sum + '</div>'
        document.querySelector('.digit-footer').innerHTML = noti_sum;
    }
    else {
        var noti_wrong = '<div class = "alert alert-success">Đây không phải là số có hai chữ số</div>'
        document.querySelector('.digit-footer').innerHTML = noti_wrong;
    }
}