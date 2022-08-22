// BÀI TẬP TÍNH LƯƠNG NHÂN VIÊN
var soNgayLam; //Đầu vào có dư liệu Lương 1 ngày là 100.000
const LUONGMOTNGAY = 100000;
soNgayLam = 3;
var ketQuaLuong = soNgayLam * LUONGMOTNGAY;
console.log("Tổng Lương là : " + ketQuaLuong + "VNĐ");


//BÀI TẬP QUY ĐỔI USD
var USD; //*Đầu vào có dữ liệu 1 USD = 23500VNĐ
const VND = 23500;
USD = 3;
USD *=VND;//Xử lý cho tỉ lệ quy đổi là tùy số lượng USD khách muốn quy đổi sẽ nhân với 23500VNĐ
var ketQua5 = USD; //Đầu ra  hiện kết quả số tiền đã được quy đổi 
console.log("Tỉ lệ quy đổi USD sang VND là:" + ketQua5 + "VNĐ" );

//BÀI TẬP TÍNH TRUNG BÌNH 5 SỐ 
var soThu1 = 10;   // Đầu vào có Dữ liệu 5 số
var soThu2 = 11;
var soThu3 = 12;
var soThu4 = 13;
var soThu5 = 14;
var tong = soThu1 + soThu2 + soThu3 + soThu4 + soThu5; //xử lý bằng cách cộng 5 số lại chia 5 sẽ ra trung bình 5cura 5 số
var trungBinh = tong / 5;
var ketQua4 = ("Trung Bình của 5 số là :" + trungBinh); // Đầu ra hiện kết quả trung bình
console.log(ketQua4);

// BÀI TẬP TÍNH DIỆN TÍCH, CHU VI HÌNH CHƯ NHẬT 
var cd; // Đầu vào có dữ liệu chiều dài và chiề uộng của Hình chữ nhật
var cr;
cd = 9;
cr = 4;
var dienTich = cd * cr ; // Xử lý : Công thức tính Diện tích HCN = dài * rộng ;
var chuVi = ( cd + cr ) * 2 ;  /// Xử lý : Công thức chu vi HCN =  ( dài + rộng ) * 2 ; 

console.log(" Chu vi HCN là : " + chuVi); // Đầu ra hiện kết quả chu vi và diện tích HCN
console.log(" Diện tích HCN là : " + dienTich);


//BÀI TẬP TÍNH TỔNG 2 KÝ SỐ
var haiKySo = 35; //Đầu vào có dữ liệu số có 2 ký số 
var hangChuc1 = Math.floor ( haiKySo / 10 ); // Xử lý : tìm hàng chục bằng cách lấy ký số chia cho 10 bằng 3
var hangDV2 = Math.floor (haiKySo % 10 ); // Tìm hàng đơn vị bằng cách chia lấy số nguyên lấy số chia chia 10 ra 5
var tong2KS = hangChuc1 + hangDV2; // Cộng 2 ký số lại là có kết quả tông 2 ký số
console.log(" Tổng 2 ký số : " + tong2KS );// Đầu ra xuất thông tin kết quả 2 ký số ra
