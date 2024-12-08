import * as React from "react";

const tableItems = [
    "3 cách xắn tay áo vest, áo blazer đẹp cho nàng",
    "Cách 1: Xắn tay áo vest kiểu đơn giản",
    "Cách 2: Xắn tay áo vest với dây chun",
    "Cách 3: Xắn tay áo vest trang trọng",
    "Gợi ý những mẫu áo vest thời trang sành điệu cho nàng",
    "Áo blazer form cơ bản tay dài 2 túi",
    "Áo blazer form ngắn tay dài phối túi giả",
    "Áo blazer nhún xắn tay cách điệu",
    "Áo gile form ôm cài nút bọc",
    "Áo khoác ngắn cổ vest đệm vai cài nút"
];

function ArticleContents() {
    return (
        <div className="flex flex-col pb-8 mt-3 max-w-full bg-white border border-solid border-zinc-600 w-[600px]">
            <div className="z-10 px-16 py-2.5 -mt-3 font-semibold text-black bg-rose-100 max-md:px-5 max-md:max-w-full">
                Mục lục bài viết
            </div>
            <div className="self-center mt-5 text-black max-md:max-w-full">
                {tableItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {item}<br />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default ArticleContents;