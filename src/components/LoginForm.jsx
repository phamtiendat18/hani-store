import { LockOutlined, MobileOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginForm,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Checkbox, Input, Space, Tabs } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginCustomForm = () => {
  const [loginType, setLoginType] = useState("login");
  const navigation = useNavigate();

  return (
    <ProConfigProvider hashed={false}>
      <div>
        <LoginForm submitter={false} style={{ width: "582px" }}>
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey)}
          >
            <Tabs.TabPane
              key="login"
              tab="Đăng nhập"
              style={{ width: "200px" }}
            />
            <Tabs.TabPane
              key="signup"
              tab="Đăng ký"
              style={{ width: "200px" }}
            />
          </Tabs>
          {loginType === "login" && (
            <>
              <div className="custom-input">
                <ProFormText
                  name="username"
                  label={"Tên đăng nhập:"}
                  fieldProps={{
                    size: "large",
                    className: "custom-input",
                  }}
                  placeholder="Nhập tên tài khoản"
                />
              </div>
              <div className="custom-input">
                <ProFormText.Password
                  name="password"
                  label={"Mật khẩu:"}
                  fieldProps={{
                    size: "large",
                  }}
                  placeholder="Nhập mật khẩu"
                />
                <div
                  style={{ textAlign: "right", width: "100%" }}
                  className="text-[#02879C] mb-5"
                >
                  Quên mật khẩu?
                </div>
              </div>
            </>
          )}
          {loginType === "signup" && (
            <>
              <div className="custom-input">
                <ProFormText
                  name="username"
                  label={"Tên đăng nhập:"}
                  fieldProps={{
                    size: "large",
                    className: "custom-input",
                  }}
                  placeholder="Nhập tên tài khoản"
                />
              </div>
              <div className="custom-input">
                <ProFormText.Password
                  name="password"
                  label={"Mật khẩu:"}
                  fieldProps={{
                    size: "large",
                  }}
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div className="custom-input">
                <ProFormText.Password
                  name="re-password"
                  label={"Mật khẩu:"}
                  fieldProps={{
                    size: "large",
                  }}
                  placeholder="Nhập lại mật khẩu"
                />
                <div
                  style={{ textAlign: "right", width: "100%" }}
                  className="text-black mb-5"
                >
                  <Checkbox /> Tôi đồng ý với các điều khoản
                </div>
              </div>
            </>
          )}
          <div className="text-center">
            <button
              className="w-[200px] h-[50px] rounded-[99px] bg-[#ff5959] text-white"
              onClick={() => {
                localStorage.setItem("isLogin", true);
                navigation("/");
              }}
            >
              {loginType === "login" ? "Đăng nhập" : "Đăng ký"}
            </button>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="mt-7 ml-10 text-base font-medium text-black">
                {loginType === "login" ? "Đăng nhập" : "Đăng ký"} với
              </div>
              <div className="flex gap-5 justify-between mt-4 max-w-full w-[193px] max-md:ml-2">
                <button type="button" aria-label="Login with Facebook">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bb411aa5bae3d6945134e7d989cba1d4ac341a11d5999b789c0664fb6ebdef8?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61"
                    alt=""
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                </button>
                <button type="button" aria-label="Login with Google">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/36e4cf15c1b6f6e395f15cc97413504ffa1751140b7648530a1381735e7f6a18?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61"
                    alt=""
                    className="object-contain shrink-0 aspect-square w-[50px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default LoginCustomForm;
