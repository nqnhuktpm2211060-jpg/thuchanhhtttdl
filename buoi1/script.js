var mapOptions = {
  center: [10.0279603, 105.7664918],
  zoom: 10,
};

var map = new L.map("map", mapOptions);
var layer = new L.tileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);
map.addLayer(layer);

var canThoCoords = [10.0279603, 105.7664918];
var marker = L.marker(canThoCoords)
  .addTo(map)
  .bindPopup("<strong>Can Tho University</strong><br>Trường Đại học Cần Thơ")
  .openPopup();

map.setView(canThoCoords, 15);

// bai3.  Thay thế icon mặc định của marker ở bài tập 2 bằng icon khác, ví dụ logo của trường đại học Cần Thơ.
// create a CTU icon and apply it to the existing marker
var ctuIcon = L.icon({
  iconUrl: "images/ctu-icon.jpg", // update path to your CTU icon file
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -40],
});

marker.setIcon(ctuIcon);

marker.on("click", function () {
  var popup = canThoMarker.getPopup();
  if (popup) {
    popup.setContent("<strong>Khu II Đại học Cần Thơ</strong>");
    canThoMarker.openPopup();
  } else {
    canThoMarker
      .bindPopup("<strong>Khu II Đại học Cần Thơ</strong>")
      .openPopup();
  }
});
// bai4  Làm lại bài tập 3, trong đó hiển thị câu “Khu II Đại học Cần Thơ” khi người dùng click vào marker.
// bai5  Định dạng popup window với câu giới thiệu ngắn và hình ảnh minh họa cho Khu II, Đại học Cần Thơ.
// script.js

// Tọa độ Khu 2, Đại học Cần Thơ
var KHU_2_LAT = 10.0270;
var KHU_2_LNG = 105.7740;

// Khai báo đối tượng Icon tùy chỉnh (Sử dụng lại icon logo CTU từ bài trước)
var ctuLogoIcon = L.icon({
    iconUrl: 'images/ctu-icon.jpg', // Đường dẫn đến hình ảnh logo CTU
    iconSize: [50, 50], 
    iconAnchor: [25, 50], 
    shadowSize: [50, 50], 
    popupAnchor: [0, -50] 
});

// 1. TẠO NỘI DUNG POPUP BẰNG CHUỖI HTML
var popupContent = `
    <div style="text-align: center;">
        <h4 style="margin-bottom: 5px; color: #0066cc;">KHU II - ĐẠI HỌC CẦN THƠ</h4>
        <img 
            src="images/khu2_ctu_view.jpg" 
            alt="Hình ảnh Khu II Đại học Cần Thơ" 
            style="width: 200px; height: auto; border-radius: 5px; margin-bottom: 8px;">
        <p style="margin: 0; font-size: 14px;">
            Khu vực trọng điểm với các giảng đường, khu nghiên cứu và ký túc xá sinh viên.
        </p>
    </div>
`;

// Khai báo tùy chọn Popup với lớp tùy chỉnh đã định dạng trong style.css
var customOptions = {
    'maxWidth': '250',
    'className': 'custom' // Áp dụng lớp CSS tùy chỉnh
};




// 2. GẮN POPUP VỚI NỘI DUNG HTML VÀ TÙY CHỌN ĐỊNH DẠNG
L.marker([KHU_2_LAT, KHU_2_LNG], {
    icon: ctuLogoIcon, 
    title: "Đại học Cần Thơ", 
    alt: "Logo Đại học Cần Thơ"
})
.addTo(map)
.bindPopup(popupContent, customOptions) // Truyền biến customOptions vào đây
.openPopup();

// bai6
var locations = [
    {
        name: "Khu I Đại học Cần Thơ",
        coords: [10.045, 105.746],
        address: "Số 1, đường 30/4, Ninh Kiều, Cần Thơ",
        imageUrl: "images/Khu_I_CTU.jpg"
    },
    {
        name: "Khu II Đại học Cần Thơ",
        coords: [10.0318172, 105.7676965],
        address: "3/2, Xuân Khánh, Ninh Kiều, Cần Thơ",
        imageUrl: "images/Khu_II_CTU.jpg"
    },
    {
        name: "Khu III Đại học Cần Thơ",
        coords: [10.003, 105.783],
        address: "Số 1, đường Lý Tự Trọng, Cái Răng, Cần Thơ",
        imageUrl: "images/Khu_III_CTU.jpg"
    },
    {
        name: "Khu Hòa An Đại học Cần Thơ",
        coords: [9.784, 105.771],
        address: "Hòa An, Phụng Hiệp, Hậu Giang",
        imageUrl: "images/Khu_Hoa_An_CTU.jpg"
    }
];

locations.forEach(location => {
    var marker = L.marker(location.coords, { icon: ctuLogoIcon, title: location.name }).addTo(map).openPopup();
})
//bai7
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const userCoords = [position.coords.latitude, position.coords.longitude];
        var userMarker = L.marker(userCoords, { title: "Vị trí của bạn" }).addTo(map);
        userMarker.bindPopup("Bạn đang ở đây!").openPopup();
        map.setView(userCoords, 13); // Zoom bản đồ vào vị trí người dùng
    });
}
// Bài 8: Click lên bản đồ thì hiện ra marker với thông tin về vị trí của marker đó.
var geocoder = L.Control.Geocoder.nominatim();
var control = L.Control.geocoder({
    geocoder: geocoder,
    // defaultMarkGeocode: false,
    position: 'topright', // Đặt ở góc trên bên trái
    
}).addTo(map);
map.on('click', function (e) {
    var clickedMarker = L.marker(e.latlng).addTo(map);
    clickedMarker.bindPopup("Vị trí: " + e.latlng.toString()).openPopup();
});

// Bài 9: Thay thế marker mặc định của chức năng tìm kiếm vị trí của một địa điểm.
control.on("markgeocode", function (e) {
    var latlng = e.geocode.center;
    var searchMarker = L.marker(latlng, {
        title: e.geocode.name,
        icon: dangIcon,
    }).addTo(map);
    searchMarker.bindPopup(e.geocode.name).openPopup();
    map.setView(latlng, 13);
});

// Bài 10: Hiển thị đường tròn đánh dấu vị trí hiện tại của người dùng. Khi người dùng click vào bản đồ thì hiển thị polyline cho phép nối các điểm đã click.
var userCircle;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const userCoords = [position.coords.latitude, position.coords.longitude];
        userCircle = L.circle(userCoords, {
            color: 'blue',
            fillColor: '#30f',
            fillOpacity: 0.5,
            radius: 100 // Bán kính 100 mét
        }).addTo(map);
    });
}
var polylinePoints = [];
map.on("click", function (e) {
  polylinePoints.push(e.latlng);
  if (polylinePoints.length > 1) {
    if (window.currentPolyline) {
      map.removeLayer(window.currentPolyline);
    }
    window.currentPolyline = L.polyline(polylinePoints, { color: "#d42429" }).addTo(
      map
    );
  }
});
