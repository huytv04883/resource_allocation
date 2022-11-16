import { UserOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { appContext } from "../../../context/appContextProvider";
import { AcountText, AcountWrapper, Avatar, ButtonLogout } from "./style";

const Acount = ({ acountName }) => {
  const { logoutGoogle } = useContext(appContext);

  const items = [
    {
      label: <Link href="/profile">My profile</Link>,
      key: "0",
    },
    {
      label: <ButtonLogout onClick={() => logoutGoogle()}>Logout</ButtonLogout>,
      key: "1",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
      placement="bottom"
      arrow={{ pointAtCenter: true }}
    >
      <AcountWrapper>
        <li>
          <a
            style={{ display: "flex", alignItems: "center" }}
            onClick={(e) => e.preventDefault()}
          >
            {acountName && <AcountText>{acountName}</AcountText>}
            <Avatar>
              <UserOutlined style={{ fontSize: "17px" }} />
            </Avatar>
          </a>
        </li>
      </AcountWrapper>
    </Dropdown>
  );
};

Acount.propTypes = {
  acountName: PropTypes.string,
};

export default Acount;
