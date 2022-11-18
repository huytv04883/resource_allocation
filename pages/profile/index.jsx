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
import React, { useContext } from "react";
import styles from "../../styles/Home.module.css";
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
import { appContext } from "../../context/appContextProvider";
import { getFirstCharactor } from "../../utils/Char";

const Profile = () => {
  const { dataUser } = useContext(appContext);
  const firstTextName = getFirstCharactor(dataUser?.data?.name);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
    },
    {
      title: "START DATE",
      dataIndex: "start_date",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "END DATE",
      dataIndex: "end_date",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "STATUS",
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
      start_date: 98,
      end_date: 60,
      status: 70,
    },
  ];

  return (
    <>
      <div className={styles.secsion}>
        <div className={styles.row}>
          <div className={styles.col12}>
            <Title> USER INFORMATION </Title>
          </div>
          <div className={styles.col6}>
            <Media>
              <ShortName>{firstTextName}</ShortName>
              <MediaBody>
                <Name>{dataUser?.data?.name}</Name>
                <Email>{dataUser?.data?.email}</Email>
              </MediaBody>
            </Media>
            <TableCustom>
              <tbody>
                <tr>
                  <Th>
                    <StarOutlined />
                    <Feild>Status</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.isActive ? "Active" : "Off"}</Feild>
                  </td>
                </tr>
                <tr>
                  <Th>
                    <UserOutlined />
                    <Feild>Name</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.name}</Feild>
                  </td>
                </tr>
                <tr>
                  <Th>
                    <TagOutlined />
                    <Feild>Employee ID</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.employeeId}</Feild>
                  </td>
                </tr>
                <tr>
                  <Th>
                    <HeartOutlined />
                    <Feild>Gender</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.gender}</Feild>
                  </td>
                </tr>
              </tbody>
            </TableCustom>
          </div>
          <div className={styles.col6}>
            <TableCustom>
              <tbody>
                <tr>
                  <Th>
                    <UsergroupAddOutlined />
                    <Feild>Division</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.division.name}</Feild>
                  </td>
                </tr>
                <tr>
                  <Th>
                    <UsergroupAddOutlined />
                    <Feild>Resource Owner</Feild>
                  </Th>
                  <td>
                    <Feild>
                      {dataUser?.data?.resourceOwner?.name}{" "}
                      {`(${dataUser?.data?.resourceOwner?.username})`}
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
                      {!dataUser?.data?.title
                        ? ""
                        : dataUser?.data?.title?.title}
                    </Feild>
                  </td>
                </tr>
                <tr>
                  <Th>
                    <StockOutlined />
                    <Feild>Rank</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.jobRank}</Feild>
                  </td>
                </tr>
                <tr>
                  <Th>
                    <BarChartOutlined />
                    <Feild>Ratio</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.rate}</Feild>
                  </td>
                </tr>
                <tr>
                  <Th>
                    <DotChartOutlined />
                    <Feild>Total Projects</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.totalProjects}</Feild>
                  </td>
                </tr>
                <tr>
                  <Th>
                    <ClockCircleOutlined />
                    <Feild>Total Hours</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.totalHours}</Feild>
                  </td>
                </tr>
                <tr>
                  <Th>
                    <AliwangwangOutlined />
                    <Feild>Total Runing Projects</Feild>
                  </Th>
                  <td>
                    <Feild>{dataUser?.data?.totalRunningProject}</Feild>
                  </td>
                </tr>
              </tbody>
            </TableCustom>
          </div>
        </div>
      </div>
      <div className={styles.secsion}>
        <div className={styles.col12}>
          <Title> WORKING HISTORY </Title>
        </div>
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
