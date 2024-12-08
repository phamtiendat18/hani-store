import * as React from "react";
import ArticleImage from "./ArticleImage";

function ArticleStep({ title, steps, image, imageAlt }) {
    return (
        <>
            <div className="self-start mt-5 text-black mx-[100px]">
                {title}
                <br />
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        {`Bước ${index + 1}: ${step}`}<br />
                    </React.Fragment>
                ))}
            </div>

            <ArticleImage
                src={image}
                alt={imageAlt}
                className="mt-7 w-[262px]"
            />

            <div className="self-start mt-5 text-black mx-[100px]">
                {title.includes("Cách 1") && (
                    "Với phương pháp này không chỉ giúp nàng có được một vẻ ngoài phong cách và năng động hơn mà còn thoải mái trong bộ trang phục của mình."
                )}
                {title.includes("Cách 2") && (
                    "Với phong cách xắn tay áo vest kiểu này, nàng có thể tự tin thể hiện cá tính của mình một cách dễ dàng và đảm bảo tay áo luôn trong tình trạng hoàn hảo, góp phần nâng cao tổng thể phong cách thời trang cho mình."
                )}
                {title.includes("Cách 3") && (
                    "Như vậy là nàng đã có được một diện mạo vừa gọn gàng, vừa trẻ trung nhưng vẫn không mất đi sự thanh lịch của mình. Kiểu gấp áo này vừa thời trang vừa thoải mái, thể hiện sự tinh tế trong từng chi tiết. Tip gấp áo vest này không chỉ phù hợp cho các dịp hàng ngày mà còn được áp dụng trong các buổi gặp mặt trang trọng hơn."
                )}
            </div>
        </>
    );
}

export default ArticleStep;