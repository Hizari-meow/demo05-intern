"use client";

import React from "react";
import { Collapse, Radio } from "antd";
import { FolderFilled } from "@ant-design/icons";
import styles from "./SidebarWord.module.scss";
import Main from "../Calendar/Main";
const SidebarWord: React.FC = () => {
  const functionItems = [
    {
      key: "1",
      label: "Chức năng",
      children: (
        <div className={styles.functionList}>
          {[
            "Danh sách công việc",
            "Công việc của tôi",
            "Nhân viên của tôi",
            "Đang theo dõi",
            "Công việc lặp lại",
          ].map((label) => (
            <div className={styles.functionItem} key={label}>
              <FolderFilled className={styles.folderIconYellow} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const statusItems = [
    {
      key: "1",
      label: "Lọc theo trạng thái",
      children: (
        <Radio.Group defaultValue="Tất cả" className={styles.radioGroup}>
          {[
            "Tất cả",
            "Đang thực hiện",
            "Chờ kiểm tra",
            "Đã hoàn thành",
            "Quá hạn",
          ].map((status) => (
            <Radio key={status} value={status}>
              {status}
            </Radio>
          ))}
        </Radio.Group>
      ),
    },
  ];

  const departmentItems = [
    {
      key: "1",
      label: "Lọc theo phòng ban",
      children: (
        <Radio.Group defaultValue="Tất cả" className={styles.radioGroup}>
          {["Tất cả", "Buồng phòng", "Bàn phòng", "Lễ tân", "Kỹ thuật"].map(
            (dep) => (
              <Radio key={dep} value={dep}>
                {dep}
              </Radio>
            )
          )}
        </Radio.Group>
      ),
    },
  ];

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Collapse
          defaultActiveKey={["1"]}
          ghost
          expandIconPosition="end"
          className={styles.collapseSection}
          items={functionItems}
        />

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Kiểu hiển thị</h3>
          <Radio.Group defaultValue="Lịch biểu" className={styles.radioGroup}>
            {["Danh sách", "Bảng", "Lịch biểu"].map((type) => (
              <Radio key={type} value={type}>
                {type}
              </Radio>
            ))}
          </Radio.Group>
        </div>

        <Collapse
          defaultActiveKey={["1"]}
          ghost
          expandIconPosition="end"
          className={styles.collapseSection}
          items={statusItems}
        />

        <Collapse
          defaultActiveKey={["1"]}
          ghost
          expandIconPosition="end"
          className={styles.collapseSection}
          items={departmentItems}
        />
      </aside>

      <main className={styles.main}>
        <Main />
      </main>
    </div>
  );
};

export default SidebarWord;
