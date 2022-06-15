import React, { useEffect } from "react";

interface TelegramLoginButtonProps {
  botName: string;
  dataOnauth: Function;
  buttonSize?: "large" | "medium" | "small";
  cornerRadius?: number;
  requestAccess?: string;
  usePic?: boolean;
  lang?: string;
  dataAuthUrl?: string;
}

const TelegramLoginButton = ({
  botName = "bob_bot",
  dataOnauth,
  buttonSize = "large",
  cornerRadius,
  requestAccess = "write",
  usePic = true,
  lang = "en",
  dataAuthUrl,
}: TelegramLoginButtonProps) => {
  useEffect(() => {
    // @ts-ignore
    window.TelegramLoginWidget = {
      dataOnauth: (user: any) => dataOnauth && dataOnauth(user),
    };

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?9";
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", buttonSize);
    if (cornerRadius !== undefined) {
      script.setAttribute("data-radius", cornerRadius.toString());
    }
    script.setAttribute("data-request-access", requestAccess);
    script.setAttribute("data-userpic", `${usePic}`);
    script.setAttribute("data-lang", lang);
    if (dataAuthUrl !== undefined) {
      script.setAttribute("data-auth-url", dataAuthUrl);
    } else {
      script.setAttribute(
        "data-onauth",
        "TelegramLoginWidget.dataOnauth(user)"
      );
    }
    script.async = true;
    // @ts-ignore
    console.log(this);

    // @ts-ignore
    this.instance.appendChild(script);
  }, [
    botName,
    buttonSize,
    cornerRadius,
    dataAuthUrl,
    dataOnauth,
    lang,
    requestAccess,
    usePic,
  ]);

  return <div>TelegramLoginButton</div>;
};

export default TelegramLoginButton;
