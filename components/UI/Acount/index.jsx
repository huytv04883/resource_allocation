import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "antd";
import { Avatar, AcountText, AcountWrapper } from "./style";
import { UserOutlined } from "@ant-design/icons";

const Acount = ({ acountName }) => {
  const items = [
    {
      label: <a href="https://www.antgroup.com">My profile</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">Logout</a>,
      key: "1",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
      placement="bottomRight"
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
