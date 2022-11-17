import {
  StarOutlined,
  UserOutlined,
  TagOutlined,
  HeartOutlined,
  UsergroupAddOutlined,
  CreditCardOutlined,
  StockOutlined,
  BarChartOutlined,
  DotChartOutlined,
  ClockCircleOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import React from "react";
import styles from "../../styles/Home.module.css";
import { getUserData } from "../../utils/Token";
import {
  Email,
  Media,
  MediaBody,
  Name,
  ShortName,
  Th,
  Feild,
  TableCustom,
  Title,
} from "./style";
import { Table } from "antd";

const Profile = () => {
  const dataUser = JSON.parse(getUserData());

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  return (
    <>
      <div className={styles.secsion}>
        <div className={styles.row}>
          <div className={styles.col12}>
            <Title> User Information </Title>
          </div>
          <div className={styles.col6}>
            <Media>
              <ShortName>TVH</ShortName>
              <MediaBody>
                <Name>{dataUser?.name}</Name>
                <Email>{dataUser?.email}</Email>
              </MediaBody>
            </Media>
            <TableCustom>
              <tr>
                <Th>
                  <StarOutlined />
                  <Feild>Status</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.isActive ? "Active" : "Off"}</Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <UserOutlined />
                  <Feild>Name</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.name}</Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <TagOutlined />
                  <Feild>Employee ID</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.employeeId}</Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <HeartOutlined />
                  <Feild>Gender</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.gender}</Feild>
                </td>
              </tr>
            </TableCustom>
          </div>
          <div className={styles.col6}>
            <TableCustom>
              <tr>
                <Th>
                  <UsergroupAddOutlined />
                  <Feild>Division</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.division.name}</Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <UsergroupAddOutlined />
                  <Feild>Resource Owner</Feild>
                </Th>
                <td>
                  <Feild>
                    {dataUser?.resourceOwner?.name}{" "}
                    {`(${dataUser?.resourceOwner?.username})`}
                  </Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <CreditCardOutlined />
                  <Feild>Title</Feild>
                </Th>
                <td>
                  <Feild>
                    {!dataUser?.title ? "" : dataUser?.title?.title}
                  </Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <StockOutlined />
                  <Feild>Rank</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.jobRank}</Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <BarChartOutlined />
                  <Feild>Ratio</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.rate}</Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <DotChartOutlined />
                  <Feild>Total Projects</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.totalProjects}</Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <ClockCircleOutlined />
                  <Feild>Total Hours</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.totalHours}</Feild>
                </td>
              </tr>
              <tr>
                <Th>
                  <AliwangwangOutlined />
                  <Feild>Total Runing Projects</Feild>
                </Th>
                <td>
                  <Feild>{dataUser?.totalRunningProject}</Feild>
                </td>
              </tr>
            </TableCustom>
          </div>
        </div>
      </div>
      <div className={styles.secsion}>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={false}
        />
      </div>
    </>
  );
};

export default Profile;
