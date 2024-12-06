import * as React from "react";

export function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex gap-1 self-start mt-5 ml-24 text-lg font-semibold max-md:ml-2.5"
    >
      <a href="/" className="grow text-black">
        Trang chủ
      </a>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf5d741832cb76e074e78956208336218f953b93eac70a0c8eec1f059b6f164d?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61"
        alt=""
        className="object-contain shrink-0 my-auto aspect-square w-[15px]"
      />
      <div className="flex">
        <a href="/account" className="grow text-black">
          Tài khoản
        </a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/721deb37f980386632aefc59ac938924978d2d04fe0dbeb01a9390b893276e9d?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61"
          alt=""
          className="object-contain shrink-0 my-auto aspect-square w-[15px]"
        />
        <span className="text-zinc-600">Đơn hàng</span>
      </div>
    </nav>
  );
}
