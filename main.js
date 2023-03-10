//  <!-- Tính tiền lương nhân viên -->
function Tinhtienluong(){
    var ngaylamtxt=document.getElementById("ngaylam").value*1;
    var luong1ngaytxt=document.getElementById("luong1ngay").value*1;

    var Tongtienluong = 0;
    Tongtienluong = ngaylamtxt * luong1ngaytxt;
    document.getElementById('TienLuong').innerHTML = Tongtienluong;
    
}
// <!-- Tính giá trị trung bình -->
function GTTB(){
    var n1=document.getElementById('num1').value*1;
    var n2=document.getElementById('num2').value*1;
    var n3=document.getElementById('num3').value*1;
    var n4=document.getElementById('num4').value*1;
    var n5=document.getElementById('num5').value*1;

    var giaTriTrungBinh = 0;
    giaTriTrungBinh = (n1 + n2 + n3 + n4 +n5)/5;
    document.getElementById("GiaTriTrungBinh").innerHTML = giaTriTrungBinh;

}
// <!-- Quy đổi tiền -->
function ChuyenTien(){
    // input
    var usd=document.getElementById('usd').value;
    var vnd=document.getElementById('vnd').value;
   

    // output
    var QuyDoi = 0;
    // progress
    // progress
  QuyDoi = usd * vnd;
  
  // format QuyDoi using NumberFormat
  var formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  var formattedQuyDoi = formatter.format(QuyDoi);

  document.getElementById('QuyDoi').innerHTML = formattedQuyDoi;
}
//  <!-- Tính diện tích, chu vi hình chữ nhật -->
function Tinh(){
     var dai=document.getElementById('chieudai').value*1;
    var rong=document.getElementById('chieurong').value*1;

    //output
    var chuVi =0;
    var dienTich = 0;

    //progress
    chuVi=2* (dai + rong);
    dienTich = dai * rong ;
    document.getElementById('chuVi').innerHTML = chuVi;
    document.getElementById('dienTich').innerHTML = dienTich;
}

// tính tổng 2 ký số
function Tong2KySo(){
    //input
    var kyso=document.getElementById('2kyso').value;
    // out put
    var Tong=0;
    // progress
    var hangchuc =Math.floor (kyso /10);
    var donvi = Math.floor (kyso % 10);
    Tong = hangchuc+donvi;
    document.getElementById('Tong2KySoo').innerHTML = Tong;
}