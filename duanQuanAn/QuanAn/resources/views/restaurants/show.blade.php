<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $restaurant->name }} - Chi Tiết Quán Ăn</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gradient-to-br from-orange-50 to-amber-100 min-h-screen">
    <div class="max-w-4xl mx-auto py-10 px-6">
        <a href="{{ url('/restaurants') }}" 
           class="text-orange-600 font-semibold hover:underline mb-5 inline-block">
           ← Quay lại danh sách
        </a>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            {{-- Ảnh quán ăn --}}
            @if(!empty($restaurant->image))
                <img src="{{ $restaurant->image }}" 
                     alt="{{ $restaurant->name }}" 
                     class="w-full h-80 object-cover">
            @else
                <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" 
                     alt="No Image" 
                     class="w-full h-80 object-contain p-6 bg-gray-50">
            @endif

            {{-- Thông tin --}}
            <div class="p-8">
                <h1 class="text-3xl font-bold text-orange-700 mb-3">
                    🍽️ {{ $restaurant->name }}
                </h1>
                <p class="text-gray-600 italic mb-2">
                    Loại ẩm thực: {{ $restaurant->loai_am_thuc }}
                </p>
                <p class="text-gray-700 mb-3">
                    📍 Địa chỉ: <span class="font-medium">{{ $restaurant->dia_chi }}</span>
                </p>
                <p class="text-gray-700 mb-3">
                    ⭐ Món nổi bật: <span class="font-medium">{{ $restaurant->mon_noi_bat }}</span>
                </p>
                <p class="text-green-700 font-bold mb-5">
                    💰 Giá trung bình: {{ number_format($restaurant->gia_trung_binh, 0, ',', '.') }} VND
                </p>

                {{-- Toạ độ bản đồ nếu có --}}
                @if(!empty($restaurant->toa_do))
                    <div class="mt-6">
                        <iframe 
                            src="https://www.google.com/maps?q={{ $restaurant->toa_do }}&output=embed" 
                            width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy">
                        </iframe>
                    </div>
                @endif
            </div>
        </div>
    </div>
</body>
</html>

